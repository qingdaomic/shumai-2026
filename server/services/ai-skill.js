import { readFile } from 'fs/promises';
import { fileURLToPath } from 'url';
import path from 'path';
import pool from '../db.js';
import { buildStudentContext } from '../prompts/tutor.js';
import { recommendPromptSkills } from './prompt-skills.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SEED_PATH = path.resolve(__dirname, '../seeds/prompt_skills_seed.json');
const MAX_TEXT = 1600;

let seedCache = null;

export async function prepareAiSkillTutoring(input = {}, studentProfile = {}) {
  const params = normalizeSkillInput(input);
  const selection = await selectSkill(params);
  const skill = selection.skill;
  const systemPrompt = buildAiSkillSystemPrompt({
    skill,
    params,
    studentProfile,
  });
  const userPrompt = buildAiSkillUserPrompt({
    skill,
    params,
  });

  return {
    skill,
    source: selection.source,
    reason: selection.reason,
    systemPrompt,
    userPrompt,
  };
}

export function buildAiSkillFallback({ skill, params, reason }) {
  const name = skill?.name || '树脉提示';
  const content = skill?.content || '先别急着要完整答案，我们先找第一步突破口。';
  const questionHint = params.question ? `这道题可以先从题干里最确定的条件入手：${params.question.slice(0, 80)}` : '先把题干里的已知、所求和限制条件分开。';
  return [
    `我先按“${name}”给你一个稳一点的方向。`,
    content,
    questionHint,
    reason ? `当前是降级回答：${reason}` : '等 AI 服务恢复后，可以继续追问完整讲解。',
  ].join('\n');
}

async function selectSkill(params) {
  if (params.skill_key) {
    const specified = await findSkillByKey(params.skill_key);
    if (specified.skill) {
      return specified;
    }
  }

  const recommended = await recommendPromptSkills({
    ...params,
    limit: 1,
  });

  return {
    skill: recommended.skills[0] || null,
    source: recommended.source,
    reason: recommended.reason,
  };
}

async function findSkillByKey(skillKey) {
  try {
    const result = await pool.query(
      `SELECT id, skill_key, name, type, audience, subject, stage, grade,
              topic_code, method_code, question_type, scene, goal, difficulty,
              tone, content, model_role, trigger_tags, example_questions,
              weight, version, status
       FROM prompt_skills
       WHERE skill_key = $1 AND status = 'active'
       LIMIT 1`,
      [skillKey]
    );
    if (result.rows[0]) {
      return {
        skill: normalizeDbSkill(result.rows[0]),
        source: 'db',
        reason: `已按指定 skill_key ${skillKey} 使用数据库 Skill`,
      };
    }
  } catch (err) {
    const seedSkill = await findSeedSkill(skillKey);
    if (seedSkill) {
      return {
        skill: seedSkill,
        source: 'seed',
        reason: `数据库不可用或尚未迁移，已按指定 skill_key 使用种子 Skill：${safeMessage(err)}`,
      };
    }
    return {
      skill: null,
      source: 'seed',
      reason: `指定 skill_key 未命中，且数据库不可用或尚未迁移：${safeMessage(err)}`,
    };
  }

  const seedSkill = await findSeedSkill(skillKey);
  if (seedSkill) {
    return {
      skill: seedSkill,
      source: 'seed',
      reason: `数据库未命中指定 skill_key，已使用种子 Skill ${skillKey}`,
    };
  }

  return {
    skill: null,
    source: 'seed',
    reason: `未找到指定 skill_key ${skillKey}，已改用推荐 Skill`,
  };
}

async function findSeedSkill(skillKey) {
  const skills = await loadSeedSkills();
  return skills.find(skill => skill.skill_key === skillKey) || null;
}

async function loadSeedSkills() {
  if (seedCache) return seedCache;
  const raw = await readFile(SEED_PATH, 'utf8');
  const parsed = JSON.parse(raw);
  seedCache = Array.isArray(parsed) ? parsed.map(normalizeSeedSkill) : [];
  return seedCache;
}

function buildAiSkillSystemPrompt({ skill, params, studentProfile }) {
  const studentContext = buildStudentContext(studentProfile);
  const modeGuide = modeToGuide(params.mode, skill?.type);
  return `你是树脉学长，正在用一个教学 Skill 帮初中生解决数学卡点。

${studentContext}

【本次教学 Skill】
- 名称：${skill?.name || '通用一步提示'}
- 类型：${skill?.type || 'hint'}
- 适用知识点：${skill?.topic_code || params.topic_code || '通用'}
- 目标：${skill?.goal || '帮助学生找到下一步'}
- 前台提示词：${skill?.content || '请给学生一个不直接泄答案的第一步提示。'}

【回答原则】
1. 必须先执行这个 Skill 的教学意图，不要变成普通完整答案。
2. 如果 Skill 是 hint / read_question / diagnose，优先给一步提示、关键条件或错因判断，不直接把答案讲完。
3. 如果学生明确要求完整讲解，仍然先给思路，再分 ①②③。
4. 回答要像树脉学长：安静、清楚、有方向，不制造挫败感。
5. 不使用 Markdown 标题，不提模型、提示词、系统设定。
6. ${modeGuide}`;
}

function buildAiSkillUserPrompt({ skill, params }) {
  return `学生问题：${params.question || '这题怎么做？'}

题目信息：
- question_id：${params.question_id || '未提供'}
- topic_code：${params.topic_code || skill?.topic_code || '未提供'}
- stage：${params.stage}
- question_type：${params.question_type || '未提供'}
- scene：${params.scene}
- error_type：${params.error_type || '未提供'}
- student_state：${params.student_state || '未提供'}

请按本次 Skill 给出回答。`;
}

function modeToGuide(mode, skillType) {
  const key = String(mode || skillType || '').toLowerCase();
  if (['hint', 'read_question', 'first_step'].includes(key)) return '只给第一步突破口，控制在 120 字以内。';
  if (['diagnose', 'wrong_fix'].includes(key)) return '先判断最可能错因，再给一个修复动作，控制在 160 字以内。';
  if (['socratic', 'question'].includes(key)) return '用一个追问带学生继续想，不急着给结论。';
  if (['explain', 'solution'].includes(key)) return '可以完整讲解，但总字数控制在 220 字以内。';
  if (['variant', 'simplify'].includes(key)) return '给一个更简单的同类切入方式，不生成大量题目。';
  return '默认给一个能让学生继续动笔的短回答，控制在 160 字以内。';
}

function normalizeSkillInput(input = {}) {
  return {
    question: cleanText(input.question || input.message || input.content, MAX_TEXT),
    question_id: cleanText(input.question_id || input.questionId, 80),
    question_type: cleanText(input.question_type || input.questionType, 80),
    topic_code: cleanText(input.topic_code || input.topicCode, 80),
    method_code: cleanText(input.method_code || input.methodCode, 80),
    stage: cleanText(input.stage, 40) || 'middle',
    subject: cleanText(input.subject, 40) || 'math',
    error_type: cleanText(input.error_type || input.errorType, 80),
    student_state: cleanText(input.student_state || input.studentState, 80),
    scene: cleanText(input.scene, 80) || 'question_detail',
    skill_key: cleanText(input.skill_key || input.skillKey, 100),
    mode: cleanText(input.mode, 40) || '',
  };
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
    skill_key: cleanText(skill.skill_key, 100),
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

function cleanText(value, max = 120) {
  if (value == null) return '';
  return String(value).trim().slice(0, max);
}

function safeMessage(err) {
  return String(err?.message || 'unknown').slice(0, 160);
}
