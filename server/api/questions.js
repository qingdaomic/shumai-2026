import { Router } from 'express';
import { authMiddleware } from './auth.js';

const router = Router();

// J3.3 API 限流（30次/分钟/用户）
const rateMap = new Map(); // userId -> {count, resetAt}
function rateLimit(req, res, next) {
  const uid = req.user?.id || req.ip;
  const now = Date.now();
  let entry = rateMap.get(uid);
  if (!entry || now > entry.resetAt) {
    entry = { count: 0, resetAt: now + 60000 };
    rateMap.set(uid, entry);
  }
  entry.count++;
  if (entry.count > 30) {
    return res.status(429).json({ error: '请求过于频繁，请稍后再试' });
  }
  next();
}
// 清理过期条目（每5分钟）
setInterval(() => {
  const now = Date.now();
  for (const [k, v] of rateMap) { if (now > v.resetAt) rateMap.delete(k); }
}, 300000);

// 题库数据（运行时从前端数据文件导入）
let EXAM_QS = [];
let BASICS_BY_TOPIC = {};
let TOPIC_GROUPS = [];
let FINAL_GROUPS = [];

// 延迟加载题库数据
async function loadData() {
  if (EXAM_QS.length > 0) return;
  try {
    const examMod = await import('../../src/data/exam-qs.js');
    EXAM_QS = examMod.EXAM_QS;
    const basicsMod = await import('../../src/data/basics.js');
    BASICS_BY_TOPIC = basicsMod.BASICS_BY_TOPIC;
    TOPIC_GROUPS = basicsMod.TOPIC_GROUPS;
    FINAL_GROUPS = basicsMod.FINAL_GROUPS;
    console.log(`✓ 题库加载: ${EXAM_QS.length} 真题`);
  } catch (err) {
    console.error('⚠ 题库加载失败:', err.message);
  }
}

// GET /api/questions/exam/:id — 按 ID 返回单道真题
router.get('/exam/:id', authMiddleware, rateLimit, async (req, res) => {
  await loadData();
  const id = parseInt(req.params.id);
  const q = EXAM_QS.find(q => q.id === id);
  if (!q) return res.status(404).json({ error: '题目不存在' });
  res.json(q);
});

// GET /api/questions/exam?topic=xxx&limit=10 — 按知识点查真题
router.get('/exam', authMiddleware, rateLimit, async (req, res) => {
  await loadData();
  const { topic, diff, limit = 10 } = req.query;
  let filtered = EXAM_QS;
  if (topic) filtered = filtered.filter(q => q.topic === topic || q.subTopics?.includes(topic));
  if (diff) filtered = filtered.filter(q => q.diff === parseInt(diff));
  res.json(filtered.slice(0, parseInt(limit)));
});

// GET /api/questions/basics/:topic — 按知识点返回基础题
router.get('/basics/:topic', authMiddleware, rateLimit, async (req, res) => {
  await loadData();
  const qs = BASICS_BY_TOPIC[req.params.topic] || [];
  res.json(qs);
});

// GET /api/questions/groups/:id — 返回题组
router.get('/groups/:id', authMiddleware, rateLimit, async (req, res) => {
  await loadData();
  const g = TOPIC_GROUPS.find(g => g.id === req.params.id) || FINAL_GROUPS.find(g => g.id === req.params.id);
  if (!g) return res.status(404).json({ error: '题组不存在' });
  res.json(g);
});

export default router;
