import { Router } from 'express';
import { authMiddleware } from './auth.js';
import pool from '../db.js';
import OpenAI from 'openai';
import {
  buildExplainPrompt,
  buildWrongAnalysisPrompt,
  buildTopicSummaryPrompt,
  buildVoiceScriptPrompt,
  buildStudentContext,
} from '../prompts/tutor.js';
import { buildAiSkillFallback, prepareAiSkillTutoring } from '../services/ai-skill.js';
import { buildAiPointsPreview, chooseAiRoute } from '../services/ai-routing.js';

const router = Router();

const deepseek = new OpenAI({
  baseURL: 'https://api.deepseek.com',
  apiKey: process.env.DEEPSEEK_API_KEY || '',
});

// 获取学生画像数据
async function getStudentProfile(userId) {
  const progRes = await pool.query(
    'SELECT topic_id, mastered FROM progress WHERE user_id = $1', [userId]
  );
  const wrongRes = await pool.query(
    'SELECT COUNT(*) as cnt FROM wrong_questions WHERE user_id = $1 AND resolved = FALSE', [userId]
  );
  const checkinRes = await pool.query(
    'SELECT COUNT(*) as days FROM checkins WHERE user_id = $1', [userId]
  );
  return {
    masteredTopics: progRes.rows.filter(p => p.mastered).map(p => p.topic_id),
    weakTopics: progRes.rows.filter(p => !p.mastered).map(p => p.topic_id),
    wrongCount: parseInt(wrongRes.rows[0]?.cnt) || 0,
    streakDays: parseInt(checkinRes.rows[0]?.days) || 0,
  };
}

async function getUserPlan(userId) {
  try {
    const result = await pool.query('SELECT value FROM system_config WHERE key = $1', [`sub_${userId}`]);
    const sub = result.rows[0]?.value;
    if (!sub) return 'free';
    const value = typeof sub === 'string' ? JSON.parse(sub) : sub;
    if (value.expiresAt && new Date(value.expiresAt) < new Date()) return 'free';
    return value.plan || 'free';
  } catch {
    return 'free';
  }
}

// POST /api/ai/explain — 单题 AI 讲解
router.post('/explain', authMiddleware, async (req, res) => {
  try {
    const { question, topicName } = req.body;
    if (!question?.content) return res.status(400).json({ error: '缺少题目内容' });

    const profile = await getStudentProfile(req.user.id);
    const prompt = buildExplainPrompt(question, topicName || '未知', profile);

    const completion = await deepseek.chat.completions.create({
      model: 'deepseek-chat',
      messages: [
        { role: 'system', content: prompt },
        { role: 'user', content: '请讲解这道题' },
      ],
      max_tokens: 500,
      temperature: 0.7,
    });

    res.json({ text: completion.choices[0]?.message?.content || '' });
  } catch (err) {
    console.error('❌ AI explain:', err.message);
    res.status(500).json({ error: 'AI 服务暂时不可用' });
  }
});

// POST /api/ai/wrong-analysis — 错题追因分析
router.post('/wrong-analysis', authMiddleware, async (req, res) => {
  try {
    const { question, topicName, wrongCount } = req.body;
    if (!question?.content) return res.status(400).json({ error: '缺少题目内容' });

    const profile = await getStudentProfile(req.user.id);
    const prompt = buildWrongAnalysisPrompt(question, topicName || '未知', wrongCount || 1, profile);

    const completion = await deepseek.chat.completions.create({
      model: 'deepseek-chat',
      messages: [
        { role: 'system', content: prompt },
        { role: 'user', content: '帮我分析这道错题' },
      ],
      max_tokens: 500,
      temperature: 0.7,
    });

    res.json({ text: completion.choices[0]?.message?.content || '' });
  } catch (err) {
    console.error('❌ AI wrong-analysis:', err.message);
    res.status(500).json({ error: 'AI 服务暂时不可用' });
  }
});

// POST /api/ai/topic-summary — 知识点总结
router.post('/topic-summary', authMiddleware, async (req, res) => {
  try {
    const { topic } = req.body;
    if (!topic?.name) return res.status(400).json({ error: '缺少知识点信息' });

    const profile = await getStudentProfile(req.user.id);
    const prompt = buildTopicSummaryPrompt(topic, profile);

    const completion = await deepseek.chat.completions.create({
      model: 'deepseek-chat',
      messages: [
        { role: 'system', content: prompt },
        { role: 'user', content: '总结一下这个知识点' },
      ],
      max_tokens: 400,
      temperature: 0.7,
    });

    res.json({ text: completion.choices[0]?.message?.content || '' });
  } catch (err) {
    console.error('❌ AI topic-summary:', err.message);
    res.status(500).json({ error: 'AI 服务暂时不可用' });
  }
});

