/**
 * T1 定时任务自动化服务
 *
 * T1.1 每日凌晨 1:00 — 生成所有用户的每日学习任务
 * T1.2 每周一 8:00 — 生成周报并推送微信
 * T1.3 每晚 21:00 — 学习数据小结推送
 * T1.4 考前倒计时 — 自动切换冲刺阶段
 */

import pool from '../db.js';
import { generateDailyTask } from './daily.js';

// ─── T1.1 生成每日任务（凌晨预计算，存表） ─────────
export async function generateAllDailyTasks() {
  const today = new Date().toISOString().split('T')[0];
  const users = await pool.query('SELECT id, nickname FROM users');

  let count = 0;
  for (const user of users.rows) {
    try {
      const task = await generateDailyTask(user.id);
      // 存入 daily_tasks 表（UPSERT）
      await pool.query(
        `INSERT INTO daily_tasks (user_id, task_date, task_data, completed)
         VALUES ($1, $2, $3, FALSE)
         ON CONFLICT (user_id, task_date) DO UPDATE SET task_data = $3`,
        [user.id, today, JSON.stringify(task)]
      );
      count++;
    } catch (err) {
      console.error(`  生成任务失败 [${user.nickname}]: ${err.message}`);
    }
  }
  console.log(`✓ T1.1 已生成 ${count} 位用户的每日任务`);
  return count;
}

// ─── T1.2 生成周报 ──────────────────────────────
export async function generateWeeklyReport(userId) {
  // 本周进度
  const progRes = await pool.query(
    `SELECT COUNT(*) FILTER(WHERE mastered) as m, COUNT(*) as t
     FROM progress WHERE user_id = $1`,
    [userId]
  );
  // 本周错题解决数
  const wrongRes = await pool.query(
    `SELECT
       COUNT(*) FILTER(WHERE resolved = FALSE) as pending,
       COUNT(*) FILTER(WHERE resolved = TRUE AND last_wrong > NOW() - INTERVAL '7 days') as resolved_week
     FROM wrong_questions WHERE user_id = $1`,
    [userId]
  );
  // 本周打卡天数
  const checkinRes = await pool.query(
    `SELECT COUNT(DISTINCT DATE(created_at)) as days
     FROM checkins WHERE user_id = $1 AND created_at > NOW() - INTERVAL '7 days'`,
    [userId]
  );
  // 遗忘曲线到期数
  const reviewRes = await pool.query(
    `SELECT COUNT(*) as due
     FROM wrong_questions
     WHERE user_id = $1 AND resolved = TRUE AND next_review <= NOW()`,
    [userId]
  );

  const m = parseInt(progRes.rows[0]?.m) || 0;
  const t = parseInt(progRes.rows[0]?.t) || 0;
  const pending = parseInt(wrongRes.rows[0]?.pending) || 0;
  const resolvedWeek = parseInt(wrongRes.rows[0]?.resolved_week) || 0;
  const days = parseInt(checkinRes.rows[0]?.days) || 0;
  const due = parseInt(reviewRes.rows[0]?.due) || 0;

  const pct = t > 0 ? Math.round(m / 194 * 100) : 0;
  const grade = pct >= 80 ? 'S' : pct >= 60 ? 'A' : pct >= 40 ? 'B' : pct >= 20 ? 'C' : 'D';

  return {
    mastered: m, total: 194, pct, grade,
    wrongPending: pending, wrongResolvedWeek: resolvedWeek,
    checkinDays: days, reviewDue: due,
    text: [
      `📊 本周学习报告`,
      ``,
      `📚 知识点：${m}/194（${pct}%）等级 ${grade}`,
      `✅ 本周攻克错题：${resolvedWeek} 道`,
      `❌ 待解决错题：${pending} 道`,
      `📅 本周打卡：${days}/7 天`,
      due > 0 ? `🔔 遗忘曲线到期：${due} 道需复习` : '',
      ``,
      pct >= 80 ? '🌟 进度超80%！冲刺阶段，查漏补缺！'
        : pct >= 50 ? '💪 过半了！保持节奏，重点攻克薄弱点'
        : '📖 基础阶段，每天进步一点就很棒！',
    ].filter(Boolean).join('\n'),
  };
}

// ─── T1.4 考前冲刺阶段判断 ────────────────────────
export function getSprintPhase(examDate) {
  if (!examDate) return null;

  const now = new Date();
  const exam = new Date(examDate);
  const totalDays = Math.max(1, Math.ceil((exam - now) / 86400000));

  // 补漏期40% → 强化期40% → 冲刺期15% → 保温期5%
  if (totalDays <= 0) return { phase: 'done', label: '考试已结束', daysLeft: 0, pct: 100 };

  const phases = [
    { id: 'patch', label: '补漏期', pct: 40, focus: '查漏补缺，攻克薄弱知识点', color: '#3a9eff' },
    { id: 'enhance', label: '强化期', pct: 80, focus: '题组训练，提升解题速度', color: '#1ed9a0' },
    { id: 'sprint', label: '冲刺期', pct: 95, focus: '真题模拟，压轴题突破', color: '#f5a623' },
    { id: 'warm', label: '保温期', pct: 100, focus: '轻松复习，保持手感', color: '#f04f70' },
  ];

  // 计算原始总天数（从设置考试日期到考试日）
  // 用剩余天数百分比判断阶段
  const elapsed = 100 - (totalDays / Math.max(totalDays, 1) * 100);

  // 简化：用剩余天数判断
  let phase;
  if (totalDays > 60) phase = phases[0];
  else if (totalDays > 21) phase = phases[1];
  else if (totalDays > 5) phase = phases[2];
  else phase = phases[3];

  return {
    ...phase,
    daysLeft: totalDays,
    examDate: exam.toISOString().split('T')[0],
    urgency: totalDays <= 7 ? 'critical' : totalDays <= 30 ? 'high' : 'normal',
    dailyPlan: buildDailyPlan(phase.id, totalDays),
  };
}

function buildDailyPlan(phaseId, daysLeft) {
  switch (phaseId) {
    case 'patch': return {
      basics: 3, exam: 1, review: 2, challenge: 0,
      desc: '3道基础题 + 1道真题 + 2道错题复习',
    };
    case 'enhance': return {
      basics: 1, exam: 3, review: 2, challenge: 1,
      desc: '1道基础 + 3道真题 + 2道复习 + 1道挑战',
    };
    case 'sprint': return {
      basics: 0, exam: 2, review: 3, challenge: 2,
      desc: '2道真题 + 3道错题 + 2道压轴挑战',
    };
    case 'warm': return {
      basics: 0, exam: 1, review: 1, challenge: 0,
      desc: '1道真题 + 1道复习，保持手感',
    };
    default: return { basics: 2, exam: 2, review: 1, challenge: 0, desc: '均衡练习' };
  }
}
