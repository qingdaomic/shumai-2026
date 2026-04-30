/**
 * E1-E6 收费体系 API
 * - 三层用户：免费 / VIP / Pro
 * - 功能门控
 * - 订阅状态查询
 * - 支付回调（微信支付预留）
 */

import { Router } from 'express';
import { authMiddleware } from './auth.js';
import pool from '../db.js';

const router = Router();

// ═══════════════════════════════════════════
//  E1 用户等级与权限定义
// ═══════════════════════════════════════════

const PLANS = {
  free: {
    name: '免费版',
    price: 0,
    features: {
      dailyAiCalls: 3,          // 每日AI对话次数
      topicAccess: 'basic',     // 基础知识点（前50%）
      examQsAccess: 30,         // 真题访问量
      ocrDaily: 1,              // 每日OCR次数
      wrongBookLimit: 20,       // 错题本上限
      paperAnalysis: false,     // 试卷分析
      mockPaper: false,         // 模拟卷
      sprintMode: false,        // 冲刺模式
      aiExplain: true,          // AI讲解（限次）
      voiceExplain: false,      // 语音讲解
    },
  },
  vip: {
    name: 'VIP 会员',
    price: 29.9,  // 月
    features: {
      dailyAiCalls: 30,
      topicAccess: 'all',
      examQsAccess: 999,
      ocrDaily: 10,
      wrongBookLimit: 200,
      paperAnalysis: true,
      mockPaper: true,
      sprintMode: true,
      aiExplain: true,
      voiceExplain: true,
    },
  },
  pro: {
    name: 'Pro 尊享',
    price: 59.9,  // 月
    features: {
      dailyAiCalls: 999,
      topicAccess: 'all',
      examQsAccess: 999,
      ocrDaily: 50,
      wrongBookLimit: 999,
      paperAnalysis: true,
      mockPaper: true,
      sprintMode: true,
      aiExplain: true,
      voiceExplain: true,
      teacherPanel: true,       // 教师端
      parentPanel: true,        // 家长端
      prioritySupport: true,    // 优先客服
    },
  },
};

// ═══════════════════════════════════════════
//  E2 查询订阅状态
// ═══════════════════════════════════════════

