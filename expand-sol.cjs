/**
 * 批量扩展 EXAM_QS 中过短的 sol 字段
 * 运行: node expand-sol.js
 * 输出: shumai-v7-1.jsx 原地更新（先备份）
 */
const fs = require('fs');
const path = 'shumai-v7-1.jsx';
let src = fs.readFileSync(path, 'utf8');

// 备份
fs.writeFileSync(path + '.bak', src);
console.log('✓ 已备份 → ' + path + '.bak');

let count = 0;

// 匹配每个 sol:"..." 及其周围上下文
// 我们需要: content, answer, sol, topic, type 来做智能扩展
// Pattern 1: EXAM_QS format (id:number, type, topic, content, answer, sol)
const qRegex1 = /\{id:(\d+)[^}]*?type:"(\w+)"[^}]*?topic:"(\w+)"[^}]*?content:"((?:[^"\\]|\\.)*)"\s*,\s*answer:"((?:[^"\\]|\\.)*)"\s*,\s*\n?\s*sol:"((?:[^"\\]|\\.)*)"/g;
// Pattern 2: BASICS/GROUPS format (id:"string", diff, content, answer, sol)
const qRegex2 = /\{id:"([^"]+)",diff:(\d)[^}]*?content:"((?:[^"\\]|\\.)*)"\s*,\s*answer:"((?:[^"\\]|\\.)*)"\s*,\s*sol:"((?:[^"\\]|\\.)*)"/g;
const qRegex = null; // placeholder, iterate both below

let match;
const replacements = [];

// Pass 1: EXAM_QS format
while ((match = qRegex1.exec(src)) !== null) {
  const [fullMatch, id, type, topic, content, answer, sol] = match;
  processSol(fullMatch, match.index, sol, content, answer, type, topic, id);
}

// Pass 2: BASICS/GROUPS format
while ((match = qRegex2.exec(src)) !== null) {
  const [fullMatch, id, diff, content, answer, sol] = match;
  // Infer topic from id prefix: b_rat→rational, b_re→reals, etc.
  const topicMap = {
    'b_rat':'rational','b_re':'reals','b_poly':'poly','b_fac':'factoring',
    'b_frac':'fraction','b_le':'linear_eq','b_qe':'quad_eq','b_eq':'equations',
    'b_ineq':'inequality','b_coord':'coords','b_lf':'linear_fn','b_if':'inverse_fn',
    'b_qf':'quad_fn','b_tri':'tri_basic','b_cong':'congruent','b_pyth':'pythagorean',
    'b_stri':'special_tri','b_quad':'quadrilateral','b_sim':'similar','b_trig':'trig',
    'b_circ':'circle','b_trans':'transform','b_stat':'stats','b_prob':'prob',
    'tg':'group','fg':'final'
  };
  let topic = 'unknown';
  for (const [prefix, t] of Object.entries(topicMap)) {
    if (id.startsWith(prefix)) { topic = t; break; }
  }
  processSol(fullMatch, match.index, sol, content, answer, 'fill', topic, id);
}

function processSol(fullMatch, matchIndex, sol, content, answer, type, topic, id) {
  const solLen = sol.length;
  if (solLen > 55) return;
  if (/[①②③④⑤]/.test(sol)) return;
  
  const expanded = expandSol(sol, content, answer, type, topic);
  if (expanded && expanded !== sol && expanded.length > sol.length + 5) {
    const solStart = fullMatch.lastIndexOf('sol:"');
    replacements.push({
      pos: matchIndex + solStart + 5,
      oldSol: sol,
      newSol: expanded,
      id, type, topic
    });
    count++;
  }
}

// 从后往前替换，避免位移问题
replacements.sort((a, b) => b.pos - a.pos);
for (const r of replacements) {
  const before = src.substring(0, r.pos);
  const after = src.substring(r.pos + r.oldSol.length);
  src = before + r.newSol + after;
}

fs.writeFileSync(path, src);
console.log(`✓ 已扩展 ${count} 个 sol 字段`);
console.log(`✓ 剩余短sol: 请运行 grep -c 'sol:"[^"]{0,12}"' ${path} 检查`);

// ═══════════════════════════════════════════════════
// 智能扩展函数
// ═══════════════════════════════════════════════════
function expandSol(sol, content, answer, type, topic) {
  // --- 1. 韦达定理 ---
  if (/韦达/.test(sol)) {
    const m = sol.match(/积\s*=\s*c\/a\s*=\s*(.+)/);
    if (m) return `①韦达定理：x₁x₂=c/a；②代入系数；③积=${m[1]}`;
    const m2 = sol.match(/韦达[：:]\s*(.+)/);
    if (m2) return `①韦达定理：x₁+x₂=-b/a，x₁x₂=c/a；②${m2[1]}`;
    return `①韦达定理：x₁+x₂=-b/a，x₁x₂=c/a；②${sol}`;
  }

  // --- 2. 平方差公式 ---
  if (/^平方差/.test(sol) && sol.length < 15) {
    return `①识别a²-b²的形式；②用平方差公式：(a+b)(a-b)；③代入得${answer}`;
  }

  // --- 3. 完全平方 ---
  if (/完全平方/.test(sol) && sol.length < 15) {
    return `①识别(a±b)²=a²±2ab+b²的形式；②展开/分解得${answer}`;
  }

  // --- 4. 单纯不等式结果: "x>4", "x<3", "x≥2" 等 ---
  if (/^x\s*[><≥≤]\s*[-\d/.]+$/.test(sol.trim())) {
    const ineq = content.match(/不等式[：:]?\s*(.+?)的?\s*解/);
    if (ineq) return `①原式：${ineq[1]}；②移项合并同类项；③${sol}`;
    return `①移项：含x项移到左边，常数移到右边；②合并同类项；③${sol}`;
  }

  // --- 5. 勾股相关: "d²+4²=5²" 等 ---
  if (/²[+].*²\s*=\s*.*²/.test(sol)) {
    return `①勾股定理：a²+b²=c²；②${sol}；③解得${answer}`;
  }

  // --- 6. 因式分解: "提x→..." 或 "提ab→..." ---
  if (/^提/.test(sol)) {
    return `①找公因式；②${sol}；③结果：${answer}`;
  }
  if (/公因式/.test(sol) && sol.length < 15) {
    return `①找公因式${sol.replace('公因式','')}；②提取后：${answer}`;
  }

  // --- 7. 配方: "(x-a)²+b" 或 "(x-a)²-b" ---
  if (/^\(x[-+]\d+\)²[+-]\d+$/.test(sol.trim())) {
    return `①配方：y=${sol}；②顶点坐标从配方式直接读取；③${answer}`;
  }

  // --- 8. 简单计算: "2+4=6", "-2+3=1", "3+4=7" ---
  if (/^[-\d/.]+[+\-×÷]\s*[-\d/.]+\s*=\s*[-\d/.]+$/.test(sol.trim())) {
    return `①按运算顺序逐步计算；②${sol}`;
  }

  // --- 9. 特殊角值 ---
  if (/特殊角/.test(sol)) {
    return `①代入特殊角值：sin30°=½，cos30°=√3/2，tan30°=√3/3，sin45°=cos45°=√2/2，tan45°=1，sin60°=√3/2，cos60°=½，tan60°=√3；②${sol}；③=${answer}`;
  }
  if (/√2\/2\+√2\/2/.test(sol)) {
    return `①代入特殊角三角函数值；②${sol}；③=${answer}`;
  }

  // --- 10. "负数奇数次幂为负" 等性质 ---
  if (/负数奇数次幂/.test(sol)) {
    return `①负数的奇数次幂为负，偶数次幂为正；②${answer}`;
  }

  // --- 11. 判别式 Δ ---
  if (/^Δ\s*=/.test(sol) && sol.length < 20) {
    return `①计算判别式Δ=b²-4ac；②${sol}；③判断根的情况`;
  }

  // --- 12. 面积比=相似比² ---
  if (/面积比/.test(sol) && sol.length < 25) {
    return `①相似三角形面积比=相似比的平方；②${sol}；③=${answer}`;
  }

  // --- 13. 圆心距/弦长 ---
  if (/弦心距/.test(sol) && sol.length < 20) {
    return `①弦心距⊥弦且平分弦；②${sol}`;
  }
  if (/d²\+\d+²=\d+²/.test(sol)) {
    return `①圆心到弦的距离d⊥弦，将弦一分为二；②Rt△中${sol}；③d=${answer}`;
  }

  // --- 14. 对称规则 ---
  if (/对称/.test(sol) && /取反/.test(sol) && sol.length < 20) {
    return `①对称变换规则：${sol}；②代入坐标得${answer}`;
  }

  // --- 15. 联立求交点 ---
  if (/^联立/.test(sol) && sol.length < 25) {
    return `①将两个方程联立；②${sol}；③交点${answer}`;
  }

  // --- 16. 代入法 ---
  if (/代入/.test(sol) && sol.length < 20) {
    return `①${sol}；②解得${answer}`;
  }

  // --- 17. 方差/均值性质 ---
  if (/方差越小/.test(sol)) {
    return `①方差衡量数据波动程度；②方差越小→数据越集中→越稳定；③${answer}`;
  }
  if (/均值不变/.test(sol) || /均值本身/.test(sol)) {
    return `①新数据=原均值→对均值无影响；②${sol}；③=${answer}`;
  }

  // --- 18. 先乘除后加减 ---
  if (/先乘除/.test(sol)) {
    return `①运算顺序：先乘方→再乘除→后加减；②${sol}`;
  }

  // --- 19. 开方化简: "√(a×b)=c√d" ---
  if (/√\(\d+×\d+\)/.test(sol)) {
    return `①分解被开方数；②${sol}；③=${answer}`;
  }

  // --- 20. 平移规则 ---
  if (/平移/.test(sol) && sol.length < 20) {
    return `①平移变换规则：${sol}；②坐标变为${answer}`;
  }

  // --- 21. 相反数/绝对值基本概念 ---
  if (/相反数/.test(sol) && sol.length < 15) {
    return `①相反数：a的相反数是-a（符号相反，绝对值相同）；②${answer}`;
  }
  if (/算术平方根/.test(sol) && sol.length < 15) {
    return `①算术平方根只取非负值；②${sol}；③=${answer}`;
  }

  // --- 22. 直接读取 ---
  if (/^直接读取$/.test(sol.trim())) {
    return `①从解析式中直接识别系数；②${answer}`;
  }

  // --- 23. 基本概念/基本公式 ---
  if (/^基本概念$/.test(sol.trim()) || /^基本公式$/.test(sol.trim())) {
    return `①${topic}的基本定义和公式；②${answer}`;
  }

  // --- 24. 选择题逐项分析 ---
  if (type === 'choice' && sol.length < 30) {
    // 如果sol里已有 A/B/C/D 或分号分隔的逐项
    if (/[ABCD][.:：]/.test(sol)) {
      return `①逐项验证；②${sol}；③选${answer}`;
    }
  }

  // --- 25. 移项变号/移项合并 ---
  if (/移项/.test(sol) && sol.length < 15) {
    return `①将含x项移到左边，常数移到右边；②移项注意变号；③${sol}→${answer}`;
  }

  // --- 26. 角平分线/中位线等定理 ---
  if (/中位线/.test(sol) && sol.length < 20) {
    return `①中位线定理：连接两边中点的线段平行于第三边且等于其一半；②${sol}；③=${answer}`;
  }

  // --- 27. 通用短sol扩展（最后兜底） ---
  if (sol.length <= 12) {
    // 极短的，加上步骤框架
    if (type === 'choice') {
      return `①分析题意；②${sol}；③选${answer}`;
    }
    if (type === 'fill') {
      return `①${sol}；②答案：${answer}`;
    }
    if (type === 'solve') {
      return `①分析条件；②${sol}；③结论：${answer}`;
    }
  }

  // 对于 13-55 字的偏短sol，如果以上都没匹配，加步骤编号
  if (sol.length <= 55 && !sol.includes('；')) {
    // 单句sol，包裹成步骤
    if (type === 'choice') return `①${sol}；②选${answer}`;
    if (type === 'fill') return `①${sol}；②=${answer}`;
    return `①${sol}；②得${answer}`;
  }

  // 有分号但没步骤编号的，加编号
  if (sol.length <= 55 && sol.includes('；') && !/①/.test(sol)) {
    const parts = sol.split('；').filter(Boolean);
    const nums = ['①','②','③','④','⑤','⑥','⑦','⑧'];
    return parts.map((p, i) => (nums[i] || '') + p.trim()).join('；');
  }

  return null; // 无法扩展
}
