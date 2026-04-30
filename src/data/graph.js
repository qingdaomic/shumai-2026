// 数脉知识点依赖图
// 自动从 shumai-v7-1.jsx 拆分生成

import { TOPICS } from './topics.js';

const TOPIC_MAP = Object.fromEntries(TOPICS.map(t=>[t.id,t]));

/* ════════════════════════════════════════════════════════════
   双向知识图谱系统
   pre  → 前置知识（做错题时向下补差的路径）
   next → 上升知识（掌握后可进阶的知识点）
   groupIds  → 对应的题组训练（向上提升）
   finalIds  → 对应的压轴题组（最高提升）
════════════════════════════════════════════════════════════ */
const GRAPH = {
  rational:     { pre:[], next:["reals","poly","linear_eq","coords"],  groupIds:["tg15"],        finalIds:[] },
  reals:        { pre:["rational"], next:["pythagorean","quad_eq"],    groupIds:["tg06"],        finalIds:[] },
  poly:         { pre:["rational"], next:["factoring","linear_eq"],    groupIds:["tg14"],        finalIds:[] },
  factoring:    { pre:["poly"],     next:["fraction","quad_eq"],       groupIds:["tg14"],        finalIds:["fg09"] },
  fraction:     { pre:["factoring"],next:["linear_eq","inverse_fn"],   groupIds:["tg14"],        finalIds:[] },
  linear_eq:    { pre:["rational","poly"], next:["equations","inequality","linear_fn"], groupIds:["tg15"], finalIds:[] },
  quad_eq:      { pre:["factoring","reals"], next:["quad_fn"],         groupIds:["tg02","tg03"], finalIds:["fg01","fg02","fg09"] },
  equations:    { pre:["linear_eq"], next:["linear_fn"],               groupIds:["tg14"],        finalIds:[] },
  inequality:   { pre:["linear_eq"], next:["linear_fn"],               groupIds:["tg01"],        finalIds:[] },
  coords:       { pre:["rational"], next:["linear_fn","inverse_fn","quad_fn","transform"], groupIds:["tg13"], finalIds:["fg09"] },
  linear_fn:    { pre:["linear_eq","coords"], next:["quad_fn"],        groupIds:["tg01","tg14"], finalIds:["fg09","fg10"] },
  inverse_fn:   { pre:["coords","fraction"], next:["quad_fn"],         groupIds:["tg14"],        finalIds:[] },
  quad_fn:      { pre:["quad_eq","linear_fn","coords"], next:[],       groupIds:["tg02","tg03","tg06"], finalIds:["fg01","fg02","fg06","fg10"] },
  tri_basic:    { pre:[], next:["congruent","special_tri","similar"],  groupIds:["tg04"],        finalIds:[] },
  congruent:    { pre:["tri_basic"], next:["quadrilateral","similar"],  groupIds:["tg04"],        finalIds:["fg08"] },
  pythagorean:  { pre:["reals","tri_basic"], next:["trig","circle"],   groupIds:["tg06","tg08"], finalIds:["fg03","fg05"] },
  special_tri:  { pre:["tri_basic"], next:["quadrilateral"],           groupIds:["tg04","tg06"], finalIds:[] },
  quadrilateral:{ pre:["congruent","special_tri"], next:["similar"],   groupIds:["tg07"],        finalIds:["fg04","fg05"] },
  similar:      { pre:["congruent","coords"], next:["trig","circle"],  groupIds:["tg05","tg07"], finalIds:["fg03","fg05"] },
  trig:         { pre:["pythagorean","similar"], next:["circle"],      groupIds:["tg10"],        finalIds:["fg03"] },
  circle:       { pre:["pythagorean","similar"], next:[],              groupIds:["tg08","tg09"], finalIds:["fg03","fg04"] },
  transform:    { pre:["tri_basic","coords"], next:[],                 groupIds:["tg13"],        finalIds:[] },
  stats:        { pre:["rational"], next:["prob"],                     groupIds:["tg11"],        finalIds:[] },
  prob:         { pre:["stats","rational"], next:[],                   groupIds:["tg12"],        finalIds:[] },
};

// 向后兼容：DEPENDENCIES = GRAPH 的 pre 映射
const DEPENDENCIES = Object.fromEntries(Object.entries(GRAPH).map(([k,v])=>[k,v.pre]));

// Build reverse: topicId → which topics depend on it
const DEPENDENTS = {};
Object.entries(DEPENDENCIES).forEach(([tid, pres]) => {
  pres.forEach(pid => {
    if (!DEPENDENTS[pid]) DEPENDENTS[pid] = [];
    DEPENDENTS[pid].push(tid);
  });
});

/* Graph edges — 从 TOPICS.rel 生成 */
const seenE = new Set(), EDGES = [];
TOPICS.forEach(t => {
  t.rel.forEach(r => {
    const k = [t.id,r].sort().join("|");
    if (!seenE.has(k) && TOPIC_MAP[r]) { seenE.add(k); EDGES.push({a:t.id,b:r}); }
  });
});

export { GRAPH, EDGES, TOPIC_MAP, DEPENDENCIES, DEPENDENTS };
