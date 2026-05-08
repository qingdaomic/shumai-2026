import express from 'express';
import jwt from 'jsonwebtoken';
import pool from '../db.js';

process.env.JWT_SECRET ||= 'dev-secret';
process.env.DEEPSEEK_API_KEY = '';

const { default: aiRouter } = await import('../api/ai.js');
const originalQuery = pool.query.bind(pool);

pool.query = async sql => {
  const text = String(sql);
  if (text.includes('FROM progress')) {
    return { rows: [{ topic_id: 'quad_fn', mastered: false }] };
  }
  if (text.includes('FROM wrong_questions')) {
    return { rows: [{ cnt: '2' }] };
  }
  if (text.includes('FROM checkins')) {
    return { rows: [{ days: '3' }] };
  }
  if (text.includes('FROM prompt_skills')) {
    throw new Error('verification: prompt_skills table is intentionally unavailable');
  }
  return { rows: [] };
};

const app = express();
app.use(express.json());
app.use('/api/ai', aiRouter);

const server = await new Promise(resolve => {
  const instance = app.listen(0, '127.0.0.1', () => resolve(instance));
});

const baseUrl = `http://127.0.0.1:${server.address().port}`;
const token = jwt.sign({ id: 1, phone: '19900000000' }, process.env.JWT_SECRET, { expiresIn: '10m' });

try {
  const specified = await postJson('/api/ai/skill', {
    question: '二次函数图像经过两个点，怎么先确定解析式？',
    topic_code: 'quad_fn',
    scene: 'question_detail',
    student_state: 'stuck',
    skill_key: 'math_topic_quadratic_function_breakthrough_001',
    mode: 'hint',
  });

  assert(specified.status === 200, 'specified skill status should be 200');
  assert(specified.body?.ok === true, 'specified skill should return ok=true');
  assert(specified.body?.answer, 'specified skill should return an answer');
  assert(specified.body?.skill?.skill_key === 'math_topic_quadratic_function_breakthrough_001', 'specified skill should match requested skill_key');
  assert(specified.body?.fallback === true, 'specified skill should fallback when AI key is missing');

  const recommended = await postJson('/api/ai/skill', {
    question: '二次函数图像经过两个点，怎么先确定解析式？',
    topic_code: 'quad_fn',
    scene: 'stuck_before_solution',
    error_type: 'method_unclear',
    student_state: 'stuck',
    mode: 'hint',
  });

  assert(recommended.status === 200, 'recommended skill status should be 200');
  assert(recommended.body?.ok === true, 'recommended skill should return ok=true');
  assert(recommended.body?.skill?.skill_key, 'recommended skill should return a skill');
  assert(recommended.body?.answer, 'recommended skill should return an answer');

  const missingQuestion = await postJson('/api/ai/skill', {
    topic_code: 'quad_fn',
    scene: 'question_detail',
  });

  assert(missingQuestion.status === 400, 'missing question should return 400');
  assert(missingQuestion.body?.error === '缺少问题内容', 'missing question should return clear error');

  const unknownTopic = await postJson('/api/ai/skill', {
    question: '这个题我不知道从哪里开始。',
    topic_code: 'unknown_topic_code',
    scene: 'question_detail',
    mode: 'hint',
  });

  assert(unknownTopic.status === 200, 'unknown topic status should be 200');
  assert(unknownTopic.body?.ok === true, 'unknown topic should return ok=true');
  assert(unknownTopic.body?.answer, 'unknown topic should return fallback or answer');

  console.log(JSON.stringify({
    ok: true,
    baseUrl,
    specifiedSkill: summarize(specified),
    recommendedSkill: summarize(recommended),
    missingQuestion: {
      status: missingQuestion.status,
      error: missingQuestion.body?.error,
    },
    unknownTopic: summarize(unknownTopic),
  }, null, 2));
} finally {
  pool.query = originalQuery;
  await new Promise(resolve => server.close(resolve));
}

async function postJson(path, body) {
  const response = await fetch(`${baseUrl}${path}`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  const text = await response.text();
  let parsed = null;
  try {
    parsed = text ? JSON.parse(text) : null;
  } catch {
    parsed = { raw: text };
  }
  return { status: response.status, body: parsed };
}

function summarize(result) {
  return {
    status: result.status,
    ok: result.body?.ok,
    fallback: result.body?.fallback,
    source: result.body?.source,
    skillKey: result.body?.skill?.skill_key || null,
    reason: result.body?.reason,
    answerPreview: String(result.body?.answer || '').slice(0, 80),
  };
}

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}
