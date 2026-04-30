/**
 * 管理端 API
 * - 系统配置（定时任务时间等）
 * - 用户管理
 * - 数据统计概览
 */

import { Router } from 'express';
import { authMiddleware } from './auth.js';
import pool from '../db.js';

const router = Router();

// 管理员鉴权中间件（role = 'admin'）
async function adminGuard(req, res, next) {
  try {
    const result = await pool.query('SELECT role FROM users WHERE id = $1', [req.user.id]);
    const role = result.rows[0]?.role;
    if (role !== 'admin') return res.status(403).json({ error: '无管理员权限' });
    next();
  } catch {
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
