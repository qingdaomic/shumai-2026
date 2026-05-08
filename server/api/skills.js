import { Router } from 'express';
import { authMiddleware } from './auth.js';
import {
  normalizeRecommendInput,
  recommendPromptSkills,
  recordPromptSkillEvent,
} from '../services/prompt-skills.js';

const router = Router();
const ALLOWED_EVENTS = new Set(['impression', 'click']);

// POST /api/skills/recommend — 推荐 3 条“你可以这样问”
router.post('/recommend', authMiddleware, async (req, res) => {
  try {
    const input = normalizeRecommendInput(req.body || {});
    const result = await recommendPromptSkills(input);
    res.json({
      skills: result.skills.map(toClientSkill),
      source: result.source,
      reason: result.reason,
    });
  } catch (err) {
    console.error('SKE recommend:', err.message);
    res.status(500).json({ error: '教学 Skill 推荐暂时不可用' });
  }
});

// POST /api/skills/event — 记录 impression / click
router.post('/event', authMiddleware, async (req, res) => {
  try {
    const body = req.body || {};
    const eventType = String(body.event_type || body.eventType || '').trim();
    if (!ALLOWED_EVENTS.has(eventType)) {
      return res.status(400).json({ error: 'event_type 只支持 impression / click' });
    }
    if (!body.skill_key && !body.skillKey && !body.skill_id && !body.skillId) {
      return res.status(400).json({ error: '缺少 skill_key 或 skill_id' });
    }

    const result = await recordPromptSkillEvent({
      ...body,
      event_type: eventType,
      user_id: req.user.id,
    });
    res.json(result);
  } catch (err) {
    console.error('SKE event:', err.message);
    res.status(500).json({ error: '教学 Skill 事件记录暂时不可用' });
  }
});

function toClientSkill(skill) {
  return {
    id: skill.id,
    skill_key: skill.skill_key,
    name: skill.name,
    type: skill.type,
    subject: skill.subject,
    stage: skill.stage,
    grade: skill.grade,
    topic_code: skill.topic_code,
    method_code: skill.method_code,
    question_type: skill.question_type,
    scene: skill.scene,
    goal: skill.goal,
    difficulty: skill.difficulty,
    tone: skill.tone,
    content: skill.content,
    trigger_tags: skill.trigger_tags,
    example_questions: skill.example_questions,
    weight: skill.weight,
    version: skill.version,
  };
}

export default router;
