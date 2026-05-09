const DEFAULT_MODELS = {
  fast: process.env.AI_MODEL_FAST || 'deepseek-chat',
  standard: process.env.AI_MODEL_STANDARD || 'deepseek-chat',
  deep: process.env.AI_MODEL_DEEP || process.env.AI_MODEL_STANDARD || 'deepseek-chat',
  review: process.env.AI_MODEL_REVIEW || process.env.AI_MODEL_DEEP || 'deepseek-chat',
};

const POINTS_BY_TIER = {
  fast: 1,
  standard: 1,
  deep: 3,
  review: 2,
};

export function chooseAiRoute(input = {}) {
  const scene = clean(input.scene);
  const mode = clean(input.mode);
  const skillType = clean(input.skill?.type || input.skill_type || input.skillType);
  const difficulty = clean(input.skill?.difficulty || input.difficulty);
  const questionType = clean(input.question_type || input.questionType);
  const plan = clean(input.plan || input.userPlan || 'free') || 'free';

  const tier = decideTier({ scene, mode, skillType, difficulty, questionType, plan });
  return {
    tier,
    model: DEFAULT_MODELS[tier] || DEFAULT_MODELS.standard,
    provider: 'deepseek',
    points: POINTS_BY_TIER[tier] || POINTS_BY_TIER.standard,
    visibleName: tierToName(tier),
    reason: buildRouteReason({ tier, scene, mode, skillType, difficulty, questionType, plan }),
  };
}

export function buildAiPointsPreview(plan = 'free') {
  const normalizedPlan = clean(plan) || 'free';
  const dailyIncluded = normalizedPlan === 'pro' ? 999 : normalizedPlan === 'vip' ? 30 : 3;
  return {
    plan: normalizedPlan,
    includedDailyStandardCalls: dailyIncluded,
    estimatedPoints: POINTS_BY_TIER,
    policy: '基础提示长期免费或低成本；深度诊断、压轴题多轮讲解和质检类能力后续接入 AI 深度服务额度。',
  };
}

function decideTier({ scene, mode, skillType, difficulty, questionType, plan }) {
  if (['quality_review', 'answer_review', 'solution_quality_check'].includes(scene)) return 'review';
  if (['review', 'quality_check'].includes(mode)) return 'review';

  const deepSignals = [
    scene,
    mode,
    skillType,
    difficulty,
    questionType,
  ].join(' ');

  if (/final|deep|complex|paper|exam_review|压轴|综合|质检/.test(deepSignals)) {
    return plan === 'free' ? 'standard' : 'deep';
  }

  if (/hint|first_step|read_question|stuck_before_solution|quick/.test(deepSignals)) return 'fast';
  return 'standard';
}

function tierToName(tier) {
  if (tier === 'fast') return '极速答疑';
  if (tier === 'deep') return '深度教练';
  if (tier === 'review') return '质检教练';
  return '标准教练';
}

function buildRouteReason({ tier, scene, mode, skillType, difficulty, questionType, plan }) {
  const parts = [];
  if (scene) parts.push(`scene=${scene}`);
  if (mode) parts.push(`mode=${mode}`);
  if (skillType) parts.push(`skill=${skillType}`);
  if (difficulty) parts.push(`difficulty=${difficulty}`);
  if (questionType) parts.push(`question=${questionType}`);
  parts.push(`plan=${plan}`);
  return `${tierToName(tier)}：${parts.join(' / ')}`;
}

function clean(value) {
  return String(value || '').trim().toLowerCase().slice(0, 80);
}
