import pool from '../db.js';

const ACTIONS = new Set([
  'skill_weight_adjust',
  'skill_rewrite',
  'skill_status_change',
  'skill_manual_note',
]);

const TARGET_TYPES = new Set([
  'prompt_skill',
]);

function asText(value, max = 400) {
  const text = String(value || '').trim();
  return text ? text.slice(0, max) : null;
}

function asObject(value) {
  return value && typeof value === 'object' && !Array.isArray(value) ? value : {};
}

function normalizeLogInput(input = {}, user = {}) {
  const action = asText(input.action, 80);
  const targetType = asText(input.targetType || input.target_type, 80);
  if (!action || !ACTIONS.has(action)) throw new Error('无效操作类型');
  if (!targetType || !TARGET_TYPES.has(targetType)) throw new Error('无效目标类型');

  const targetId = Number(input.targetId ?? input.target_id);
  return {
    adminUserId: Number.isFinite(Number(user.id)) ? Number(user.id) : null,
    adminRole: asText(user.role, 80),
    action,
    targetType,
    targetId: Number.isFinite(targetId) && targetId > 0 ? targetId : null,
    targetKey: asText(input.targetKey || input.target_key, 240),
    targetName: asText(input.targetName || input.target_name, 240),
    beforeValue: asObject(input.beforeValue || input.before_value),
    afterValue: asObject(input.afterValue || input.after_value),
    reason: asText(input.reason, 800),
    source: asText(input.source, 80),
    requestId: asText(input.requestId || input.request_id, 120),
  };
}

function isMissingLogTable(err) {
  return err?.code === '42P01' || /admin_operation_logs/i.test(err?.message || '');
}

export async function createAdminOperationLog(input, user) {
  const data = normalizeLogInput(input, user);
  try {
    const result = await pool.query(
      `INSERT INTO admin_operation_logs
       (admin_user_id, admin_role, action, target_type, target_id, target_key, target_name,
        before_value, after_value, reason, source, request_id)
       VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12)
       RETURNING id, admin_user_id, admin_role, action, target_type, target_id, target_key,
                 target_name, before_value, after_value, reason, source, request_id, created_at`,
      [
        data.adminUserId,
        data.adminRole,
        data.action,
        data.targetType,
        data.targetId,
        data.targetKey,
        data.targetName,
        JSON.stringify(data.beforeValue),
        JSON.stringify(data.afterValue),
        data.reason,
        data.source,
        data.requestId,
      ]
    );
    return { ok: true, stored: true, item: result.rows[0] };
  } catch (err) {
    if (isMissingLogTable(err)) {
      return { ok: true, stored: false, reason: 'admin_operation_logs table not migrated' };
    }
    throw err;
  }
}

export async function listAdminOperationLogs(query = {}) {
  const where = [];
  const params = [];
  const action = asText(query.action, 80);
  const targetType = asText(query.targetType || query.target_type, 80);
  const targetId = Number(query.targetId ?? query.target_id);
  const targetKey = asText(query.targetKey || query.target_key, 240);
  const limit = Math.min(Math.max(Number(query.limit || 50) || 50, 1), 200);

  if (action) {
    params.push(action);
    where.push(`action = $${params.length}`);
  }
  if (targetType) {
    params.push(targetType);
    where.push(`target_type = $${params.length}`);
  }
  if (Number.isFinite(targetId) && targetId > 0) {
    params.push(targetId);
    where.push(`target_id = $${params.length}`);
  }
  if (targetKey) {
    params.push(targetKey);
    where.push(`target_key = $${params.length}`);
  }

  params.push(limit);
  try {
    const result = await pool.query(
      `SELECT id, admin_user_id, admin_role, action, target_type, target_id, target_key,
              target_name, before_value, after_value, reason, source, request_id, created_at
       FROM admin_operation_logs
       ${where.length ? `WHERE ${where.join(' AND ')}` : ''}
       ORDER BY created_at DESC, id DESC
       LIMIT $${params.length}`,
      params
    );
    return { ok: true, stored: true, items: result.rows, filters: { action, targetType, targetId, targetKey, limit } };
  } catch (err) {
    if (isMissingLogTable(err)) {
      return { ok: true, stored: false, items: [], reason: 'admin_operation_logs table not migrated' };
    }
    throw err;
  }
}
