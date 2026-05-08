import express from 'express';
import jwt from 'jsonwebtoken';

process.env.JWT_SECRET ||= 'dev-secret';

const { default: skillsRouter } = await import('../api/skills.js');

const app = express();
app.use(express.json());
app.use('/api/skills', skillsRouter);

const server = await new Promise(resolve => {
  const instance = app.listen(0, '127.0.0.1', () => resolve(instance));
});

const baseUrl = `http://127.0.0.1:${server.address().port}`;
const token = jwt.sign({ id: 1, phone: '19900000000' }, process.env.JWT_SECRET, { expiresIn: '10m' });

try {
  const recommend = await postJson('/api/skills/recommend', {
    topic_code: 'quad_fn',
    question_id: 'fg01_0',
    question_type: 'function',
    stage: 'middle',
    error_type: 'method_choice',
    student_state: 'stuck',
    scene: 'question_detail',
    limit: 3,
  });

  assert(recommend.status === 200, 'recommend status should be 200');
  assert(Array.isArray(recommend.body.skills), 'recommend skills should be an array');
  assert(recommend.body.skills.length === 3, 'recommend should return 3 skills');
  assert(['db', 'seed'].includes(recommend.body.source), 'recommend source should be db or seed');

  const firstSkill = recommend.body.skills[0];
  assert(firstSkill?.skill_key, 'recommend first skill should include skill_key');

  const impression = await postJson('/api/skills/event', {
    skill_key: firstSkill.skill_key,
    event_type: 'impression',
    topic_code: 'quad_fn',
    question_id: 'fg01_0',
    question_type: 'function',
    scene: 'question_detail',
    metadata: { verifier: 'v4.36' },
  });
  assert(impression.status === 200, 'impression status should be 200');
  assert(impression.body.ok === true, 'impression should return ok=true');
  assert(typeof impression.body.stored === 'boolean', 'impression should include stored boolean');

  const click = await postJson('/api/skills/event', {
    skill_key: firstSkill.skill_key,
    event_type: 'click',
    topic_code: 'quad_fn',
    question_id: 'fg01_0',
    question_type: 'function',
    scene: 'question_detail',
    metadata: { verifier: 'v4.36' },
  });
  assert(click.status === 200, 'click status should be 200');
  assert(click.body.ok === true, 'click should return ok=true');
  assert(typeof click.body.stored === 'boolean', 'click should include stored boolean');

  console.log(JSON.stringify({
    ok: true,
    baseUrl,
    recommend: {
      status: recommend.status,
      source: recommend.body.source,
      skillCount: recommend.body.skills.length,
      skillKeys: recommend.body.skills.map(skill => skill.skill_key),
      reason: recommend.body.reason,
    },
    impression: {
      status: impression.status,
      ok: impression.body.ok,
      stored: impression.body.stored,
      reason: impression.body.reason,
    },
    click: {
      status: click.status,
      ok: click.body.ok,
      stored: click.body.stored,
      reason: click.body.reason,
    },
  }, null, 2));
} finally {
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

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}
