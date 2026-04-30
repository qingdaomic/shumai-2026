import 'dotenv/config';
import { readFileSync } from 'fs';
import pool from './db.js';

const sql = readFileSync('./schema.sql', 'utf8');
try {
  await pool.query(sql);
  console.log('✅ 数据库初始化成功');
  process.exit(0);
} catch (err) {
  console.error('❌ 初始化失败:', err.message);
  process.exit(1);
}
