/**
 * W2 OCR 作业识别 API
 * 图片上传 → AI 识别题目 → 匹配知识点 → 标记对错 → 错题自动录入
 *
 * M1 拍题搜题：拍照 → AI解题 → 关联知识点 + 相似题推荐
 * M2 变形题生成：基于原题自动出同类型变式题
 */

import { Router } from 'express';
import { authMiddleware } from './auth.js';
import pool from '../db.js';
import multer from 'multer';
import fs from 'fs';
import path from 'path';
import OpenAI from 'openai';

const router = Router();

const deepseek = new OpenAI({
  baseURL: 'https://api.deepseek.com',
  apiKey: process.env.DEEPSEEK_API_KEY || '',
});

// multer 配置：内存存储（base64 传给 AI）
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB
  fileFilter: (req, file, cb) => {
    const allowed = ['image/jpeg', 'image/png', 'image/webp', 'image/heic'];
    if (allowed.includes(file.mimetype)) cb(null, true);
    else cb(new Error('仅支持 JPG/PNG/WebP/HEIC 图片'), false);
  },
});

// 系统知识点列表（用于 AI 匹配）
const TOPIC_NAMES = []; // 启动时从数据懒加载
async function getTopicNames() {
  if (TOPIC_NAMES.length > 0) return TOPIC_NAMES;
  // 从前端数据文件读取知识点名称（简化：直接用硬编码的核心列表）
  const coreTopics = [
    '有理数运算', '整式运算', '因式分解', '分式运算', '二次根式',
    '一元一次方程', '二元一次方程组', '一元二次方程', '不等式与不等式组',
    '一次函数', '反比例函数', '二次函数', '函数综合',
    '三角形', '全等三角形', '相似三角形', '直角三角形与勾股定理',
    '四边形', '特殊平行四边形', '圆的基本性质', '圆与直线',
    '概率', '统计', '数据分析',
    '图形变换（平移旋转对称）', '坐标系与图形',
    '几何证明', '代数几何综合', '动点问题', '存在性问题',
    '方程应用题', '函数应用题', '几何应用题',
  ];
  TOPIC_NAMES.push(...coreTopics);
  return TOPIC_NAMES;
}

// ═══════════════════════════════════════════
//  POST /api/ocr/analyze — 上传图片，AI 解析作业
// ═══════════════════════════════════════════
router.post('/analyze', authMiddleware, upload.single('image'), async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ error: '请上传图片' });

    const base64 = req.file.buffer.toString('base64');
    const mimeType = req.file.mimetype;
    const topicNames = await getTopicNames();

    // 构造 AI 提示词
    const systemPrompt = `你是一个中考数学作业批改助手。学生上传了一张作业/试卷照片。

你的任务：
1. 识别图片中的所有数学题目
2. 判断每道题的答案是否正确（如果能看到学生的作答）
3. 将每道题匹配到最相关的知识点

知识点列表：${topicNames.join('、')}

请以 JSON 格式返回，不要有其他文字：
{
  "questions": [
    {
      "index": 1,
      "content": "题目内容（精简描述）",
      "studentAnswer": "学生的答案（如果可见）",
      "correctAnswer": "正确答案（如果能判断）",
      "isCorrect": true/false/null,
      "topic": "匹配的知识点名称",
      "difficulty": 1-5,
      "analysis": "简短解析（30字以内）"
    }
  ],
  "summary": "整体表现简评（50字以内）"
}

注意：
- 如果看不清题目，尽量推断
- isCorrect 为 null 表示无法判断（没看到学生答案）
- 每道题必须匹配一个知识点
- difficulty: 1=基础, 3=中等, 5=压轴`;

    const completion = await deepseek.chat.completions.create({
      model: 'deepseek-chat',
      messages: [
        { role: 'system', content: systemPrompt },
        {
          role: 'user',
          content: [
            { type: 'image_url', image_url: { url: `data:${mimeType};base64,${base64}` } },
            { type: 'text', text: '请识别并分析这张作业/试卷图片中的所有数学题目' },
          ],
        },
      ],
      max_tokens: 2000,
      temperature: 0.3,
    });

    const raw = completion.choices[0]?.message?.content || '';

    // 提取 JSON
    let result;
    try {
      const jsonMatch = raw.match(/\{[\s\S]*\}/);
      result = jsonMatch ? JSON.parse(jsonMatch[0]) : { questions: [], summary: '解析失败' };
    } catch {
      result = { questions: [], summary: '解析失败', raw };
    }

    res.json(result);
  } catch (err) {
    console.error('❌ OCR analyze:', err.message);
    if (err.message?.includes('图片')) return res.status(400).json({ error: err.message });
    res.status(500).json({ error: 'AI 识别服务暂时不可用' });
  }
});

