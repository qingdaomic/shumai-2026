/**
 * L1-L4 家长端 API
 * - 绑定学生（邀请码/手机号）
 * - 学情摘要（每日/周报）
 * - 成绩曲线数据
 */

import { Router } from 'express';
import { authMiddleware } from './auth.js';
import pool from '../db.js';

const router = Router();

// 家长鉴权
async function parentGuard(req, res, next) {
  const result = await pool.query('SELECT role FROM users WHERE id = $1', [req.user.id]);
  const role = result.rows[0]?.role;
  if (role !== 'parent' && role !== 'admin') {
    return res.status(403).json({ error: '需要家长身份' });
  }
  next();
}

// ═══════════════════════════════════════════
//  L1 绑定孩子
// ═══════════════════════════════════════════

// 家长-学生绑定表（内存暂存 → 后续可建表）
// POST /api/parent/bind — 通过手机号绑定孩子
router.post('/bind', authMiddleware, parentGuard, async (req, res) => {
  try {
    const { phone } = req.body;
    if (!phone) return res.status(400).json({ error: '请输入孩子的手机号' });

    const student = await pool.query(
      "SELECT id, nickname, phone FROM users WHERE phone = $1 AND (role = 'student' OR role IS NULL)",
      [phone]
    );
    if (student.rows.length === 0) return res.status(404).json({ error: '未找到该学生账号' });

    // 存储绑定关系到 system_config（简单方案）
    const key = `parent_bind_${req.user.id}`;
    const bindings = [];
    const existing = await pool.query('SELECT value FROM system_config WHERE key = $1', [key]);
    if (existing.rows.length > 0) {
      const val = typeof existing.rows[0].value === 'string' ? JSON.parse(existing.rows[0].value) : existing.rows[0].value;
      bindings.push(...(val.children || []));
    }

    const sid = student.rows[0].id;
    if (!bindings.includes(sid)) bindings.push(sid);

    await pool.query(
      `INSERT INTO system_config (key, value, label, category)
       VALUES ($1, $2, '家长绑定', 'parent')
       ON CONFLICT (key) DO UPDATE SET value = $2, updated_at = NOW()`,
      [key, JSON.stringify({ children: bindings })]
    );

    res.json({ ok: true, student: { id: sid, nickname: student.rows[0].nickname } });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /api/parent/children — 我绑定的孩子列表
router.get('/children', authMiddleware, parentGuard, async (req, res) => {
  try {
    const key = `parent_bind_${req.user.id}`;
    const existing = await pool.query('SELECT value FROM system_config WHERE key = $1', [key]);
    if (existing.rows.length === 0) return res.json([]);

    const val = typeof existing.rows[0].value === 'string' ? JSON.parse(existing.rows[0].value) : existing.rows[0].value;
    const ids = val.children || [];
    if (ids.length === 0) return res.json([]);

    const result = await pool.query(
      `SELECT u.id, u.nickname, u.grade, u.phone,
              (SELECT COUNT(*) FROM progress p WHERE p.user_id = u.id AND p.mastered) as mastered,
              (SELECT COUNT(*) FROM wrong_questions w WHERE w.user_id = u.id AND w.resolved = FALSE) as wrong_pending,
              (SELECT COUNT(*) FROM checkins c WHERE c.user_id = u.id) as checkin_days,
              (SELECT COUNT(*) FROM checkins c WHERE c.user_id = u.id AND c.date > NOW() - INTERVAL '7 days') as week_active
       FROM users u WHERE u.id = ANY($1)`,
      [ids]
    );
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ═══════════════════════════════════════════
//  L2 每日学情摘要
// ═══════════════════════════════════════════

// GET /api/parent/daily/:studentId — 孩子今日学情
router.get('/daily/:studentId', authMiddleware, parentGuard, async (req, res) => {
  try {
    const sid = parseInt(req.params.studentId);
    // 验证绑定关系
    const key = `parent_bind_${req.user.id}`;
    const existing = await pool.query('SELECT value FROM system_config WHERE key = $1', [key]);
    const val = existing.rows[0]?.value;
    const children = (typeof val === 'string' ? JSON.parse(val) : val)?.children || [];
    if (!children.includes(sid)) return res.status(403).json({ error: '未绑定此学生' });

    // 今日数据
    const [checkin, daily, wrong] = await Promise.all([
      pool.query('SELECT * FROM checkins WHERE user_id = $1 AND date = CURRENT_DATE', [sid]),
      pool.query('SELECT * FROM daily_tasks WHERE user_id = $1 AND task_date = CURRENT_DATE', [sid]),
      pool.query('SELECT COUNT(*) as cnt FROM wrong_questions WHERE user_id = $1 AND resolved = FALSE', [sid]),
    ]);

    const user = await pool.query('SELECT nickname, grade FROM users WHERE id = $1', [sid]);

    res.json({
      student: user.rows[0],
      checkedIn: checkin.rows.length > 0,
      todayTask: daily.rows[0] || null,
      wrongPending: parseInt(wrong.rows[0]?.cnt) || 0,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ═══════════════════════════════════════════
//  L3 周报数据
// ═══════════════════════════════════════════

// GET /api/parent/weekly/:studentId — 孩子周学习数据
router.get('/weekly/:studentId', authMiddleware, parentGuard, async (req, res) => {
  try {
    const sid = parseInt(req.params.studentId);
    // 验证绑定关系
    const key = `parent_bind_${req.user.id}`;
    const existing = await pool.query('SELECT value FROM system_config WHERE key = $1', [key]);
    const val = existing.rows[0]?.value;
    const children = (typeof val === 'string' ? JSON.parse(val) : val)?.children || [];
    if (!children.includes(sid)) return res.status(403).json({ error: '未绑定此学生' });

    const [mastered, wrongDone, checkins, user] = await Promise.all([
      pool.query(
        `SELECT COUNT(*) as cnt FROM progress
         WHERE user_id = $1 AND mastered AND updated_at > NOW() - INTERVAL '7 days'`,
        [sid]
      ),
      pool.query(
        `SELECT COUNT(*) as cnt FROM wrong_questions
         WHERE user_id = $1 AND resolved AND resolved_at > NOW() - INTERVAL '7 days'`,
        [sid]
      ),
      pool.query(
        `SELECT date FROM checkins WHERE user_id = $1 AND date > NOW() - INTERVAL '7 days' ORDER BY date`,
        [sid]
      ),
      pool.query('SELECT nickname, grade FROM users WHERE id = $1', [sid]),
    ]);

    // 总进度
    const totalMastered = await pool.query(
      'SELECT COUNT(*) as cnt FROM progress WHERE user_id = $1 AND mastered',
      [sid]
    );

    res.json({
      student: user.rows[0],
      weekNewMastered: parseInt(mastered.rows[0]?.cnt) || 0,
      weekWrongResolved: parseInt(wrongDone.rows[0]?.cnt) || 0,
      weekCheckins: checkins.rows.map(r => r.date),
      totalMastered: parseInt(totalMastered.rows[0]?.cnt) || 0,
      totalTopics: 194,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
