/**
 * K1-K5 教师端 API
 * - 班级管理（创建/邀请码/学生列表）
 * - 班级学情汇总
 * - 试卷生成
 * - AI 周报摘要
 */

import { Router } from 'express';
import { authMiddleware } from './auth.js';
import pool from '../db.js';
import crypto from 'crypto';
import OpenAI from 'openai';

const router = Router();

const deepseek = new OpenAI({
  baseURL: 'https://api.deepseek.com',
  apiKey: process.env.DEEPSEEK_API_KEY || '',
});

// 教师鉴权
async function teacherGuard(req, res, next) {
  try {
    const result = await pool.query('SELECT role FROM users WHERE id = $1', [req.user.id]);
    const role = result.rows[0]?.role;
    if (role !== 'teacher' && role !== 'admin') {
      return res.status(403).json({ error: '需要教师权限' });
    }
    next();
  } catch {
    res.status(500).json({ error: '权限验证失败' });
  }
}

// ═══════════════════════════════════════════
//  K1 班级管理
// ═══════════════════════════════════════════

// GET /api/teacher/classes — 我的班级列表
router.get('/classes', authMiddleware, teacherGuard, async (req, res) => {
  try {
    const result = await pool.query(
      `SELECT c.*, 
              (SELECT COUNT(*) FROM class_students cs WHERE cs.class_id = c.id) as student_count
       FROM classes c WHERE c.teacher_id = $1 ORDER BY c.created_at DESC`,
      [req.user.id]
    );
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST /api/teacher/classes — 创建班级
router.post('/classes', authMiddleware, teacherGuard, async (req, res) => {
  try {
    const { name, grade } = req.body;
    if (!name) return res.status(400).json({ error: '班级名称必填' });

    const inviteCode = crypto.randomBytes(4).toString('hex').toUpperCase();
    const result = await pool.query(
      'INSERT INTO classes (name, teacher_id, grade, invite_code) VALUES ($1, $2, $3, $4) RETURNING *',
      [name, req.user.id, grade || 9, inviteCode]
    );
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE /api/teacher/classes/:id — 删除班级
router.delete('/classes/:id', authMiddleware, teacherGuard, async (req, res) => {
  try {
    await pool.query('DELETE FROM classes WHERE id = $1 AND teacher_id = $2', [req.params.id, req.user.id]);
    res.json({ ok: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST /api/teacher/classes/:id/join — 学生加入班级（邀请码）
router.post('/classes/:id/join', authMiddleware, async (req, res) => {
  try {
    const { inviteCode } = req.body;
    const cls = await pool.query('SELECT * FROM classes WHERE id = $1 AND invite_code = $2', [req.params.id, inviteCode]);
    if (cls.rows.length === 0) return res.status(404).json({ error: '班级不存在或邀请码错误' });

    await pool.query(
      'INSERT INTO class_students (class_id, student_id) VALUES ($1, $2) ON CONFLICT DO NOTHING',
      [req.params.id, req.user.id]
    );
    res.json({ ok: true, className: cls.rows[0].name });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST /api/teacher/join — 通过邀请码加入（不需要知道 class id）
router.post('/join', authMiddleware, async (req, res) => {
  try {
    const { inviteCode } = req.body;
    if (!inviteCode) return res.status(400).json({ error: '请输入邀请码' });

    const cls = await pool.query('SELECT * FROM classes WHERE invite_code = $1', [inviteCode.toUpperCase()]);
    if (cls.rows.length === 0) return res.status(404).json({ error: '邀请码无效' });

    await pool.query(
      'INSERT INTO class_students (class_id, student_id) VALUES ($1, $2) ON CONFLICT DO NOTHING',
      [cls.rows[0].id, req.user.id]
    );
    res.json({ ok: true, className: cls.rows[0].name });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ═══════════════════════════════════════════
//  K2 班级学生列表 + 学情
// ═══════════════════════════════════════════

// GET /api/teacher/classes/:id/students — 班级学生详细学情
router.get('/classes/:id/students', authMiddleware, teacherGuard, async (req, res) => {
  try {
    // 验证是否是自己的班级
    const cls = await pool.query('SELECT * FROM classes WHERE id = $1 AND teacher_id = $2', [req.params.id, req.user.id]);
    if (cls.rows.length === 0) return res.status(403).json({ error: '无权访问此班级' });

    const result = await pool.query(
      `SELECT u.id, u.nickname, u.grade, u.phone,
              (SELECT COUNT(*) FROM progress p WHERE p.user_id = u.id AND p.mastered) as mastered,
              (SELECT COUNT(*) FROM wrong_questions w WHERE w.user_id = u.id AND w.resolved = FALSE) as wrong_pending,
              (SELECT COUNT(*) FROM checkins c WHERE c.user_id = u.id) as checkin_days,
              (SELECT COUNT(*) FROM checkins c WHERE c.user_id = u.id AND c.date > NOW() - INTERVAL '7 days') as week_active,
              cs.joined_at
       FROM class_students cs
       JOIN users u ON u.id = cs.student_id
       WHERE cs.class_id = $1
       ORDER BY mastered DESC`,
      [req.params.id]
    );
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ═══════════════════════════════════════════
//  K3 班级学情汇总报告
// ═══════════════════════════════════════════

// GET /api/teacher/classes/:id/report — 班级汇总数据
router.get('/classes/:id/report', authMiddleware, teacherGuard, async (req, res) => {
  try {
    const cls = await pool.query('SELECT * FROM classes WHERE id = $1 AND teacher_id = $2', [req.params.id, req.user.id]);
    if (cls.rows.length === 0) return res.status(403).json({ error: '无权访问' });

    // 汇总统计
    const stats = await pool.query(
      `SELECT 
        COUNT(DISTINCT cs.student_id) as total_students,
        AVG(sub.mastered)::int as avg_mastered,
        MAX(sub.mastered) as max_mastered,
        MIN(sub.mastered) as min_mastered,
        AVG(sub.wrong_pending)::int as avg_wrong,
        AVG(sub.checkin_days)::int as avg_checkin
       FROM class_students cs
       LEFT JOIN LATERAL (
         SELECT
           (SELECT COUNT(*) FROM progress p WHERE p.user_id = cs.student_id AND p.mastered) as mastered,
           (SELECT COUNT(*) FROM wrong_questions w WHERE w.user_id = cs.student_id AND w.resolved = FALSE) as wrong_pending,
           (SELECT COUNT(*) FROM checkins c WHERE c.user_id = cs.student_id) as checkin_days
       ) sub ON true
       WHERE cs.class_id = $1`,
      [req.params.id]
    );

    // 薄弱知识点统计（全班错题最多的知识点）
    const weakTopics = await pool.query(
      `SELECT wq.question_id, COUNT(*) as cnt
       FROM wrong_questions wq
       JOIN class_students cs ON cs.student_id = wq.user_id
       WHERE cs.class_id = $1 AND wq.resolved = FALSE
       GROUP BY wq.question_id
       ORDER BY cnt DESC LIMIT 10`,
      [req.params.id]
    );

    const students = await pool.query(
      `SELECT u.id, u.nickname,
              (SELECT COUNT(*) FROM progress p WHERE p.user_id = u.id AND p.mastered) as mastered,
              (SELECT COUNT(*) FROM wrong_questions w WHERE w.user_id = u.id AND w.resolved = FALSE) as wrong_pending,
              (SELECT COUNT(*) FROM checkins c WHERE c.user_id = u.id AND c.date > NOW() - INTERVAL '7 days') as week_active
       FROM class_students cs
       JOIN users u ON u.id = cs.student_id
       WHERE cs.class_id = $1
       ORDER BY wrong_pending DESC, mastered ASC`,
      [req.params.id]
    );

    res.json({
      className: cls.rows[0].name,
      stats: stats.rows[0],
      weakTopics: weakTopics.rows,
      tomorrowAdvice: buildTomorrowAdvice(stats.rows[0], weakTopics.rows, students.rows),
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

function buildTomorrowAdvice(stats = {}, weakTopics = [], students = []) {
  const topWeak = weakTopics[0];
  const focus = topWeak
    ? `围绕高频错题 ${topWeak.question_id} 做 10 分钟讲评`
    : '用 10 分钟复盘一个基础高频知识点';
  const reason = topWeak
    ? `这道题/同类题仍有 ${topWeak.cnt} 次未清除记录，适合做共性错因讲评。`
    : '当前班级错题聚集不明显，先稳住基础节奏。';
  const reviewQuestions = weakTopics.slice(0, 3).map(w => ({
    questionId: w.question_id,
    count: Number(w.cnt) || 0,
  }));
  const watchStudents = students
    .filter(s => Number(s.wrong_pending) >= 5 || Number(s.week_active) <= 1)
    .slice(0, 8)
    .map(s => ({
      id: s.id,
      nickname: s.nickname,
      reason: Number(s.wrong_pending) >= 5 ? `待清错题 ${s.wrong_pending} 道` : `本周活跃 ${s.week_active} 天`,
    }));
  const groups = {
    patch: students.filter(s => Number(s.mastered) < 60).slice(0, 8).map(s => s.nickname),
    steady: students.filter(s => Number(s.mastered) >= 60 && Number(s.mastered) < 120).slice(0, 8).map(s => s.nickname),
    challenge: students.filter(s => Number(s.mastered) >= 120).slice(0, 8).map(s => s.nickname),
  };

  return {
    focus,
    reason,
    tenMinutePlan: [
      '2分钟：只讲题眼和常见错因',
      '5分钟：板书一题，追问关键步骤',
      '3分钟：同类变式，当堂确认是否能独立入口',
    ],
    reviewQuestions,
    watchStudents,
    groups,
    teacherNote: '明天不要把问题讲散，先抓一个共性错因，让学生带着清楚入口离开。',
  };
}

// ═══════════════════════════════════════════
//  K4 AI 生成试卷
// ═══════════════════════════════════════════

// POST /api/teacher/generate-paper — 根据班级薄弱点 AI 生成试卷
router.post('/generate-paper', authMiddleware, teacherGuard, async (req, res) => {
  try {
    const { classId, difficulty, questionCount } = req.body;
    const count = questionCount || 10;
    const diff = difficulty || '中等';

    // 获取班级薄弱数据
    let weakInfo = '暂无数据';
    if (classId) {
      const weak = await pool.query(
        `SELECT wq.question_id, COUNT(*) as cnt
         FROM wrong_questions wq
         JOIN class_students cs ON cs.student_id = wq.user_id
         WHERE cs.class_id = $1 AND wq.resolved = FALSE
         GROUP BY wq.question_id ORDER BY cnt DESC LIMIT 5`,
        [classId]
      );
      if (weak.rows.length > 0) {
        weakInfo = weak.rows.map(w => `题目${w.question_id}(${w.cnt}人错)`).join('、');
      }
    }

    const completion = await deepseek.chat.completions.create({
      model: 'deepseek-chat',
      messages: [
        {
          role: 'system',
          content: `你是一位中考数学命题专家。请根据以下信息出一套数学练习试卷。

要求：
- 题目数量：${count}题
- 难度：${diff}
- 涵盖代数、几何、统计三个领域
- 班级薄弱点：${weakInfo}（多出相关题目）
- 格式：每题包含序号、题目、分值、参考答案
- 用纯文本格式，不用LaTeX`,
        },
        { role: 'user', content: '请生成试卷' },
      ],
      max_tokens: 2000,
      temperature: 0.7,
    });

    res.json({ paper: completion.choices[0]?.message?.content || '' });
  } catch (err) {
    console.error('❌ generate-paper:', err.message);
    res.status(500).json({ error: 'AI 服务暂时不可用' });
  }
});

// ═══════════════════════════════════════════
//  K5 AI 周报摘要
// ═══════════════════════════════════════════

// POST /api/teacher/ai-report — AI 生成班级周报
router.post('/ai-report', authMiddleware, teacherGuard, async (req, res) => {
  try {
    const { classId } = req.body;
    if (!classId) return res.status(400).json({ error: '缺少 classId' });

    // 拉取班级数据
    const students = await pool.query(
      `SELECT u.nickname,
              (SELECT COUNT(*) FROM progress p WHERE p.user_id = u.id AND p.mastered) as mastered,
              (SELECT COUNT(*) FROM wrong_questions w WHERE w.user_id = u.id AND w.resolved = FALSE) as wrong,
              (SELECT COUNT(*) FROM checkins c WHERE c.user_id = u.id AND c.date > NOW() - INTERVAL '7 days') as week_active
       FROM class_students cs JOIN users u ON u.id = cs.student_id
       WHERE cs.class_id = $1`,
      [classId]
    );

    const data = students.rows.map(s => `${s.nickname}: 掌握${s.mastered}个, 错题${s.wrong}个, 本周活跃${s.week_active}天`).join('\n');

    const completion = await deepseek.chat.completions.create({
      model: 'deepseek-chat',
      messages: [
        {
          role: 'system',
          content: `你是一位班主任助手。请根据以下学生数据，生成一份简洁的班级周报。
要求：①整体表现 ②进步之星（掌握最多）③需关注学生（错题多/不活跃）④教学建议。300字以内。`,
        },
        { role: 'user', content: `班级学生数据：\n${data || '暂无数据'}` },
      ],
      max_tokens: 600,
      temperature: 0.7,
    });

    res.json({ report: completion.choices[0]?.message?.content || '' });
  } catch (err) {
    console.error('❌ ai-report:', err.message);
    res.status(500).json({ error: 'AI 服务暂时不可用' });
  }
});

// 移除学生
router.delete('/classes/:classId/students/:studentId', authMiddleware, teacherGuard, async (req, res) => {
  try {
    const cls = await pool.query('SELECT * FROM classes WHERE id = $1 AND teacher_id = $2', [req.params.classId, req.user.id]);
    if (cls.rows.length === 0) return res.status(403).json({ error: '无权操作' });

    await pool.query('DELETE FROM class_students WHERE class_id = $1 AND student_id = $2', [req.params.classId, req.params.studentId]);
    res.json({ ok: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
