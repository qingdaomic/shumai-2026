import { Router } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import pool from '../db.js';

const router = Router();
const SECRET = process.env.JWT_SECRET || 'dev-secret';

// POST /api/auth/register
router.post('/register', async (req, res) => {
  try {
    const { phone, password, nickname, grade, inviteCode } = req.body;
    if (!phone || !password) return res.status(400).json({ error: '手机号和密码必填' });

    // 邀请码校验（从环境变量 INVITE_CODES 读取，逗号分隔）
    const validCodes = (process.env.INVITE_CODES || '')
      .split(',').map(c => c.trim()).filter(Boolean);
    if (validCodes.length > 0 && !validCodes.includes(inviteCode)) {
      return res.status(400).json({ error: '邀请码无效，请联系管理员获取' });
    }

    const hash = await bcrypt.hash(password, 10);
    const result = await pool.query(
      'INSERT INTO users (phone, password, nickname, grade) VALUES ($1, $2, $3, $4) RETURNING id, phone, nickname, grade',
      [phone, hash, nickname || '同学', grade || 9]
    );
    const user = result.rows[0];
    const token = jwt.sign({ id: user.id, phone: user.phone }, SECRET, { expiresIn: '30d' });
    res.json({ user, token });
  } catch (err) {
    if (err.code === '23505') return res.status(409).json({ error: '该手机号已注册' });
    res.status(500).json({ error: err.message });
  }
});

// POST /api/auth/login
router.post('/login', async (req, res) => {
  try {
    const { phone, password } = req.body;
    const result = await pool.query('SELECT * FROM users WHERE phone = $1', [phone]);
    const user = result.rows[0];
    if (!user) return res.status(401).json({ error: '用户不存在' });

    const ok = await bcrypt.compare(password, user.password);
    if (!ok) return res.status(401).json({ error: '密码错误' });

    const token = jwt.sign({ id: user.id, phone: user.phone }, SECRET, { expiresIn: '30d' });
    res.json({ user: { id: user.id, phone: user.phone, nickname: user.nickname, grade: user.grade }, token });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 鉴权中间件
export function authMiddleware(req, res, next) {
  const auth = req.headers.authorization;
  if (!auth?.startsWith('Bearer ')) return res.status(401).json({ error: '未登录' });
  try {
    req.user = jwt.verify(auth.slice(7), SECRET);
    next();
  } catch {
    res.status(401).json({ error: 'Token 无效' });
  }
}

export default router;