// ═══════════════════════════════════════════
//  POST /api/ocr/save — 保存识别结果（错题录入）
// ═══════════════════════════════════════════
router.post('/save', authMiddleware, async (req, res) => {
  try {
    const { questions } = req.body;
    if (!Array.isArray(questions) || questions.length === 0) {
      return res.status(400).json({ error: '无题目数据' });
    }

    let savedWrong = 0;
    let savedCorrect = 0;

    for (const q of questions) {
      if (q.isCorrect === false) {
        // 录入错题
        const qId = `ocr_${Date.now()}_${q.index}`;
        await pool.query(
          `INSERT INTO wrong_questions (user_id, question_id, question_type, wrong_count, review_interval, next_review)
           VALUES ($1, $2, 'ocr', 1, 1, NOW() + INTERVAL '1 day')
           ON CONFLICT (user_id, question_id, question_type)
           DO UPDATE SET wrong_count = wrong_questions.wrong_count + 1, last_wrong = NOW()`,
          [req.user.id, qId]
        );
        savedWrong++;
      } else if (q.isCorrect === true) {
        savedCorrect++;
      }
    }

    // 记录 OCR 分析历史
    await pool.query(
      `INSERT INTO chat_history (user_id, role, content, context)
       VALUES ($1, 'assistant', $2, $3)`,
      [
        req.user.id,
        `OCR识别：${questions.length}题，正确${savedCorrect}题，错误${savedWrong}题`,
        JSON.stringify({ type: 'ocr', questions }),
      ]
    );

    res.json({
      total: questions.length,
      correct: savedCorrect,
      wrong: savedWrong,
      skipped: questions.length - savedCorrect - savedWrong,
    });
  } catch (err) {
    console.error('❌ OCR save:', err.message);
    res.status(500).json({ error: err.message });
  }
});

// ═══════════════════════════════════════════
//  POST /api/ocr/text-analyze — 纯文本模式（不用图片）
// ═══════════════════════════════════════════
router.post('/text-analyze', authMiddleware, async (req, res) => {
  try {
    const { text } = req.body;
    if (!text?.trim()) return res.status(400).json({ error: '请输入题目文本' });

    const topicNames = await getTopicNames();

    const completion = await deepseek.chat.completions.create({
      model: 'deepseek-chat',
      messages: [
        {
          role: 'system',
          content: `你是中考数学作业分析助手。分析以下题目文本，识别每道题并匹配知识点。
知识点列表：${topicNames.join('、')}
返回JSON格式：{"questions":[{"index":1,"content":"题目","topic":"知识点","difficulty":1-5,"correctAnswer":"答案","analysis":"解析"}],"summary":"简评"}`,
        },
        { role: 'user', content: text },
      ],
      max_tokens: 2000,
      temperature: 0.3,
    });

    const raw = completion.choices[0]?.message?.content || '';
    let result;
    try {
      const jsonMatch = raw.match(/\{[\s\S]*\}/);
      result = jsonMatch ? JSON.parse(jsonMatch[0]) : { questions: [], summary: '解析失败' };
    } catch {
      result = { questions: [], summary: '解析失败', raw };
    }

    res.json(result);
  } catch (err) {
    console.error('❌ OCR text-analyze:', err.message);
    res.status(500).json({ error: 'AI 服务暂时不可用' });
  }
});

// ═══════════════════════════════════════════
//  M1 POST /api/ocr/search — 拍题搜题（AI解题+知识点+相似题）
// ═══════════════════════════════════════════
router.post('/search', authMiddleware, upload.single('image'), async (req, res) => {
  try {
    let imageBase64 = null;
    let questionText = req.body.text || '';

    if (req.file) {
      imageBase64 = req.file.buffer.toString('base64');
    } else if (!questionText.trim()) {
      return res.status(400).json({ error: '请上传题目图片或输入题目文本' });
    }

    const topicNames = await getTopicNames();

    const messages = [
      {
        role: 'system',
        content: `你是一位中考数学专家。请对用户提供的数学题目进行详细解答。

返回以下JSON格式：
{
  "question": "识别的题目原文",
  "topic": "对应知识点（从列表中选）",
  "difficulty": 1-5,
  "answer": "最终答案",
  "steps": ["步骤1", "步骤2", "步骤3"],
  "keyMethod": "核心方法或公式",
  "commonErrors": "常见错误提示",
  "relatedTopics": ["关联知识点1", "关联知识点2"]
}

知识点列表：${topicNames.join('、')}`,
      },
    ];

    if (imageBase64) {
      messages.push({
        role: 'user',
        content: [
          { type: 'image_url', image_url: { url: `data:image/jpeg;base64,${imageBase64}` } },
          { type: 'text', text: '请解答这道数学题目' },
        ],
      });
    } else {
      messages.push({ role: 'user', content: `请解答：${questionText}` });
    }

    const completion = await deepseek.chat.completions.create({
      model: 'deepseek-chat',
      messages,
      max_tokens: 1500,
      temperature: 0.2,
    });

    const raw = completion.choices[0]?.message?.content || '';
    let result;
    try {
      const jsonMatch = raw.match(/\{[\s\S]*\}/);
      result = jsonMatch ? JSON.parse(jsonMatch[0]) : { answer: raw, steps: [] };
    } catch {
      result = { answer: raw, steps: [], raw };
    }

    // 记录搜题日志
    if (req.user?.id) {
      await pool.query(
        `INSERT INTO chat_history (user_id, role, content, context)
         VALUES ($1, 'user', $2, $3)`,
        [req.user.id, result.question || questionText || 'image search',
         JSON.stringify({ type: 'search', topic: result.topic })]
      ).catch(() => {});
    }

    res.json(result);
  } catch (err) {
    console.error('❌ OCR search:', err.message);
    res.status(500).json({ error: 'AI 服务暂时不可用' });
  }
});

