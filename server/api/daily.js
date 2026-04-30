import { Router } from 'express';
import { authMiddleware } from './auth.js';
import { generateDailyTask, updateReviewSchedule } from '../services/daily.js';

const router = Router();

// GET /api/daily — 获取今日任务
router.get('/', authMiddleware, async (req, res) => {
  try {
    const task = await generateDailyTask(req.user.id);
    res.json(task);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST /api/daily/review — 提交复习结果（遗忘曲线更新）
router.post('/review', authMiddleware, async (req, res) => {
  try {
    const { questionId, questionType, correct } = req.body;
    if (!questionId) return res.status(400).json({ error: '缺少题目ID' });
    await updateReviewSchedule(req.user.id, questionId, questionType || 'exam', !!correct);
    res.json({ ok: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
