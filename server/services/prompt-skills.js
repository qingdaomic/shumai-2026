import { readFile } from 'fs/promises';
import { fileURLToPath } from 'url';
import path from 'path';
import pool from '../db.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SEED_PATH = path.resolve(__dirname, '../seeds/prompt_skills_seed.json');
const ALLOWED_EVENTS = new Set(['impression', 'click', 'ai_used', 'helpful', 'not_helpful']);
const DEFAULT_LIMIT = 3;
const MAX_LIMIT = 8;

let seedCache = null;

export async function recommendPromptSkills(input = {}) {
  const params = normalizeRecommendInput(input);

  try {
    const dbSkills = await fetchDbSkills(params);
    if (dbSkills.length > 0) {
      return {
        skills: rankSkills(dbSkills, params).slice(0, params.limit),
        source: 'db',
        reason: buildReason(params, 'db'),
      };
    }
  } catch (err) {
    const seedSkills = await loadSeedSkills();
    return {
      skills: rankSkills(seedSkills, params).slice(0, params.limit),
      source: 'seed',
      reason: `数据库不可用或尚未迁移，已使用种子 Skill 降级推荐：${safeMessage(err)}`,
    };
  }

  const seedSkills = await loadSeedSkills();
  return {
    skills: rankSkills(seedSkills, params).slice(0, params.limit),
    source: 'seed',
    reason: buildReason(params, 'seed'),
  };
}

export async function recordPromptSkillEvent(input = {}) {
  const event = normalizeEventInput(input);
  if (!ALLOWED_EVENTS.has(event.event_type)) {
    return {
      ok: false,
      stored: false,
      reason: 'event_type 只支持 impression / click / ai_used / helpful / not_helpful',
    };
  }

  try {
    const skillId = await resolveSkillId(event);
    if (!skillId) {
      return {
        ok: true,
        stored: false,
        reason: '未找到对应数据库 Skill，事件未写入；种子 fallback 模式下这是预期行为',
      };
    }

    await pool.query(
      `INSERT INTO prompt_skill_events
        (user_id, prompt_skill_id, question_id, question_type, topic_code,
         method_code, scene, event_type, meta)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)`,
      [
        event.user_id,
        skillId,
        event.question_id,
        event.question_type,
        event.topic_code,
        event.method_code,
        event.scene,
        event.event_type,
        event.metadata,
      ]
    );

    return { ok: true, stored: true, reason: '事件已写入 prompt_skill_events' };
  } catch (err) {
    return {
      ok: true,
      stored: false,
      reason: `数据库不可用或表尚未迁移，事件降级为 no-op：${safeMessage(err)}`,
    };
  }
}

export function normalizeRecommendInput(input = {}) {
  return {
    topic_code: cleanText(input.topic_code || input.topicCode, 80),
    method_code: cleanText(input.method_code || input.methodCode, 80),
    question_type: cleanText(input.question_type || input.questionType, 80),
    question_id: cleanText(input.question_id || input.questionId, 80),
    stage: cleanText(input.stage, 40) || 'middle',
    subject: cleanText(input.subject, 40) || 'math',
    scene: cleanText(input.scene, 80) || 'question_detail',
    error_type: cleanText(input.error_type || input.errorType, 60),
    student_state: cleanText(input.student_state || input.studentState, 60),
    limit: clampLimit(input.limit),
  };
}

function normalizeEventInput(input = {}) {
  const metadata = isPlainObject(input.metadata) ? input.metadata : {};
  return {
    user_id: input.user_id || input.userId || null,
    skill_id: input.skill_id || input.skillId || null,
    skill_key: cleanText(input.skill_key || input.skillKey, 80),
    event_type: cleanText(input.event_type || input.eventType, 40),
    topic_code: cleanText(input.topic_code || input.topicCode, 80),
    method_code: cleanText(input.method_code || input.methodCode, 80),
    question_type: cleanText(input.question_type || input.questionType, 40),
    question_id: cleanText(input.question_id || input.questionId, 80),
    scene: cleanText(input.scene, 80),
    metadata,
  };
}

async function fetchDbSkills(params) {
  const result = await pool.query(
    `SELECT id, skill_key, name, type, audience, subject, stage, grade,
            topic_code, method_code, question_type, scene, goal, difficulty,
            tone, content, model_role, trigger_tags, example_questions,
            weight, version, status
     FROM prompt_skills
     WHERE status = 'active'
       AND audience = 'student_frontend'
       AND subject = $1
       AND (stage = $2 OR stage IS NULL)
       AND (topic_code = $3 OR topic_code IS NULL)
       AND (method_code = $4 OR method_code IS NULL)
       AND (scene = $5 OR scene IS NULL)
       AND (question_type = $6 OR question_type = 'all' OR question_type IS NULL)
     ORDER BY weight DESC, id ASC
     LIMIT 80`,
    [
      params.subject,
      params.stage,
      params.topic_code || null,
      params.method_code || null,
      params.scene,
      params.question_type || null,
    ]
  );
  return result.rows.map(normalizeDbSkill);
}

async function resolveSkillId(event) {
  if (event.skill_id) return Number(event.skill_id);
  if (!event.skill_key) return null;
  const result = await pool.query(
    'SELECT id FROM prompt_skills WHERE skill_key = $1 AND status = $2 LIMIT 1',
    [event.skill_key, 'active']
  );
  return result.rows[0]?.id || null;
}

