-- ShuMai V4.73 admin operation logs migration draft
-- Purpose: persistent audit trail for admin actions such as Skill weight adjustment and rewrite.
-- Boundary: do not mix with prompt_skill_events, pet_events, TTS/ASR, study plans, deploy, or server/schema.sql.
-- This file is a migration draft. It was not executed during V4.73.

CREATE TABLE IF NOT EXISTS admin_operation_logs (
  id             BIGSERIAL PRIMARY KEY,
  admin_user_id  INT REFERENCES users(id) ON DELETE SET NULL,
  admin_role     TEXT,
  action         TEXT NOT NULL,
  target_type    TEXT NOT NULL,
  target_id      INT,
  target_key     TEXT,
  target_name    TEXT,
  before_value   JSONB NOT NULL DEFAULT '{}',
  after_value    JSONB NOT NULL DEFAULT '{}',
  reason         TEXT,
  source         TEXT,
  request_id     TEXT,
  created_at     TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  CONSTRAINT admin_operation_logs_action_not_blank CHECK (length(trim(action)) > 0),
  CONSTRAINT admin_operation_logs_target_type_not_blank CHECK (length(trim(target_type)) > 0),
  CONSTRAINT admin_operation_logs_source_length CHECK (source IS NULL OR length(source) <= 80),
  CONSTRAINT admin_operation_logs_request_id_length CHECK (request_id IS NULL OR length(request_id) <= 120)
);

CREATE INDEX IF NOT EXISTS idx_admin_operation_logs_created_at
  ON admin_operation_logs(created_at DESC);

CREATE INDEX IF NOT EXISTS idx_admin_operation_logs_target
  ON admin_operation_logs(target_type, target_id, created_at DESC);

CREATE INDEX IF NOT EXISTS idx_admin_operation_logs_action_time
  ON admin_operation_logs(action, created_at DESC);

CREATE INDEX IF NOT EXISTS idx_admin_operation_logs_admin_time
  ON admin_operation_logs(admin_user_id, created_at DESC);

CREATE INDEX IF NOT EXISTS idx_admin_operation_logs_target_key
  ON admin_operation_logs(target_key, created_at DESC)
  WHERE target_key IS NOT NULL;
