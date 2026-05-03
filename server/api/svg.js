// 几何题 SVG 图形缓存 API
// GET  /api/svg/:questionId      — 读取缓存
// POST /api/svg/:questionId      — 保存生成的 SVG（首次生成后所有用户共享）
// GET  /api/svg/stats            — 统计已有 SVG 数量（管理端用）

import express from 'express';
import pool from '../db.js';
import { authenticateToken } from './auth.js';

const router = express.Router();

// GET /api/svg/stats — 统计（管理端）
router.get('/stats', async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT
        question_type,
        topic,
        COUNT(*) as count,
        SUM(view_count) as total_views,
        MAX(created_at) as last_created
      FROM question_svgs
      GROUP BY question_type, topic
      ORDER BY question_type, topic
    `);
    const total = await pool.query('SELECT COUNT(*) FROM question_svgs');
    res.json({
      total: parseInt(total.rows[0].count),
      byTopic: result.rows,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /api/svg/:questionId — 读取 SVG 缓存
router.get('/:questionId', async (req, res) => {
  const { questionId } = req.params;
  try {
    const result = await pool.query(
      'SELECT svg_content, topic, created_at FROM question_svgs WHERE question_id = $1',
      [questionId]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ exists: false });
    }
    // 增加查看次数
    await pool.query(
      'UPDATE question_svgs SET view_count = view_count + 1 WHERE question_id = $1',
      [questionId]
    );
    res.json({
      exists: true,
      svg: result.rows[0].svg_content,
      topic: result.rows[0].topic,
      createdAt: result.rows[0].created_at,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST /api/svg/:questionId — 保存 SVG（需登录）
router.post('/:questionId', authenticateToken, async (req, res) => {
  const { questionId } = req.params;
  const { svg, questionType = 'basic', topic = '' } = req.body;
  const userId = req.user?.id;

  if (!svg || svg.length < 10) {
    return res.status(400).json({ error: 'SVG 内容不能为空' });
  }
  if (svg.length > 50000) {
    return res.status(400).json({ error: 'SVG 内容过大（最大50KB）' });
  }

  try {
    // 如果已存在则跳过（不覆盖，保护已有图形）
    const existing = await pool.query(
      'SELECT question_id FROM question_svgs WHERE question_id = $1',
      [questionId]
    );
    if (existing.rows.length > 0) {
      return res.json({ saved: false, reason: '已有缓存，无需重复保存' });
    }

    await pool.query(
      `INSERT INTO question_svgs
        (question_id, question_type, svg_content, topic, generated_by)
       VALUES ($1, $2, $3, $4, $5)`,
      [questionId, questionType, svg, topic, userId || null]
    );
    res.json({ saved: true, questionId });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE /api/svg/:questionId — 删除（管理员才能删）
router.delete('/:questionId', authenticateToken, async (req, res) => {
  if (req.user?.role !== 'admin') {
    return res.status(403).json({ error: '仅管理员可删除' });
  }
  const { questionId } = req.params;
  try {
    await pool.query('DELETE FROM question_svgs WHERE question_id = $1', [questionId]);
    res.json({ deleted: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
