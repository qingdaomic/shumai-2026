-- ShuMai PET-5 minimal migration draft
-- Purpose: learning pet cloud state and reward event dedupe only.
-- Boundary: do not mix with TTS/ASR, SVG, WeChat context, animation cron, or study plans.
-- This file is a migration draft. It was not executed during V4.57.

CREATE TABLE IF NOT EXISTS pet_states (
  user_id     INT PRIMARY KEY REFERENCES users(id) ON DELETE CASCADE,
  species     VARCHAR(20) NOT NULL DEFAULT 'cat',
  mode        VARCHAR(30) NOT NULL DEFAULT 'idle',
  xp          INT NOT NULL DEFAULT 0 CHECK (xp >= 0),
  level       INT NOT NULL DEFAULT 1 CHECK (level >= 1),
  last_reward JSONB,
  created_at  TIMESTAMPTZ DEFAULT NOW(),
  updated_at  TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS pet_events (
  id          SERIAL PRIMARY KEY,
  user_id     INT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  event_type  VARCHAR(60) NOT NULL,
  event_key   VARCHAR(160) NOT NULL,
  xp_delta    INT NOT NULL DEFAULT 0 CHECK (xp_delta >= 0),
  label       VARCHAR(160),
  meta        JSONB NOT NULL DEFAULT '{}',
  created_at  TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE (user_id, event_key)
);

CREATE INDEX IF NOT EXISTS idx_pet_events_user_time
  ON pet_events(user_id, created_at DESC);

CREATE INDEX IF NOT EXISTS idx_pet_events_type_time
  ON pet_events(event_type, created_at DESC);
