import { Router } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import pool from '../db.js';

const router = Router();
const SECRET = process.env.JWT_SECRET || 'dev-secret';

// POST /api/auth/register
router.post('/register', async (req, res) => {
  try {
    const { phone, password, nickname, grade } = req.body;
    if (!phone || !password) return res.status(400).json({ error: '手机号和密码必填' });

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

// PUT /api/auth/profile — 修改昵称
router.put('/profile', authMiddleware, async (req, res) => {
  try {
    const { nickname } = req.body;
    if (!nickname?.trim()) return res.status(400).json({ error: '昵称不能为空' });
    const result = await pool.query(
      'UPDATE users SET nickname=$1, updated_at=NOW() WHERE id=$2 RETURNING id, phone, nickname, grade',
      [nickname.trim(), req.user.id]
    );
    res.json({ user: result.rows[0] });
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
