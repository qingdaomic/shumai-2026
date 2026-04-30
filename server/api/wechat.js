import { Router } from 'express';
import { authMiddleware } from './auth.js';
import pool from '../db.js';

const router = Router();

// GET /api/wechat/status — 查询当前用户微信绑定状态
router.get('/status', authMiddleware, async (req, res) => {
  try {
    const result = await pool.query(
      'SELECT wechat_uid FROM users WHERE id = $1',
      [req.user.id]
    );
    const user = result.rows[0];
    res.json({
      bound: !!user?.wechat_uid,
      botWechatId: process.env.BOT_WECHAT_ID || '数脉学长',
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST /api/wechat/unbind — 解绑微信
router.post('/unbind', authMiddleware, async (req, res) => {
  try {
    await pool.query(
      'UPDATE users SET wechat_uid = NULL, updated_at = NOW() WHERE id = $1',
      [req.user.id]
    );
    res.json({ ok: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
