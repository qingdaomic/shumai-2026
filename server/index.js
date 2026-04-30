import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import pool from './db.js';
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

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 3001;

const ALLOWED_ORIGINS = process.env.NODE_ENV === 'production'
  ? [process.env.FRONTEND_URL || 'https://shumai-2026.netlify.app']
  : true;

// 中间件
app.use(cors({ origin: ALLOWED_ORIGINS, credentials: true }));
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

// 自动初始化数据库表结构（生产环境启动时执行）
async function initDb() {
  try {
    const schemaPath = join(__dirname, 'schema.sql');
    const sql = readFileSync(schemaPath, 'utf8');
    await pool.query(sql);
    console.log('✅ 数据库表结构初始化完成');
  } catch (err) {
    console.warn('⚠ 数据库初始化跳过（可能已存在）:', err.message);
  }
}

// 启动服务
initDb().then(() => {
  app.listen(PORT, () => {
    console.log(`\n🚀 数脉后端 运行在 http://localhost:${PORT}`);
    console.log(`   GET  /api/health`);
    console.log(`   POST /api/auth/register`);
    console.log(`   POST /api/auth/login\n`);
  });
});