// ═══════════════════════════════════════════
//  M2 POST /api/ocr/variant — 错题变形题生成
// ═══════════════════════════════════════════
router.post('/variant', authMiddleware, async (req, res) => {
  try {
    const { questionContent, topic, difficulty, count } = req.body;
    if (!questionContent) return res.status(400).json({ error: '请提供原题内容' });

    const n = Math.min(count || 3, 5);
    const diff = difficulty || 3;

    const completion = await deepseek.chat.completions.create({
      model: 'deepseek-chat',
      messages: [
        {
          role: 'system',
          content: `你是中考数学命题专家。请根据原题出${n}道变形题。

要求：
- 保持相同知识点（${topic || '与原题相同'}）
- 难度：${diff}星（1-5）
- 改变数字/条件/问法，但考查相同核心方法
- 每题给出答案和解析思路

返回JSON：{"variants":[{"content":"题目","answer":"答案","hint":"解题思路","diff":3}]}`,
        },
        { role: 'user', content: `原题：${questionContent}` },
      ],
      max_tokens: 2000,
      temperature: 0.8,
    });

    const raw = completion.choices[0]?.message?.content || '';
    let result;
    try {
      const jsonMatch = raw.match(/\{[\s\S]*\}/);
      result = jsonMatch ? JSON.parse(jsonMatch[0]) : { variants: [] };
    } catch {
      result = { variants: [], raw };
    }

    res.json(result);
  } catch (err) {
    console.error('❌ OCR variant:', err.message);
    res.status(500).json({ error: 'AI 服务暂时不可用' });
  }
});

// ═══════════════════════════════════════════
//  M3 POST /api/ocr/error-pattern — 错误模式分析
// ═══════════════════════════════════════════
router.post('/error-pattern', authMiddleware, async (req, res) => {
  try {
    const userId = req.user.id;

    // 获取用户近期错题
    const wrongQs = await pool.query(
      `SELECT question_id, created_at FROM wrong_questions
       WHERE user_id = $1 AND resolved = FALSE
       ORDER BY created_at DESC LIMIT 30`,
      [userId]
    );

    if (wrongQs.rows.length === 0) {
      return res.json({ patterns: [], summary: '暂无足够错题数据，继续刷题后再分析' });
    }

    // 获取错题的知识点分布
    const topicDist = await pool.query(
      `SELECT wq.question_id, COUNT(*) as cnt
       FROM wrong_questions wq
       WHERE wq.user_id = $1 AND wq.resolved = FALSE
       GROUP BY wq.question_id ORDER BY cnt DESC LIMIT 10`,
      [userId]
    );

    const distText = topicDist.rows
      .map(r => `题目${r.question_id}(${r.cnt}次错)`).join('、');

    const completion = await deepseek.chat.completions.create({
      model: 'deepseek-chat',
      messages: [
        {
          role: 'system',
          content: `你是学情分析专家。根据学生错题数据，分析错误模式并给出针对性建议。

返回JSON：{
  "patterns": [
    {"type":"错误类型","desc":"描述","frequency":"频率","suggestion":"建议"}
  ],
  "rootCause": "根本原因分析",
  "priority": ["优先补漏知识点1","优先补漏知识点2"],
  "weeklyPlan": "本周学习建议"
}`,
        },
        {
          role: 'user',
          content: `学生共有${wrongQs.rows.length}道错题。
高频错题：${distText}。
请分析错误模式并给出补救建议。`,
        },
      ],
      max_tokens: 1000,
      temperature: 0.4,
    });

    const raw = completion.choices[0]?.message?.content || '';
    let result;
    try {
      const jsonMatch = raw.match(/\{[\s\S]*\}/);
      result = jsonMatch ? JSON.parse(jsonMatch[0]) : { patterns: [], summary: raw };
    } catch {
      result = { patterns: [], summary: raw };
    }

    res.json(result);
  } catch (err) {
    console.error('❌ error-pattern:', err.message);
    res.status(500).json({ error: 'AI 服务暂时不可用' });
  }
});

export default router;
