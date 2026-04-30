import { Router } from 'express';
import { authMiddleware } from './auth.js';
import pool from '../db.js';
import OpenAI from 'openai';

const router = Router();

const deepseek = new OpenAI({
  baseURL: 'https://api.deepseek.com',
  apiKey: process.env.DEEPSEEK_API_KEY || '',
});

// 系统内194个知识点code列表（供AI匹配用）
const TOPIC_CODES = [
  "rational","reals","poly","factoring","fraction","linear_eq","quad_eq",
  "equations","inequality","coords","linear_fn","inverse_fn","quad_fn",
  "tri_basic","congruent","pythagorean","special_tri","quadrilateral",
  "similar","trig","circle","transform","stats","prob",
  "segment_angle","parallel","eq_app","quad_eq_app","quad_fn_app",
  "fraction_eq_app","inequality_app","trig_app","circle_app",
  "stat_prob_app","geometry_transform","prob_method",
];

const ANALYZE_PROMPT = `你是一位资深中考数学阅卷教师，精通初中数学全部知识体系。

## 任务
分析学生提供的试卷题目，对每一道题进行逆向拆解。

## 输出格式（严格JSON）
返回一个JSON数组，每个元素对应一道题：
[
  {
    "no": 1,
    "type": "choice|fill|solve",
    "content": "题目内容摘要（30字以内）",
    "answer": "正确答案",
    "topics": ["knowledge_point_code1", "knowledge_point_code2"],
    "methods": ["解题方法名称"],
    "diff": 1-5,
    "keyPoint": "本题考查的核心知识要点（一句话）",
    "trap": "最常见的陷阱/易错点（一句话）"
  }
]

## 知识点code必须从以下列表中选择
${TOPIC_CODES.join(', ')}

## 规则
1. topics 数组第一个元素是主考知识点，后续是辅助知识点
2. diff 难度：1=送分 2=基础 3=中档 4=较难 5=压轴
3. type：choice=选择 fill=填空 solve=解答
4. 只输出JSON数组，不要任何其他文字`;

const MOCK_PAPER_PROMPT = `你是一位资深中考数学命题教师。

## 任务
根据提供的试卷分析结果，从相同知识点和相近难度出发，命制一套全新的模拟练习卷。

## 要求
1. 题目数量和原卷保持一致
2. 每道题的知识点覆盖与原卷对应题目一致
3. 难度相近（可略有浮动）
4. 题目必须原创，不能照搬原题
5. 每道题提供完整答案和解题步骤

## 输出格式（严格JSON）
[
  {
    "no": 1,
    "type": "choice|fill|solve",
    "content": "完整题目文本",
    "options": ["A选项","B选项","C选项","D选项"],
    "answer": "正确答案",
    "sol": "①...；②...；③...",
    "topics": ["knowledge_point_code"],
    "diff": 1-5
  }
]

选择题必须有options，填空和解答题options为空数组。
只输出JSON数组，不要任何其他文字。`;

// POST /api/paper/analyze — 分析试卷题目
router.post('/analyze', authMiddleware, async (req, res) => {
  try {
    const { questions } = req.body;
    if (!questions || !questions.trim()) {
      return res.status(400).json({ error: '请提供试卷题目内容' });
    }

    const completion = await deepseek.chat.completions.create({
      model: 'deepseek-chat',
      messages: [
        { role: 'system', content: ANALYZE_PROMPT },
        { role: 'user', content: `请分析以下试卷的每道题：\n\n${questions}` },
      ],
      max_tokens: 4000,
      temperature: 0.3,
    });

    const raw = completion.choices[0]?.message?.content || '[]';
    // 提取JSON（可能被包裹在```json...```中）
    const jsonStr = raw.replace(/^```json?\s*/i, '').replace(/\s*```$/,'').trim();

    let parsed;
    try {
      parsed = JSON.parse(jsonStr);
    } catch {
      return res.status(500).json({ error: 'AI返回格式异常，请重试', raw });
    }

    // 汇总分析
    const allTopics = [...new Set(parsed.flatMap(q => q.topics || []))];
    const topicFreq = {};
    parsed.forEach(q => (q.topics || []).forEach(t => {
      topicFreq[t] = (topicFreq[t] || 0) + 1;
    }));
    const avgDiff = parsed.length > 0
      ? (parsed.reduce((s, q) => s + (q.diff || 3), 0) / parsed.length).toFixed(1)
      : 0;

    const summary = {
      totalQuestions: parsed.length,
      topicsCovered: allTopics.length,
      topics: allTopics,
      topicFrequency: topicFreq,
      averageDifficulty: parseFloat(avgDiff),
      diffDistribution: {
        easy: parsed.filter(q => q.diff <= 2).length,
        medium: parsed.filter(q => q.diff === 3).length,
        hard: parsed.filter(q => q.diff >= 4).length,
      },
    };

    res.json({ questions: parsed, summary });
  } catch (err) {
    console.error('❌ Paper analyze:', err.message);
    res.status(500).json({ error: 'AI 分析服务暂时不可用' });
  }
});

