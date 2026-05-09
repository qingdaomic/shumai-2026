/**
 * 管理端 API
 * - 系统配置（定时任务时间等）
 * - 用户管理
 * - 数据统计概览
 */

import { Router } from 'express';
import { authMiddleware } from './auth.js';
import pool from '../db.js';
import { execFile } from 'child_process';
import { promisify } from 'util';

const router = Router();
const execFileAsync = promisify(execFile);

// 管理员鉴权中间件（role = 'admin' 或手机号在 ADMIN_PHONE 列表中）
async function adminGuard(req, res, next) {
  try {
    // 优先：ADMIN_PHONE 环境变量（逗号分隔多个号码）
    const adminPhones = (process.env.ADMIN_PHONE || '').split(',').map(s => s.trim()).filter(Boolean);
    if (adminPhones.includes(req.user.phone)) return next();

    // 兜底：数据库 role 字段
    const result = await pool.query('SELECT role FROM users WHERE id = $1', [req.user.id]);
    const role = result.rows[0]?.role;
    if (role === 'admin') return next();

    res.status(403).json({ error: '无管理员权限' });
  } catch (err) {
    res.status(500).json({ error: '权限验证失败' });
  }
}

// ═══════════════════════════════════════════
//  系统配置
// ═══════════════════════════════════════════

