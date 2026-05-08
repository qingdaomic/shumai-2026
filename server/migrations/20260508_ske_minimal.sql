-- ShuMai SKE-1 minimal migration draft
-- Purpose: prompt Skill library and Skill event tracking only.
-- Boundary: do not mix with study_plans, TTS/ASR, SVG, WeChat context, or animation cron.
-- This file is a migration draft. It was not executed during V4.32.

CREATE TABLE IF NOT EXISTS prompt_skills (
  id                SERIAL PRIMARY KEY,
  skill_key         VARCHAR(80) UNIQUE NOT NULL,
  name              VARCHAR(120) NOT NULL,
  type              VARCHAR(40) NOT NULL,
  audience          VARCHAR(40) NOT NULL DEFAULT 'student_frontend',
  subject           VARCHAR(40) NOT NULL DEFAULT 'math',
  stage             VARCHAR(40) NOT NULL DEFAULT 'middle',
  grade             VARCHAR(20),
  topic_code        VARCHAR(80),
  method_code       VARCHAR(80),
  question_type     VARCHAR(80),
  scene             VARCHAR(80) NOT NULL,
  goal              VARCHAR(120),
  difficulty        VARCHAR(30) DEFAULT 'medium',
  tone              VARCHAR(50) DEFAULT 'calm_coach',
  content           TEXT NOT NULL,
  model_role        VARCHAR(40) DEFAULT 'user_suggestion',
  trigger_tags      JSONB NOT NULL DEFAULT '[]',
  example_questions JSONB NOT NULL DEFAULT '[]',
  weight            NUMERIC(5, 3) NOT NULL DEFAULT 0.700,
  version           VARCHAR(30) NOT NULL DEFAULT '1.0.0',
  status            VARCHAR(20) NOT NULL DEFAULT 'active',
  created_at        TIMESTAMPTZ DEFAULT NOW(),
  updated_at        TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_prompt_skills_lookup
  ON prompt_skills(subject, stage, topic_code, scene, status);

CREATE INDEX IF NOT EXISTS idx_prompt_skills_type
  ON prompt_skills(type, status, weight DESC);

CREATE INDEX IF NOT EXISTS idx_prompt_skills_method
  ON prompt_skills(method_code, status)
  WHERE method_code IS NOT NULL;

CREATE TABLE IF NOT EXISTS prompt_skill_events (
  id              SERIAL PRIMARY KEY,
  user_id         INT REFERENCES users(id) ON DELETE SET NULL,
  prompt_skill_id INT REFERENCES prompt_skills(id) ON DELETE CASCADE,
  question_id     VARCHAR(80),
  question_type   VARCHAR(40),
  topic_code      VARCHAR(80),
  method_code     VARCHAR(80),
  scene           VARCHAR(80),
  event_type      VARCHAR(40) NOT NULL,
  result          VARCHAR(40),
  meta            JSONB NOT NULL DEFAULT '{}',
  created_at      TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_prompt_skill_events_user
  ON prompt_skill_events(user_id, created_at DESC);

CREATE INDEX IF NOT EXISTS idx_prompt_skill_events_skill
  ON prompt_skill_events(prompt_skill_id, created_at DESC);

CREATE INDEX IF NOT EXISTS idx_prompt_skill_events_question
  ON prompt_skill_events(question_id, question_type, created_at DESC);

CREATE INDEX IF NOT EXISTS idx_prompt_skill_events_type
  ON prompt_skill_events(event_type, created_at DESC);
