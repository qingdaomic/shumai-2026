import { Router } from 'express';
import { authMiddleware } from './auth.js';
import pool from '../db.js';

const router = Router();

const PET_EVENT_XP_LIMITS = {
  topic_mastered: 30,
  wrong_fixed: 15,
  basic_wrong_fixed: 15,
  morning_done: 20,
};

function clampPetXp(type, xpDelta) {
  const n = Math.max(0, Number(xpDelta || 0));
  const max = PET_EVENT_XP_LIMITS[type] || 0;
  return Math.min(n, max);
}

function normalizePetState(row) {
  return {
    species: row?.species || 'cat',
    mode: row?.mode || 'idle',
    xp: Number(row?.xp || 0),
    level: Number(row?.level || 1),
    lastReward: row?.last_reward || null,
    updatedAt: row?.updated_at || null,
  };
}

router.get('/', authMiddleware, async (req, res) => {
  try {
    const result = await pool.query(
      `SELECT species, mode, xp, level, last_reward, updated_at
       FROM pet_states
       WHERE user_id = $1`,
      [req.user.id]
    );
    res.json(normalizePetState(result.rows[0]));
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.put('/', authMiddleware, async (req, res) => {
  try {
    const { species, mode, xp, level, lastReward } = req.body || {};
    const safeSpecies = species === 'dog' ? 'dog' : 'cat';
    const safeMode = ['idle', 'thinking', 'waiting', 'review', 'happy'].includes(mode) ? mode : 'idle';
    const safeXp = Math.max(0, Number(xp || 0));
    const safeLevel = Math.max(1, Number(level || 1));
    const result = await pool.query(
      `INSERT INTO pet_states (user_id, species, mode, xp, level, last_reward, updated_at)
       VALUES ($1, $2, $3, $4, $5, $6, NOW())
       ON CONFLICT (user_id) DO UPDATE SET
         species = EXCLUDED.species,
         mode = EXCLUDED.mode,
         xp = GREATEST(pet_states.xp, EXCLUDED.xp),
         level = GREATEST(pet_states.level, EXCLUDED.level),
         last_reward = COALESCE(EXCLUDED.last_reward, pet_states.last_reward),
         updated_at = NOW()
       RETURNING species, mode, xp, level, last_reward, updated_at`,
      [req.user.id, safeSpecies, safeMode, safeXp, safeLevel, lastReward || null]
    );
    res.json({ ok: true, state: normalizePetState(result.rows[0]) });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post('/events', authMiddleware, async (req, res) => {
  try {
    const { type, eventKey, xpDelta, label, meta } = req.body || {};
    if (!type || !eventKey) return res.status(400).json({ error: 'type 和 eventKey 必填' });

    const safeXp = clampPetXp(type, xpDelta);
    const insert = await pool.query(
      `INSERT INTO pet_events (user_id, event_type, event_key, xp_delta, label, meta)
       VALUES ($1, $2, $3, $4, $5, $6)
       ON CONFLICT (user_id, event_key) DO NOTHING
       RETURNING id`,
      [req.user.id, type, eventKey, safeXp, label || '', meta || {}]
    );

    const stored = insert.rowCount > 0;
    if (stored && safeXp > 0) {
      await pool.query(
        `INSERT INTO pet_states (user_id, xp, level, last_reward, updated_at)
         VALUES ($1, $2, GREATEST(1, FLOOR($2 / 80) + 1), $3, NOW())
         ON CONFLICT (user_id) DO UPDATE SET
           xp = pet_states.xp + EXCLUDED.xp,
           level = GREATEST(1, FLOOR((pet_states.xp + EXCLUDED.xp) / 80) + 1),
           last_reward = EXCLUDED.last_reward,
           updated_at = NOW()`,
        [req.user.id, safeXp, { xp: safeXp, label: label || '有效学习', at: Date.now() }]
      );
    }

    res.json({ ok: true, stored, duplicate: !stored, xpDelta: stored ? safeXp : 0 });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