// GET /api/admin/config — 获取所有配置
router.get('/config', authMiddleware, adminGuard, async (req, res) => {
  try {
    const { category } = req.query;
    let query = 'SELECT * FROM system_config';
    const params = [];
    if (category) {
      query += ' WHERE category = $1';
      params.push(category);
    }
    query += ' ORDER BY category, key';
    const result = await pool.query(query, params);
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// PUT /api/admin/config/:key — 更新单项配置
router.put('/config/:key', authMiddleware, adminGuard, async (req, res) => {
  try {
    const { key } = req.params;
    const { value } = req.body;
    if (!value) return res.status(400).json({ error: '缺少 value' });

    const result = await pool.query(
      `UPDATE system_config SET value = $1, updated_at = NOW()
       WHERE key = $2 RETURNING *`,
      [JSON.stringify(value), key]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ error: '配置项不存在' });
    }
    // 如果修改了 cron 类配置，自动重载定时任务
    if (key.startsWith('cron_') && global.__cronReload) {
      try { await global.__cronReload(); } catch {}
    }
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST /api/admin/config — 新增配置项
router.post('/config', authMiddleware, adminGuard, async (req, res) => {
  try {
    const { key, value, label, category } = req.body;
    if (!key || !value) return res.status(400).json({ error: '缺少 key 或 value' });

    const result = await pool.query(
      `INSERT INTO system_config (key, value, label, category)
       VALUES ($1, $2, $3, $4)
       ON CONFLICT (key) DO UPDATE SET value = $2, label = $3, updated_at = NOW()
       RETURNING *`,
      [key, JSON.stringify(value), label || key, category || 'general']
    );
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ═══════════════════════════════════════════
//  用户管理
// ═══════════════════════════════════════════

// GET /api/admin/users — 用户列表
router.get('/users', authMiddleware, adminGuard, async (req, res) => {
  try {
    const result = await pool.query(
      `SELECT u.id, u.phone, u.nickname, u.grade, u.role, u.wechat_uid IS NOT NULL as wechat_bound,
              u.created_at,
              (SELECT COUNT(*) FROM progress p WHERE p.user_id = u.id AND p.mastered) as mastered_count,
              (SELECT COUNT(*) FROM wrong_questions w WHERE w.user_id = u.id AND w.resolved = FALSE) as wrong_count,
              (SELECT COUNT(*) FROM checkins c WHERE c.user_id = u.id) as checkin_days
       FROM users u ORDER BY u.created_at DESC`
    );
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// PUT /api/admin/users/:id/role — 修改用户角色
router.put('/users/:id/role', authMiddleware, adminGuard, async (req, res) => {
  try {
    const { role } = req.body;
    if (!['student', 'admin', 'teacher', 'parent'].includes(role)) {
      return res.status(400).json({ error: '无效角色' });
    }
    await pool.query('UPDATE users SET role = $1 WHERE id = $2', [role, req.params.id]);
    res.json({ ok: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ═══════════════════════════════════════════
//  教学 Skill 管理
// ═══════════════════════════════════════════

// GET /api/admin/skills — Skill 列表与基础统计
router.get('/skills', authMiddleware, adminGuard, async (req, res) => {
  try {
    const search = String(req.query.search || '').trim();
    const type = String(req.query.type || '').trim();
    const status = String(req.query.status || '').trim();
    const scene = String(req.query.scene || '').trim();
    const subject = String(req.query.subject || '').trim();
    const source = String(req.query.source || '').trim();
    const limit = Math.min(Math.max(Number(req.query.limit || 120) || 120, 20), 300);
    const sourceColumnMap = {
      slash_prompt: 'source_slash_prompt',
      skill_answer: 'source_skill_answer',
      learning_pet: 'source_learning_pet',
      search: 'source_search',
      unknown: 'source_unknown',
    };

    const where = [];
    const params = [];
    if (search) {
      params.push(`%${search}%`);
      where.push(`(skill_key ILIKE $${params.length} OR name ILIKE $${params.length} OR content ILIKE $${params.length})`);
    }
    if (type && type !== 'all') {
      params.push(type);
      where.push(`type = $${params.length}`);
    }
    if (status && status !== 'all') {
      params.push(status);
      where.push(`status = $${params.length}`);
    }
    if (scene && scene !== 'all') {
      params.push(scene);
      where.push(`scene = $${params.length}`);
    }
    if (subject && subject !== 'all') {
      params.push(subject);
      where.push(`subject = $${params.length}`);
    }
    const listWhere = where.map(clause => clause.replace(/\b(skill_key|name|content|type|status|scene|subject)\b/g, 's.$1'));
    if (source && source !== 'all' && sourceColumnMap[source]) {
      listWhere.push(`COALESCE(es.${sourceColumnMap[source]}, 0) > 0`);
    }

    const listSql = `
      WITH event_stats AS (
        SELECT prompt_skill_id,
               COUNT(*)::int AS events,
               COUNT(*) FILTER (WHERE event_type = 'impression')::int AS impressions,
               COUNT(*) FILTER (WHERE event_type = 'click')::int AS clicks,
               COUNT(*) FILTER (WHERE event_type = 'ai_used')::int AS ai_used,
               COUNT(*) FILTER (WHERE event_type = 'helpful')::int AS helpful,
               COUNT(*) FILTER (WHERE event_type = 'not_helpful')::int AS not_helpful,
               COUNT(*) FILTER (WHERE meta->>'entry' = 'slash_prompt')::int AS source_slash_prompt,
               COUNT(*) FILTER (WHERE meta->>'entry' = 'skill_answer')::int AS source_skill_answer,
               COUNT(*) FILTER (WHERE meta->>'entry' = 'learning_pet')::int AS source_learning_pet,
               COUNT(*) FILTER (WHERE meta->>'entry' = 'search')::int AS source_search,
               COUNT(*) FILTER (WHERE COALESCE(meta->>'entry', '') = '')::int AS source_unknown
        FROM prompt_skill_events
        WHERE created_at >= NOW() - INTERVAL '30 days'
        GROUP BY prompt_skill_id
      )
      SELECT s.id, s.skill_key, s.name, s.type, s.audience, s.subject, s.stage, s.grade,
             s.topic_code, s.method_code, s.question_type, s.scene, s.goal, s.difficulty,
             s.tone, s.content, s.model_role, s.trigger_tags, s.example_questions,
             s.weight, s.version, s.status, s.created_at, s.updated_at,
             COALESCE(es.events, 0) AS events,
             COALESCE(es.impressions, 0) AS impressions,
             COALESCE(es.clicks, 0) AS clicks,
             COALESCE(es.ai_used, 0) AS ai_used,
             COALESCE(es.helpful, 0) AS helpful,
             COALESCE(es.not_helpful, 0) AS not_helpful,
             COALESCE(es.source_slash_prompt, 0) AS source_slash_prompt,
             COALESCE(es.source_skill_answer, 0) AS source_skill_answer,
             COALESCE(es.source_learning_pet, 0) AS source_learning_pet,
             COALESCE(es.source_search, 0) AS source_search,
             COALESCE(es.source_unknown, 0) AS source_unknown,
             ROUND((
               (COALESCE(es.clicks, 0) * 0.5)
               + (COALESCE(es.ai_used, 0) * 1.2)
               + (COALESCE(es.helpful, 0) * 3.0)
               - (COALESCE(es.not_helpful, 0) * 4.0)
             )::numeric / GREATEST(COALESCE(es.impressions, 0), 1), 3) AS quality_score
      FROM prompt_skills s
      LEFT JOIN event_stats es ON es.prompt_skill_id = s.id
      ${listWhere.length ? `WHERE ${listWhere.join(' AND ')}` : ''}
      ORDER BY status DESC, quality_score DESC, s.weight DESC, s.updated_at DESC NULLS LAST, s.id DESC
      LIMIT ${limit}
    `;
    const petWatchlistSql = `
      WITH pet_stats AS (
        SELECT prompt_skill_id,
               COUNT(*)::int AS pet_events,
               COUNT(*) FILTER (WHERE event_type = 'click')::int AS pet_clicks,
               COUNT(*) FILTER (WHERE event_type = 'ai_used')::int AS pet_ai_used,
               COUNT(*) FILTER (WHERE event_type = 'helpful')::int AS pet_helpful,
               COUNT(*) FILTER (WHERE event_type = 'not_helpful')::int AS pet_not_helpful,
               COUNT(*) FILTER (WHERE meta->>'entry_point' = 'question_coach_suggestion')::int AS question_coach_events,
               COUNT(*) FILTER (WHERE meta->>'entry_point' = 'learning_pet_panel')::int AS pet_panel_events,
               COUNT(*) FILTER (WHERE meta->>'entry_point' = 'ai_float')::int AS ai_float_events,
               COUNT(*) FILTER (WHERE meta->>'entry_point' = 'ai_float_feedback')::int AS ai_float_feedback_events,
               COUNT(*) FILTER (WHERE COALESCE(meta->>'entry_point', '') = '')::int AS unknown_entry_events
        FROM prompt_skill_events
        WHERE created_at >= NOW() - INTERVAL '30 days'
          AND meta->>'entry' = 'learning_pet'
        GROUP BY prompt_skill_id
      )
      SELECT s.id, s.skill_key, s.name, s.type, s.scene, s.topic_code, s.weight, s.status,
             ps.pet_events, ps.pet_clicks, ps.pet_ai_used, ps.pet_helpful, ps.pet_not_helpful,
             ps.question_coach_events, ps.pet_panel_events, ps.ai_float_events,
             ps.ai_float_feedback_events, ps.unknown_entry_events,
             ROUND((
               (ps.pet_clicks * 0.5)
               + (ps.pet_ai_used * 1.2)
               + (ps.pet_helpful * 3.0)
               - (ps.pet_not_helpful * 4.0)
             )::numeric / GREATEST(ps.pet_events, 1), 3) AS pet_quality_score
      FROM prompt_skills s
      JOIN pet_stats ps ON ps.prompt_skill_id = s.id
      WHERE ps.pet_not_helpful > 0
         OR (
           ps.pet_events >= 2
           AND (
             (ps.pet_helpful = 0 AND ps.pet_ai_used = 0)
             OR ps.pet_not_helpful >= ps.pet_helpful
           )
         )
      ORDER BY ps.pet_not_helpful DESC, pet_quality_score ASC, ps.pet_events DESC, s.updated_at DESC NULLS LAST
      LIMIT 8
    `;

    const [list, totals, byType, byScene, eventTotals, bySource, byEntryPoint, petWatchlist] = await Promise.all([
      pool.query(listSql, params),
      pool.query(
        `SELECT COUNT(*)::int AS total,
                COUNT(*) FILTER (WHERE status = 'active')::int AS active,
                COUNT(*) FILTER (WHERE status = 'disabled')::int AS disabled,
                COUNT(*) FILTER (WHERE audience = 'student_frontend')::int AS student_frontend
         FROM prompt_skills`
      ),
      pool.query(
        `SELECT type, COUNT(*)::int AS total, COALESCE(ROUND(AVG(weight)::numeric, 3), 0) AS avg_weight
         FROM prompt_skills
         GROUP BY type
         ORDER BY total DESC, type ASC`
      ),
      pool.query(
        `SELECT scene, COUNT(*)::int AS total, COALESCE(ROUND(AVG(weight)::numeric, 3), 0) AS avg_weight
         FROM prompt_skills
         GROUP BY scene
         ORDER BY total DESC, scene ASC`
      ),
      pool.query(
        `SELECT COUNT(*)::int AS events,
                COUNT(*) FILTER (WHERE event_type = 'impression')::int AS impressions,
                COUNT(*) FILTER (WHERE event_type = 'click')::int AS clicks,
                COUNT(*) FILTER (WHERE event_type = 'ai_used')::int AS ai_used,
                COUNT(*) FILTER (WHERE event_type = 'helpful')::int AS helpful,
                COUNT(*) FILTER (WHERE event_type = 'not_helpful')::int AS not_helpful
         FROM prompt_skill_events
         WHERE created_at >= NOW() - INTERVAL '30 days'`
      ),
      pool.query(
        `SELECT COALESCE(NULLIF(meta->>'entry', ''), 'unknown') AS source,
                COUNT(*)::int AS events,
                COUNT(*) FILTER (WHERE event_type = 'impression')::int AS impressions,
                COUNT(*) FILTER (WHERE event_type = 'click')::int AS clicks,
                COUNT(*) FILTER (WHERE event_type = 'ai_used')::int AS ai_used,
                COUNT(*) FILTER (WHERE event_type = 'helpful')::int AS helpful,
                COUNT(*) FILTER (WHERE event_type = 'not_helpful')::int AS not_helpful
         FROM prompt_skill_events
         WHERE created_at >= NOW() - INTERVAL '30 days'
         GROUP BY source
         ORDER BY events DESC, source ASC`
      ),
      pool.query(
        `SELECT COALESCE(NULLIF(meta->>'entry_point', ''), 'unknown') AS entry_point,
                COUNT(*)::int AS events,
                COUNT(*) FILTER (WHERE event_type = 'click')::int AS clicks,
                COUNT(*) FILTER (WHERE event_type = 'ai_used')::int AS ai_used,
                COUNT(*) FILTER (WHERE event_type = 'helpful')::int AS helpful,
                COUNT(*) FILTER (WHERE event_type = 'not_helpful')::int AS not_helpful
         FROM prompt_skill_events
         WHERE created_at >= NOW() - INTERVAL '30 days'
           AND meta->>'entry' = 'learning_pet'
         GROUP BY entry_point
         ORDER BY events DESC, entry_point ASC`
      ),
      pool.query(petWatchlistSql),
    ]);

    res.json({
      items: list.rows,
      summary: {
        total: Number(totals.rows[0]?.total || 0),
        active: Number(totals.rows[0]?.active || 0),
        disabled: Number(totals.rows[0]?.disabled || 0),
        student_frontend: Number(totals.rows[0]?.student_frontend || 0),
        events: eventTotals.rows[0] || {},
        bySource: bySource.rows,
        byEntryPoint: byEntryPoint.rows,
        petWatchlist: petWatchlist.rows,
        byType: byType.rows,
        byScene: byScene.rows,
      },
      filters: { search, type, status, scene, subject, source, limit },
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// PUT /api/admin/skills/:id — 修改 Skill 权重 / 状态
router.put('/skills/:id', authMiddleware, adminGuard, async (req, res) => {
  try {
    const id = Number(req.params.id);
    if (!Number.isFinite(id) || id <= 0) return res.status(400).json({ error: '无效 skill id' });

    const weightInput = req.body?.weight;
    const statusInput = String(req.body?.status || '').trim();
    const updates = [];
    const params = [];

    if (weightInput !== undefined && weightInput !== null && weightInput !== '') {
      const weight = Number(weightInput);
      if (!Number.isFinite(weight)) return res.status(400).json({ error: '权重必须是数字' });
      params.push(Math.max(0, Math.min(10, weight)));
      updates.push(`weight = $${params.length}`);
    }

    if (statusInput) {
      if (!['active', 'disabled', 'draft', 'archived'].includes(statusInput)) {
        return res.status(400).json({ error: '无效状态' });
      }
      params.push(statusInput);
      updates.push(`status = $${params.length}`);
    }

    if (updates.length === 0) return res.status(400).json({ error: '请提供 weight 或 status' });

    params.push(id);
    const result = await pool.query(
      `UPDATE prompt_skills
       SET ${updates.join(', ')}, updated_at = NOW()
       WHERE id = $${params.length}
       RETURNING id, skill_key, name, type, audience, subject, stage, grade,
                 topic_code, method_code, question_type, scene, goal, difficulty,
                 tone, content, model_role, trigger_tags, example_questions,
                 weight, version, status, created_at, updated_at`,
      params
    );

    if (result.rows.length === 0) return res.status(404).json({ error: 'Skill 不存在' });
    res.json({ ok: true, item: result.rows[0] });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ═══════════════════════════════════════════
//  数据统计
// ═══════════════════════════════════════════

// GET /api/admin/stats — 系统总览
router.get('/stats', authMiddleware, adminGuard, async (req, res) => {
  try {
    const [users, progress, wrong, checkins, daily] = await Promise.all([
      pool.query('SELECT COUNT(*) as total, COUNT(*) FILTER(WHERE wechat_uid IS NOT NULL) as wechat FROM users'),
      pool.query('SELECT COUNT(*) FILTER(WHERE mastered) as mastered, COUNT(*) as total FROM progress'),
      pool.query('SELECT COUNT(*) FILTER(WHERE resolved = FALSE) as pending, COUNT(*) as total FROM wrong_questions'),
      pool.query('SELECT COUNT(DISTINCT user_id) as active_users, COUNT(*) as total FROM checkins WHERE date > NOW() - INTERVAL \'7 days\''),
      pool.query('SELECT COUNT(*) as total FROM daily_tasks WHERE task_date = CURRENT_DATE'),
    ]);
    res.json({
      users: { total: parseInt(users.rows[0].total), wechatBound: parseInt(users.rows[0].wechat) },
      progress: { mastered: parseInt(progress.rows[0].mastered), total: parseInt(progress.rows[0].total) },
      wrong: { pending: parseInt(wrong.rows[0].pending), total: parseInt(wrong.rows[0].total) },
      weeklyActive: parseInt(checkins.rows[0].active_users),
      todayTasks: parseInt(daily.rows[0].total),
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

function parsePercent(value = '') {
  const n = Number(String(value).replace('%', ''));
  return Number.isFinite(n) ? n : 0;
}

function daysUntil(dateText) {
  if (!dateText) return null;
  const target = new Date(`${dateText}T23:59:59+08:00`);
  if (Number.isNaN(target.getTime())) return null;
  return Math.ceil((target.getTime() - Date.now()) / 86400000);
}

async function getServerRuntime() {
  const [mem, disk, load, pm2] = await Promise.all([
    execFileAsync('free', ['-b']),
    execFileAsync('df', ['-B1', '/']),
    execFileAsync('uptime'),
    execFileAsync('pm2', ['jlist'], { env: { ...process.env, PATH: process.env.PATH } }).catch(() => ({ stdout: '[]' })),
  ]);

  const memLine = mem.stdout.split('\n').find(line => line.startsWith('Mem:'))?.trim().split(/\s+/) || [];
  const swapLine = mem.stdout.split('\n').find(line => line.startsWith('Swap:'))?.trim().split(/\s+/) || [];
  const diskLine = disk.stdout.trim().split('\n')[1]?.trim().split(/\s+/) || [];
  let pm2List = [];
  try { pm2List = JSON.parse(pm2.stdout || '[]'); } catch {}
  const shumaiApi = pm2List.find(app => app.name === 'shumai-api');
  const cosyvoice = pm2List.find(app => app.name === 'shumai-cosyvoice');

  return {
    updatedAt: new Date().toISOString(),
    server: {
      name: process.env.SERVER_PLAN_NAME || '腾讯云轻量应用服务器 2核2G 50GB',
      region: process.env.SERVER_REGION || '中国香港',
      expiresAt: process.env.SERVER_EXPIRES_AT || '2026-08-05',
      daysLeft: daysUntil(process.env.SERVER_EXPIRES_AT || '2026-08-05'),
    },
    load: {
      raw: load.stdout.trim(),
      average: (load.stdout.match(/load average:\s*([0-9.]+),\s*([0-9.]+),\s*([0-9.]+)/) || []).slice(1).map(Number),
    },
    memory: {
      total: Number(memLine[1] || 0),
      used: Number(memLine[2] || 0),
      free: Number(memLine[3] || 0),
      available: Number(memLine[6] || 0),
      swapTotal: Number(swapLine[1] || 0),
      swapUsed: Number(swapLine[2] || 0),
    },
    disk: {
      total: Number(diskLine[1] || 0),
      used: Number(diskLine[2] || 0),
      available: Number(diskLine[3] || 0),
      percent: parsePercent(diskLine[4]),
    },
    services: {
      api: {
        status: shumaiApi?.pm2_env?.status || 'unknown',
        memory: shumaiApi?.monit?.memory || 0,
        cpu: shumaiApi?.monit?.cpu || 0,
        restarts: shumaiApi?.pm2_env?.restart_time || 0,
      },
      cosyvoice: cosyvoice ? {
        status: cosyvoice.pm2_env?.status || 'unknown',
        memory: cosyvoice.monit?.memory || 0,
        cpu: cosyvoice.monit?.cpu || 0,
        restarts: cosyvoice.pm2_env?.restart_time || 0,
      } : null,
    },
  };
}

function buildAlerts(runtime, tts) {
  const alerts = [];
  if (runtime.server.daysLeft != null && runtime.server.daysLeft <= 14) {
    alerts.push({ level: 'danger', title: '服务器即将到期', text: `还剩 ${runtime.server.daysLeft} 天，请提前续费。` });
  } else if (runtime.server.daysLeft != null && runtime.server.daysLeft <= 30) {
    alerts.push({ level: 'warn', title: '服务器续费提醒', text: `还剩 ${runtime.server.daysLeft} 天到期。` });
  }
  if (runtime.memory.available < 300 * 1024 * 1024) {
    alerts.push({ level: 'danger', title: '内存偏低', text: '可用内存低于 300MB，建议升级服务器套餐。' });
  }
  if (runtime.memory.swapUsed > 512 * 1024 * 1024) {
    alerts.push({ level: 'warn', title: 'Swap 使用偏高', text: '语音或构建任务可能正在挤占内存。' });
  }
  if (runtime.disk.percent >= 80) {
    alerts.push({ level: 'danger', title: '磁盘空间不足', text: `磁盘已使用 ${runtime.disk.percent}%，需要清理或扩容。` });
  }
  if (runtime.services.api.status !== 'online') {
    alerts.push({ level: 'danger', title: '后端服务异常', text: `shumai-api 当前状态：${runtime.services.api.status}` });
  }
  if (tts.monthChars > tts.quota.freeChars * 0.8) {
    alerts.push({ level: 'warn', title: '语音额度接近上限', text: '本月树脉记录的 TTS 字符用量已超过免费额度 80%。' });
  }
  return alerts;
}

async function getResourceBillingConfig() {
  const fallback = {
    serverPlanName: process.env.SERVER_PLAN_NAME || '腾讯云轻量应用服务器 2核2G 50GB',
    serverRegion: process.env.SERVER_REGION || '中国香港',
    serverExpiresAt: process.env.SERVER_EXPIRES_AT || '2026-08-05',
    ttsFreeChars: Number(process.env.TENCENT_TTS_FREE_CHARS || 8000000),
    ttsResourceExpiresAt: process.env.TENCENT_TTS_RESOURCE_EXPIRES_AT || '',
  };
  try {
    const result = await pool.query('SELECT value FROM system_config WHERE key = $1', ['resource_billing']);
    return { ...fallback, ...(result.rows[0]?.value || {}) };
  } catch {
    return fallback;
  }
}

async function upsertResourceBillingConfig(value) {
  const normalized = {
    serverPlanName: String(value.serverPlanName || '腾讯云轻量应用服务器 2核2G 50GB').slice(0, 80),
    serverRegion: String(value.serverRegion || '中国香港').slice(0, 40),
    serverExpiresAt: String(value.serverExpiresAt || '2026-08-05').slice(0, 20),
    ttsFreeChars: Math.max(0, Number(value.ttsFreeChars || 0)),
    ttsResourceExpiresAt: String(value.ttsResourceExpiresAt || '').slice(0, 20),
  };
  await pool.query(
    `INSERT INTO system_config (key, value, label, category)
     VALUES ($1, $2, $3, $4)
     ON CONFLICT (key) DO UPDATE SET value = $2, updated_at = NOW()
     RETURNING *`,
    ['resource_billing', normalized, '资源计费提醒', 'ops']
  );
  return normalized;
}

// GET /api/admin/resources — 服务器与语音资源统计
router.get('/resources', authMiddleware, adminGuard, async (req, res) => {
  try {
    const billingConfig = await getResourceBillingConfig();
    const [runtime, today, month, recent, byProvider] = await Promise.all([
      getServerRuntime(),
      pool.query(
        `SELECT COUNT(*)::int AS calls, COALESCE(SUM(chars),0)::int AS chars,
                COUNT(*) FILTER (WHERE cached)::int AS cached
         FROM tts_usage WHERE created_at >= CURRENT_DATE`
      ),
      pool.query(
        `SELECT COUNT(*)::int AS calls, COALESCE(SUM(chars),0)::int AS chars,
                COUNT(*) FILTER (WHERE cached)::int AS cached
         FROM tts_usage WHERE created_at >= date_trunc('month', NOW())`
      ),
      pool.query(
        `SELECT to_char(day, 'MM-DD') AS day, calls, chars
         FROM (
           SELECT date_trunc('day', created_at) AS day, COUNT(*)::int AS calls, COALESCE(SUM(chars),0)::int AS chars
           FROM tts_usage
           WHERE created_at >= CURRENT_DATE - INTERVAL '13 days'
           GROUP BY 1
         ) x ORDER BY day`
      ),
      pool.query(
        `SELECT provider, COUNT(*)::int AS calls, COALESCE(SUM(chars),0)::int AS chars
         FROM tts_usage
         WHERE created_at >= date_trunc('month', NOW())
         GROUP BY provider ORDER BY chars DESC`
      ),
    ]);

    const quota = {
      provider: '腾讯云语音合成',
      freeChars: Number(billingConfig.ttsFreeChars || 0),
      expiresAt: billingConfig.ttsResourceExpiresAt || null,
      daysLeft: daysUntil(billingConfig.ttsResourceExpiresAt),
      consoleUrl: 'https://console.cloud.tencent.com/tts/package',
    };
    const tts = {
      todayCalls: today.rows[0]?.calls || 0,
      todayChars: today.rows[0]?.chars || 0,
      todayCached: today.rows[0]?.cached || 0,
      monthCalls: month.rows[0]?.calls || 0,
      monthChars: month.rows[0]?.chars || 0,
      monthCached: month.rows[0]?.cached || 0,
      quota,
      trend: recent.rows,
      byProvider: byProvider.rows,
    };
    runtime.server.name = billingConfig.serverPlanName;
    runtime.server.region = billingConfig.serverRegion;
    runtime.server.expiresAt = billingConfig.serverExpiresAt;
    runtime.server.daysLeft = daysUntil(billingConfig.serverExpiresAt);
    res.json({ ...runtime, tts, alerts: buildAlerts(runtime, tts) });
  } catch (err) {
    console.error('❌ admin resources:', err.message);
    res.status(500).json({ error: err.message });
  }
});

// PUT /api/admin/resources/config — 管理端更新续费/资源包提醒配置
router.put('/resources/config', authMiddleware, adminGuard, async (req, res) => {
  try {
    const config = await upsertResourceBillingConfig(req.body || {});
    res.json({ ok: true, config });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ═══════════════════════════════════════════
//  定时任务手动触发
// ═══════════════════════════════════════════

// POST /api/admin/cron/trigger — 手动触发定时任务
router.post('/cron/trigger', authMiddleware, adminGuard, async (req, res) => {
  try {
    const { taskKey } = req.body;
    // 通过全局事件通知 bot 执行指定任务
    if (global.__cronTrigger) {
      await global.__cronTrigger(taskKey);
      res.json({ ok: true, message: `已触发 ${taskKey}` });
    } else {
      res.status(503).json({ error: 'Bot 未运行，无法触发定时任务' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