// POST /api/ai/voice-script — 生成语音讲解文稿
router.post('/voice-script', authMiddleware, async (req, res) => {
  try {
    const { question, topicName } = req.body;
    if (!question?.content) return res.status(400).json({ error: '缺少题目内容' });

    const prompt = buildVoiceScriptPrompt(question, topicName || '未知');

    const completion = await deepseek.chat.completions.create({
      model: 'deepseek-chat',
      messages: [
        { role: 'system', content: prompt },
        { role: 'user', content: '生成语音讲解' },
      ],
      max_tokens: 300,
      temperature: 0.7,
    });

    res.json({ text: completion.choices[0]?.message?.content || '' });
  } catch (err) {
    console.error('❌ AI voice-script:', err.message);
    res.status(500).json({ error: 'AI 服务暂时不可用' });
  }
});

// POST /api/ai/chat — 自由对话（H5端）
router.post('/chat', authMiddleware, async (req, res) => {
  try {
    const { message, history = [] } = req.body;
    if (!message) return res.status(400).json({ error: '缺少消息内容' });

    const userRes = await pool.query('SELECT * FROM users WHERE id = $1', [req.user.id]);
    const user = userRes.rows[0];
    const profile = await getStudentProfile(req.user.id);

    const { buildChatPrompt } = await import('../prompts/tutor.js');
    const systemPrompt = buildChatPrompt({
      nickname: user?.nickname,
      grade: user?.grade,
      ...profile,
    });

    const messages = [
      { role: 'system', content: systemPrompt },
      ...history.slice(-10).map(h => ({ role: h.role, content: h.content })),
      { role: 'user', content: message },
    ];

    const completion = await deepseek.chat.completions.create({
      model: 'deepseek-chat',
      messages,
      max_tokens: 500,
      temperature: 0.7,
    });

    const reply = completion.choices[0]?.message?.content || '';

    // 保存对话记录
    await pool.query(
      'INSERT INTO chat_history (user_id, role, content) VALUES ($1, $2, $3)',
      [req.user.id, 'user', message]
    );
    await pool.query(
      'INSERT INTO chat_history (user_id, role, content) VALUES ($1, $2, $3)',
      [req.user.id, 'assistant', reply]
    );

    res.json({ text: reply });
  } catch (err) {
    console.error('❌ AI chat:', err.message);
    res.status(500).json({ error: 'AI 服务暂时不可用' });
  }
});

// POST /api/ai/skill — 使用教学 Skill 的最小 AI 回答
router.post('/skill', authMiddleware, async (req, res) => {
  try {
    const { question } = req.body;
    const questionText = typeof question === 'string' ? question : question?.content;
    if (!questionText?.trim()) return res.status(400).json({ error: '缺少问题内容' });

    const profile = await getStudentProfile(req.user.id);
    const skillInput = { ...req.body, question: questionText };
    const prepared = await prepareAiSkillTutoring(skillInput, profile);
    const userPlan = await getUserPlan(req.user.id);
    const aiRoute = chooseAiRoute({
      ...skillInput,
      skill: prepared.skill,
      plan: userPlan,
    });

    if (!process.env.DEEPSEEK_API_KEY) {
      return res.json({
        ok: true,
        answer: buildAiSkillFallback({
          skill: prepared.skill,
          params: skillInput,
          reason: 'AI Key 未配置',
        }),
        skill: prepared.skill,
        source: prepared.source,
        reason: prepared.reason,
        aiRoute,
        points: buildAiPointsPreview(userPlan),
        fallback: true,
      });
    }

    const completion = await deepseek.chat.completions.create({
      model: aiRoute.model,
      messages: [
        { role: 'system', content: prepared.systemPrompt },
        { role: 'user', content: prepared.userPrompt },
      ],
      max_tokens: 500,
      temperature: 0.55,
    });

    res.json({
      ok: true,
      answer: completion.choices[0]?.message?.content || '',
      skill: prepared.skill,
      source: prepared.source,
      reason: prepared.reason,
      aiRoute,
      points: buildAiPointsPreview(userPlan),
      fallback: false,
    });
  } catch (err) {
    console.error('❌ AI skill:', err.message);
    const questionText = typeof req.body?.question === 'string' ? req.body.question : req.body?.question?.content;
    res.json({
      ok: true,
      answer: buildAiSkillFallback({
        skill: null,
        params: { ...(req.body || {}), question: questionText || req.body?.message || '' },
        reason: 'AI 服务暂时不可用',
      }),
      skill: null,
      source: 'fallback',
      reason: 'AI 服务暂时不可用，已返回本地降级提示',
      fallback: true,
    });
  }
});

