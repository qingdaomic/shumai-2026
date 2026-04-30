-- 数脉数据库建表脚本
-- PostgreSQL

-- 用户表
CREATE TABLE IF NOT EXISTS users (
  id          SERIAL PRIMARY KEY,
  phone       VARCHAR(20) UNIQUE,
  password    VARCHAR(100),          -- bcrypt hash
  nickname    VARCHAR(50),
  grade       SMALLINT DEFAULT 9,    -- 7/8/9
  wechat_uid  VARCHAR(100) UNIQUE,   -- ClawBot from_user_id
  created_at  TIMESTAMPTZ DEFAULT NOW(),
  updated_at  TIMESTAMPTZ DEFAULT NOW()
);

-- 学习记录表
CREATE TABLE IF NOT EXISTS progress (
  id          SERIAL PRIMARY KEY,
  user_id     INT REFERENCES users(id),
  topic_id    VARCHAR(50) NOT NULL,  -- 知识点code
  mastered    BOOLEAN DEFAULT FALSE,
  score       SMALLINT DEFAULT 0,    -- 0-100
  updated_at  TIMESTAMPTZ DEFAULT NOW()
);
CREATE UNIQUE INDEX IF NOT EXISTS idx_progress_user_topic ON progress(user_id, topic_id);

-- 错题记录表
CREATE TABLE IF NOT EXISTS wrong_questions (
  id          SERIAL PRIMARY KEY,
  user_id     INT REFERENCES users(id),
  question_id VARCHAR(50) NOT NULL,  -- exam id 或 basics id
  question_type VARCHAR(20) NOT NULL, -- 'exam' | 'basic'
  wrong_count SMALLINT DEFAULT 1,
  last_wrong  TIMESTAMPTZ DEFAULT NOW(),
  resolved    BOOLEAN DEFAULT FALSE,
  review_interval SMALLINT DEFAULT 0, -- 遗忘曲线当前间隔（天）
  next_review TIMESTAMPTZ,            -- 下次复习时间
  created_at  TIMESTAMPTZ DEFAULT NOW()
);
CREATE UNIQUE INDEX IF NOT EXISTS idx_wrong_user_q ON wrong_questions(user_id, question_id, question_type);
CREATE INDEX IF NOT EXISTS idx_wrong_review ON wrong_questions(user_id, next_review) WHERE resolved = TRUE AND next_review IS NOT NULL;

-- AI 对话历史表
CREATE TABLE IF NOT EXISTS chat_history (
  id          SERIAL PRIMARY KEY,
  user_id     INT REFERENCES users(id),
  role        VARCHAR(10) NOT NULL,  -- 'user' | 'assistant'
  content     TEXT NOT NULL,
  context     JSONB,                 -- {topic, questionId, ...}
  created_at  TIMESTAMPTZ DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_chat_user ON chat_history(user_id, created_at DESC);

-- 打卡记录表
CREATE TABLE IF NOT EXISTS checkins (
  id          SERIAL PRIMARY KEY,
  user_id     INT REFERENCES users(id),
  date        DATE NOT NULL,
  questions_done SMALLINT DEFAULT 0,
  correct_rate   REAL DEFAULT 0,
  duration_min   SMALLINT DEFAULT 0,
  created_at  TIMESTAMPTZ DEFAULT NOW()
);
CREATE UNIQUE INDEX IF NOT EXISTS idx_checkin_user_date ON checkins(user_id, date);

-- 每日任务预计算表
CREATE TABLE IF NOT EXISTS daily_tasks (
  id          SERIAL PRIMARY KEY,
  user_id     INT REFERENCES users(id),
  task_date   DATE NOT NULL,
  task_data   JSONB NOT NULL,
  completed   BOOLEAN DEFAULT FALSE,
  created_at  TIMESTAMPTZ DEFAULT NOW()
);
CREATE UNIQUE INDEX IF NOT EXISTS idx_daily_user_date ON daily_tasks(user_id, task_date);

-- 用户表增加考试日期字段和角色（ALTER 兼容已有表）
-- ALTER TABLE users ADD COLUMN IF NOT EXISTS exam_date DATE;
-- ALTER TABLE users ADD COLUMN IF NOT EXISTS role VARCHAR(20) DEFAULT 'student';

-- 系统配置表（key-value 存储，管理端可修改）
CREATE TABLE IF NOT EXISTS system_config (
  key         VARCHAR(100) PRIMARY KEY,
  value       JSONB NOT NULL,
  label       VARCHAR(100),            -- 显示名称
  category    VARCHAR(50) DEFAULT 'general',
  updated_at  TIMESTAMPTZ DEFAULT NOW()
);

-- 班级表（教师端）
CREATE TABLE IF NOT EXISTS classes (
  id          SERIAL PRIMARY KEY,
  name        VARCHAR(100) NOT NULL,
  teacher_id  INT REFERENCES users(id),
  grade       SMALLINT DEFAULT 9,
  invite_code VARCHAR(20) UNIQUE,
  created_at  TIMESTAMPTZ DEFAULT NOW()
);

-- 班级-学生关联表
CREATE TABLE IF NOT EXISTS class_students (
  id          SERIAL PRIMARY KEY,
  class_id    INT REFERENCES classes(id) ON DELETE CASCADE,
  student_id  INT REFERENCES users(id),
  joined_at   TIMESTAMPTZ DEFAULT NOW()
);
CREATE UNIQUE INDEX IF NOT EXISTS idx_class_student ON class_students(class_id, student_id);

-- 预置定时任务配置
INSERT INTO system_config (key, value, label, category) VALUES
  ('cron_daily_generate', '{"cron":"0 1 * * *","enabled":true,"desc":"凌晨1:00预生成每日任务"}', '任务生成', 'cron'),
  ('cron_morning_push', '{"cron":"0 7 * * *","enabled":true,"desc":"早上7:00推送今日任务"}', '早间推送', 'cron'),
  ('cron_evening_push', '{"cron":"0 21 * * *","enabled":true,"desc":"晚上21:00推送学习小结"}', '晚间推送', 'cron'),
  ('cron_weekly_report', '{"cron":"0 8 * * 1","enabled":true,"desc":"每周一8:00推送周报"}', '周报推送', 'cron'),
  ('review_intervals', '{"days":[1,3,7,30]}', '遗忘曲线间隔（天）', 'learning'),
  ('sprint_phases', '{"patch":60,"enhance":21,"sprint":5,"warm":0}', '冲刺阶段天数阈值', 'learning')
ON CONFLICT (key) DO NOTHING;