// POST /api/paper/weak-path — 根据分析结果+学生学情，生成补习路径
router.post('/weak-path', authMiddleware, async (req, res) => {
  try {
    const { paperTopics } = req.body;
    if (!paperTopics?.length) return res.status(400).json({ error: '缺少试卷知识点' });

    // 查学生掌握情况
    const progRes = await pool.query(
      'SELECT topic_id, mastered FROM progress WHERE user_id = $1',
      [req.user.id]
    );
    const masteredSet = new Set(progRes.rows.filter(p => p.mastered).map(p => p.topic_id));

    // 找出薄弱点：试卷涉及但学生未掌握的
    const weakTopics = paperTopics.filter(t => !masteredSet.has(t));
    const masteredInPaper = paperTopics.filter(t => masteredSet.has(t));

    // 生成补习路径（按依赖顺序排列）
    const ORDER = [
      "rational","reals","poly","factoring","fraction",
      "linear_eq","equations","inequality","coords",
      "linear_fn","inverse_fn","quad_eq","quad_fn",
      "tri_basic","segment_angle","parallel","congruent","special_tri",
      "pythagorean","quadrilateral","similar","trig","circle","transform",
      "stats","prob",
    ];
    const sortedWeak = weakTopics.sort((a, b) => {
      const ia = ORDER.indexOf(a), ib = ORDER.indexOf(b);
      return (ia === -1 ? 999 : ia) - (ib === -1 ? 999 : ib);
    });

    res.json({
      paperTopicCount: paperTopics.length,
      mastered: masteredInPaper,
      weak: sortedWeak,
      masteredRate: paperTopics.length > 0
        ? Math.round(masteredInPaper.length / paperTopics.length * 100)
        : 0,
      studyPath: sortedWeak.map((t, i) => ({
        step: i + 1,
        topicId: t,
        action: `先学${t}基础 → 做基础题 → 做真题`,
      })),
    });
  } catch (err) {
    console.error('❌ Weak path:', err.message);
    res.status(500).json({ error: err.message });
  }
});

// POST /api/paper/mock — 生成同类型模拟卷
router.post('/mock', authMiddleware, async (req, res) => {
  try {
    const { analysisResult } = req.body;
    if (!analysisResult?.length) return res.status(400).json({ error: '缺少分析结果' });

    const briefAnalysis = analysisResult.map(q =>
      `第${q.no}题(${q.type},难度${q.diff})：考${(q.topics||[]).join('+')}，${q.keyPoint}`
    ).join('\n');

    const completion = await deepseek.chat.completions.create({
      model: 'deepseek-chat',
      messages: [
        { role: 'system', content: MOCK_PAPER_PROMPT },
        { role: 'user', content: `原卷分析：\n${briefAnalysis}\n\n请命制同类型模拟卷。` },
      ],
      max_tokens: 6000,
      temperature: 0.8,
    });

    const raw = completion.choices[0]?.message?.content || '[]';
    const jsonStr = raw.replace(/^```json?\s*/i, '').replace(/\s*```$/, '').trim();

    let mockQuestions;
    try {
      mockQuestions = JSON.parse(jsonStr);
    } catch {
      return res.status(500).json({ error: 'AI生成格式异常，请重试', raw });
    }

    res.json({ questions: mockQuestions });
  } catch (err) {
    console.error('❌ Mock paper:', err.message);
    res.status(500).json({ error: 'AI 服务暂时不可用' });
  }
});

export default router;
