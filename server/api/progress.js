import { Router } from 'express';
import { authMiddleware } from './auth.js';
import pool from '../db.js';

const router = Router();

// GET /api/progress — 获取当前用户所有学习进度
router.get('/', authMiddleware, async (req, res) => {
  try {
    const result = await pool.query(
      'SELECT topic_id, mastered, score, updated_at FROM progress WHERE user_id = $1',
      [req.user.id]
    );
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// PUT /api/progress/:topicId — 更新知识点掌握状态
router.put('/:topicId', authMiddleware, async (req, res) => {
  try {
    const { mastered, score } = req.body;
    await pool.query(
      `INSERT INTO progress (user_id, topic_id, mastered, score, updated_at)
       VALUES ($1, $2, $3, $4, NOW())
       ON CONFLICT (user_id, topic_id) DO UPDATE SET mastered = $3, score = $4, updated_at = NOW()`,
      [req.user.id, req.params.topicId, mastered ?? false, score ?? 0]
    );
    res.json({ ok: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /api/wrong — 获取错题列表
router.get('/wrong', authMiddleware, async (req, res) => {
  try {
    const result = await pool.query(
      'SELECT question_id, question_type, wrong_count, last_wrong, resolved FROM wrong_questions WHERE user_id = $1 AND resolved = FALSE ORDER BY last_wrong DESC',
      [req.user.id]
    );
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST /api/wrong — 添加错题
router.post('/wrong', authMiddleware, async (req, res) => {
  try {
    const { questionId, questionType } = req.body;
    await pool.query(
      `INSERT INTO wrong_questions (user_id, question_id, question_type, wrong_count, last_wrong)
       VALUES ($1, $2, $3, 1, NOW())
       ON CONFLICT (user_id, question_id, question_type) DO UPDATE SET wrong_count = wrong_questions.wrong_count + 1, last_wrong = NOW(), resolved = FALSE`,
      [req.user.id, questionId, questionType || 'exam']
    );
    res.json({ ok: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE /api/wrong/:questionId — 标记错题已解决
router.delete('/wrong/:questionId', authMiddleware, async (req, res) => {
  try {
    await pool.query(
      'UPDATE wrong_questions SET resolved = TRUE WHERE user_id = $1 AND question_id = $2',
      [req.user.id, req.params.questionId]
    );
    res.json({ ok: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
