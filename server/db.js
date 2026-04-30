import pg from 'pg';
const { Pool } = pg;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
});

// 测试连接
pool.query('SELECT NOW()').then(() => {
  console.log('✓ PostgreSQL 已连接');
}).catch(err => {
  console.warn('⚠ PostgreSQL 未连接:', err.message);
});

export default pool;