// ═══════════════════════════════════════════
//  M4 POST /api/ai/learning-path — 学伴Agent个性化学习路径
// ═══════════════════════════════════════════
router.post('/learning-path', authMiddleware, async (req, res) => {
  try {
    const userId = req.user.id;
    const { examDate, todayMinutes } = req.body;

    // 获取完整学生画像
    const profile = await getStudentProfile(userId);

    // 获取高频错题知识点
    const wrongTopics = await pool.query(
      `SELECT wq.question_id, COUNT(*) as cnt
       FROM wrong_questions wq
       WHERE wq.user_id = $1 AND wq.resolved = FALSE
       GROUP BY wq.question_id ORDER BY cnt DESC LIMIT 5`,
      [userId]
    );

    // 获取近7天学习记录
    const recentActivity = await pool.query(
      `SELECT DATE(created_at) as day, COUNT(*) as actions
       FROM chat_history WHERE user_id = $1
       AND created_at > NOW() - INTERVAL '7 days'
       GROUP BY day ORDER BY day DESC`,
      [userId]
    );

    // 考试倒计时
    let daysLeft = null;
    if (examDate) {
      daysLeft = Math.max(0, Math.ceil((new Date(examDate) - new Date()) / 86400000));
    }

    const masteredCount = profile.masteredTopics.length;
    const weakCount = profile.weakTopics.length;
    const minutes = todayMinutes || 45;
    const activeDays = recentActivity.rows.length;

    const completion = await deepseek.chat.completions.create({
      model: 'deepseek-chat',
      messages: [
        {
          role: 'system',
          content: `你是"树脉学长"，一个智能数学学习规划Agent。根据学生的实际学情数据，制定今日个性化学习计划。

返回严格的JSON格式：
{
  "greeting": "个性化问候语（含学生数据感知，15字内）",
  "todayPlan": [
    {
      "step": 1,
      "type": "review|newLearn|practice|challenge",
      "title": "任务标题",
      "desc": "具体说明（20字内）",
      "minutes": 15,
      "target": "知识点code或题目类型",
      "reason": "为什么做这个（15字内）",
      "priority": "high|medium|low"
    }
  ],
  "focusTopic": "今日重点知识点名称",
  "motiveTip": "激励话语（20字内，口语化）",
  "weeklyGoal": "本周目标（20字内）"
}

type说明：review=复习错题, newLearn=学新知识点, practice=刷题训练, challenge=压轴挑战
计划步骤数量根据可用时间（${minutes}分钟）决定，每步10-20分钟。`,
        },
        {
          role: 'user',
          content: `学生数据：
- 已掌握知识点：${masteredCount}个，未掌握：${weakCount}个
- 错题数：${profile.wrongCount}道
- 连续打卡：${profile.streakDays}天
- 近7天活跃：${activeDays}天
- 今日可用时间：${minutes}分钟
${daysLeft !== null ? `- 距中考：${daysLeft}天` : ''}
- 高频错题区：${wrongTopics.rows.map(r => `题目${r.question_id}(${r.cnt}次错)`).join('、') || '暂无'}

请生成今日学习计划。`,
        },
      ],
      max_tokens: 800,
      temperature: 0.6,
    });

    const raw = completion.choices[0]?.message?.content || '';
    let plan;
    try {
      const jsonMatch = raw.match(/\{[\s\S]*\}/);
      plan = jsonMatch ? JSON.parse(jsonMatch[0]) : null;
    } catch {
      plan = null;
    }

    if (!plan) {
      return res.json({
        greeting: `已掌握${masteredCount}个知识点，继续加油！`,
        todayPlan: [
          { step: 1, type: 'review', title: '错题复练', desc: '复习近期错题', minutes: 15, priority: 'high', reason: '巩固薄弱环节' },
          { step: 2, type: 'practice', title: '真题训练', desc: '刷3道中档题', minutes: 20, priority: 'medium', reason: '提升解题速度' },
        ],
        focusTopic: '数学综合',
        motiveTip: '今天比昨天进步一点点就够了！',
        weeklyGoal: '本周掌握3个新知识点',
      });
    }

    res.json({ ...plan, profile: { masteredCount, weakCount, wrongCount: profile.wrongCount, streakDays: profile.streakDays } });
  } catch (err) {
    console.error('❌ learning-path:', err.message);
    res.status(500).json({ error: 'AI 服务暂时不可用' });
  }
});

export default router;