// GET /api/subscription/status — 获取当前用户订阅信息
router.get('/status', authMiddleware, async (req, res) => {
  try {
    const result = await pool.query(
      'SELECT value FROM system_config WHERE key = $1',
      [`sub_${req.user.id}`]
    );

    if (result.rows.length === 0) {
      return res.json({
        plan: 'free',
        ...PLANS.free,
        expiresAt: null,
        active: true,
      });
    }

    const sub = typeof result.rows[0].value === 'string'
      ? JSON.parse(result.rows[0].value)
      : result.rows[0].value;

    const isExpired = sub.expiresAt && new Date(sub.expiresAt) < new Date();
    const plan = isExpired ? 'free' : (sub.plan || 'free');

    res.json({
      plan,
      ...PLANS[plan],
      expiresAt: sub.expiresAt,
      active: !isExpired,
      orderId: sub.orderId,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /api/subscription/plans — 获取所有套餐
router.get('/plans', (req, res) => {
  res.json(PLANS);
});

// ═══════════════════════════════════════════
//  E3 功能门控中间件
// ═══════════════════════════════════════════

export async function featureGuard(featureName) {
  return async (req, res, next) => {
    try {
      const result = await pool.query(
        'SELECT value FROM system_config WHERE key = $1',
        [`sub_${req.user.id}`]
      );

      let plan = 'free';
      if (result.rows.length > 0) {
        const sub = typeof result.rows[0].value === 'string'
          ? JSON.parse(result.rows[0].value)
          : result.rows[0].value;
        const isExpired = sub.expiresAt && new Date(sub.expiresAt) < new Date();
        if (!isExpired) plan = sub.plan || 'free';
      }

      const features = PLANS[plan]?.features || PLANS.free.features;
      if (features[featureName] === false || features[featureName] === 0) {
        return res.status(403).json({
          error: '此功能需要升级会员',
          requiredPlan: featureName,
          currentPlan: plan,
        });
      }

      req.userPlan = plan;
      req.planFeatures = features;
      next();
    } catch {
      next();
    }
  };
}

// ═══════════════════════════════════════════
//  E4 开通/续费（简化版：管理员手动开通 or 模拟支付）
// ═══════════════════════════════════════════

// POST /api/subscription/activate — 开通或续费
router.post('/activate', authMiddleware, async (req, res) => {
  try {
    const { plan, months } = req.body;
    if (!plan || !PLANS[plan]) return res.status(400).json({ error: '无效套餐' });
    if (plan === 'free') return res.status(400).json({ error: '免费版无需开通' });

    const durationMonths = months || 1;
    const price = PLANS[plan].price * durationMonths;

    // 检查当前订阅
    const existing = await pool.query(
      'SELECT value FROM system_config WHERE key = $1',
      [`sub_${req.user.id}`]
    );

    let expiresAt = new Date();
    if (existing.rows.length > 0) {
      const sub = typeof existing.rows[0].value === 'string'
        ? JSON.parse(existing.rows[0].value)
        : existing.rows[0].value;
      if (sub.expiresAt && new Date(sub.expiresAt) > new Date()) {
        expiresAt = new Date(sub.expiresAt); // 从当前有效期延续
      }
    }
    expiresAt.setMonth(expiresAt.getMonth() + durationMonths);

    const orderId = `ORD_${Date.now()}_${req.user.id}`;
    const subData = {
      plan,
      expiresAt: expiresAt.toISOString(),
      orderId,
      activatedAt: new Date().toISOString(),
      price,
    };

    await pool.query(
      `INSERT INTO system_config (key, value, label, category)
       VALUES ($1, $2, '用户订阅', 'subscription')
       ON CONFLICT (key) DO UPDATE SET value = $2, updated_at = NOW()`,
      [`sub_${req.user.id}`, JSON.stringify(subData)]
    );

    res.json({
      ok: true,
      orderId,
      plan,
      expiresAt: expiresAt.toISOString(),
      price,
      message: `已开通${PLANS[plan].name}，有效期至 ${expiresAt.toLocaleDateString('zh-CN')}`,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ═══════════════════════════════════════════
//  E5 微信支付预留（暂返回模拟数据）
// ═══════════════════════════════════════════

// POST /api/subscription/create-order — 创建支付订单
router.post('/create-order', authMiddleware, async (req, res) => {
  try {
    const { plan, months } = req.body;
    if (!plan || !PLANS[plan] || plan === 'free') {
      return res.status(400).json({ error: '无效套餐' });
    }

    const durationMonths = months || 1;
    const price = PLANS[plan].price * durationMonths;
    const orderId = `ORD_${Date.now()}_${req.user.id}`;

    // TODO: 接入微信支付 JSAPI
    // const wxPayResult = await createWxPayOrder({...});

    res.json({
      orderId,
      plan,
      price,
      months: durationMonths,
      // payUrl: wxPayResult.code_url,  // 微信支付二维码
      message: '⚠️ 支付功能开发中，请联系管理员手动开通',
      mock: true,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST /api/subscription/wx-callback — 微信支付回调（预留）
router.post('/wx-callback', async (req, res) => {
  // TODO: 验证微信签名 → 更新订阅状态
  res.json({ code: 'SUCCESS', message: 'OK' });
});

// ═══════════════════════════════════════════
//  E6 使用量统计（AI调用次数等）
// ═══════════════════════════════════════════

// GET /api/subscription/usage — 今日使用量
router.get('/usage', authMiddleware, async (req, res) => {
  try {
    const aiCalls = await pool.query(
      `SELECT COUNT(*) as cnt FROM chat_history
       WHERE user_id = $1 AND role = 'user' AND created_at > CURRENT_DATE`,
      [req.user.id]
    );

    const ocrCalls = await pool.query(
      `SELECT COUNT(*) as cnt FROM chat_history
       WHERE user_id = $1 AND context::text LIKE '%"type":"ocr"%' AND created_at > CURRENT_DATE`,
      [req.user.id]
    );

    res.json({
      todayAiCalls: parseInt(aiCalls.rows[0]?.cnt) || 0,
      todayOcrCalls: parseInt(ocrCalls.rows[0]?.cnt) || 0,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