async function loadSeedSkills() {
  if (seedCache) return seedCache;
  const raw = await readFile(SEED_PATH, 'utf8');
  const parsed = JSON.parse(raw);
  seedCache = Array.isArray(parsed) ? parsed.map(normalizeSeedSkill) : [];
  return seedCache;
}

export function rankSkills(skills, params) {
  const seen = new Set();
  return skills
    .filter(skill => skill.status === 'active')
    .map(skill => ({ skill, score: scoreSkill(skill, params) }))
    .sort((a, b) => b.score - a.score || String(a.skill.skill_key).localeCompare(String(b.skill.skill_key)))
    .map(item => item.skill)
    .filter(skill => {
      if (seen.has(skill.skill_key)) return false;
      seen.add(skill.skill_key);
      return true;
    });
}

function scoreSkill(skill, params) {
  let score = Number(skill.weight || 0.7) * 10;
  if (skill.subject === params.subject) score += 3;
  if (skill.stage === params.stage) score += 2;
  if (skill.topic_code && skill.topic_code === params.topic_code) score += 12;
  if (skill.method_code && skill.method_code === params.method_code) score += 10;
  if (skill.scene === params.scene) score += 8;
  if (skill.question_type === params.question_type) score += 6;
  if (skill.question_type === 'all') score += 1;
  if (params.question_id && skill.example_questions?.includes(params.question_id)) score += 8;
  if (params.error_type && skill.trigger_tags?.some(tag => includesFolded(tag, params.error_type))) score += 5;
  if (params.student_state && skill.trigger_tags?.some(tag => includesFolded(tag, params.student_state))) score += 4;
  score += stateTypeBonus(skill, params.student_state);
  return score;
}

function stateTypeBonus(skill, studentState) {
  const state = String(studentState || '');
  if (!state) return 0;
  if (/错|弱|补|不会|卡/.test(state) && ['topic_patch', 'simplify', 'diagnose', 'calculate_fix'].includes(skill.type)) return 5;
  if (/提升|进阶|掌握|会了/.test(state) && ['variant', 'lift', 'transfer'].includes(skill.type)) return 5;
  if (/压轴|难题/.test(state) && ['final_layer', 'method_hint'].includes(skill.type)) return 5;
  return 0;
}

function buildReason(params, source) {
  const parts = [];
  if (params.topic_code) parts.push(`知识点 ${params.topic_code}`);
  if (params.method_code) parts.push(`方法 ${params.method_code}`);
  if (params.question_type) parts.push(`题型 ${params.question_type}`);
  parts.push(`场景 ${params.scene}`);
  return `${source === 'db' ? '已从数据库' : '已从种子 Skill'}按${parts.join(' / ')}推荐`;
}

function normalizeDbSkill(row) {
  return {
    id: row.id,
    skill_key: row.skill_key,
    name: row.name,
    type: row.type,
    audience: row.audience,
    subject: row.subject,
    stage: row.stage,
    grade: row.grade,
    topic_code: row.topic_code,
    method_code: row.method_code,
    question_type: row.question_type,
    scene: row.scene,
    goal: row.goal,
    difficulty: row.difficulty,
    tone: row.tone,
    content: row.content,
    model_role: row.model_role,
    trigger_tags: row.trigger_tags || [],
    example_questions: row.example_questions || [],
    weight: Number(row.weight || 0.7),
    version: row.version,
    status: row.status,
  };
}

function normalizeSeedSkill(skill) {
  return {
    id: null,
    skill_key: cleanText(skill.skill_key, 80),
    name: cleanText(skill.name, 120),
    type: cleanText(skill.type, 40),
    audience: cleanText(skill.audience, 40) || 'student_frontend',
    subject: cleanText(skill.subject, 40) || 'math',
    stage: cleanText(skill.stage, 40) || 'middle',
    grade: cleanText(skill.grade, 20) || null,
    topic_code: cleanText(skill.topic_code, 80) || null,
    method_code: cleanText(skill.method_code, 80) || null,
    question_type: cleanText(skill.question_type, 80) || 'all',
    scene: cleanText(skill.scene, 80) || 'question_detail',
    goal: cleanText(skill.goal, 120),
    difficulty: cleanText(skill.difficulty, 30) || 'medium',
    tone: cleanText(skill.tone, 50) || 'calm_coach',
    content: String(skill.content || ''),
    model_role: cleanText(skill.model_role, 40) || 'user_suggestion',
    trigger_tags: Array.isArray(skill.trigger_tags) ? skill.trigger_tags.map(tag => String(tag)) : [],
    example_questions: Array.isArray(skill.example_questions) ? skill.example_questions.map(q => String(q)) : [],
    weight: Number(skill.weight || 0.7),
    version: cleanText(skill.version, 30) || '1.0.0',
    status: cleanText(skill.status, 20) || 'active',
  };
}

function clampLimit(value) {
  const n = Number(value || DEFAULT_LIMIT);
  if (!Number.isFinite(n)) return DEFAULT_LIMIT;
  return Math.max(1, Math.min(MAX_LIMIT, Math.round(n)));
}

function cleanText(value, max = 120) {
  if (value == null) return '';
  return String(value).trim().slice(0, max);
}

function includesFolded(value, needle) {
  return String(value || '').toLowerCase().includes(String(needle || '').toLowerCase());
}

function isPlainObject(value) {
  return value && typeof value === 'object' && !Array.isArray(value);
}

function safeMessage(err) {
  return String(err?.message || 'unknown').slice(0, 180);
}
