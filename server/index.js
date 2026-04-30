import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import authRouter from './api/auth.js';
import questionsRouter from './api/questions.js';
import progressRouter from './api/progress.js';
import wechatRouter from './api/wechat.js';
import aiRouter from './api/ai.js';
import paperRouter from './api/paper.js';
import dailyRouter from './api/daily.js';
import adminRouter from './api/admin.js';
import ocrRouter from './api/ocr.js';
import teacherRouter from './api/teacher.js';
import parentRouter from './api/parent.js';
import subscriptionRouter from './api/subscription.js';

const app = express();
const PORT = process.env.PORT || 3001;

// 中间件
app.use(cors({ origin: true, credentials: true }));
app.use(express.json({ limit: '1mb' }));

// 健康检查
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', name: '数脉后端', version: '1.0.0', time: new Date().toISOString() });
});

// 路由
app.use('/api/auth', authRouter);
app.use('/api/questions', questionsRouter);
app.use('/api/progress', progressRouter);
app.use('/api/wechat', wechatRouter);
app.use('/api/ai', aiRouter);
app.use('/api/paper', paperRouter);
app.use('/api/daily', dailyRouter);
app.use('/api/admin', adminRouter);
app.use('/api/ocr', ocrRouter);
app.use('/api/teacher', teacherRouter);
app.use('/api/parent', parentRouter);
app.use('/api/subscription', subscriptionRouter);

// 全局错误处理
app.use((err, req, res, next) => {
  console.error('❌', err.stack);
  res.status(500).json({ error: '服务器内部错误' });
});

app.listen(PORT, () => {
  console.log(`\n🚀 数脉后端 运行在 http://localhost:${PORT}`);
  console.log(`   GET  /api/health`);
  console.log(`   POST /api/auth/register`);
  console.log(`   POST /api/auth/login`);
  console.log(`   GET  /api/questions/exam/:id`);
  console.log(`   GET  /api/questions/basics/:topic`);
  console.log(`   GET  /api/progress`);
  console.log(`   PUT  /api/progress/:topicId`);
  console.log(`   GET  /api/wechat/status`);
  console.log(`   POST /api/ai/explain`);
  console.log(`   POST /api/ai/wrong-analysis`);
  console.log(`   POST /api/ai/chat`);
  console.log(`   POST /api/paper/analyze`);
  console.log(`   POST /api/paper/mock`);
  console.log(`   GET  /api/daily`);
  console.log(`   POST /api/daily/review`);
  console.log(`   GET  /api/admin/config`);
  console.log(`   GET  /api/admin/users`);
  console.log(`   POST /api/ocr/analyze`);
  console.log(`   POST /api/ocr/save`);
  console.log(`   POST /api/ocr/text-analyze`);
  console.log(`   GET  /api/teacher/classes`);
  console.log(`   GET  /api/admin/stats\n`);
});
