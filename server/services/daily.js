/**
 * 每日任务 + 遗忘曲线调度服务
 *
 * 规则：
 *   每日任务 = 2道错题复练 + 1个新知识点基础题 + 1道挑战题
 *   遗忘曲线：做对后 1天→3天→7天→30天 复习，再错重置间隔
 */

import pool from '../db.js';

// 遗忘曲线间隔（天）
const REVIEW_INTERVALS = [1, 3, 7, 30];

// ─── 生成每日任务 ────────────────────────────────
export async function generateDailyTask(userId) {
  // 1. 取错题（未解决，按错次排序）
  const wrongRes = await pool.query(
    `SELECT question_id, question_type, wrong_count
     FROM wrong_questions
     WHERE user_id = $1 AND resolved = FALSE
     ORDER BY wrong_count DESC, last_wrong ASC
     LIMIT 2`,
    [userId]
  );

  // 2. 取薄弱知识点的基础题
  const weakRes = await pool.query(
    `SELECT topic_id FROM progress
     WHERE user_id = $1 AND mastered = FALSE
     ORDER BY score ASC LIMIT 1`,
    [userId]
  );
  const weakTopic = weakRes.rows[0]?.topic_id || null;

  // 3. 取到期复习题（遗忘曲线）
  const reviewRes = await pool.query(
    `SELECT question_id, question_type, review_interval, next_review
     FROM wrong_questions
     WHERE user_id = $1 AND resolved = TRUE AND next_review <= NOW()
     ORDER BY next_review ASC
     LIMIT 2`,
    [userId]
  );

  return {
    date: new Date().toISOString().split('T')[0],
    wrongReview: wrongRes.rows.map(r => ({
      questionId: r.question_id,
      type: r.question_type,
      wrongCount: r.wrong_count,
      tag: '错题复练',
    })),
    newPractice: weakTopic ? {
      topicId: weakTopic,
      tag: '新知识点基础题',
    } : null,
    curveReview: reviewRes.rows.map(r => ({
      questionId: r.question_id,
      type: r.question_type,
      interval: r.review_interval,
      tag: '遗忘曲线复习',
    })),
    challenge: {
      tag: '挑战题',
      // 前端根据学生掌握情况随机选一道较难真题
    },
  };
}

// ─── 遗忘曲线：答题结果更新 ─────────────────────
export async function updateReviewSchedule(userId, questionId, questionType, correct) {
  if (correct) {
    // 答对：推进到下一间隔
    const res = await pool.query(
      `SELECT review_interval FROM wrong_questions
       WHERE user_id = $1 AND question_id = $2 AND question_type = $3`,
      [userId, questionId, questionType]
    );
    const current = res.rows[0]?.review_interval || 0;
    const idx = REVIEW_INTERVALS.indexOf(current);
    const nextInterval = idx >= 0 && idx < REVIEW_INTERVALS.length - 1
      ? REVIEW_INTERVALS[idx + 1]
      : REVIEW_INTERVALS[REVIEW_INTERVALS.length - 1];

    await pool.query(
      `UPDATE wrong_questions
       SET resolved = TRUE, review_interval = $4, next_review = NOW() + ($4 || ' days')::interval
       WHERE user_id = $1 AND question_id = $2 AND question_type = $3`,
      [userId, questionId, questionType, nextInterval]
    );
  } else {
    // 答错：重置间隔，标记未解决
    await pool.query(
      `UPDATE wrong_questions
       SET resolved = FALSE, wrong_count = wrong_count + 1,
           last_wrong = NOW(), review_interval = 0, next_review = NULL
       WHERE user_id = $1 AND question_id = $2 AND question_type = $3`,
      [userId, questionId, questionType]
    );
  }
}
