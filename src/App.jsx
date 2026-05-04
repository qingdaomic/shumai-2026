import { useState, useRef, useEffect, useCallback, useMemo, createContext, useContext, Component } from "react";
import { C, METHODS } from "./data/constants.js";
import { TOPICS } from "./data/topics.js";
import { EXAM_QS } from "./data/exam-qs.js";
import { BASICS_BY_TOPIC, TOPIC_GROUPS, FINAL_GROUPS } from "./data/basics.js";
import { GRAPH, EDGES, TOPIC_MAP, DEPENDENCIES, DEPENDENTS } from "./data/graph.js";
import { QUICK_DIAG_QS } from "./data/diag.js";

/* ── 主题色板 ──────────────────────────────────────────────── */
const THEMES = {
  dark:  {bg:"#040810",s1:"#080f1a",s2:"#0d1825",s3:"#152035",border:"#1a2d44",border2:"#223650",fg:"#dce8f8",text:"#dce8f8",muted:"#4a6882",dim:"#162030"},
  light: {bg:"#f4f7fb",s1:"#ffffff",s2:"#f0f4f9",s3:"#e6edf7",border:"#ccd8ea",border2:"#b8ccdf",fg:"#1a2a3a",text:"#1a2a3a",muted:"#6a8aaa",dim:"#dde8f5"},
  green: {bg:"#05120a",s1:"#091a0e",s2:"#0e2214",s3:"#132d1a",border:"#1b4024",border2:"#234f2e",fg:"#cceedd",text:"#cceedd",muted:"#489966",dim:"#0e2014"},
  sepia: {bg:"#191510",s1:"#221c13",s2:"#2b2318",s3:"#34291d",border:"#4c3c28",border2:"#5e4b33",fg:"#e8d4af",text:"#e8d4af",muted:"#9a8060",dim:"#1e160e"},
};
// 应用已保存的主题（在任何组件渲染前执行）
try{const _t=JSON.parse(localStorage.getItem("shumai_v7")||"{}").themeId;if(_t&&THEMES[_t])Object.assign(C,THEMES[_t]);}catch{}

/* ── Responsive Breakpoint System ────────────────────────────
   Breakpoints: Mobile < 640px | Tablet 640-1023px | Desktop ≥ 1024px
────────────────────────────────────────────────────────────── */
const BPCtx = createContext({ isMobile: false, isTablet: false });
const useBP = () => useContext(BPCtx);
function useWindowSize() {
  const getW = () => typeof window !== "undefined" ? window.innerWidth : 1280;
  const [w, setW] = useState(getW);
  useEffect(() => {
    const fn = () => setW(window.innerWidth);
    window.addEventListener("resize", fn);
    return () => window.removeEventListener("resize", fn);
  }, []);
  return { isMobile: w < 640, isTablet: w >= 640 && w < 1024 };
}

const DOM = { algebra:{name:"数与代数",color:C.alg}, geometry:{name:"图形与几何",color:C.geo}, stats:{name:"统计与概率",color:C.sta} };

const Tag = ({c=C.muted,children,sm})=>(
  <span style={{padding:sm?"1px 7px":"2px 10px",borderRadius:20,fontSize:sm?10:11,fontWeight:600,
    background:c+"1a",color:c,border:`1px solid ${c}30`}}>{children}</span>
);
const Bar = ({v,color,h=4})=>(
  <div style={{flex:1,height:h,borderRadius:h,background:C.dim,overflow:"hidden"}}>
    <div style={{width:`${Math.min(v,100)}%`,height:"100%",background:color,
      borderRadius:h,transition:"width .5s ease"}}/>
  </div>
);
const Dots = ({v,c,max=5})=>(
  <div style={{display:"flex",gap:3}}>
    {Array.from({length:max},(_,i)=>(
      <div key={i} style={{width:7,height:7,borderRadius:2,background:i<v?c:C.dim}}/>
    ))}
  </div>
);
const YearRow = ({years})=>{
  const all=[2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025];
  return(
    <div style={{display:"flex",gap:2}}>
      {all.map(y=>{
        const hit=years.includes(y);
        return <div key={y} title={`${y}`} style={{width:20,height:20,borderRadius:3,
          fontSize:13,fontWeight:700,display:"flex",alignItems:"center",justifyContent:"center",
          background:hit?C.alg+"30":C.dim,color:hit?C.alg:C.muted,border:`1px solid ${hit?C.alg+"50":C.border}`}}>
          {String(y).slice(2)}
        </div>;
      })}
    </div>
  );
};
const BtnPill = ({label,active,onClick,color=C.alg,badge})=>(
  <button onClick={onClick} style={{padding:"5px 13px",borderRadius:7,cursor:"pointer",fontSize:16,
    fontWeight:600,border:`1px solid ${active?color:C.border}`,
    background:active?color+"22":"transparent",color:active?color:C.muted,
    transition:"all .15s",display:"flex",alignItems:"center",gap:4}}>
    {label}
    {badge!==undefined&&badge>0&&<span style={{background:C.red,color:"white",fontSize:13,
      fontWeight:700,padding:"1px 5px",borderRadius:10}}>{badge}</span>}
  </button>
);

/* ════════════════════════════════════════════════════════════
   SERVICE LAYER — 数据访问抽象层
   目的：统一数据访问入口，为后续替换为真实 API 做准备。
   约定：新增组件和重构组件优先使用这些函数，而非直接访问数据常量。
════════════════════════════════════════════════════════════ */

// ── 存储服务 ──────────────────────────────────────────────
const _SK = "shumai_v7";
const storageService = {
  load() {
    try { return JSON.parse(localStorage.getItem(_SK) || "{}"); } catch { return {}; }
  },
  save(patch) {
    try {
      const prev = this.load();
      localStorage.setItem(_SK, JSON.stringify({ ...prev, ...patch }));
    } catch {}
  },
  getMastered()       { return new Set(this.load().mastered       || []); },
  getWrongBook()      { return new Set(this.load().wrongSet       || []); },
  getBasicWrongBook() { return new Set(this.load().basicWrongSet  || []); },
  getAiSettings() {
    const d = this.load();
    return { aiModel: d.aiModel || "deepseek-chat", dsKey: d.dsKey || "", dbKey: d.dbKey || "" };
  },
  saveMastered(set)       { this.save({ mastered:       [...set] }); },
  saveWrongBook(set)      { this.save({ wrongSet:       [...set] }); },
  saveBasicWrongBook(set) { this.save({ basicWrongSet:  [...set] }); },
  clearProgress() {
    const { aiModel, dsKey, dbKey } = this.getAiSettings();
    try { localStorage.setItem(_SK, JSON.stringify({ aiModel, dsKey, dbKey })); } catch {}
  },
};

// ── 知识点服务 ────────────────────────────────────────────
const topicService = {
  getAll()           { return TOPICS; },
  getByCode(code)    { return TOPICS.find(t => t.id === code) || null; },
  getByCategory(cat) { return TOPICS.filter(t => t.cat === cat); },
  getCodes()         { return TOPICS.map(t => t.id); },
};

// ── 子知识点 → 父级基础题映射（194个topic中170个无独立题，回退到24个核心父级）──
const BASICS_PARENT_MAP = {
  rational_add:'rational', rational_sub:'rational', rational_mixed:'rational',
  rational_mul:'rational', rational_div:'rational', rational_power:'rational',
  rational_calc:'rational', number_line:'rational', abs_value:'rational',
  irrational_concept:'reals', square_root:'reals', cube_root:'reals',
  real_estimate:'reals', radical:'reals', radical_simplify:'reals',
  radical_calc:'reals', abs_sqrt:'reals', approx_num:'reals',
  algebra_expr:'poly', sci_notation:'poly', power_rules:'poly',
  variable_intro:'poly', combine_like:'poly', remove_brackets:'poly',
  mono_poly:'poly', poly_add_sub:'poly', poly_mul:'poly', poly_div:'poly',
  sq_diff_formula:'poly', perfect_sq_formula:'poly', explore_pattern:'poly',
  factor_gcf:'factoring', factor_formula:'factoring', factor_cross:'factoring', factor_group:'factoring',
  fraction_concept:'fraction', fraction_calc:'fraction', fraction_eq:'fraction',
  fraction_eq_app:'fraction', ratio_proportion:'fraction', golden_ratio:'fraction',
  eq_concept:'linear_eq', eq_solve:'linear_eq', eq_app:'linear_eq',
  eq_substitution:'equations', eq_addition:'equations', eq_system_app:'equations', eq_fn_intersection:'equations',
  ineq_property:'inequality', ineq_solve:'inequality', ineq_group:'inequality',
  ineq_fn:'inequality', inequality_app:'inequality',
  fn_concept:'linear_fn', fn_represent:'linear_fn', proportional_fn:'linear_fn',
  linear_fn_graph:'linear_fn', linear_fn_expr:'linear_fn', linear_fn_app:'linear_fn',
  inverse_fn_graph:'inverse_fn', inverse_fn_area:'inverse_fn', inverse_fn_app:'inverse_fn',
  quad_fn_basic:'quad_fn', quad_fn_vertex:'quad_fn', quad_fn_property:'quad_fn',
  quad_fn_expr:'quad_fn', quad_fn_max:'quad_fn', quad_fn_eq:'quad_fn',
  quad_fn_synthesis:'quad_fn', quad_fn_app:'quad_fn',
  quad_eq_def:'quad_eq', quad_eq_solve:'quad_eq', quad_eq_discriminant:'quad_eq',
  quad_eq_vieta:'quad_eq', quad_eq_app:'quad_eq', quad_eq_real_app:'quad_eq',
  coord_quadrant:'coords', coord_symmetry:'coords', distance_formula:'coords',
  lines_angles:'tri_basic', segment_compare:'tri_basic', angle_measure:'tri_basic',
  angle_compare:'tri_basic', parallel_perp:'tri_basic', angle_relations:'tri_basic',
  parallel_lines:'tri_basic', vertical_angle:'tri_basic', three_angle_types:'tri_basic',
  parallel_proof:'tri_basic', tri_interior_angle:'tri_basic', tri_exterior_angle:'tri_basic',
  tri_sides:'tri_basic', tri_special_lines:'tri_basic', ruler_compass:'tri_basic',
  congruent_sss:'congruent', congruent_sas:'congruent', congruent_asa:'congruent',
  congruent_hl:'congruent', congruent_app:'congruent', proof_logic:'congruent',
  perp_bisector:'congruent', angle_bisector:'congruent', counter_proof:'congruent',
  isosceles:'special_tri', iso_property:'special_tri', iso_judge:'special_tri', equilateral_tri:'special_tri',
  pythagorean_inv:'pythagorean', pyth_app:'pythagorean', pyth_triples:'pythagorean',
  right_tri_proof:'pythagorean', solid_geo:'pythagorean', three_views:'pythagorean',
  solid_vol:'pythagorean', projection_parallel:'pythagorean', projection_center:'pythagorean',
  expand_fold:'pythagorean',
  midline:'quadrilateral', polygon_angle:'quadrilateral', special_quad:'quadrilateral',
  trapezoid:'quadrilateral', tessellation:'quadrilateral', quad_special:'quadrilateral',
  similar_judge:'similar', similar_property:'similar', parallel_cut:'similar', similar_transform:'similar',
  symmetry_axis:'transform', sym_property:'transform', sym_shortest_path:'transform',
  translation:'transform', rotation:'transform', rotation_coord:'transform', central_sym:'transform',
  trig_def:'trig', trig_special:'trig', solve_rt_tri:'trig', trig_app:'trig',
  circle_basic:'circle', circle_angle:'circle', circle_tangent:'circle', arc_area:'circle',
  circle_symmetry:'circle', chord_relation:'circle', inscribed_angle_90:'circle',
  inscribed_quad:'circle', circle_determine:'circle', line_circle_pos:'circle',
  tangent_judge:'circle', tangent_length:'circle', circle_circle_pos:'circle', cone_surface:'circle',
  stat_chart:'stats', bar_line_chart:'stats', pie_chart:'stats', mean_median:'stats',
  variance:'stats', frequency:'stats', data_collect:'stats', data_representative:'stats',
  weighted_mean:'stats', census_sample:'stats', std_deviation:'stats',
  stat_prob_synthesis:'stats', data_life_app:'stats',
  classical_prob:'prob', tree_diagram:'prob', prob_fair:'prob',
  prob_method:'prob', possibility:'prob', event_type:'prob', stat_prob_app:'prob',
};

// ── 题目服务 ──────────────────────────────────────────────
const questionService = {
  getExamQuestions({ topic, city, yr, diff, type } = {}) {
    let qs = EXAM_QS;
    if (topic) qs = qs.filter(q => q.topic === topic || (q.subTopics && q.subTopics.includes(topic)));
    if (city)  qs = qs.filter(q => q.city === city);
    if (yr)    qs = qs.filter(q => q.yr === yr);
    if (diff)  qs = qs.filter(q => q.diff === diff);
    if (type)  qs = qs.filter(q => q.type === type);
    return qs;
  },
  getExamById(id)  { return EXAM_QS.find(q => q.id === id) || null; },
  getExamCount()   { return EXAM_QS.length; },

  getBasicParent(topicCode) { return BASICS_PARENT_MAP[topicCode] || null; },
  getBasicByTopic(topicCode) {
    if (BASICS_BY_TOPIC[topicCode]) return BASICS_BY_TOPIC[topicCode];
    const parent = BASICS_PARENT_MAP[topicCode];
    return parent ? BASICS_BY_TOPIC[parent] || [] : [];
  },
  getBasicById(id) {
    for (const qs of Object.values(BASICS_BY_TOPIC)) {
      const found = qs.find(q => q.id === id);
      if (found) return found;
    }
    return null;
  },
  getAllBasicTopicCodes() { return Object.keys(BASICS_BY_TOPIC); },
  getBasicCount() {
    return Object.values(BASICS_BY_TOPIC).reduce((s, qs) => s + qs.length, 0);
  },
};

// ── 解题方法服务 ──────────────────────────────────────────
const methodService = {
  getAll()              { return METHODS; },
  getById(id)           { return METHODS.find(m => m.id === id) || null; },
  getByTopic(topicCode) { return METHODS.filter(m => m.topics && m.topics.includes(topicCode)); },
  getByCategory(cat)    { return METHODS.filter(m => m.cat === cat); },
};

// ── 题组服务 ──────────────────────────────────────────────
const groupService = {
  getAllTopicGroups()    { return TOPIC_GROUPS; },
  getAllFinalGroups()    { return FINAL_GROUPS; },
  getTopicGroupById(id) { return TOPIC_GROUPS.find(g => g.id === id) || null; },
  getFinalGroupById(id) { return FINAL_GROUPS.find(g => g.id === id) || null; },
  getTopicGroupsByTopic(topicCode) {
    return TOPIC_GROUPS.filter(g => g.topics && g.topics.includes(topicCode));
  },
};

// ── 晨读服务 ──────────────────────────────────────────────
const morningService = {
  getByTopic(topicCode) { return MORNING_DATA[topicCode] || null; },
  getAll()              { return MORNING_DATA; },
};

// ── 数据校验（开发诊断，生产无副作用） ─────────────────────
function validateExamData() {
  const issues = [];
  const TRACKED = ["answer","sol","error","q","note","type","topic","score","diff"];
  EXAM_QS.forEach(q => {
    // JS 对象字面量重复键在运行时已被覆盖，无法直接检测。
    // 改为检测 answer/sol 是否为空、undefined 或异常短
    if (q.answer === undefined || q.answer === null || q.answer === "") {
      issues.push({ id: q.id, yr: q.yr, field: "answer", problem: "缺失或为空" });
    }
    if (q.sol === undefined || q.sol === null || q.sol === "") {
      issues.push({ id: q.id, yr: q.yr, field: "sol", problem: "缺失或为空" });
    }
    if (!q.topic) {
      issues.push({ id: q.id, yr: q.yr, field: "topic", problem: "缺失" });
    }
    if (!q.type || !["choice","fill","proof","calc"].includes(q.type)) {
      issues.push({ id: q.id, yr: q.yr, field: "type", problem: `无效值: ${q.type}` });
    }
  });

  const basicIssues = [];
  Object.entries(BASICS_BY_TOPIC).forEach(([code, qs]) => {
    qs.forEach(q => {
      if (!q.answer) basicIssues.push({ id: q.id, topic: code, field: "answer", problem: "缺失" });
      if (!q.sol)    basicIssues.push({ id: q.id, topic: code, field: "sol",    problem: "缺失" });
    });
  });

  const examCount   = EXAM_QS.length;
  const basicCount  = Object.values(BASICS_BY_TOPIC).reduce((s,qs)=>s+qs.length,0);

  console.groupCollapsed(`[ShuMai Data] 校验完成 · 真题 ${examCount} 道 · 基础题 ${basicCount} 道`);
  if (issues.length === 0 && basicIssues.length === 0) {
    console.log("✅ 无异常");
  } else {
    if (issues.length)      console.warn(`⚠️ 真题异常 ${issues.length} 条`, issues);
    if (basicIssues.length) console.warn(`⚠️ 基础题异常 ${basicIssues.length} 条`, basicIssues);
  }
  console.groupEnd();

  return { examCount, basicCount, issues, basicIssues };
}
// 仅在开发环境自动运行（生产环境 typeof process === 'undefined'）
if (typeof process === "undefined" || process.env?.NODE_ENV !== "production") {
  setTimeout(validateExamData, 0);
}


/* ════════════════════════════════════════════════════════════
   AI HELPER
════════════════════════════════════════════════════════════ */
/* ── 模型配置 ──────────────────────────────────────────────── */
const AI_MODELS = [
  { id:"deepseek-chat",             label:"DeepSeek V3",        provider:"deepseek", tag:"高性价比", color:"#00c4cc" },
  { id:"deepseek-reasoner",         label:"DeepSeek R1",        provider:"deepseek", tag:"深度推理", color:"#00c4cc" },
  { id:"doubao-pro-32k",            label:"豆包 Pro 32K",       provider:"doubao",   tag:"字节跳动", color:"#ff6b35" },
  { id:"doubao-pro-4k",             label:"豆包 Pro 4K",        provider:"doubao",   tag:"快速响应", color:"#ff6b35" },
  { id:"doubao-lite-32k",           label:"豆包 Lite 32K",      provider:"doubao",   tag:"轻量经济", color:"#ff6b35" },
];

// 全局模型选择（由 App 顶层管理，通过 window 传递给工具函数）
window.__SHUMAI_MODEL__ = window.__SHUMAI_MODEL__ || "deepseek-chat";
window.__SHUMAI_DSKEY__ = window.__SHUMAI_DSKEY__ || "";
window.__SHUMAI_DBKEY__ = window.__SHUMAI_DBKEY__ || "";

async function callAI(system, user, history=[]) {
  const modelId = window.__SHUMAI_MODEL__ || "deepseek-chat";
  const model = AI_MODELS.find(m => m.id === modelId) || AI_MODELS[0];

  // 构建 OpenAI 格式消息（DeepSeek 和豆包都兼容）
  const openaiMessages = [
    { role:"system", content:system },
    ...history.map(m=>({role:m.r==="user"?"user":"assistant", content:m.t})),
    { role:"user", content:user },
  ];

  if (model.provider === "deepseek") {
    const key = window.__SHUMAI_DSKEY__ || "";
    if (!key) return "⚠️ 请先在右上角设置 DeepSeek API Key";
    const res = await fetch("https://api.deepseek.com/chat/completions", {
      method:"POST",
      headers:{"Content-Type":"application/json","Authorization":`Bearer ${key}`},
      body:JSON.stringify({ model:modelId, messages:openaiMessages, max_tokens:1000 }),
    });
    const d = await res.json();
    return d.choices?.[0]?.message?.content || "请重试";

  } else if (model.provider === "doubao") {
    const key = window.__SHUMAI_DBKEY__ || "";
    if (!key) return "⚠️ 请先在右上角设置豆包 API Key";
    const res = await fetch("https://ark.cn-beijing.volces.com/api/v3/chat/completions", {
      method:"POST",
      headers:{"Content-Type":"application/json","Authorization":`Bearer ${key}`},
      body:JSON.stringify({ model:modelId, messages:openaiMessages, max_tokens:1000 }),
    });
    const d = await res.json();
    return d.choices?.[0]?.message?.content || "请重试";

  } else {
    return "⚠️ 不支持的模型";
  }
}

// 兼容旧调用
const callClaude = callAI;

/* ════════════════════════════════════════════════════════════
   语音讲解 TTS — 微软 Edge 朗读服务 · 晓晓中文女声
   使用 Edge 浏览器内置朗读接口，支持跨域，免费无需Key
════════════════════════════════════════════════════════════ */
window.__TTS_SPEAKING__ = false;
window.__TTS_AUDIO__ = null;

// 步骤1：获取会话Token
async function getMSToken() {
  try {
    const r = await fetch(
      "https://azure.microsoft.com/en-us/services/cognitive-services/text-to-speech/",
      {method:"GET", mode:"no-cors"}
    );
  } catch {}
  // 使用固定的受信任客户端Token（Edge浏览器内置）
  return "6A5AA1D4EAFF4E9FB37E23D68491D6F4";
}

// 步骤2：调用Bing TTS接口合成音频
async function fetchMSTTS(text) {
  const token = "6A5AA1D4EAFF4E9FB37E23D68491D6F4";
  const voice = "zh-CN-XiaoxiaoNeural";
  const lang  = "zh-CN";

  const ssml = `<speak version='1.0' xml:lang='${lang}'>
<voice xml:lang='${lang}' xml:gender='Female' name='${voice}'>
<prosody rate='0%'>${text.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}</prosody>
</voice></speak>`;

  try {
    const res = await fetch(
      `https://speech.platform.bing.com/consumer/speech/synthesize/realtimestreaming/voice/1?TrustedClientToken=${token}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/ssml+xml",
          "X-Microsoft-OutputFormat": "audio-24khz-48kbitrate-mono-mp3",
          "X-FD-ImpressionGUID": crypto.randomUUID ? crypto.randomUUID() : Math.random().toString(36).slice(2),
        },
        body: ssml,
      }
    );
    if (!res.ok) return null;
    const blob = await res.blob();
    if (blob.size < 100) return null;  // 空响应
    return URL.createObjectURL(blob);
  } catch(e) {
    return null;
  }
}

function speakText(text, onStart, onEnd) {
  stopSpeak();
  fetchMSTTS(text).then(url => {
    if (url) {
      const audio = new Audio(url);
      window.__TTS_AUDIO__ = audio;
      audio.oncanplaythrough = () => {
        window.__TTS_SPEAKING__ = true;
        onStart && onStart();
        audio.play().catch(() => {
          // 自动播放被拦截（常见于Safari）→ 降级
          URL.revokeObjectURL(url);
          window.__TTS_AUDIO__ = null;
          fallbackSpeak(text, onStart, onEnd);
        });
      };
      audio.onended = () => {
        window.__TTS_SPEAKING__ = false;
        URL.revokeObjectURL(url);
        window.__TTS_AUDIO__ = null;
        onEnd && onEnd();
      };
      audio.onerror = () => {
        window.__TTS_SPEAKING__ = false;
        window.__TTS_AUDIO__ = null;
        URL.revokeObjectURL(url);
        fallbackSpeak(text, onStart, onEnd);
      };
      audio.load();
    } else {
      fallbackSpeak(text, onStart, onEnd);
    }
  }).catch(() => fallbackSpeak(text, onStart, onEnd));
}

// 降级：浏览器原生TTS
function fallbackSpeak(text, onStart, onEnd) {
  if (!window.speechSynthesis) { onEnd && onEnd(); return; }
  window.speechSynthesis.cancel();
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = "zh-CN"; utter.rate = 1.0;
  const voices = window.speechSynthesis.getVoices();
  const v = voices.find(v=>v.lang.startsWith("zh-CN")) || voices.find(v=>v.lang.startsWith("zh"));
  if (v) utter.voice = v;
  utter.onstart = ()=>{ window.__TTS_SPEAKING__=true; onStart&&onStart(); };
  utter.onend = ()=>{ window.__TTS_SPEAKING__=false; onEnd&&onEnd(); };
  utter.onerror = ()=>{ window.__TTS_SPEAKING__=false; onEnd&&onEnd(); };
  window.speechSynthesis.speak(utter);
}

function stopSpeak() {
  if (window.__TTS_AUDIO__) {
    window.__TTS_AUDIO__.pause();
    window.__TTS_AUDIO__ = null;
  }
  window.speechSynthesis && window.speechSynthesis.cancel();
  window.__TTS_SPEAKING__ = false;
}

// 生成语音讲解文稿（调用AI）
async function genVoiceScript(q, topicName) {
  const system = `你是数脉AI数学老师，用简洁、口语化的中文为初中生讲解错题。
格式要求：
1. 先说这道题考的核心知识点（1句）
2. 指出做错的最常见原因（1句）
3. 说清楚正确解法的关键步骤（2-3句）
4. 最后给一个记忆口诀或技巧（1句）
总字数控制在100字以内，直接口语朗读，不要用标点符号分段，不要说"同学你好"之类的开场白。`;
  const user = `知识点：${topicName}
题目：${q.content}
答案：${q.answer}
易错点：${q.error}
请生成语音讲解。`;
  return await callAI(system, user);
}

/* ════════════════════════════════════════════════════════════
   每日晨读卡数据 — 24个知识点口诀+易错点
════════════════════════════════════════════════════════════ */
const MORNING_DATA = {
  rational:     { slogan:"正负零分整，绝对值取正，异号相加取大减小，同号相乘得正", trap:"(-2)²=4，但-2²=-4，括号位置不同结果不同" },
  reals:        { slogan:"有理加无理等于实数，√负数无意义，√a²=|a|不是a", trap:"√4=2不是±2，算术平方根只取正值" },
  poly:         { slogan:"同底数幂相乘指数加，乘方再乘方指数乘，合并同类项系数加", trap:"(a+b)²≠a²+b²，中间项2ab不能忘" },
  factoring:    { slogan:"先提公因式，再看平方差，再试完全平方，十字相乘凑积和", trap:"分解要彻底，(a²-b²)还能继续分解成(a+b)(a-b)" },
  linear_eq:    { slogan:"移项变号，系数化一，去分母要乘每一项", trap:"去括号时负号要分配到括号内每一项" },
  coords:       { slogan:"x轴横y轴纵，象限顺序逆时针，距离公式先作差再开方", trap:"中点公式是坐标各取均值，对称点是坐标取反" },
  congruent:    { slogan:"SSS/SAS/ASA/AAS/HL，SAS中角必须是夹角，SSA不能判全等", trap:"对应顶点顺序不能写错，AAS中边是角的对边" },
  pythagorean:  { slogan:"直角三角形a²+b²=c²，逆定理满足则是直角三角形，3-4-5背熟", trap:"斜边是最长边c，别把直角边当斜边" },
  special_tri:  { slogan:"等腰三角形三线合一，等边三角形三角60°，30-60-90边长比1:√3:2", trap:"三线合一只在顶角处，底角角平分线不是中线" },
  quadrilateral:{ slogan:"平行四边形5种判定，矩形对角线相等，菱形对角线垂直，正方形全有", trap:"对角线相等不一定是矩形，等腰梯形对角线也相等" },
  similar:      { slogan:"AA判定两角相等，相似比k则边长比k，面积比k²，周长比k", trap:"面积比是相似比的平方，不是相似比本身" },
  linear_fn:    { slogan:"k>0向右上倾，k<0向右下倾，b>0截正y轴，b<0截负y轴", trap:"k和b的符号要分开判断，决定图像不同特征" },
  inverse_fn:   { slogan:"k>0在一三象限，k<0在二四象限，各支内单调递减", trap:"不同象限间不能比较函数值大小，各支独立" },
  equations:    { slogan:"代入消元适合系数为1，加减消元适合系数整齐，联立求交点", trap:"代入后展开括号别忘乘法分配律" },
  inequality:   { slogan:"移项变号，乘除负数要变号，解集用数轴表示，不等式组取交集", trap:"乘以负数一定要变号，这是最高频失分点" },
  quad_eq:      { slogan:"Δ=b²-4ac，Δ>0两实根，Δ=0重根，Δ<0无实根，韦达定理和=-b/a积=c/a", trap:"韦达定理：两根之和是-b/a不是b/a，符号别搞反" },
  quad_fn:      { slogan:"配方求顶点，a>0开口向上，对称轴x=-b/2a，零点令y=0解方程", trap:"顶点纵坐标配方后要重新计算，不是直接代c" },
  fraction:     { slogan:"分式方程去分母乘各项，解完必须验根，使分母为0的根要舍去", trap:"忘记验根是最常见错误，一定要代入原方程检验" },
  trig:         { slogan:"sinA=对/斜，cosA=邻/斜，tanA=对/邻，SOH-CAH-TOA，30/45/60特殊值背熟", trap:"对边和邻边相对某个角，角变了对邻也变了" },
  circle:       { slogan:"圆周角=圆心角/2，直径所对圆周角=90°，切线⊥半径，切线长相等", trap:"圆周角和圆心角要对应同一段弧，弧搞错结论就错" },
  transform:    { slogan:"平移x y各加减，x轴对称y取反，y轴对称x取反，原点对称都取反", trap:"旋转90°公式：逆时针(x,y)→(-y,x)，顺时针→(y,-x)" },
  prob:         { slogan:"古典概型P=满足条件数/总数，列表或树状图不遗漏，对立事件P+P'=1", trap:"列举必须系统完整，用对立事件可简化复杂计算" },
  stats:        { slogan:"均值=总和/个数，中位数排序取中间，众数出现最多，方差越小越稳定", trap:"平移不改变方差，数据×k后方差变k²倍" },
  tri_basic:    { slogan:"三角形内角和180°，外角=两不相邻内角之和，中位线=底边一半且平行", trap:"外角定理中外角是延长线上的角，不是相邻的内角" },
};

const SEMESTER_TOPICS = {
  "7a": TOPICS.filter(t=>t.semester==="7a").map(t=>t.id),
  "7b": TOPICS.filter(t=>t.semester==="7b").map(t=>t.id),
  "8a": TOPICS.filter(t=>t.semester==="8a").map(t=>t.id),
  "8b": TOPICS.filter(t=>t.semester==="8b").map(t=>t.id),
  "9a": TOPICS.filter(t=>t.semester==="9a").map(t=>t.id),
  "9b": TOPICS.filter(t=>t.semester==="9b").map(t=>t.id),
};
const GRADE_TOPICS = {
  7: [...SEMESTER_TOPICS["7a"],...SEMESTER_TOPICS["7b"]],
  8: [...SEMESTER_TOPICS["8a"],...SEMESTER_TOPICS["8b"]],
  9: [...SEMESTER_TOPICS["9a"],...SEMESTER_TOPICS["9b"]],
};

/* ════════════════════════════════════════════════════════════
   PAGE: 每日晨读卡
════════════════════════════════════════════════════════════ */
function PageMorning({mastered,wrongSet,basicWrongSet}) {
  const {isMobile}=useBP();
  const MKEY = "shumai_morning";
  const loadM = () => { try { return JSON.parse(localStorage.getItem(MKEY)||"{}"); } catch { return {}; } };
  const saveM = (p) => { try { const prev=loadM(); localStorage.setItem(MKEY,JSON.stringify({...prev,...p})); } catch {} };
  const _m = loadM();

  const [step,setStep]       = useState("setup");
  const [mode,setMode]       = useState(_m.mode||"grade");
  const [grade,setGrade]     = useState(_m.grade||9);
  const [customIds,setCustomIds] = useState(new Set(_m.customIds||[]));
  const [cards,setCards]     = useState([]);
  const [cardIdx,setCardIdx] = useState(0);
  const [flipped,setFlipped] = useState(false);
  const [results,setResults] = useState({});
  const [streak,setStreak]   = useState(_m.streak||0);
  const [weakMap,setWeakMap] = useState(_m.weakMap||{});
  const today = new Date().toDateString();
  const [doneToday,setDoneToday] = useState(_m.lastDate===today&&_m.doneToday);

  const buildCards = () => {
    let pool = [];
    if (mode==="grade") {
      for (let g=7;g<=grade;g++) pool=[...pool,...(GRADE_TOPICS[g]||[])];
    } else {
      pool = [...customIds];
    }
    if (!pool.length) return [];
    const sorted = [...pool].sort((a,b)=>(weakMap[b]||0)-(weakMap[a]||0));
    return sorted.slice(0,5).map(id=>TOPIC_MAP[id]).filter(Boolean);
  };

  const startReading = () => {
    const c = buildCards();
    if (!c.length) return;
    setCards(c); setCardIdx(0); setFlipped(false); setResults({});
    setStep("reading");
    saveM({mode,grade,customIds:[...customIds]});
  };

  const handleResult = (topicId,ok) => {
    const nr = {...results,[topicId]:ok};
    setResults(nr);
    const nw = {...weakMap};
    nw[topicId] = ok ? Math.max(0,(nw[topicId]||0)-1) : (nw[topicId]||0)+1;
    setWeakMap(nw);
    if (cardIdx<cards.length-1) { setCardIdx(cardIdx+1); setFlipped(false); }
    else {
      const yesterday = new Date(Date.now()-86400000).toDateString();
      const ns = _m.lastDate===yesterday ? streak+1 : 1;
      setStreak(ns); setDoneToday(true);
      saveM({weakMap:nw,streak:ns,lastDate:today,doneToday:true});
      setStep("done");
    }
  };

  const toggleCustom = id => {
    const n = new Set(customIds);
    n.has(id)?n.delete(id):n.add(id);
    setCustomIds(n);
  };

  const curCard = cards[cardIdx];
  const curData = curCard ? MORNING_DATA[curCard.id] : null;
  const correctCount = Object.values(results).filter(Boolean).length;
  const weakTopics = cards.filter(c=>results[c.id]===false);

  /* ── 设置页 ── */
  if (step==="setup") return (
    <div style={{padding:22,maxWidth:660,margin:"0 auto"}}>
      <div style={{textAlign:"center",marginBottom:28}}>
        <div style={{fontSize:44,marginBottom:8}}>☀️</div>
        <h2 style={{fontSize:24,fontWeight:900,color:C.text,marginBottom:6}}>每日晨读卡</h2>
        <p style={{fontSize:16,color:C.muted}}>每天3分钟，巩固核心知识点</p>
        {streak>0&&<div style={{marginTop:8,fontSize:15,color:C.gold}}>🔥 已连续晨读 {streak} 天</div>}
        {doneToday&&<div style={{marginTop:10,padding:"8px 18px",background:C.ok+"1a",
          borderRadius:8,fontSize:15,color:C.ok,display:"inline-block"}}>✅ 今日已完成晨读</div>}
      </div>

      <div style={{background:C.s1,border:`1px solid ${C.border}`,borderRadius:14,padding:20,marginBottom:16}}>
        <div style={{fontSize:16,fontWeight:700,color:C.text,marginBottom:14}}>选择模式</div>
        <div style={{display:"flex",gap:10,marginBottom:18}}>
          {[["grade","📚 按年级"],["custom","✏️ 自选知识点"]].map(([v,l])=>(
            <button key={v} onClick={()=>setMode(v)}
              style={{flex:1,padding:"10px 0",borderRadius:10,cursor:"pointer",
                fontSize:15,fontWeight:700,
                background:mode===v?C.alg+"22":"transparent",
                border:`2px solid ${mode===v?C.alg:C.border}`,
                color:mode===v?C.alg:C.muted}}>
              {l}
            </button>
          ))}
        </div>

        {mode==="grade"&&(
          <>
            <div style={{fontSize:15,color:C.muted,marginBottom:10}}>我是几年级？</div>
            <div style={{display:"flex",gap:10,marginBottom:12}}>
              {[7,8,9].map(g=>(
                <button key={g} onClick={()=>setGrade(g)}
                  style={{flex:1,padding:"12px 0",borderRadius:10,cursor:"pointer",
                    fontSize:18,fontWeight:900,
                    background:grade===g?C.alg:"transparent",
                    border:`2px solid ${grade===g?C.alg:C.border}`,
                    color:grade===g?"white":C.muted}}>
                  {g}年级
                </button>
              ))}
            </div>
            <div style={{fontSize:13,color:C.muted,lineHeight:1.8}}>
              复习范围：{Array.from({length:grade-6},(_,i)=>i+7)
                .flatMap(g=>GRADE_TOPICS[g])
                .map(id=>TOPIC_MAP[id]?.name).filter(Boolean).join("、")}
            </div>
          </>
        )}

        {mode==="custom"&&(
          <>
            <div style={{fontSize:15,color:C.muted,marginBottom:12}}>
              勾选要晨读的知识点（已选{customIds.size}个，每次最多取5张）
            </div>
            {[["7","七年级"],["8","八年级"],["9","九年级"]].map(([g,label])=>(
              <div key={g} style={{marginBottom:14}}>
                <div style={{fontSize:13,color:C.muted,fontWeight:700,
                  marginBottom:6,letterSpacing:1}}>{label}</div>
                <div style={{display:"flex",flexWrap:"wrap",gap:6}}>
                  {(GRADE_TOPICS[parseInt(g)]||[]).map(id=>{
                    const t=TOPIC_MAP[id]; if(!t)return null;
                    const sel=customIds.has(id);
                    const col=DOM[t.domain].color;
                    return(
                      <button key={id} onClick={()=>toggleCustom(id)}
                        style={{padding:"5px 13px",borderRadius:20,cursor:"pointer",
                          fontSize:14,fontWeight:sel?700:400,
                          background:sel?col+"22":"transparent",
                          border:`1px solid ${sel?col:C.border}`,
                          color:sel?col:C.muted}}>
                        {t.name}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </>
        )}
      </div>

      <button onClick={startReading}
        disabled={mode==="custom"&&customIds.size===0}
        style={{width:"100%",padding:16,borderRadius:12,cursor:"pointer",
          fontSize:18,fontWeight:900,letterSpacing:2,
          background:C.alg,color:"white",border:"none",
          opacity:mode==="custom"&&customIds.size===0?0.4:1}}>
        开始晨读 ☀️
      </button>
    </div>
  );

  /* ── 卡片页 ── */
  if (step==="reading"&&curCard&&curData) {
    const col = DOM[curCard.domain].color;
    return (
      <div style={{padding:22,maxWidth:600,margin:"0 auto"}}>
        {/* 进度条 */}
        <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:22}}>
          <span style={{fontSize:15,color:C.muted,whiteSpace:"nowrap"}}>{cardIdx+1}/{cards.length}</span>
          <div style={{flex:1,height:7,borderRadius:7,background:C.s2,overflow:"hidden"}}>
            <div style={{width:`${(cardIdx/cards.length)*100}%`,height:"100%",
              background:C.alg,borderRadius:7,transition:"width .4s ease"}}/>
          </div>
          <span style={{fontSize:15,color:C.gold}}>☀️</span>
        </div>

        {/* 卡片主体 */}
        <div style={{background:C.s1,
          border:`2px solid ${flipped?C.ok:col}44`,
          borderRadius:20,padding:28,marginBottom:20,
          minHeight:300,display:"flex",flexDirection:"column",
          boxShadow:`0 8px 40px ${flipped?C.ok:col}12`,
          transition:"border-color .3s,box-shadow .3s"}}>

          <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:22}}>
            <div style={{width:5,height:36,borderRadius:3,background:col,flexShrink:0}}/>
            <div>
              <div style={{fontSize:22,fontWeight:900,color:C.text}}>{curCard.name}</div>
              <div style={{fontSize:13,color:col}}>{DOM[curCard.domain].name}</div>
            </div>
            {weakMap[curCard.id]>0&&(
              <div style={{marginLeft:"auto",padding:"3px 10px",borderRadius:20,
                background:C.red+"18",border:`1px solid ${C.red}33`,
                fontSize:13,color:C.red}}>
                ⚠️ 易错{weakMap[curCard.id]}次
              </div>
            )}
          </div>

          {!flipped?(
            <div style={{flex:1,display:"flex",flexDirection:"column",
              alignItems:"center",justifyContent:"center",gap:14,padding:"10px 0"}}>
              <div style={{fontSize:36,opacity:.25}}>🤔</div>
              <div style={{fontSize:17,color:C.muted,textAlign:"center",lineHeight:1.9}}>
                用自己的话说出<br/>
                <span style={{color:C.text,fontWeight:700}}>【{curCard.name}】</span><br/>
                的核心口诀和易错点
              </div>
              <button onClick={()=>setFlipped(true)}
                style={{marginTop:6,padding:"13px 36px",borderRadius:12,cursor:"pointer",
                  fontSize:16,fontWeight:700,background:C.alg,color:"white",border:"none"}}>
                想好了，翻开对照 →
              </button>
            </div>
          ):(
            <div style={{flex:1}}>
              <div style={{marginBottom:14,padding:"14px 16px",
                background:C.alg+"10",borderRadius:12,
                border:`1px solid ${C.alg}28`}}>
                <div style={{fontSize:13,color:C.alg,fontWeight:700,marginBottom:7}}>
                  📌 核心口诀
                </div>
                <div style={{fontSize:17,color:C.text,lineHeight:1.9,fontWeight:500}}>
                  {curData.slogan}
                </div>
              </div>
              <div style={{padding:"14px 16px",
                background:C.red+"0c",borderRadius:12,
                border:`1px solid ${C.red}22`}}>
                <div style={{fontSize:13,color:C.red,fontWeight:700,marginBottom:7}}>
                  ⚠️ 易错点
                </div>
                <div style={{fontSize:16,color:C.text,lineHeight:1.8}}>
                  {curData.trap}
                </div>
              </div>
            </div>
          )}
        </div>

        {flipped&&(
          <div style={{display:"flex",gap:12}}>
            <button onClick={()=>handleResult(curCard.id,false)}
              style={{flex:1,padding:"14px 0",borderRadius:12,cursor:"pointer",
                fontSize:16,fontWeight:700,background:C.red+"14",
                color:C.red,border:`2px solid ${C.red}44`}}>
              ❌ 还差，需巩固
            </button>
            <button onClick={()=>handleResult(curCard.id,true)}
              style={{flex:1,padding:"14px 0",borderRadius:12,cursor:"pointer",
                fontSize:16,fontWeight:700,background:C.ok+"14",
                color:C.ok,border:`2px solid ${C.ok}44`}}>
              ✅ 我说对了
            </button>
          </div>
        )}
      </div>
    );
  }

  /* ── 完成页 ── */
  if (step==="done") return (
    <div style={{padding:22,maxWidth:580,margin:"0 auto",textAlign:"center"}}>
      <div style={{fontSize:56,marginBottom:10}}>
        {correctCount===cards.length?"🌟":correctCount>=Math.ceil(cards.length/2)?"☀️":"💪"}
      </div>
      <h2 style={{fontSize:24,fontWeight:900,color:C.text,marginBottom:6}}>今日晨读完成！</h2>
      <div style={{fontSize:16,color:C.gold,marginBottom:24}}>
        🔥 已连续晨读 {streak} 天
      </div>

      <div style={{display:"flex",gap:12,justifyContent:"center",marginBottom:24}}>
        <div style={{background:C.ok+"1a",border:`1px solid ${C.ok}30`,
          borderRadius:14,padding:"18px 28px"}}>
          <div style={{fontSize:36,fontWeight:900,color:C.ok}}>{correctCount}</div>
          <div style={{fontSize:14,color:C.muted}}>说对了</div>
        </div>
        <div style={{background:C.red+"0d",border:`1px solid ${C.red}22`,
          borderRadius:14,padding:"18px 28px"}}>
          <div style={{fontSize:36,fontWeight:900,color:C.red}}>{cards.length-correctCount}</div>
          <div style={{fontSize:14,color:C.muted}}>需巩固</div>
        </div>
      </div>

      {weakTopics.length>0&&(
        <div style={{background:C.s1,border:`1px solid ${C.red}20`,
          borderRadius:14,padding:20,marginBottom:20,textAlign:"left"}}>
          <div style={{fontSize:15,fontWeight:700,color:C.red,marginBottom:14}}>
            📖 今日需要重点复习
          </div>
          {weakTopics.map(t=>{
            const d=MORNING_DATA[t.id];
            return(
              <div key={t.id} style={{marginBottom:14,padding:"12px 14px",
                background:C.s2,borderRadius:10}}>
                <div style={{fontSize:15,fontWeight:700,color:C.text,marginBottom:6}}>
                  {t.name}
                </div>
                <div style={{fontSize:14,color:C.alg,lineHeight:1.8,marginBottom:4}}>
                  📌 {d?.slogan}
                </div>
                <div style={{fontSize:13,color:C.red,lineHeight:1.7}}>
                  ⚠️ {d?.trap}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {correctCount===cards.length&&(
        <div style={{padding:14,background:C.gold+"14",borderRadius:12,
          border:`1px solid ${C.gold}30`,marginBottom:20,
          fontSize:15,color:C.gold}}>
          🎉 全部说对！继续保持！
        </div>
      )}

      <button onClick={()=>setStep("setup")}
        style={{width:"100%",padding:14,borderRadius:12,cursor:"pointer",
          fontSize:16,fontWeight:700,background:"transparent",
          color:C.muted,border:`1px solid ${C.border}`}}>
        返回
      </button>
    </div>
  );

  return null;
}

function traceRootCause(topicId, masteredSet) {
  // BFS向下找最浅的未掌握前置知识
  const queue = [topicId];
  const visited = new Set();
  const unmastered = [];

  while (queue.length > 0) {
    const tid = queue.shift();
    if (visited.has(tid)) continue;
    visited.add(tid);
    const pres = DEPENDENCIES[tid] || [];
    pres.forEach(pid => {
      if (!masteredSet.has(pid)) {
        unmastered.push(pid);
        queue.push(pid);
      }
    });
  }

  // 返回最底层未掌握的知识点（没有更早前置的）
  const roots = unmastered.filter(tid => {
    const pres = DEPENDENCIES[tid] || [];
    return pres.length === 0 || pres.every(p => masteredSet.has(p));
  });

  return { unmastered: [...new Set(unmastered)], roots: roots.length > 0 ? roots : [topicId] };
}

/* ════════════════════════════════════════════════════════════
   MODULE BADGE CONFIG
════════════════════════════════════════════════════════════ */
const MODULE_CONFIG = [
  {id:"m1",label:"基础知识",icon:"①",color:C.m1,desc:"175个知识点，概念五要素"},
  {id:"m2",label:"基础习题",icon:"②",color:C.m2,desc:"500道基础题，达到熟练化"},
  {id:"m3",label:"题组训练",icon:"③",color:C.m3,desc:"35组提高题，构建方法体系"},
  {id:"m4",label:"压轴题组",icon:"④",color:C.m4,desc:"20组压轴，催生解题灵感"},
];

/* ════════════════════════════════════════════════════════════
   PAGE: DASHBOARD
════════════════════════════════════════════════════════════ */
function PageHome({mastered,wrongSet,progress,onNav}) {
  const {isMobile,isTablet}=useBP();
  const total=TOPICS.length;
  const domStats=Object.entries(DOM).map(([k,d])=>{
    const all=TOPICS.filter(t=>t.domain===k);
    return {k,d,all,done:all.filter(t=>mastered.has(t.id)).length};
  });
  const topFreq=[...TOPICS].sort((a,b)=>b.freq-a.freq).slice(0,6);

  return(
    <div style={{padding:isMobile?12:28,maxWidth:1060,margin:"0 auto"}}>

      {/* ① Hero — 与第三框融合，加入完整题库数字 */}
      <div style={{background:`linear-gradient(135deg,${C.alg}14,${C.geo}10)`,
        border:`1px solid ${C.alg}25`,borderRadius:18,padding:isMobile?"18px 16px":"24px 28px",
        marginBottom:14,position:"relative",overflow:"hidden"}}>
        <div style={{position:"absolute",top:-80,right:-80,width:280,height:280,
          background:C.alg,borderRadius:"50%",opacity:.04}}/>
        {/* 上方：品牌 + 掌握进度 */}
        <div style={{display:"flex",alignItems:"flex-start",gap:16,flexWrap:"wrap",marginBottom:16}}>
          <div style={{flex:1}}>
            <div style={{fontSize:13,color:C.alg,letterSpacing:3,marginBottom:6,
              textTransform:"uppercase",fontWeight:700}}>
              青岛中考数学 · 智能学习系统
            </div>
            <h1 style={{margin:"0 0 6px",fontSize:isMobile?24:28,fontWeight:900,
              color:C.text,letterSpacing:-0.5}}>
              数脉 ShuMai
            </h1>
            <p style={{margin:0,fontSize:14,color:C.muted,lineHeight:1.7}}>
              10年命题知识图谱 · 四模块精准训练 · 23种解题方法 · 做题只做减法，冲满分
            </p>
          </div>
          <div style={{textAlign:"right",flexShrink:0}}>
            <div style={{fontSize:isMobile?32:38,fontWeight:900,color:C.ok,lineHeight:1}}>
              {mastered.size}<span style={{fontSize:18,color:C.muted}}>/{total}</span>
            </div>
            <div style={{fontSize:13,color:C.muted,marginBottom:6}}>知识点已掌握</div>
            <div style={{width:120}}>
              <Bar v={Math.round(mastered.size/total*100)} color={C.ok} h={6}/>
            </div>
            <div style={{fontSize:13,color:C.ok,marginTop:3}}>
              {Math.round(mastered.size/total*100)}% 完成
            </div>
          </div>
        </div>

        {/* 下方：题库数字横排 — 文字在上，数字在下 */}
        <div style={{display:"grid",
          gridTemplateColumns:isMobile?"repeat(4,1fr)":"repeat(7,1fr)",
          gap:8,borderTop:`1px solid ${C.border}`,paddingTop:14}}>
          {[
            {label:"10年真题",   val:EXAM_QS.length, c:C.alg,    click:()=>onNav("practice")},
            {label:"基础知识",   val:194,             c:C.geo,    click:()=>onNav("graph")},
            {label:"基础习题",   val:500,             c:C.m2,     click:()=>onNav("modules")},
            {label:"题组训练",   val:35,              c:C.m3,     click:()=>onNav("modules")},
            {label:"压轴题组",   val:20,              c:C.m4,     click:()=>onNav("modules")},
            {label:"真题错题本", val:wrongSet.size,   c:C.red,    click:()=>onNav("wrong")},
            {label:"解题方法",   val:23,              c:C.purple, click:()=>onNav("methods")},
          ].map(s=>(
            <button key={s.label} onClick={s.click}
              style={{background:C.s1+"aa",border:`1px solid ${s.c}22`,
                borderRadius:10,padding:"10px 6px",textAlign:"center",
                cursor:"pointer",transition:"border-color .2s"}}
              onMouseEnter={e=>e.currentTarget.style.borderColor=s.c+"66"}
              onMouseLeave={e=>e.currentTarget.style.borderColor=s.c+"22"}>
              <div style={{fontSize:isMobile?11:13,color:C.muted,marginBottom:5,
                lineHeight:1.3,minHeight:isMobile?28:34,display:"flex",
                alignItems:"center",justifyContent:"center",fontWeight:500}}>
                {s.label}
              </div>
              <div style={{fontSize:isMobile?16:20,fontWeight:900,color:s.c,lineHeight:1}}>
                {s.val}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* ② 今日任务 */}
      <div style={{background:`linear-gradient(135deg,${C.alg}08,${C.purple}06)`,
        border:`1px solid ${C.alg}25`,borderRadius:14,padding:"16px 20px",marginBottom:14}}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12}}>
          <h3 style={{margin:0,fontSize:16,fontWeight:800,color:C.text}}>📋 今日任务</h3>
          <span style={{fontSize:12,padding:"3px 10px",borderRadius:10,
            background:C.ok+"1a",color:C.ok,fontWeight:700}}>
            +{Math.min((mastered.size||0)*5,999)} XP
          </span>
        </div>
        <div style={{display:"grid",gridTemplateColumns:isMobile?"1fr 1fr":"repeat(4,1fr)",gap:8}}>
          {[
            {icon:"🔄",label:"错题复练",
              desc:wrongSet.size>0?`${Math.min(wrongSet.size,2)}道待复习`:"暂无错题",
              done:wrongSet.size===0,action:()=>onNav("wrong")},
            {icon:"📚",label:"新知识点",desc:"学习1个薄弱知识点",
              done:false,action:()=>onNav("modules")},
            {icon:"⚡",label:"挑战题",desc:"1道较难真题",
              done:false,action:()=>onNav("practice")},
            {icon:"☀️",label:"晨读卡",desc:"今日知识回顾",
              done:false,action:()=>onNav("morning")},
          ].map((t,i)=>(
            <button key={i} onClick={t.action}
              style={{display:"flex",alignItems:"center",gap:8,padding:"8px 10px",
                borderRadius:9,cursor:"pointer",textAlign:"left",
                background:t.done?C.ok+"10":C.s2,
                border:`1px solid ${t.done?C.ok+"33":C.border}`}}>
              <span style={{fontSize:18,flexShrink:0}}>{t.icon}</span>
              <div style={{flex:1,minWidth:0}}>
                <div style={{fontSize:13,fontWeight:600,
                  color:t.done?C.ok:C.text}}>{t.label}</div>
                <div style={{fontSize:11,color:C.muted,
                  overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>
                  {t.desc}
                </div>
              </div>
              <span style={{fontSize:14,color:t.done?C.ok:C.muted,flexShrink:0}}>
                {t.done?"✓":"→"}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* ③ 快速入口 */}
      <div style={{background:C.s1,border:`1px solid ${C.border}`,
        borderRadius:12,padding:"14px 16px",marginBottom:14}}>
        <h3 style={{margin:"0 0 10px",fontSize:15,color:C.text,
          textTransform:"uppercase",letterSpacing:1}}>🚀 快速入口</h3>
        <div style={{display:"grid",
          gridTemplateColumns:isMobile?"repeat(2,1fr)":isTablet?"repeat(4,1fr)":"repeat(5,1fr)",
          gap:8}}>
          {[
            {label:"📐 知识图谱",v:"graph",c:C.alg,desc:"24个核心节点"},
            {label:"📚 四模块学习",v:"modules",c:C.geo,desc:"基础到压轴"},
            {label:"✏️ 真题刷题",v:"practice",c:C.sta,desc:`${EXAM_QS.length}道中考题`},
            {label:"🔧 23种方法",v:"methods",c:C.purple,desc:"解题方法体系"},
            {label:"🤖 智能诊断",v:"diag",c:C.cyan,desc:"追因+学习路径"},
            {label:"🎯 中考预测",v:"predict",c:C.gold,desc:"命题规律分析"},
            {label:"📄 试卷分析",v:"paper",c:"#a78bfa",desc:"逆向拆解→模拟卷"},
            {label:"📸 作业识别",v:"ocr",c:"#22d3ee",desc:"拍照→AI批改"},
            {label:"🔥 考前冲刺",v:"sprint",c:"#f04f70",desc:"倒计时+阶段规划"},
            {label:"🤖 学伴Agent",v:"agent",c:"#a78bfa",desc:"AI个性化路径"},
          ].map(b=>(
            <button key={b.v} onClick={()=>onNav(b.v)}
              style={{padding:isMobile?"8px 10px":"10px 12px",borderRadius:10,
                cursor:"pointer",textAlign:"left",
                background:C.s2,border:`1px solid ${b.c}18`,transition:"all .2s"}}
              onMouseEnter={e=>{e.currentTarget.style.borderColor=b.c+"66";
                e.currentTarget.style.background=b.c+"0c";}}
              onMouseLeave={e=>{e.currentTarget.style.borderColor=b.c+"18";
                e.currentTarget.style.background=C.s2;}}>
              <div style={{fontSize:isMobile?13:14,fontWeight:700,
                color:b.c,marginBottom:isMobile?0:2}}>{b.label}</div>
              {!isMobile&&<div style={{fontSize:11,color:C.muted}}>{b.desc}</div>}
            </button>
          ))}
        </div>
      </div>

      {/* ④ 快速测试找起点 */}
      {!mastered.size&&(
        <button onClick={()=>onNav("quickdiag")}
          style={{width:"100%",display:"flex",alignItems:"center",gap:16,
            padding:"14px 20px",marginBottom:14,borderRadius:14,cursor:"pointer",
            background:`linear-gradient(135deg,${C.cyan}10,${C.alg}08)`,
            border:`1.5px solid ${C.cyan}33`,textAlign:"left",transition:"border-color .2s"}}
          onMouseEnter={e=>e.currentTarget.style.borderColor=C.cyan}
          onMouseLeave={e=>e.currentTarget.style.borderColor=C.cyan+"33"}>
          <span style={{fontSize:32,flexShrink:0}}>📐</span>
          <div style={{flex:1}}>
            <div style={{fontSize:17,fontWeight:700,color:C.text,marginBottom:3}}>
              快速测试，找起点
            </div>
            <div style={{fontSize:13,color:C.muted}}>
              10 道选择题，5 分钟，AI 帮你找到最佳学习起点
            </div>
          </div>
          <span style={{fontSize:14,color:C.cyan,fontWeight:700,flexShrink:0}}>开始 →</span>
        </button>
      )}

      {/* ⑤ 能力雷达 — 全宽，左竖排文字 + 右雷达等高 */}
      <div style={{background:C.s1,border:`1px solid ${C.border}`,borderRadius:14,
        padding:"18px 22px",marginBottom:14}}>
        <div style={{display:"flex",gap:24,alignItems:"stretch",flexWrap:isMobile?"wrap":"nowrap"}}>

          {/* 左：竖排 — 标题 / 打卡 / 经验值 / 方法卡 */}
          <div style={{flex:"0 0 auto",width:isMobile?"100%":220,display:"flex",
            flexDirection:"column",gap:12}}>
            <div style={{fontSize:15,fontWeight:700,color:C.text}}>📡 能力雷达</div>

            <div style={{padding:"10px 14px",borderRadius:10,
              background:`linear-gradient(135deg,${C.sta}12,${C.red}08)`,
              border:`1px solid ${C.sta}25`,display:"flex",alignItems:"center",gap:10}}>
              <span style={{fontSize:22}}>🔥</span>
              <div>
                <div style={{fontSize:20,fontWeight:900,color:C.sta,lineHeight:1}}>
                  {Math.min(mastered.size,99)}
                </div>
                <div style={{fontSize:12,color:C.muted}}>连续打卡天</div>
              </div>
            </div>

            <div style={{padding:"10px 14px",borderRadius:10,
              background:`linear-gradient(135deg,${C.gold}12,${C.sta}08)`,
              border:`1px solid ${C.gold}25`,display:"flex",alignItems:"center",gap:10}}>
              <span style={{fontSize:22}}>⭐</span>
              <div>
                <div style={{fontSize:20,fontWeight:900,color:C.gold,lineHeight:1}}>
                  {mastered.size*5+wrongSet.size*2}
                </div>
                <div style={{fontSize:12,color:C.muted}}>经验值 XP</div>
              </div>
            </div>

            <div style={{flex:1}}>
              <div style={{display:"flex",justifyContent:"space-between",
                alignItems:"center",marginBottom:6}}>
                <span style={{fontSize:13,fontWeight:700,color:C.muted}}>🃏 方法卡收集</span>
                <span style={{fontSize:12,color:C.purple}}>{Math.min(mastered.size,23)}/23</span>
              </div>
              <div style={{display:"flex",gap:3,flexWrap:"wrap"}}>
                {Array.from({length:23}).map((_,i)=>(
                  <div key={i} style={{width:18,height:22,borderRadius:3,
                    background:i<Math.min(mastered.size,23)?C.purple:C.s3,
                    border:`1px solid ${i<Math.min(mastered.size,23)?C.purple+"66":C.border}`,
                    display:"flex",alignItems:"center",justifyContent:"center",
                    fontSize:7,color:i<Math.min(mastered.size,23)?"white":C.dim}}>
                    {i<Math.min(mastered.size,23)?"✓":"?"}
                  </div>
                ))}
              </div>
              {mastered.size>=23&&(
                <div style={{marginTop:6,fontSize:12,color:C.gold,fontWeight:700}}>
                  🏆 方法大师！已集齐全部23张
                </div>
              )}
            </div>
          </div>

          {/* 右：雷达图 — 与左侧等高，固定宽度 */}
          <div style={{flex:1,minWidth:0,display:"flex",alignItems:"center",justifyContent:"center"}}>
            {(()=>{
              const dims=[
                {label:"代数",key:"algebra"},
                {label:"几何",key:"geometry"},
                {label:"统计",key:"stats"},
                {label:"函数",key:"algebra"},
                {label:"方法",key:"algebra"},
                {label:"速度",key:"stats"},
              ];
              const domTopicCount={
                algebra:TOPICS.filter(t=>t.domain==="algebra").length,
                geometry:TOPICS.filter(t=>t.domain==="geometry").length,
                stats:TOPICS.filter(t=>t.domain==="stats").length,
              };
              const domMastered={
                algebra:TOPICS.filter(t=>t.domain==="algebra"&&mastered.has(t.id)).length,
                geometry:TOPICS.filter(t=>t.domain==="geometry"&&mastered.has(t.id)).length,
                stats:TOPICS.filter(t=>t.domain==="stats"&&mastered.has(t.id)).length,
              };
              const vals=dims.map(d=>{
                const total=domTopicCount[d.key]||1;
                const done=domMastered[d.key]||0;
                return Math.max(0.08,done/total);
              });
              const cx=130,cy=105,r=80,n=6;
              const pts=(radius)=>dims.map((_,i)=>{
                const a=Math.PI*2*i/n-Math.PI/2;
                return [cx+Math.cos(a)*radius,cy+Math.sin(a)*radius];
              });
              const grid3=pts(r),grid2=pts(r*0.66),grid1=pts(r*0.33);
              const data=vals.map((v,i)=>{
                const a=Math.PI*2*i/n-Math.PI/2;
                return [cx+Math.cos(a)*r*v,cy+Math.sin(a)*r*v];
              });
              return(
                <svg viewBox="0 0 260 210"
                  style={{width:"100%",maxWidth:340,height:"auto"}}>
                  <polygon points={grid3.map(p=>p.join(",")).join(" ")} fill="none" stroke={C.border} strokeWidth="1.2"/>
                  <polygon points={grid2.map(p=>p.join(",")).join(" ")} fill="none" stroke={C.border} strokeWidth="0.8"/>
                  <polygon points={grid1.map(p=>p.join(",")).join(" ")} fill="none" stroke={C.border} strokeWidth="0.8"/>
                  {grid3.map((p,i)=><line key={i} x1={cx} y1={cy} x2={p[0]} y2={p[1]} stroke={C.border} strokeWidth="0.8"/>)}
                  <polygon points={data.map(p=>p.join(",")).join(" ")} fill={C.alg+"44"} stroke={C.alg} strokeWidth="2.5"/>
                  {data.map((p,i)=><circle key={i} cx={p[0]} cy={p[1]} r="4" fill={C.alg}/>)}
                  {grid3.map((p,i)=>{
                    const dx=p[0]>cx+5?11:p[0]<cx-5?-11:0;
                    const dy=p[1]>cy+5?16:p[1]<cy-5?-8:4;
                    return <text key={i} x={p[0]+dx} y={p[1]+dy} textAnchor="middle"
                      style={{fontSize:13,fill:C.text,fontWeight:600}}>{dims[i].label}</text>;
                  })}
                </svg>
              );
            })()}
          </div>
        </div>
      </div>

      {/* H3 分数预测曲线 */}
      {(()=>{
        // 基于掌握度×考频权重计算预测分
        const totalScore=120; // 中考数学满分120
        let weightedSum=0, weightTotal=0;
        TOPICS.forEach(t=>{
          const w=t.freq||1;
          weightTotal+=w;
          if(mastered.has(t.id)) weightedSum+=w;
        });
        const predictPct=weightTotal>0?weightedSum/weightTotal:0;
        const predictScore=Math.round(predictPct*totalScore);

        // 模拟历史曲线（基于当前掌握度推算趋势）
        const mCount=mastered.size;
        const dataPoints=[];
        const steps=[0,10,25,50,80,120,mCount>140?mCount:140,194];
        for(const s of steps){
          if(s>mCount+20) break;
          const simPct=s/194;
          // 非线性映射：低掌握度时分数增长快（基础题容易得分）
          const scorePct=Math.min(1,simPct*0.5+simPct*simPct*0.5);
          dataPoints.push({topics:s,score:Math.round(scorePct*totalScore),current:s<=mCount});
        }
        // 确保最后一个点是当前值
        if(!dataPoints.find(p=>p.topics===mCount)){
          dataPoints.push({topics:mCount,score:predictScore,current:true});
          dataPoints.sort((a,b)=>a.topics-b.topics);
        }

        const W=isMobile?280:400, H=140, PX=40, PY=20;
        const chartW=W-PX-10, chartH=H-PY-20;
        const toX=v=>PX+v/194*chartW;
        const toY=v=>H-PY-v/totalScore*chartH;

        return (
          <div style={{background:C.s1,border:`1px solid ${C.border}`,borderRadius:12,padding:22,marginBottom:14}}>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:14}}>
              <h3 style={{margin:0,fontSize:17,color:C.text,textTransform:"uppercase",letterSpacing:1}}>
                📈 分数预测
              </h3>
              <div style={{textAlign:"right"}}>
                <span style={{fontSize:32,fontWeight:900,color:predictScore>=100?C.ok:predictScore>=80?C.sta:C.red}}>
                  {predictScore}
                </span>
                <span style={{fontSize:16,color:C.muted}}>/{totalScore}</span>
              </div>
            </div>
            <svg viewBox={`0 0 ${W} ${H}`} style={{width:"100%",maxWidth:W}}>
              {/* 网格线 */}
              {[0,30,60,90,120].map(v=>(
                <g key={v}>
                  <line x1={PX} y1={toY(v)} x2={W-10} y2={toY(v)}
                    stroke={C.border} strokeWidth={0.5} strokeDasharray="3,3"/>
                  <text x={PX-6} y={toY(v)+4} textAnchor="end" fontSize={10} fill={C.dim}>{v}</text>
                </g>
              ))}
              {/* 区域填充 */}
              <polygon
                points={`${dataPoints.map(p=>`${toX(p.topics)},${toY(p.score)}`).join(" ")} ${toX(dataPoints[dataPoints.length-1].topics)},${toY(0)} ${toX(0)},${toY(0)}`}
                fill={C.alg} fillOpacity={0.08}/>
              {/* 曲线 */}
              <polyline
                points={dataPoints.map(p=>`${toX(p.topics)},${toY(p.score)}`).join(" ")}
                fill="none" stroke={C.alg} strokeWidth={2.5} strokeLinejoin="round"/>
              {/* 数据点 */}
              {dataPoints.map((p,i)=>(
                <circle key={i} cx={toX(p.topics)} cy={toY(p.score)} r={p.topics===mCount?5:3}
                  fill={p.topics===mCount?C.sta:C.alg} stroke={p.topics===mCount?"white":"none"} strokeWidth={2}/>
              ))}
              {/* 当前点标注 */}
              <text x={toX(mCount)} y={toY(predictScore)-10}
                textAnchor="middle" fontSize={12} fontWeight={700} fill={C.sta}>
                你在这里
              </text>
              {/* X轴标签 */}
              <text x={PX} y={H-4} fontSize={10} fill={C.dim}>0</text>
              <text x={toX(100)} y={H-4} textAnchor="middle" fontSize={10} fill={C.dim}>100</text>
              <text x={toX(194)} y={H-4} textAnchor="end" fontSize={10} fill={C.dim}>194知识点</text>
            </svg>
            <div style={{display:"flex",justifyContent:"space-between",marginTop:8,fontSize:13}}>
              <span style={{color:C.muted}}>掌握{mCount}个知识点</span>
              <span style={{color:predictScore>=100?C.ok:predictScore>=80?C.sta:C.red,fontWeight:700}}>
                {predictScore>=110?"🌟 优秀":predictScore>=100?"✅ 良好":predictScore>=80?"📈 中等":"💪 继续加油"}
              </span>
            </div>
          </div>
        );
      })()}

      {/* High freq topics */}
      <div style={{background:C.s1,border:`1px solid ${C.border}`,borderRadius:12,padding:22}}>
        <h3 style={{margin:"0 0 14px",fontSize:17,color:C.text,textTransform:"uppercase",letterSpacing:1}}>
          🔥 高频考点 TOP 6
        </h3>
        <div style={{display:"grid",gridTemplateColumns:isMobile?"1fr":"repeat(3,1fr)",gap:10}}>
          {topFreq.map((t,i)=>{
            const c=DOM[t.domain].color,isM=mastered.has(t.id);
            return(
              <div key={t.id} onClick={()=>onNav("detail",t.id)}
                style={{background:C.s2,border:`1px solid ${isM?C.ok+"44":c+"18"}`,
                  borderRadius:10,padding:"12px 14px",cursor:"pointer",
                  display:"flex",alignItems:"center",gap:10,transition:"all .2s"}}
                onMouseEnter={e=>e.currentTarget.style.borderColor=c+"66"}
                onMouseLeave={e=>e.currentTarget.style.borderColor=isM?C.ok+"44":c+"18"}>
                <div style={{fontSize:24,fontWeight:900,color:C.dim,minWidth:24}}>#{i+1}</div>
                <div style={{flex:1}}>
                  <div style={{fontSize:17,fontWeight:700,color:isM?C.ok:C.text}}>{t.name}</div>
                  <div style={{fontSize:14,color:C.muted}}>考{t.examYears.length}年·{t.totalScore}分</div>
                </div>
                <div style={{textAlign:"right"}}>
                  <div style={{fontSize:22,fontWeight:900,color:c}}>{t.freq}%</div>
                  {isM&&<div style={{fontSize:14,color:C.ok}}>✓已掌握</div>}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════════════════
   PAGE: KNOWLEDGE GRAPH
════════════════════════════════════════════════════════════ */
/* ════════════════════════════════════════════════════════════
   PageGraph v2 — 纯React力导向布局（无D3依赖）
   替换范围：shumai-v7.jsx 第4829~4901行
   ( function PageGraph 到其对应闭合括号 )
════════════════════════════════════════════════════════════ */

function PageGraph({mastered,onNav}) {
  const {isMobile}=useBP();
  const [domFilter,setDomFilter]=useState("all");
  const [semFilter,setSemFilter]=useState("all");
  const [sel,setSel]=useState(null);

  const SEM_LIST=["7a","7b","8a","8b","9a","9b"];
  const SEM_LABEL={"7a":"七年级上","7b":"七年级下","8a":"八年级上","8b":"八年级下","9a":"九年级上","9b":"九年级下"};
  const SEM_COLOR={"7a":"#4ade80","7b":"#22d3ee","8a":"#818cf8","8b":"#f472b6","9a":"#fb923c","9b":"#facc15"};

  const CHAP_NAME={
    ch_7a_2:"有理数",ch_7a_3:"代数式",ch_7a_4:"图形认识",ch_7a_5:"一元一次方程",ch_7a_6:"统计图",ch_7a_7:"可能性",
    ch_7b_1:"整式运算",ch_7b_2:"平行线",ch_7b_3:"变量",ch_7b_4:"全等三角形",ch_7b_5:"轴对称",
    ch_8a_1:"勾股定理",ch_8a_2:"实数与根式",ch_8a_3:"坐标系",ch_8a_4:"一次函数",ch_8a_5:"方程组",ch_8a_6:"数据分析",
    ch_8b_1:"等腰三角形",ch_8b_2:"不等式",ch_8b_3:"变换",ch_8b_4:"因式分解",ch_8b_5:"分式",ch_8b_6:"四边形",ch_8b_7:"相似",ch_8b_8:"数据收集",
    ch_9a_1:"特殊四边形",ch_9a_2:"一元二次方程",ch_9a_4:"视图投影",ch_9a_5:"反比例函数",ch_9a_6:"概率",
    ch_9b_1:"三角函数",ch_9b_2:"二次函数",ch_9b_3:"圆",ch_9b_4:"统计概率综合"
  };

  const tree=useMemo(()=>{
    return SEM_LIST.map(sem=>{
      let topics=TOPICS.filter(t=>t.semester===sem);
      if(domFilter!=="all") topics=topics.filter(t=>t.domain===domFilter);
      const chapMap={};
      topics.forEach(t=>{
        const ch=t.chapter||"other";
        if(!chapMap[ch]) chapMap[ch]=[];
        chapMap[ch].push(t);
      });
      const chapters=Object.entries(chapMap).map(([ch,ts])=>({ch,name:CHAP_NAME[ch]||ch,topics:ts}));
      return{sem,chapters,total:topics.length,mastered:topics.filter(t=>mastered.has(t.id)).length};
    });
  },[domFilter,mastered]);

  const selTopic=sel?TOPIC_MAP[sel]:null;
  const selConn=useMemo(()=>{
    if(!selTopic) return null;
    const preTopics=(selTopic.pre||[]).map(id=>TOPIC_MAP[id]).filter(Boolean);
    const relTopics=(selTopic.rel||[]).map(id=>TOPIC_MAP[id]).filter(Boolean);
    return{pre:preTopics,rel:relTopics};
  },[sel]);

  const filteredSems=SEM_LIST.filter(s=>semFilter==="all"||s===semFilter);
  const totalShown=tree.reduce((a,r)=>a+r.total,0);

  return(
    <div style={{padding:"14px 18px",maxWidth:1200}}>

      {/* ── 标题栏 ── */}
      <div style={{display:"flex",alignItems:"baseline",gap:10,marginBottom:6}}>
        <h2 style={{margin:0,fontSize:22,color:C.fg}}>知识技能树</h2>
        <span style={{fontSize:13,color:C.muted}}>{totalShown} 个知识点 · 初中三年完整路线</span>
      </div>

      {/* ── 筛选栏 ── */}
      <div style={{display:"flex",gap:8,marginBottom:14,flexWrap:"wrap",alignItems:"center"}}>
        {Object.entries(DOM).map(([k,d])=>(
          <button key={k} onClick={()=>setDomFilter(domFilter===k?"all":k)}
            style={{display:"flex",alignItems:"center",gap:5,fontSize:13,
              color:domFilter===k||domFilter==="all"?d.color:C.muted,
              background:domFilter===k?d.color+"18":"transparent",
              border:`1px solid ${domFilter===k?d.color:C.border}`,
              borderRadius:20,padding:"3px 10px",cursor:"pointer"}}>
            <div style={{width:6,height:6,borderRadius:"50%",background:d.color}}/>{d.name}
          </button>
        ))}
        <div style={{width:1,height:20,background:C.border,margin:"0 4px"}}/>
        {["all",...SEM_LIST].map(s=>(
          <button key={s} onClick={()=>setSemFilter(semFilter===s?"all":s)}
            style={{fontSize:12,padding:"2px 8px",borderRadius:12,cursor:"pointer",
              background:semFilter===s?C.alg+"22":"transparent",
              border:`1px solid ${semFilter===s?C.alg:C.border}`,
              color:semFilter===s?C.alg:C.muted}}>
            {s==="all"?"全部":SEM_LABEL[s]||s}
          </button>
        ))}
      </div>

      {/* ── 学期行 ── */}
      {tree.filter(r=>filteredSems.includes(r.sem)).map(row=>{
        const sc=SEM_COLOR[row.sem];
        const pct=row.total?Math.round(row.mastered/row.total*100):0;
        return(
          <div key={row.sem} style={{marginBottom:16,background:C.s1,borderRadius:14,
            border:`1px solid ${C.border}`,overflow:"hidden"}}>

            {/* 学期头 */}
            <div style={{display:"flex",alignItems:"center",gap:10,padding:"10px 16px",
              borderBottom:`1px solid ${C.border}`,background:sc+"0a"}}>
              <div style={{width:4,height:28,borderRadius:2,background:sc}}/>
              <div>
                <div style={{fontSize:15,fontWeight:700,color:sc}}>{SEM_LABEL[row.sem]}</div>
                <div style={{fontSize:11,color:C.muted}}>{row.mastered}/{row.total} 已掌握</div>
              </div>
              <div style={{flex:1,height:4,borderRadius:2,background:C.border,marginLeft:8}}>
                <div style={{width:pct+"%",height:"100%",borderRadius:2,background:sc,
                  transition:"width .3s"}}/>
              </div>
              <span style={{fontSize:12,color:sc,fontWeight:600,minWidth:36,textAlign:"right"}}>{pct}%</span>
            </div>

            {/* 章节列表 */}
            {row.chapters.length===0?(
              <div style={{padding:"20px 16px",color:C.dim,fontSize:13}}>当前筛选无知识点</div>
            ):(
              <div style={{padding:"10px 12px"}}>
                {row.chapters.map(ch=>(
                  <div key={ch.ch} style={{marginBottom:10}}>
                    <div style={{fontSize:12,color:C.muted,marginBottom:5,paddingLeft:2,
                      fontWeight:600,letterSpacing:1}}>{ch.name}</div>
                    <div style={{display:"flex",flexWrap:"wrap",gap:6}}>
                      {ch.topics.map(t=>{
                        const isM=mastered.has(t.id);
                        const isSel=sel===t.id;
                        const dc=DOM[t.domain]?.color||C.alg;
                        const bg=isM?C.ok+"1a":isSel?dc+"22":"transparent";
                        const bc=isM?C.ok:isSel?dc:C.border;
                        const fc=isM?C.ok:isSel?dc:C.fg;
                        const isConnected=selConn&&(selConn.pre.some(p=>p.id===t.id)||selConn.rel.some(r=>r.id===t.id));
                        return(
                          <button key={t.id} onClick={()=>setSel(sel===t.id?null:t.id)}
                            style={{position:"relative",display:"flex",alignItems:"center",gap:4,
                              padding:"4px 10px",borderRadius:8,cursor:"pointer",fontSize:13,
                              background:bg,border:`1.5px solid ${bc}`,color:fc,
                              fontWeight:isSel?700:400,transition:"all .15s",
                              boxShadow:isConnected?`0 0 0 2px ${dc}44`:"none",
                              outline:isConnected?`2px solid ${dc}55`:"none"}}>
                            {isM&&<span style={{fontSize:11,color:C.ok}}>✓</span>}
                            <span>{t.name}</span>
                            {t.freq>=80&&<span style={{fontSize:9,color:"#f59e0b",marginLeft:2}}>★</span>}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      })}

      {/* 手机端固定面板时的底部占位，防止内容被遮挡 */}
      {selTopic&&isMobile&&<div style={{height:200}}/>}

      {/* ── 选中知识点详情面板 ── */}
      {selTopic&&(
        <div style={{
          position:isMobile?"fixed":"sticky",
          bottom:0,left:isMobile?0:"auto",right:isMobile?0:"auto",
          zIndex:isMobile?200:1,
          marginTop:isMobile?0:8,
          background:C.s2,
          borderRadius:isMobile?"16px 16px 0 0":14,
          border:`1px solid ${DOM[selTopic.domain]?.color||C.border}`,
          padding:"14px 18px",
          paddingBottom:`calc(14px + env(safe-area-inset-bottom))`,
          boxShadow:"0 -4px 24px #000a",
          maxHeight:isMobile?"55vh":"none",
          overflowY:isMobile?"auto":"visible"}}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start"}}>
            <div>
              <div style={{display:"flex",alignItems:"center",gap:8}}>
                <span style={{fontSize:17,fontWeight:700,color:DOM[selTopic.domain]?.color||C.fg}}>
                  {selTopic.name}
                </span>
                <span style={{fontSize:11,color:C.muted,background:C.s1,padding:"1px 7px",borderRadius:6}}>
                  {SEM_LABEL[selTopic.semester]} · {CHAP_NAME[selTopic.chapter]||""}
                </span>
                <span style={{fontSize:11,color:C.muted}}>
                  难度 {"●".repeat(selTopic.diff)}{"○".repeat(5-selTopic.diff)}
                </span>
              </div>
              <div style={{fontSize:12,color:C.muted,marginTop:4}}>
                {selTopic.examYears.length>0
                  ?`考察${selTopic.examYears.length}次 · 累计${selTopic.totalScore}分 · 考频${selTopic.freq}%`
                  :"基础知识点（不单独出大题）"}
              </div>
            </div>
            <button onClick={()=>setSel(null)}
              style={{background:"none",border:"none",color:C.muted,cursor:"pointer",fontSize:18,padding:4}}>✕</button>
          </div>

          {/* 前置 + 关联 */}
          {selConn&&(
            <div style={{display:"flex",gap:20,marginTop:10,flexWrap:"wrap"}}>
              {selConn.pre.length>0&&(
                <div>
                  <div style={{fontSize:11,color:C.muted,marginBottom:4}}>⬆ 前置知识</div>
                  <div style={{display:"flex",gap:5,flexWrap:"wrap"}}>
                    {selConn.pre.map(p=>(
                      <button key={p.id} onClick={()=>setSel(p.id)}
                        style={{fontSize:12,padding:"2px 8px",borderRadius:6,cursor:"pointer",
                          background:C.s1,border:`1px solid ${C.border}`,color:DOM[p.domain]?.color||C.fg}}>
                        {p.name}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              {selConn.rel.length>0&&(
                <div>
                  <div style={{fontSize:11,color:C.muted,marginBottom:4}}>↔ 关联知识</div>
                  <div style={{display:"flex",gap:5,flexWrap:"wrap"}}>
                    {selConn.rel.map(r=>(
                      <button key={r.id} onClick={()=>setSel(r.id)}
                        style={{fontSize:12,padding:"2px 8px",borderRadius:6,cursor:"pointer",
                          background:C.s1,border:`1px solid ${C.border}`,color:DOM[r.domain]?.color||C.fg}}>
                        {r.name}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* 操作按钮 */}
          <div style={{display:"flex",gap:8,marginTop:10}}>
            <button onClick={()=>onNav("detail",selTopic.id)}
              style={{padding:"6px 16px",borderRadius:8,cursor:"pointer",fontSize:13,fontWeight:600,
                background:DOM[selTopic.domain]?.color+"1a",color:DOM[selTopic.domain]?.color,
                border:`1px solid ${DOM[selTopic.domain]?.color}44`}}>
              查看完整知识点 →
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

/* ════════════════════════════════════════════════════════════
   PAGE: FOUR MODULES
════════════════════════════════════════════════════════════ */
function PageModules({mastered,wrongSet,onNav,addWrong,removeWrong,basicWrongSet=new Set(),addBasicWrong=()=>{},removeBasicWrong=()=>{}}) {
  const {isMobile}=useBP();
  const [activeModule,setActiveModule]=useState(()=>{
    try{ return JSON.parse(localStorage.getItem("shumai_v7")||"{}").activeModule||"m1"; }catch{ return "m1"; }
  });
  useEffect(()=>{
    try{ const s=JSON.parse(localStorage.getItem("shumai_v7")||"{}"); localStorage.setItem("shumai_v7",JSON.stringify({...s,activeModule})); }catch{}
  },[activeModule]);
  const [selTopic,setSelTopic]=useState(null);
  const [expandedTopic,setExpandedTopic]=useState(null);
  const [openQ,setOpenQ]=useState(null);
  const [m2Mode,setM2Mode]=useState("all");
  // TTS 语音讲解状态
  const [ttsId,setTtsId]=useState(null);
  const [ttsLoading,setTtsLoading]=useState(null);
  const [ttsText,setTtsText]=useState({});
  // M3 题组训练状态
  const [selGroup,setSelGroup]=useState(null);
  const [m3WrongSet,setM3WrongSet]=useState(new Set());
  const addM3Wrong=(id)=>setM3WrongSet(p=>new Set([...p,id]));
  const removeM3Wrong=(id)=>setM3WrongSet(p=>{const s=new Set(p);s.delete(id);return s;});
  // M4 压轴题组状态
  const [selFinal,setSelFinal]=useState(null);
  const [m4WrongSet,setM4WrongSet]=useState(new Set());
  const addM4Wrong=(id)=>setM4WrongSet(p=>new Set([...p,id]));
  const removeM4Wrong=(id)=>setM4WrongSet(p=>{const s=new Set(p);s.delete(id);return s;});

  // M2 搜索 & 滚动
  const [topicSearch,setTopicSearch]=useState("");
  const questionsRef=useRef(null);
  useEffect(()=>{
    if(selTopic&&questionsRef.current){
      setTimeout(()=>questionsRef.current?.scrollIntoView({behavior:"smooth",block:"start"}),80);
    }
  },[selTopic]);

  // 跨模块导航历史（返回键用）
  const [moduleNavStack,setModuleNavStack]=useState([]);
  const navigateModule=(mod,{topic=null,group=null,final=null}={})=>{
    setModuleNavStack(prev=>[...prev,{module:activeModule,selTopic,selGroup,selFinal,openQ,expandedTopic}]);
    setActiveModule(mod);
    if(topic!==null){
      setSelTopic(topic);
      if(mod==="m1") setExpandedTopic(topic); // M1用expandedTopic控制展开，selTopic在M1无效
    }
    if(group!==null) setSelGroup(group);
    if(final!==null) setSelFinal(final);
    setOpenQ(null);
  };
  const navBack=()=>{
    if(!moduleNavStack.length) return;
    const prev=moduleNavStack[moduleNavStack.length-1];
    setModuleNavStack(s=>s.slice(0,-1));
    setActiveModule(prev.module);
    setSelTopic(prev.selTopic);
    setSelGroup(prev.selGroup);
    setSelFinal(prev.selFinal);
    setExpandedTopic(prev.expandedTopic??null);
    if(prev.openQ) setOpenQ(prev.openQ);
  };

  const safeBasicWrong = basicWrongSet instanceof Set ? basicWrongSet : new Set();
  const basicWrongQs = Object.values(BASICS_BY_TOPIC).flat().filter(q=>safeBasicWrong.has(q.id));

  // 点击语音讲解按钮
  const handleSpeak = async (q, topicId) => {
    const topicName = TOPIC_MAP[topicId]?.name || "本题";
    // 如果正在朗读同一题，则停止
    if (ttsId === q.id) { stopSpeak(); setTtsId(null); return; }
    // 停止其他正在播放的
    stopSpeak(); setTtsId(null);
    // 如果已有缓存文字，直接朗读
    if (ttsText[q.id]) {
      setTtsId(q.id);
      speakText(ttsText[q.id], ()=>setTtsId(q.id), ()=>setTtsId(null));
      return;
    }
    // 否则先生成讲解文字
    setTtsLoading(q.id);
    try {
      const script = await genVoiceScript(q, topicName);
      setTtsText(prev=>({...prev,[q.id]:script}));
      setTtsLoading(null);
      setTtsId(q.id);
      speakText(script, ()=>setTtsId(q.id), ()=>setTtsId(null));
    } catch(e) {
      setTtsLoading(null);
      alert("生成语音讲解失败，请重试");
    }
  };

  return(
    <div style={{padding:22}}>
      {/* Module tabs */}
      <div style={{display:"flex",gap:8,marginBottom:20,flexWrap:"wrap"}}>
        {MODULE_CONFIG.map(m=>(
          <button key={m.id} onClick={()=>setActiveModule(m.id)}
            style={{padding:"10px 18px",borderRadius:10,cursor:"pointer",textAlign:"left",
              background:activeModule===m.id?m.color+"22":C.s1,
              border:`2px solid ${activeModule===m.id?m.color:C.border}`,
              color:activeModule===m.id?m.color:C.muted,transition:"all .2s"}}>
            <div style={{fontSize:22,fontWeight:900,marginBottom:2}}>{m.icon} {m.label}</div>
            <div style={{fontSize:14,opacity:.7}}>{m.desc}</div>
          </button>
        ))}
      </div>

      {/* ── MODULE M1: 基础知识 ── */}
      {activeModule==="m1"&&(
        <div>
          <div style={{background:C.s1,border:`1px solid ${C.m1}22`,borderRadius:12,padding:20,marginBottom:16}}>
            <h3 style={{margin:"0 0 6px",fontSize:20,color:C.m1,fontWeight:800}}>① 基础知识 — 一个概念五个点</h3>
            <p style={{margin:0,fontSize:17,color:C.muted,lineHeight:1.8}}>
              掌握标准：<b style={{color:C.text}}>概念定义 → 常例 → 特例 → 反例 → 考察目的</b>，五个维度全面掌握。
              点击知识点卡片可展开完整概念讲解与典型例题。
            </p>
          </div>

          {/* 按领域分组展示 */}
          {Object.entries(DOM).map(([domKey,d])=>(
            <div key={domKey} style={{marginBottom:24}}>
              <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:12}}>
                <div style={{width:3,height:18,background:d.color,borderRadius:2}}/>
                <h4 style={{margin:0,fontSize:18,color:d.color,fontWeight:800}}>{d.name}</h4>
                <span style={{fontSize:15,color:C.muted}}>
                  {TOPICS.filter(t=>t.domain===domKey&&mastered.has(t.id)).length} /
                  {TOPICS.filter(t=>t.domain===domKey).length} 已掌握
                </span>
              </div>
              <div style={{display:"flex",flexDirection:"column",gap:8}}>
                {TOPICS.filter(t=>t.domain===domKey).map(t=>{
                  const c=d.color, isM=mastered.has(t.id), isExp=expandedTopic===t.id;
                  const basics=questionService.getBasicByTopic(t.id);
                  const basicsParent=questionService.getBasicParent(t.id);
                  return(
                    <div key={t.id} style={{background:C.s1,
                      border:`1px solid ${isM?C.ok+"44":isExp?c+"55":C.border}`,
                      borderRadius:12,overflow:"hidden",transition:"border-color .2s"}}>

                      {/* 折叠头 */}
                      <div style={{padding:"14px 18px",display:"flex",alignItems:"center",
                        gap:12,cursor:"pointer"}}
                        onClick={()=>setExpandedTopic(isExp?null:t.id)}>
                        <div style={{width:8,height:8,borderRadius:"50%",
                          background:isM?C.ok:c,flexShrink:0}}/>
                        <div style={{flex:1}}>
                          <div style={{display:"flex",alignItems:"center",gap:8,flexWrap:"wrap"}}>
                            <span style={{fontSize:19,fontWeight:800,color:isM?C.ok:C.text}}>{t.name}</span>
                            <Tag c={C.muted} sm>{t.semester}</Tag>
                            {isM&&<Tag c={C.ok} sm>✓ 已掌握</Tag>}
                            {basics.filter(q=>safeBasicWrong.has(q.id)).length>0&&(
                              <Tag c={C.red} sm>
                                {basics.filter(q=>safeBasicWrong.has(q.id)).length}道错题
                              </Tag>
                            )}
                          </div>
                          <div style={{fontSize:16,color:C.muted,marginTop:3}}>{(t.fivePoints?.[0]||'').slice(0,50)}…</div>
                        </div>
                        <div style={{display:"flex",alignItems:"center",gap:10,flexShrink:0}}>
                          <span style={{fontSize:18,fontWeight:700,color:c}}>{t.freq}%</span>
                          <span style={{fontSize:20,color:C.muted}}>{isExp?"▲":"▼"}</span>
                        </div>
                      </div>

                      {/* 展开内容：概念讲解 + 五个点 + 核心考点 + 例题 */}
                      {isExp&&(
                        <div style={{borderTop:`1px solid ${C.border}`,padding:"18px 18px 20px"}}>

                          {/* 概念定义 */}
                          <div style={{background:c+"0f",border:`1px solid ${c}25`,
                            borderRadius:10,padding:"12px 16px",marginBottom:14}}>
                            <div style={{fontSize:15,color:c,fontWeight:700,marginBottom:6,letterSpacing:1}}>
                              📖 概念定义
                            </div>
                            <p style={{margin:0,fontSize:17,color:C.text,lineHeight:1.9}}>{(t.fivePoints?.[0]||'')}</p>
                          </div>

                          {/* 五个点 */}
                          <div style={{marginBottom:14}}>
                            <div style={{fontSize:15,color:C.muted,fontWeight:700,marginBottom:8,letterSpacing:1}}>
                              🎯 一个概念五个点
                            </div>
                            <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(200px,1fr))",gap:8}}>
                              {(t.fivePoints||[]).map((p,i)=>{
                                const labels=["📌 常例","⭐ 特例","❌ 反例","🎯 考察目的","📐 代数/图形"];
                                const colors=[C.ok,C.gold,C.red,C.alg,C.purple];
                                return(
                                  <div key={i} style={{background:C.s2,borderRadius:8,padding:"9px 12px",
                                    borderLeft:`3px solid ${colors[i]}`}}>
                                    <div style={{fontSize:14,color:colors[i],fontWeight:700,marginBottom:4}}>
                                      {labels[i]}
                                    </div>
                                    <div style={{fontSize:16,color:C.text,lineHeight:1.65}}>{p}</div>
                                  </div>
                                );
                              })}
                            </div>
                          </div>

                          {/* 核心考点 */}
                          <div style={{marginBottom:14,background:C.s2,borderRadius:10,padding:"12px 16px"}}>
                            <div style={{fontSize:15,color:C.muted,fontWeight:700,marginBottom:8,letterSpacing:1}}>
                              📌 核心考点（{t.keys.length}个）
                            </div>
                            {t.keys.map((k,i)=>(
                              <div key={i} style={{display:"flex",gap:8,marginBottom:7,
                                fontSize:17,color:C.text,lineHeight:1.7}}>
                                <span style={{color:c,fontWeight:700,minWidth:18}}>{i+1}.</span>{k}
                              </div>
                            ))}
                          </div>

                          {/* 中考攻略 */}
                          <div style={{background:C.gold+"0d",border:`1px solid ${C.gold}25`,
                            borderRadius:10,padding:"10px 14px",marginBottom:14}}>
                            <div style={{fontSize:15,color:C.gold,fontWeight:700,marginBottom:5}}>⚡ 中考攻略</div>
                            <p style={{margin:0,fontSize:17,color:C.text,lineHeight:1.8}}>{t.tips}</p>
                          </div>

                          {/* 例题 - 取基础习题第一道作为示范 */}
                          {basics.length>0&&(
                            <div style={{marginBottom:14}}>
                              <div style={{fontSize:15,color:C.muted,fontWeight:700,marginBottom:8,letterSpacing:1}}>
                                💡 典型例题
                              </div>
                              {basics.slice(0,2).map((q,i)=>{
                                const qKey=`m1ex_${q.id}`;
                                const isOpen=openQ===qKey;
                                return(
                                  <div key={q.id} style={{background:C.s2,borderRadius:8,
                                    padding:"10px 14px",marginBottom:8,
                                    borderLeft:`3px solid ${c}`}}>
                                    <div style={{display:"flex",gap:6,marginBottom:7,
                                      alignItems:"center"}}>
                                      <Tag c={C.m2} sm>例{i+1}</Tag>
                                      <Dots v={q.diff} c={c} max={3}/>
                                    </div>
                                    <p style={{margin:"0 0 8px",fontSize:17,color:C.text,
                                      lineHeight:1.8}}>{q.content}</p>
                                    <button onClick={()=>setOpenQ(isOpen?null:qKey)}
                                      style={{fontSize:15,padding:"3px 10px",borderRadius:5,
                                        cursor:"pointer",background:"none",color:c,
                                        border:`1px solid ${c}40`}}>
                                      {isOpen?"▲ 收起":"▼ 查看解答"}
                                    </button>
                                    {isOpen&&(
                                      <div style={{marginTop:8,padding:"10px 12px",
                                        background:c+"0d",borderRadius:7,
                                        border:`1px solid ${c}22`}}>
                                        <div style={{fontSize:16,fontWeight:700,color:C.gold,
                                          marginBottom:5}}>答案：{q.answer}</div>
                                        <div style={{fontSize:16,color:C.text,lineHeight:1.8,whiteSpace:"pre-line"}}>{q.sol}</div>
                                        <div style={{marginTop:7,fontSize:15,color:C.red}}>
                                          ⚠️ 易错：{q.error}
                                        </div>
                                      </div>
                                    )}
                                  </div>
                                );
                              })}
                            </div>
                          )}

                          {/* 按钮行 */}
                          <div style={{display:"flex",gap:8,flexWrap:"wrap"}}>
                            <button onClick={()=>navigateModule("m2",{topic:t.id})}
                              style={{padding:"7px 16px",borderRadius:8,cursor:"pointer",fontSize:16,
                                fontWeight:700,background:C.m2+"1a",color:C.m2,
                                border:`1px solid ${C.m2}44`}}>
                              ② 去做基础习题 ({basics.length}道){basicsParent?` · 来自「${TOPIC_MAP[basicsParent]?.name}」`:""}
                            </button>
                            <button onClick={()=>onNav("detail",t.id)}
                              style={{padding:"7px 16px",borderRadius:8,cursor:"pointer",fontSize:16,
                                fontWeight:700,background:c+"1a",color:c,
                                border:`1px solid ${c}44`}}>
                              查看完整知识点 →
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ── MODULE M2: 基础习题 ── */}
      {activeModule==="m2"&&(
        <div>
          <div style={{background:C.s1,border:`1px solid ${C.m2}22`,borderRadius:12,padding:20,marginBottom:16}}>
            {/* 返回键 + 标题行 */}
            <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:10}}>
              {moduleNavStack.length>0&&(
                <button onClick={navBack}
                  style={{padding:"6px 14px",borderRadius:8,cursor:"pointer",fontSize:15,
                    background:C.s2,color:C.muted,border:`1px solid ${C.border}`}}>
                  ← 返回
                </button>
              )}
              <h3 style={{margin:0,fontSize:20,color:C.m2,fontWeight:800}}>② 基础习题 — 三步以内，接近条件反射</h3>
            </div>
            <p style={{margin:"0 0 12px",fontSize:17,color:C.muted,lineHeight:1.8}}>
              做错的题点<b style={{color:C.red}}>「加入错题本」</b>，系统会帮你追因并推荐回到①基础知识补差。
              简单题目3步以内、正确率90%以上为达标标准。
            </p>

            {/* 模式切换 */}
            <div style={{display:"flex",gap:8,marginBottom:12}}>
              <BtnPill label="全部习题" active={m2Mode==="all"}
                onClick={()=>setM2Mode("all")} color={C.m2}/>
              <BtnPill label={`基础错题本 (${safeBasicWrong.size})`}
                active={m2Mode==="wrong"} onClick={()=>setM2Mode("wrong")}
                color={C.red} badge={m2Mode!=="wrong"?safeBasicWrong.size:0}/>
            </div>

            {/* 搜索框 */}
            {m2Mode==="all"&&(
              <div style={{marginBottom:12}}>
                <input
                  value={topicSearch}
                  onChange={e=>setTopicSearch(e.target.value)}
                  placeholder="🔍 搜索知识点..."
                  style={{width:"100%",padding:"8px 14px",borderRadius:10,fontSize:15,
                    background:C.s2,border:`1px solid ${C.border}`,color:C.text,
                    outline:"none"}}
                />
              </div>
            )}

            {/* 知识点选择（仅全部模式显示，支持搜索过滤） */}
            {m2Mode==="all"&&Object.entries(DOM).map(([domKey,d])=>{
              const filteredTopics=TOPICS.filter(t=>
                t.domain===domKey&&t.name.toLowerCase().includes(topicSearch.toLowerCase())
              );
              if(filteredTopics.length===0&&topicSearch)return null;
              return(
                <div key={domKey} style={{marginBottom:10}}>
                  <div style={{fontSize:14,color:d.color,fontWeight:700,marginBottom:5,letterSpacing:1}}>
                    {d.name}
                    {topicSearch&&` (${filteredTopics.length})`}
                  </div>
                  <div style={{display:"flex",gap:6,flexWrap:"wrap"}}>
                    {(topicSearch?filteredTopics:TOPICS.filter(t=>t.domain===domKey)).map(t=>{
                      const isSelected=selTopic===t.id;
                      const basics=questionService.getBasicByTopic(t.id);
                      const wrongCount=basics.filter(q=>safeBasicWrong.has(q.id)).length;
                      return(
                        <button key={t.id} onClick={()=>setSelTopic(isSelected?null:t.id)}
                          style={{padding:"4px 12px",borderRadius:20,fontSize:15,cursor:"pointer",
                            position:"relative",
                            background:isSelected?d.color+"22":C.s2,
                            border:`1px solid ${isSelected?d.color:basics.length>0?C.border2:C.border}`,
                            color:isSelected?d.color:basics.length>0?C.muted:"#2a3d55",
                            opacity:basics.length>0?1:0.45}}>
                          {t.name}
                          {wrongCount>0&&(
                            <span style={{position:"absolute",top:-4,right:-4,
                              background:C.red,color:"white",fontSize:13,fontWeight:700,
                              padding:"1px 4px",borderRadius:8,lineHeight:1.4}}>
                              {wrongCount}
                            </span>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>

          {/* 错题本模式 */}
          {m2Mode==="wrong"&&(
            <div>
              {basicWrongQs.length===0?(
                <div style={{textAlign:"center",padding:60,color:C.muted}}>
                  <div style={{fontSize:40,marginBottom:10}}>🎉</div>
                  <div style={{fontSize:20,fontWeight:700,color:C.text}}>基础习题错题本为空</div>
                  <div style={{fontSize:17,marginTop:6}}>做题时点击「加入错题本」即可收录</div>
                </div>
              ):(
                <div>
                  {/* 按知识点分组 + 追因提示 */}
                  {Object.entries(
                    basicWrongQs.reduce((acc,q)=>{
                      // 找到该题属于哪个知识点
                      const tid=Object.keys(BASICS_BY_TOPIC).find(k=>
                        BASICS_BY_TOPIC[k].some(bq=>bq.id===q.id));
                      if(tid){if(!acc[tid])acc[tid]=[];acc[tid].push(q);}
                      return acc;
                    },{})
                  ).map(([tid,qs])=>{
                    const t=TOPIC_MAP[tid];
                    const c=t?DOM[t.domain].color:C.muted;
                    return(
                      <div key={tid} style={{background:C.s1,
                        border:`1px solid ${C.red}22`,borderRadius:12,
                        padding:20,marginBottom:16}}>
                        <div style={{display:"flex",gap:8,alignItems:"center",
                          marginBottom:12,flexWrap:"wrap"}}>
                          <Tag c={c}>{t?.name}</Tag>
                          <Tag c={C.red}>{qs.length}道错题</Tag>
                          {/* 追因按钮：回到基础知识 */}
                          <button
                            onClick={()=>navigateModule("m1",{topic:tid})}
                            style={{padding:"4px 12px",borderRadius:20,fontSize:15,
                              cursor:"pointer",background:C.m1+"1a",color:C.m1,
                              border:`1px solid ${C.m1}44`,fontWeight:600}}>
                            ① 回到基础知识补差 →
                          </button>
                          <button onClick={()=>onNav("detail",tid)}
                            style={{padding:"4px 12px",borderRadius:20,fontSize:15,
                              cursor:"pointer",background:c+"1a",color:c,
                              border:`1px solid ${c}33`}}>
                            查看完整知识点
                          </button>
                        </div>
                        {qs.map((q,i)=>{
                          const isOpen=openQ===`w2_${q.id}`;
                          return(
                            <div key={q.id} style={{borderBottom:`1px solid ${C.border}`,
                              paddingBottom:12,marginBottom:12}}>
                              <div style={{display:"flex",gap:6,marginBottom:8,
                                alignItems:"center",flexWrap:"wrap"}}>
                                <Tag c={C.red} sm>错题</Tag>
                                <Dots v={q.diff} c={c}/>
                                <button onClick={()=>removeBasicWrong(q.id)}
                                  style={{marginLeft:"auto",fontSize:15,padding:"2px 8px",
                                    borderRadius:5,cursor:"pointer",background:"none",
                                    color:C.muted,border:`1px solid ${C.border}`}}>
                                  移出错题本
                                </button>
                              </div>
                              <div style={{background:C.s2,padding:"9px 12px",borderRadius:7,
                                borderLeft:`2px solid ${c}`,marginBottom:8}}>
                                <p style={{margin:0,fontSize:17,color:C.text,
                                  lineHeight:1.7}}>{q.content}</p>
                              </div>
                              <button onClick={()=>setOpenQ(isOpen?null:`w2_${q.id}`)}
                                style={{fontSize:15,padding:"3px 10px",borderRadius:5,
                                  cursor:"pointer",background:"none",color:C.geo,
                                  border:`1px solid ${C.geo}40`}}>
                                {isOpen?"▲ 收起":"▼ 解析"}
                              </button>
                              {isOpen&&(
                                <div style={{marginTop:8,background:C.geo+"0a",
                                  border:`1px solid ${C.geo}22`,borderRadius:7,padding:12}}>
                                  <div style={{fontSize:16,fontWeight:700,color:C.gold,
                                    marginBottom:5}}>答案：{q.answer}</div>
                                  <div style={{fontSize:16,color:C.text,lineHeight:1.8,
                                    whiteSpace:"pre-line"}}>{q.sol}</div>
                                  <div style={{marginTop:7,fontSize:15,color:C.red}}>
                                    ⚠️ 易错：{q.error}
                                  </div>
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          )}

          {/* 全部模式 - 知识点习题 */}
          {m2Mode==="all"&&selTopic&&questionService.getBasicByTopic(selTopic).length>0&&(
            <div ref={questionsRef}>
              {(()=>{
                const _parent=questionService.getBasicParent(selTopic);
                const _parentTopic=_parent?TOPIC_MAP[_parent]:null;
                return _parentTopic?(
                  <div style={{padding:"6px 14px",marginBottom:10,borderRadius:8,fontSize:15,
                    background:C.gold+"0d",border:`1px solid ${C.gold}25`,color:C.gold}}>
                    💡 「{TOPIC_MAP[selTopic]?.name}」暂无专属题目，为你展示父知识点「{_parentTopic.name}」的基础练习
                  </div>
                ):null;
              })()}
              <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:14,flexWrap:"wrap"}}>
                <h4 style={{margin:0,fontSize:19,fontWeight:800,
                  color:DOM[TOPIC_MAP[selTopic].domain].color}}>
                  {TOPIC_MAP[selTopic].name} — 基础练习
                </h4>
                <span style={{fontSize:16,color:C.muted}}>
                  {questionService.getBasicByTopic(selTopic).length}道题 · 
                  错{questionService.getBasicByTopic(selTopic).filter(q=>safeBasicWrong.has(q.id)).length}道
                </span>
                {/* 回到基础知识 */}
                <button onClick={()=>navigateModule("m1",{topic:selTopic})}
                  style={{padding:"5px 14px",borderRadius:8,fontSize:15,cursor:"pointer",
                    background:C.m1+"1a",color:C.m1,border:`1px solid ${C.m1}44`,
                    fontWeight:600}}>
                  ① 先看基础知识讲解
                </button>
              </div>

              <div style={{display:"flex",flexDirection:"column",gap:12}}>
                {questionService.getBasicByTopic(selTopic).map((q,i)=>{
                  const isOpen=openQ===q.id;
                  const isW=safeBasicWrong.has(q.id);
                  const c=DOM[TOPIC_MAP[selTopic].domain].color;
                  return(
                    <div key={q.id} style={{background:C.s1,
                      border:`1px solid ${isW?C.red+"44":C.border}`,
                      borderRadius:12,padding:18}}>
                      <div style={{display:"flex",gap:8,marginBottom:10,
                        alignItems:"center",flexWrap:"wrap"}}>
                        <span style={{fontSize:16,color:C.dim,fontWeight:700}}>#{i+1}</span>
                        <Tag c={C.m2} sm>基础</Tag>
                        <Dots v={q.diff} c={C.m2}/>
                        {isW&&<Tag c={C.red} sm>已加错题本</Tag>}
                        {/* 错题本按钮 */}
                        <button onClick={()=>isW?removeBasicWrong(q.id):addBasicWrong(q.id)}
                          style={{marginLeft:"auto",fontSize:15,padding:"2px 9px",
                            borderRadius:5,cursor:"pointer",
                            background:isW?C.red+"1a":"none",
                            color:isW?C.red:C.muted,
                            border:`1px solid ${isW?C.red+"44":C.border}`}}>
                          {isW?"✓ 错题本":"+ 做错了"}
                        </button>
                      </div>
                      <div style={{background:C.s2,padding:"10px 14px",borderRadius:8,
                        borderLeft:`3px solid ${C.m2}`,marginBottom:10}}>
                        <p style={{margin:0,fontSize:18,color:C.text,
                          lineHeight:1.8}}>{q.content}</p>
                      </div>
                      <GeoFigure content={q.content} topicIds={[selTopic]} questionId={q.id} questionType="basic"/>
                      <button onClick={()=>setOpenQ(isOpen?null:q.id)}
                        style={{fontSize:16,padding:"4px 12px",borderRadius:6,cursor:"pointer",
                          background:"none",color:C.geo,border:`1px solid ${C.geo}40`}}>
                        {isOpen?"▲ 收起":"▼ 查看解答"}
                      </button>
                      {isOpen&&(
                        <div style={{marginTop:10,background:C.geo+"0a",
                          border:`1px solid ${C.geo}22`,borderRadius:8,padding:14}}>
                          <div style={{fontSize:17,fontWeight:700,color:C.gold,marginBottom:6}}>
                            答案：{q.answer}
                          </div>
                          <div style={{fontSize:17,color:C.text,lineHeight:1.8,
                            whiteSpace:"pre-line"}}>{q.sol}</div>
                          <div style={{marginTop:8,padding:"6px 10px",background:C.red+"0d",
                            borderRadius:5,fontSize:16,color:C.red}}>
                            ⚠️ 易错点：{q.error}
                          </div>

                          {/* ── AI 讲解（所有题目均显示）── */}
                          <div style={{marginTop:12,display:"flex",gap:8,alignItems:"center",flexWrap:"wrap"}}>
                            <button
                              onClick={()=>handleSpeak(q,selTopic)}
                              disabled={ttsLoading===q.id}
                              style={{display:"flex",alignItems:"center",gap:6,
                                padding:"6px 16px",borderRadius:20,cursor:"pointer",
                                fontSize:15,fontWeight:700,
                                background:ttsId===q.id?C.red:C.alg,
                                color:"white",border:"none",
                                opacity:ttsLoading===q.id?0.7:1}}>
                              {ttsLoading===q.id?"⏳ 生成中…":ttsId===q.id?"⏹ 停止朗读":"🔊 语音讲解"}
                            </button>
                            {ttsText[q.id]&&ttsId!==q.id&&(
                              <span style={{fontSize:13,color:C.muted}}>✓ 已缓存</span>
                            )}
                            <AskTutor q={q} topicName={TOPIC_MAP[selTopic]?.name||"本题"} mode={isW?"wrong":"explain"}/>
                          </div>
                          {ttsText[q.id]&&(
                            <div style={{marginTop:8,padding:"8px 12px",
                              background:C.alg+"0d",borderRadius:6,
                              border:`1px solid ${C.alg}22`,
                              fontSize:14,color:C.text,lineHeight:1.8}}>
                              {ttsText[q.id]}
                            </div>
                          )}

                          {/* ── 做错后：向下补差 ── */}
                          {isW&&(
                            <div style={{marginTop:10,padding:"10px 14px",
                              background:C.m1+"0d",borderRadius:7,
                              border:`1px solid ${C.m1}25`}}>
                              <div style={{fontSize:16,color:C.m1,fontWeight:700,marginBottom:6}}>
                                ↓ 做错了？先回去巩固基础知识
                              </div>
                              <div style={{display:"flex",gap:8,flexWrap:"wrap"}}>
                                <button
                                  onClick={()=>navigateModule("m1",{topic:selTopic})}
                                  style={{padding:"5px 14px",borderRadius:7,cursor:"pointer",
                                    fontSize:16,fontWeight:700,background:C.m1,
                                    color:"white",border:"none"}}>
                                  ① 返回基础知识讲解
                                </button>
                                <button onClick={()=>onNav("detail",selTopic)}
                                  style={{padding:"5px 14px",borderRadius:7,cursor:"pointer",
                                    fontSize:16,background:"none",color:c,
                                    border:`1px solid ${c}44`}}>
                                  查看完整知识点
                                </button>
                              </div>
                              {/* 前置知识补差路径 */}
                              {(GRAPH[selTopic]?.pre||[]).length>0&&(
                                <div style={{marginTop:8,display:"flex",gap:5,flexWrap:"wrap",alignItems:"center"}}>
                                  <span style={{fontSize:15,color:C.muted}}>前置知识补差：</span>
                                  {(GRAPH[selTopic]?.pre||[]).map(pid=>{
                                    const pt=TOPIC_MAP[pid];if(!pt)return null;
                                    return(
                                      <button key={pid} onClick={()=>navigateModule("m2",{topic:pid})}
                                        style={{padding:"2px 9px",borderRadius:20,fontSize:15,
                                          cursor:"pointer",background:C.red+"14",
                                          border:`1px solid ${C.red}33`,color:C.red}}>
                                        {pt.name}
                                      </button>
                                    );
                                  })}
                                </div>
                              )}
                            </div>
                          )}

                          {/* ── 做对后：向上提升 ── */}
                          {!isW&&(q.upLink||[]).length>0&&(
                            <div style={{marginTop:10,padding:"10px 14px",
                              background:C.m3+"0d",borderRadius:7,
                              border:`1px solid ${C.m3}25`}}>
                              <div style={{fontSize:16,color:C.m3,fontWeight:700,marginBottom:6}}>
                                ↑ 做对了！去挑战提高题
                              </div>
                              <div style={{display:"flex",gap:6,flexWrap:"wrap"}}>
                                {(q.upLink||[]).map(tgId=>{
                                  const tg=TOPIC_GROUPS.find(x=>x.id===tgId);
                                  if(!tg)return null;
                                  return(
                                    <button key={tgId}
                                      onClick={()=>navigateModule("m3")}
                                      style={{padding:"5px 12px",borderRadius:7,cursor:"pointer",
                                        fontSize:16,fontWeight:700,background:C.m3,
                                        color:"white",border:"none"}}>
                                      ③ {tg.name}
                                    </button>
                                  );
                                })}
                                {/* 压轴题推荐 */}
                                {(GRAPH[selTopic]?.finalIds||[]).length>0&&(
                                  <button onClick={()=>navigateModule("m4")}
                                    style={{padding:"5px 12px",borderRadius:7,cursor:"pointer",
                                      fontSize:16,fontWeight:600,background:"none",
                                      color:C.m4,border:`1px solid ${C.m4}55`}}>
                                    ④ 压轴提升 →
                                  </button>
                                )}
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {m2Mode==="all"&&!selTopic&&(
            <div style={{textAlign:"center",padding:60,color:C.muted}}>
              <div style={{fontSize:32,marginBottom:8}}>②</div>
              请在上方选择知识点，查看对应基础习题
            </div>
          )}
        </div>
      )}

      {/* Module M3: 题组训练 */}
      {activeModule==="m3"&&(
        <div>
          <div style={{background:C.s1,border:`1px solid ${C.m3}22`,borderRadius:12,padding:20,marginBottom:16}}>
            <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:8}}>
              {moduleNavStack.length>0&&(
                <button onClick={navBack}
                  style={{padding:"6px 14px",borderRadius:8,cursor:"pointer",fontSize:15,
                    background:C.s2,color:C.muted,border:`1px solid ${C.border}`}}>
                  ← 返回
                </button>
              )}
              <h3 style={{margin:0,fontSize:20,color:C.m3,fontWeight:800}}>③ 题组训练 — 50组，构建方法体系</h3>
            </div>
            <p style={{margin:0,fontSize:17,color:C.muted,lineHeight:1.8}}>
              每组题目考察知识点间的关联，构建完整方法体系。做错了可直接跳转②基础习题补差。
            </p>
          </div>

          {/* 题组选择器 */}
          <div style={{display:"flex",gap:6,flexWrap:"wrap",marginBottom:16}}>
            {TOPIC_GROUPS.map(tg=>{
              const c=DOM[TOPIC_MAP[tg.topics[0]]?.domain]?.color||C.m3;
              const wrongCnt=[...m3WrongSet].filter(id=>id.startsWith(tg.id+"_")).length;
              const isSel=selGroup===tg.id;
              return(
                <button key={tg.id} onClick={()=>setSelGroup(isSel?null:tg.id)}
                  style={{padding:"5px 14px",borderRadius:20,fontSize:15,cursor:"pointer",
                    position:"relative",
                    background:isSel?C.m3+"22":C.s2,
                    border:`1px solid ${isSel?C.m3:wrongCnt>0?C.red+"55":C.border}`,
                    color:isSel?C.m3:C.muted,fontWeight:isSel?700:400}}>
                  {tg.name}
                  {wrongCnt>0&&(
                    <span style={{position:"absolute",top:-4,right:-4,
                      background:C.red,color:"white",fontSize:12,fontWeight:700,
                      padding:"1px 4px",borderRadius:8,lineHeight:1.4}}>{wrongCnt}</span>
                  )}
                </button>
              );
            })}
          </div>

          {/* 选中题组详情 */}
          {selGroup&&(()=>{
            const tg=TOPIC_GROUPS.find(x=>x.id===selGroup);
            if(!tg)return null;
            const c=DOM[TOPIC_MAP[tg.topics[0]]?.domain]?.color||C.m3;
            return(
              <div>
                {/* 返回列表按钮（手机/pad直接选组时使用） */}
                <button onClick={()=>{setSelGroup(null);if(moduleNavStack.length>0)navBack();}}
                  style={{display:"inline-flex",alignItems:"center",gap:6,
                    padding:"8px 16px",borderRadius:8,cursor:"pointer",fontSize:15,
                    background:C.s2,color:C.muted,border:`1px solid ${C.border}`,
                    marginBottom:12}}>
                  ← 返回题组列表
                </button>
                {/* 题组信息卡 */}
                <div style={{background:C.s1,border:`1px solid ${c}30`,borderRadius:12,
                  padding:"16px 20px",marginBottom:16}}>
                  <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:10}}>
                    <div>
                      <div style={{fontSize:14,color:C.m3,fontWeight:700,marginBottom:4,letterSpacing:1}}>
                        题组 {tg.id.slice(2)}
                      </div>
                      <h3 style={{margin:"0 0 6px",fontSize:20,fontWeight:800,color:C.text}}>{tg.name}</h3>
                      <p style={{margin:"0 0 10px",fontSize:16,color:C.muted,lineHeight:1.6}}>{tg.desc}</p>
                      <div style={{display:"flex",gap:6,flexWrap:"wrap"}}>
                        {tg.topics.map(tid=>(
                          <Tag key={tid} c={DOM[TOPIC_MAP[tid]?.domain]?.color||C.muted} sm>{TOPIC_MAP[tid]?.name}</Tag>
                        ))}
                        {tg.methods.map(mid=>{
                          const m=METHODS.find(x=>x.id===mid);
                          return m?<Tag key={mid} c={C.purple} sm>{m.name}</Tag>:null;
                        })}
                      </div>
                    </div>
                    <Dots v={tg.diff} c={C.m3}/>
                  </div>
                </div>

                {/* 题目列表 */}
                {tg.questions.map((q,i)=>{
                  const qId=`${tg.id}_${i}`;
                  const isOpen=openQ===qId;
                  const isW=m3WrongSet.has(qId);
                  const topicName=TOPIC_MAP[tg.topics[0]]?.name||tg.name;
                  return(
                    <div key={i} style={{background:C.s1,
                      border:`1px solid ${isW?C.red+"44":isOpen?c+"44":C.border}`,
                      borderRadius:12,padding:18,marginBottom:12,
                      transition:"border-color .2s"}}>
                      {/* 题号 + 错题标记 + 操作 */}
                      <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:10,flexWrap:"wrap"}}>
                        <span style={{fontSize:15,fontWeight:700,color:C.m3,minWidth:52}}>
                          第{i+1}题
                        </span>
                        <Dots v={q.diff||2} c={c} max={3}/>
                        {isW&&<Tag c={C.red} sm>已标记错题</Tag>}
                        <div style={{marginLeft:"auto",display:"flex",gap:6}}>
                          <button onClick={()=>isW?removeM3Wrong(qId):addM3Wrong(qId)}
                            style={{padding:"3px 10px",borderRadius:6,cursor:"pointer",fontSize:14,
                              background:isW?C.red+"18":"none",
                              color:isW?C.red:C.muted,
                              border:`1px solid ${isW?C.red+"44":C.border}`}}>
                            {isW?"✓ 错题":"做错了"}
                          </button>
                          <button onClick={()=>setOpenQ(isOpen?null:qId)}
                            style={{padding:"3px 12px",borderRadius:6,cursor:"pointer",fontSize:14,
                              background:isOpen?C.m3+"18":"none",
                              color:C.m3,border:`1px solid ${C.m3}44`}}>
                            {isOpen?"▲ 收起":"▼ 解析"}
                          </button>
                        </div>
                      </div>

                      {/* 题目内容 */}
                      <div style={{background:C.s2,padding:"12px 16px",borderRadius:8,
                        borderLeft:`3px solid ${c}`,marginBottom:10}}>
                        <p style={{margin:0,fontSize:17,color:C.text,lineHeight:1.9}}>{q.content}</p>
                      </div>
                      <GeoFigure key={`tg_${tg.id}_${i}`} content={q.content} topicIds={tg.topics} questionId={`tg_${tg.id}_${i}`} questionType="group"/>

                      {/* 详细解析 */}
                      {isOpen&&(
                        <div>
                          <div style={{background:C.sta+"0a",border:`1px solid ${C.sta}22`,
                            borderRadius:8,padding:14,marginBottom:10}}>
                            <div style={{fontSize:17,fontWeight:700,color:C.gold,marginBottom:8}}>
                              答案：{q.answer}
                            </div>
                            <div style={{fontSize:17,color:C.text,lineHeight:1.9,whiteSpace:"pre-line"}}>
                              {q.sol}
                            </div>
                            <div style={{marginTop:10,padding:"8px 12px",background:C.red+"0d",
                              borderRadius:6,fontSize:16,color:C.red}}>
                              ⚠️ 易错：{q.error}
                            </div>
                          </div>

                          {/* AI讲解 */}
                          <div style={{display:"flex",gap:8,alignItems:"center",flexWrap:"wrap",marginBottom:10}}>
                            <button
                              onClick={()=>handleSpeak({id:qId,content:q.content,answer:q.answer,sol:q.sol,error:q.error},qId)}
                              disabled={ttsLoading===qId}
                              style={{display:"flex",alignItems:"center",gap:6,
                                padding:"6px 16px",borderRadius:20,cursor:"pointer",
                                fontSize:15,fontWeight:700,
                                background:ttsId===qId?C.red:C.alg,
                                color:"white",border:"none",
                                opacity:ttsLoading===qId?0.7:1}}>
                              {ttsLoading===qId?"⏳ 生成中…":ttsId===qId?"⏹ 停止":"🔊 语音讲解"}
                            </button>
                            <AskTutor q={{id:qId,content:q.content,answer:q.answer,sol:q.sol,error:q.error}}
                              topicName={topicName} mode={isW?"wrong":"explain"}/>
                          </div>
                          {ttsText[qId]&&(
                            <div style={{marginBottom:10,padding:"8px 12px",
                              background:C.alg+"0d",borderRadius:6,
                              border:`1px solid ${C.alg}22`,fontSize:14,color:C.text,lineHeight:1.8}}>
                              {ttsText[qId]}
                            </div>
                          )}

                          {/* 做错了 → 跳转基础习题 */}
                          {isW&&(
                            <div style={{padding:"12px 14px",background:C.m2+"0d",
                              border:`1px solid ${C.m2}25`,borderRadius:8}}>
                              <div style={{fontSize:15,color:C.m2,fontWeight:700,marginBottom:8}}>
                                ↓ 找到错因：去做对应知识点的②基础习题
                              </div>
                              <div style={{display:"flex",gap:6,flexWrap:"wrap"}}>
                                {tg.topics.map(tid=>{
                                  const basics=questionService.getBasicByTopic(tid);
                                  if(basics.length===0)return null;
                                  const tc=DOM[TOPIC_MAP[tid]?.domain]?.color||C.m2;
                                  return(
                                    <button key={tid}
                                      onClick={()=>navigateModule("m2",{topic:tid})}
                                      style={{padding:"5px 14px",borderRadius:8,cursor:"pointer",
                                        fontSize:15,fontWeight:700,background:tc,
                                        color:"white",border:"none"}}>
                                      ② {TOPIC_MAP[tid]?.name}（{basics.length}道）
                                    </button>
                                  );
                                })}
                                <button onClick={()=>navigateModule("m1",{topic:tg.topics[0]})}
                                  style={{padding:"5px 14px",borderRadius:8,cursor:"pointer",
                                    fontSize:15,background:"none",color:C.m1,
                                    border:`1px solid ${C.m1}44`}}>
                                  ① 基础知识讲解
                                </button>
                              </div>
                            </div>
                          )}

                          {/* 做对了 → 向上挑战压轴题（仅展开解析后显示）*/}
                          {isOpen&&!isW&&FINAL_GROUPS.filter(fg=>
                            (fg.topics||[]).some(tid=>tg.topics.includes(tid))
                          ).length>0&&(
                            <div style={{padding:"12px 14px",background:C.m4+"0d",
                              border:`1px solid ${C.m4}25`,borderRadius:8,marginTop:10}}>
                              <div style={{fontSize:15,color:C.m4,fontWeight:700,marginBottom:8}}>
                                ↑ 做对了！挑战同类压轴题
                              </div>
                              <div style={{display:"flex",gap:6,flexWrap:"wrap"}}>
                                {FINAL_GROUPS.filter(fg=>
                                  (fg.topics||[]).some(tid=>tg.topics.includes(tid))
                                ).slice(0,3).map(fg=>(
                                  <button key={fg.id}
                                    onClick={()=>navigateModule("m4",{final:fg.id})}
                                    style={{padding:"5px 14px",borderRadius:8,cursor:"pointer",
                                      fontSize:15,fontWeight:700,background:C.m4,
                                      color:"white",border:"none"}}>
                                    ④ {fg.name}
                                  </button>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            );
          })()}

          {!selGroup&&(
            <div style={{textAlign:"center",padding:60,color:C.muted}}>
              <div style={{fontSize:32,marginBottom:8}}>③</div>
              请在上方选择题组开始训练
            </div>
          )}
        </div>
      )}

      {/* Module M4: 压轴题组 */}
      {activeModule==="m4"&&(
        <div>
          <div style={{background:C.s1,border:`1px solid ${C.m4}22`,borderRadius:12,padding:20,marginBottom:16}}>
            <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:8}}>
              {moduleNavStack.length>0&&(
                <button onClick={navBack}
                  style={{padding:"6px 14px",borderRadius:8,cursor:"pointer",fontSize:15,
                    background:C.s2,color:C.muted,border:`1px solid ${C.border}`}}>
                  ← 返回
                </button>
              )}
              <h3 style={{margin:0,fontSize:20,color:C.m4,fontWeight:800}}>④ 压轴题组 — 30组，催生解题灵感</h3>
            </div>
            <p style={{margin:0,fontSize:17,color:C.muted,lineHeight:1.8}}>
              综合运用多个知识点和方法。做错了可向下跳转③题组训练或②基础习题追因。
            </p>
          </div>

          {/* 压轴组选择器 */}
          <div style={{display:"flex",gap:6,flexWrap:"wrap",marginBottom:16}}>
            {FINAL_GROUPS.map(fg=>{
              const wrongCnt=[...m4WrongSet].filter(id=>id.startsWith(fg.id+"_")).length;
              const isSel=selFinal===fg.id;
              return(
                <button key={fg.id} onClick={()=>setSelFinal(isSel?null:fg.id)}
                  style={{padding:"5px 14px",borderRadius:20,fontSize:15,cursor:"pointer",
                    position:"relative",
                    background:isSel?C.m4+"22":C.s2,
                    border:`1px solid ${isSel?C.m4:wrongCnt>0?C.red+"55":C.border}`,
                    color:isSel?C.m4:C.muted,fontWeight:isSel?700:400}}>
                  {fg.name}
                  {wrongCnt>0&&(
                    <span style={{position:"absolute",top:-4,right:-4,
                      background:C.red,color:"white",fontSize:12,fontWeight:700,
                      padding:"1px 4px",borderRadius:8,lineHeight:1.4}}>{wrongCnt}</span>
                  )}
                </button>
              );
            })}
          </div>

          {/* 选中压轴组详情 */}
          {selFinal&&(()=>{
            const fg=FINAL_GROUPS.find(x=>x.id===selFinal);
            if(!fg)return null;
            return(
              <div>
                {/* 返回列表按钮（手机/pad直接选组时使用） */}
                <button onClick={()=>{setSelFinal(null);if(moduleNavStack.length>0)navBack();}}
                  style={{display:"inline-flex",alignItems:"center",gap:6,
                    padding:"8px 16px",borderRadius:8,cursor:"pointer",fontSize:15,
                    background:C.s2,color:C.muted,border:`1px solid ${C.border}`,
                    marginBottom:12}}>
                  ← 返回压轴列表
                </button>
                {/* 压轴组信息卡 */}
                <div style={{background:C.s1,border:`1px solid ${C.m4}30`,borderRadius:12,
                  padding:"16px 20px",marginBottom:16}}>
                  <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:10}}>
                    <div>
                      <Tag c={C.m4} sm>压轴 {fg.id.slice(2)}</Tag>
                      <h3 style={{margin:"8px 0 6px",fontSize:20,fontWeight:800,color:C.text}}>{fg.name}</h3>
                      <p style={{margin:"0 0 10px",fontSize:16,color:C.muted,lineHeight:1.6}}>{fg.desc}</p>
                      <div style={{display:"flex",gap:5,flexWrap:"wrap"}}>
                        {(fg.topics||[]).map(tid=><Tag key={tid} c={DOM[TOPIC_MAP[tid]?.domain]?.color||C.muted} sm>{TOPIC_MAP[tid]?.name}</Tag>)}
                        {(fg.methods||[]).map(mid=>{
                          const m=METHODS.find(x=>x.id===mid);
                          return m?<Tag key={mid} c={C.purple} sm>{m.name}</Tag>:null;
                        })}
                      </div>
                    </div>
                    <Dots v={fg.diff} c={C.m4}/>
                  </div>
                </div>

                {/* 题目列表 */}
                {fg.questions.map((q,i)=>{
                  const qId=`${fg.id}_${i}`;
                  const isOpen=openQ===qId;
                  const isW=m4WrongSet.has(qId);
                  const topicName=TOPIC_MAP[(fg.topics||[])[0]]?.name||fg.name;
                  return(
                    <div key={i} style={{background:C.s1,
                      border:`1px solid ${isW?C.red+"44":isOpen?C.m4+"44":C.border}`,
                      borderRadius:12,padding:18,marginBottom:12,
                      transition:"border-color .2s"}}>
                      {/* 题号 + 错题标记 + 操作 */}
                      <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:10,flexWrap:"wrap"}}>
                        <span style={{fontSize:15,fontWeight:700,color:C.m4,minWidth:52}}>
                          第{i+1}题
                        </span>
                        <Dots v={q.diff||3} c={C.m4} max={3}/>
                        {isW&&<Tag c={C.red} sm>已标记错题</Tag>}
                        <div style={{marginLeft:"auto",display:"flex",gap:6}}>
                          <button onClick={()=>isW?removeM4Wrong(qId):addM4Wrong(qId)}
                            style={{padding:"3px 10px",borderRadius:6,cursor:"pointer",fontSize:14,
                              background:isW?C.red+"18":"none",
                              color:isW?C.red:C.muted,
                              border:`1px solid ${isW?C.red+"44":C.border}`}}>
                            {isW?"✓ 错题":"做错了"}
                          </button>
                          <button onClick={()=>setOpenQ(isOpen?null:qId)}
                            style={{padding:"3px 12px",borderRadius:6,cursor:"pointer",fontSize:14,
                              background:isOpen?C.m4+"18":"none",
                              color:C.m4,border:`1px solid ${C.m4}44`}}>
                            {isOpen?"▲ 收起":"▼ 压轴解析"}
                          </button>
                        </div>
                      </div>

                      {/* 题目内容 */}
                      <div style={{background:C.s2,padding:"12px 16px",borderRadius:8,
                        borderLeft:`3px solid ${C.m4}`,marginBottom:10}}>
                        <p style={{margin:0,fontSize:17,color:C.text,lineHeight:1.9}}>{q.content}</p>
                      </div>
                      <GeoFigure key={`fg_${fg.id}_${i}`} content={q.content} topicIds={fg.topics||[]} questionId={`fg_${fg.id}_${i}`} questionType="final"/>

                      {/* 详细解析 */}
                      {isOpen&&(
                        <div>
                          <div style={{background:C.m4+"0a",border:`1px solid ${C.m4}22`,
                            borderRadius:8,padding:14,marginBottom:10}}>
                            <div style={{fontSize:17,fontWeight:700,color:C.gold,marginBottom:8}}>
                              答案：{q.answer}
                            </div>
                            <div style={{fontSize:17,color:C.text,lineHeight:1.9,whiteSpace:"pre-line"}}>
                              {q.sol}
                            </div>
                            <div style={{marginTop:10,padding:"8px 12px",background:C.red+"0d",
                              borderRadius:6,fontSize:16,color:C.red}}>
                              ⚠️ {q.error}
                            </div>
                          </div>

                          {/* AI讲解 */}
                          <div style={{display:"flex",gap:8,alignItems:"center",flexWrap:"wrap",marginBottom:10}}>
                            <button
                              onClick={()=>handleSpeak({id:qId,content:q.content,answer:q.answer,sol:q.sol,error:q.error},qId)}
                              disabled={ttsLoading===qId}
                              style={{display:"flex",alignItems:"center",gap:6,
                                padding:"6px 16px",borderRadius:20,cursor:"pointer",
                                fontSize:15,fontWeight:700,
                                background:ttsId===qId?C.red:C.alg,
                                color:"white",border:"none",
                                opacity:ttsLoading===qId?0.7:1}}>
                              {ttsLoading===qId?"⏳ 生成中…":ttsId===qId?"⏹ 停止":"🔊 语音讲解"}
                            </button>
                            <AskTutor q={{id:qId,content:q.content,answer:q.answer,sol:q.sol,error:q.error}}
                              topicName={topicName} mode={isW?"wrong":"explain"}/>
                          </div>
                          {ttsText[qId]&&(
                            <div style={{marginBottom:10,padding:"8px 12px",
                              background:C.alg+"0d",borderRadius:6,
                              border:`1px solid ${C.alg}22`,fontSize:14,color:C.text,lineHeight:1.8}}>
                              {ttsText[qId]}
                            </div>
                          )}

                          {/* 做错了 → 向下跳转题组训练或基础习题 */}
                          {isW&&(
                            <div style={{padding:"12px 14px",background:C.m3+"0d",
                              border:`1px solid ${C.m3}25`,borderRadius:8}}>
                              <div style={{fontSize:15,color:C.m3,fontWeight:700,marginBottom:8}}>
                                ↓ 找错因：先下沉到③题组训练或②基础习题
                              </div>
                              <div style={{display:"flex",gap:6,flexWrap:"wrap"}}>
                                {/* 找相关题组 */}
                                {TOPIC_GROUPS.filter(tg=>
                                  (fg.topics||[]).some(tid=>tg.topics.includes(tid))
                                ).slice(0,3).map(tg=>(
                                  <button key={tg.id}
                                    onClick={()=>navigateModule("m3",{group:tg.id})}
                                    style={{padding:"5px 14px",borderRadius:8,cursor:"pointer",
                                      fontSize:15,fontWeight:700,background:C.m3,
                                      color:"white",border:"none"}}>
                                    ③ {tg.name}
                                  </button>
                                ))}
                                {/* 直接基础习题 */}
                                {(fg.topics||[]).slice(0,2).map(tid=>{
                                  const basics=questionService.getBasicByTopic(tid);
                                  if(!basics.length)return null;
                                  const tc=DOM[TOPIC_MAP[tid]?.domain]?.color||C.m2;
                                  return(
                                    <button key={tid}
                                      onClick={()=>navigateModule("m2",{topic:tid})}
                                      style={{padding:"5px 14px",borderRadius:8,cursor:"pointer",
                                        fontSize:15,background:"none",color:tc,
                                        border:`1px solid ${tc}44`}}>
                                      ② {TOPIC_MAP[tid]?.name}基础题
                                    </button>
                                  );
                                })}
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            );
          })()}

          {!selFinal&&(
            <div style={{textAlign:"center",padding:60,color:C.muted}}>
              <div style={{fontSize:32,marginBottom:8}}>④</div>
              请在上方选择压轴题组开始挑战
            </div>
          )}
        </div>
      )}
    </div>
  );
}

/* ════════════════════════════════════════════════════════════
   VIDEO COMPONENTS — 视频讲解区（无数据时不渲染）
   数据来源：后端 GET /topics/:code/videos（V1.5+）
   当前：videos 默认为空数组，接口就绪后替换数据源即可。
════════════════════════════════════════════════════════════ */
function VideoCard({video}) {
  const href = video.bvid
    ? `https://www.bilibili.com/video/${video.bvid}`
    : (video.url || "#");
  return (
    <a href={href} target="_blank" rel="noopener noreferrer"
      style={{display:"block",textDecoration:"none",background:C.s2,
        border:`1px solid ${C.border}`,borderRadius:10,overflow:"hidden",
        transition:"border-color .2s"}}
      onMouseEnter={e=>e.currentTarget.style.borderColor=C.cyan}
      onMouseLeave={e=>e.currentTarget.style.borderColor=C.border}>
      {video.cover_url&&(
        <img src={video.cover_url} alt={video.title}
          style={{width:"100%",aspectRatio:"16/9",objectFit:"cover",display:"block"}}/>
      )}
      {!video.cover_url&&(
        <div style={{width:"100%",aspectRatio:"16/9",background:C.cyan+"0d",
          display:"flex",alignItems:"center",justifyContent:"center",fontSize:28,color:C.cyan}}>
          ▶
        </div>
      )}
      <div style={{padding:"10px 12px"}}>
        <div style={{fontSize:15,color:C.text,fontWeight:600,lineHeight:1.5,
          marginBottom:6,display:"-webkit-box",WebkitLineClamp:2,
          WebkitBoxOrient:"vertical",overflow:"hidden"}}>{video.title}</div>
        <div style={{display:"flex",justifyContent:"space-between",fontSize:13,color:C.muted}}>
          <span>🎬 {video.author||"UP主"}</span>
          {video.duration&&<span>⏱ {video.duration}</span>}
        </div>
      </div>
    </a>
  );
}

function VideoSection({topicCode, videos=[], title="📺 视频讲解"}) {
  if (!videos || videos.length === 0) return null;
  return (
    <div style={{background:C.s1,border:`1px solid ${C.cyan}22`,
      borderRadius:12,padding:20,marginBottom:14}}>
      <h3 style={{margin:"0 0 14px",fontSize:17,color:C.cyan}}>{title}</h3>
      <div style={{display:"grid",
        gridTemplateColumns:"repeat(auto-fill,minmax(200px,1fr))",gap:10}}>
        {videos.map((v,i)=><VideoCard key={v.bvid||v.id||i} video={v}/>)}
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════════════════
   PAGE: TOPIC DETAIL
════════════════════════════════════════════════════════════ */
function PageDetail({topicId,mastered,onToggle,onNav,wrongSet,addWrong,removeWrong}) {
  const {isMobile}=useBP();
  const t=TOPIC_MAP[topicId];
  const [openSol,setOpenSol]=useState(null);
  const [chat,setChat]=useState([]);
  const [input,setInput]=useState("");
  const [aiLoad,setAiLoad]=useState(false);
  const chatRef=useRef(null);
  useEffect(()=>{setChat([]);setOpenSol(null);},[topicId]);
  useEffect(()=>{if(chatRef.current)chatRef.current.scrollTop=9999;},[chat]);

  if(!t) return(
    <div style={{display:"flex",alignItems:"center",justifyContent:"center",
      height:"60%",flexDirection:"column",gap:12,color:C.muted}}>
      <span style={{fontSize:40}}>∑</span>
      <span>请从知识图谱或列表中选择知识点</span>
    </div>
  );

  const c=DOM[t.domain].color,isM=mastered.has(t.id);
  const qs=EXAM_QS.filter(q=>q.topic===t.id);
  const topicMethods=METHODS.filter(m=>m.topics.includes(t.id));

  const sendAI=async()=>{
    if(!input.trim()||aiLoad)return;
    const msg=input.trim();setInput("");setAiLoad(true);
    const newChat=[...chat,{r:"user",t:msg}];setChat(newChat);
    try{
      const text=await callClaude(
        `你是"数脉"初中数学AI老师，专注「${t.name}」知识点。
青岛卷10年该考点出现${t.examYears.length}次，总分${t.totalScore}分，考察频率${t.freq}%。
核心考点：${t.keys.join("；")}
中考攻略：${t.tips}
请用清晰、步骤化的方式回答初中生的数学问题。150字以内，中文。`,
        msg,
        chat.map(m=>({role:m.r,content:m.t}))
      );
      setChat([...newChat,{r:"assistant",t:text}]);
    }catch{setChat([...newChat,{r:"assistant",t:"网络错误，请重试。"}]);}
    setAiLoad(false);
  };

  return(
    <div style={{padding:isMobile?12:28,maxWidth:920,margin:"0 auto"}}>
      <button onClick={()=>onNav("modules")}
        style={{background:"none",border:`1px solid ${C.border}`,color:C.muted,
          padding:"5px 14px",borderRadius:6,cursor:"pointer",fontSize:16,marginBottom:20}}>
        ← 返回模块
      </button>

      {/* Header */}
      <div style={{background:C.s1,border:`1px solid ${c}28`,borderRadius:16,
        padding:"24px 28px",marginBottom:16,position:"relative",overflow:"hidden"}}>
        <div style={{position:"absolute",top:-60,right:-60,width:220,height:220,
          background:c,borderRadius:"50%",opacity:.04}}/>
        <div style={{display:"flex",gap:20,flexWrap:"wrap"}}>
          <div style={{flex:1,minWidth:260}}>
            <div style={{display:"flex",gap:6,marginBottom:10,flexWrap:"wrap"}}>
              <Tag c={c}>{DOM[t.domain].name}</Tag>
              <Tag c={C.muted}>{t.semester}</Tag>
              {isM&&<Tag c={C.ok}>✓ 已掌握</Tag>}
            </div>
            <h1 style={{margin:"0 0 10px",fontSize:30,fontWeight:900,color:C.text}}>{t.name}</h1>
            <p style={{margin:"0 0 14px",fontSize:17,color:C.muted,lineHeight:1.8}}>{(t.fivePoints?.[0]||'')}</p>
            {t.pre.length>0&&(
              <div style={{display:"flex",gap:6,alignItems:"center",flexWrap:"wrap"}}>
                <span style={{fontSize:15,color:C.dim}}>前置知识：</span>
                {t.pre.map(pid=>{
                  const pt=TOPIC_MAP[pid];if(!pt)return null;
                  return(
                    <button key={pid} onClick={()=>onNav("detail",pid)}
                      style={{padding:"3px 10px",borderRadius:20,fontSize:15,cursor:"pointer",
                        background:"none",border:`1px solid ${DOM[pt.domain].color}55`,
                        color:DOM[pt.domain].color}}>
                      {pt.name}
                    </button>
                  );
                })}
              </div>
            )}
          </div>
          <div style={{minWidth:200}}>
            <div style={{background:C.s2,borderRadius:10,padding:"12px 14px",marginBottom:12}}>
              <div style={{fontSize:15,color:C.muted,marginBottom:7}}>📅 10年考察记录</div>
              <YearRow years={t.examYears}/>
              <div style={{marginTop:8,display:"flex",justifyContent:"space-between",fontSize:16}}>
                <span style={{color:C.muted}}>考{t.examYears.length}年</span>
                <span style={{color:c,fontWeight:700}}>总{t.totalScore}分</span>
              </div>
            </div>
            <div style={{marginBottom:8,display:"flex",alignItems:"center",gap:8}}>
              <span style={{fontSize:15,color:C.muted,minWidth:50}}>考察频率</span>
              <Bar v={t.freq} color={c} h={6}/><span style={{fontSize:16,fontWeight:700,color:c,minWidth:36}}>{t.freq}%</span>
            </div>
            <div style={{marginBottom:14,display:"flex",alignItems:"center",gap:8}}>
              <span style={{fontSize:15,color:C.muted,minWidth:50}}>平均难度</span>
              <Dots v={t.diff} c={c}/>
            </div>
            <button onClick={()=>onToggle(t.id)}
              style={{width:"100%",padding:"9px 0",borderRadius:8,cursor:"pointer",fontSize:17,fontWeight:700,
                transition:"all .2s",background:isM?C.ok+"1a":c+"1a",
                color:isM?C.ok:c,border:`1px solid ${isM?C.ok:c}`}}>
              {isM?"✓ 已标记掌握":"+ 标记为已掌握"}
            </button>
          </div>
        </div>
      </div>

      {/* 五个点 */}
      <div style={{background:C.s1,border:`1px solid ${C.border}`,borderRadius:12,padding:20,marginBottom:14}}>
        <h3 style={{margin:"0 0 14px",fontSize:17,color:c}}>🎯 一个概念五个点</h3>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(200px,1fr))",gap:10}}>
          {(t.fivePoints||[]).map((p,i)=>{
            const labels=["常例","特例","反例","考察目的","代数/图形"];
            const colors=[C.ok,C.gold,C.red,C.alg,C.purple];
            return(
              <div key={i} style={{background:C.s2,borderRadius:8,padding:"10px 12px",
                borderLeft:`3px solid ${colors[i]||c}`}}>
                <div style={{fontSize:14,color:colors[i]||c,fontWeight:700,marginBottom:4}}>{labels[i]}</div>
                <div style={{fontSize:16,color:C.text,lineHeight:1.6}}>{p}</div>
              </div>
            );
          })}
        </div>
      </div>

      <div style={{display:"grid",gridTemplateColumns:isMobile?"1fr":"1fr 1fr",gap:12,marginBottom:12}}>
        {/* Keys */}
        <div style={{background:C.s1,border:`1px solid ${C.border}`,borderRadius:12,padding:20}}>
          <h3 style={{margin:"0 0 12px",fontSize:17,color:c}}>📌 核心考点</h3>
          {t.keys.map((k,i)=>(
            <div key={i} style={{display:"flex",gap:8,marginBottom:8,fontSize:17,color:C.text,lineHeight:1.7}}>
              <span style={{color:c,fontWeight:700,minWidth:18}}>{i+1}.</span>{k}
            </div>
          ))}
        </div>
        {/* Tips + Methods */}
        <div style={{background:C.s1,border:`1px solid ${C.border}`,borderRadius:12,padding:20}}>
          <h3 style={{margin:"0 0 12px",fontSize:17,color:C.gold}}>⚡ 中考攻略</h3>
          <p style={{margin:"0 0 14px",fontSize:17,color:C.text,lineHeight:1.8}}>{t.tips}</p>
          {topicMethods.length>0&&(
            <div>
              <div style={{fontSize:15,color:C.muted,marginBottom:7}}>涉及解题方法</div>
              <div style={{display:"flex",gap:5,flexWrap:"wrap"}}>
                {topicMethods.map(m=>(
                  <span key={m.id} style={{padding:"2px 9px",borderRadius:20,fontSize:15,
                    background:C.purple+"18",color:C.purple,border:`1px solid ${C.purple}30`,fontWeight:600}}>
                    {m.name}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Exam questions */}
      <div style={{background:C.s1,border:`1px solid ${C.border}`,borderRadius:12,padding:20,marginBottom:14}}>
        <h3 style={{margin:"0 0 14px",fontSize:17,color:C.geo}}>📝 历年真题（{qs.length}道）</h3>
        {qs.length===0&&<p style={{color:C.muted,fontSize:17}}>该知识点暂无收录真题</p>}
        {qs.map(q=>{
          const isW=wrongSet.has(q.id),solOpen=openSol===q.id;
          return(
            <div key={q.id} style={{borderBottom:`1px solid ${C.border}`,paddingBottom:14,marginBottom:14}}>
              <div style={{display:"flex",gap:6,marginBottom:9,alignItems:"center",flexWrap:"wrap"}}>
                <Tag c={c}>{q.yr}年</Tag><Tag c={C.muted}>第{q.no}题</Tag>
                <Tag c={C.muted}>{q.type==="choice"?"选择":q.type==="fill"?"填空":"解答"}</Tag>
                <Tag c={C.muted}>{q.score}分</Tag>
                <div style={{display:"flex",gap:2}}>
                  {[1,2,3,4,5].map(i=><span key={i} style={{fontSize:14,color:i<=q.diff?C.gold:C.dim}}>★</span>)}
                </div>
                {q.methods&&q.methods.map(mid=>{
                  const m=METHODS.find(x=>x.id===mid);
                  return m?<Tag key={mid} c={C.purple} sm>{m.name}</Tag>:null;
                })}
                {isW&&<Tag c={C.red} sm>错题本</Tag>}
                <button onClick={()=>isW?removeWrong(q.id):addWrong(q.id)}
                  style={{marginLeft:"auto",fontSize:15,padding:"2px 9px",borderRadius:5,cursor:"pointer",
                    background:isW?C.red+"1a":"none",color:isW?C.red:C.muted,
                    border:`1px solid ${isW?C.red+"44":C.border}`}}>
                  {isW?"✓ 已加错题本":"+ 错题本"}
                </button>
              </div>
              <div style={{background:C.s2,padding:"12px 14px",borderRadius:8,
                borderLeft:`3px solid ${c}`,marginBottom:10}}>
                <p style={{margin:0,fontSize:18,color:C.text,lineHeight:1.8}}>{q.content}</p>
                {q.svg&&<div style={{marginTop:8,overflowX:"auto"}} dangerouslySetInnerHTML={{__html:q.svg}}/>}
              </div>
              <button onClick={()=>setOpenSol(solOpen?null:q.id)}
                style={{fontSize:16,padding:"4px 12px",borderRadius:6,cursor:"pointer",
                  background:"none",color:C.geo,border:`1px solid ${C.geo}40`}}>
                {solOpen?"▲ 收起":"▼ 查看解析"}
              </button>
              {solOpen&&(
                <div style={{marginTop:10,background:C.geo+"0a",border:`1px solid ${C.geo}22`,
                  borderRadius:8,padding:14}}>
                  <div style={{fontSize:17,fontWeight:700,color:C.gold,marginBottom:8}}>答案：{q.answer}</div>
                  <pre style={{margin:"0 0 10px",fontSize:17,color:C.text,lineHeight:1.9,
                    whiteSpace:"pre-wrap",fontFamily:"inherit"}}>{q.sol}</pre>
                  <div style={{padding:"7px 12px",background:C.red+"0d",borderRadius:6,fontSize:16,color:C.red,marginBottom:8}}>
                    ⚠️ 易错点：{q.error}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* 视频讲解区（V1.5 接口就绪后传入 videos 数组即可显示） */}
      <VideoSection topicCode={t.id} videos={[]} title="📺 视频讲解"/>

      {/* AI Tutor */}
      <div style={{background:C.s1,border:`1px solid ${c}28`,borderRadius:12,padding:20}}>
        <h3 style={{margin:"0 0 4px",fontSize:18,color:c}}>🤖 AI数学老师 · {t.name}专项</h3>
        <p style={{margin:"0 0 12px",fontSize:16,color:C.muted}}>
          针对「{t.name}」的专属辅导，内置10年青岛卷考点分析
        </p>
        {chat.length>0&&(
          <div ref={chatRef} style={{maxHeight:240,overflowY:"auto",marginBottom:12,
            display:"flex",flexDirection:"column",gap:8}}>
            {chat.map((m,i)=>(
              <div key={i} style={{display:"flex",justifyContent:m.r==="user"?"flex-end":"flex-start"}}>
                <div style={{maxWidth:"84%",padding:"9px 13px",borderRadius:10,fontSize:17,
                  lineHeight:1.7,whiteSpace:"pre-wrap",background:m.r==="user"?c+"1a":C.s2,
                  color:C.text,border:`1px solid ${m.r==="user"?c+"40":C.border}`}}>{m.t}</div>
              </div>
            ))}
            {aiLoad&&<div style={{alignSelf:"flex-start",padding:"9px 13px",borderRadius:10,
              background:C.s2,color:C.muted,fontSize:17}}>思考中…</div>}
          </div>
        )}
        <div style={{display:"flex",gap:8}}>
          <input value={input} onChange={e=>setInput(e.target.value)}
            onKeyDown={e=>e.key==="Enter"&&sendAI()}
            placeholder={`例如：${t.name}最容易错在哪里？`}
            style={{flex:1,padding:"9px 13px",borderRadius:8,fontSize:17,background:C.s2,
              border:`1px solid ${C.border}`,color:C.text,outline:"none"}}/>
          <button onClick={sendAI} disabled={aiLoad||!input.trim()}
            style={{padding:"9px 20px",borderRadius:8,fontSize:17,fontWeight:700,border:"none",
              cursor:aiLoad||!input.trim()?"not-allowed":"pointer",
              background:aiLoad||!input.trim()?C.dim:c,color:"white",transition:"all .2s"}}>
            发送
          </button>
        </div>
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════════════════
   PAGE: METHODS — 23种解题方法
════════════════════════════════════════════════════════════ */
function PageMethods({onNav}) {
  const {isMobile}=useBP();
  const [selCat,setSelCat]=useState("全部");
  const [selM,setSelM]=useState(null);
  const cats=["全部",...new Set(METHODS.map(m=>m.cat))];
  const visible=selCat==="全部"?METHODS:METHODS.filter(m=>m.cat===selCat);

  return(
    <div style={{padding:isMobile?12:24}}>
      <div style={{background:C.s1,border:`1px solid ${C.purple}22`,borderRadius:12,padding:20,marginBottom:18}}>
        <h2 style={{margin:"0 0 8px",fontSize:22,fontWeight:900,color:C.purple}}>
          🔧 23种基本解题方法
        </h2>
        <p style={{margin:0,fontSize:17,color:C.muted,lineHeight:1.8}}>
          初中数学所有解题方法的完整分类和总结。每种方法标注适用的知识点，
          点击知识点可跳转学习对应内容。掌握方法体系，才能真正做到举一反三。
        </p>
      </div>

      {/* Category filter */}
      <div style={{display:"flex",gap:8,marginBottom:18,flexWrap:"wrap"}}>
        {cats.map(cat=>(
          <BtnPill key={cat} label={cat} active={selCat===cat}
            onClick={()=>setSelCat(cat)} color={C.purple}/>
        ))}
      </div>

      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(280px,1fr))",gap:12}}>
        {visible.map(m=>{
          const isSel=selM===m.id;
          return(
            <div key={m.id} onClick={()=>setSelM(isSel?null:m.id)}
              style={{background:C.s1,border:`1px solid ${isSel?C.purple:C.border}`,
                borderRadius:12,padding:18,cursor:"pointer",transition:"all .18s",
                boxShadow:isSel?`0 0 0 1px ${C.purple}40`:undefined}}
              onMouseEnter={e=>!isSel&&(e.currentTarget.style.borderColor=C.purple+"55")}
              onMouseLeave={e=>!isSel&&(e.currentTarget.style.borderColor=C.border)}>
              <div style={{display:"flex",justifyContent:"space-between",marginBottom:10}}>
                <div style={{display:"flex",gap:8,alignItems:"center"}}>
                  <span style={{fontSize:18,fontWeight:900,color:C.purple,minWidth:32}}>
                    {m.id.slice(1)}
                  </span>
                  <div>
                    <h4 style={{margin:0,fontSize:19,fontWeight:800,color:C.text}}>{m.name}</h4>
                    <Tag c={C.purple} sm>{m.cat}</Tag>
                  </div>
                </div>
              </div>
              <p style={{margin:"0 0 10px",fontSize:16,color:C.muted,lineHeight:1.7}}>{m.desc}</p>
              <div style={{background:C.s2,padding:"8px 10px",borderRadius:7,marginBottom:10,
                borderLeft:`2px solid ${C.gold}`}}>
                <div style={{fontSize:14,color:C.gold,marginBottom:3}}>示例</div>
                <div style={{fontSize:16,color:C.text}}>{m.example}</div>
              </div>
              {isSel&&m.topics.length>0&&(
                <div>
                  <div style={{fontSize:15,color:C.muted,marginBottom:7}}>适用知识点（点击学习）</div>
                  <div style={{display:"flex",gap:6,flexWrap:"wrap"}}>
                    {m.topics.map(tid=>{
                      const t=TOPIC_MAP[tid];if(!t)return null;
                      const c=DOM[t.domain].color;
                      return(
                        <button key={tid} onClick={e=>{e.stopPropagation();onNav("detail",tid);}}
                          style={{padding:"4px 12px",borderRadius:20,fontSize:16,cursor:"pointer",
                            background:c+"18",border:`1px solid ${c}44`,color:c}}>
                          {t.name}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════════════════
   PAGE: PRACTICE
════════════════════════════════════════════════════════════ */
function PagePractice({wrongSet,addWrong,removeWrong}) {
  const [topicF,setTopicF]=useState("all");
  const [yearF,setYearF]=useState("all");
  const [cityF,setCityF]=useState("all");
  const [typeF,setTypeF]=useState("all");
  const [diffF,setDiffF]=useState("all");
  const [modeF,setModeF]=useState("all");
  const [openSol,setOpenSol]=useState(null);
  const [ttsId,setTtsId]=useState(null);
  const [ttsLoading,setTtsLoading]=useState(null);
  const [ttsText,setTtsText]=useState({});
  const allYears=[2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025];
  const allCities=["all",...new Set(EXAM_QS.map(q=>q.city).filter(Boolean))];

  const handleSpeak = async (q) => {
    const topicName = TOPIC_MAP[q.topic]?.name || "本题";
    if (ttsId===q.id){stopSpeak();setTtsId(null);return;}
    stopSpeak();setTtsId(null);
    if(ttsText[q.id]){setTtsId(q.id);speakText(ttsText[q.id],()=>setTtsId(q.id),()=>setTtsId(null));return;}
    setTtsLoading(q.id);
    try{
      const s=await genVoiceScript(q,topicName);
      setTtsText(p=>({...p,[q.id]:s}));setTtsLoading(null);setTtsId(q.id);
      speakText(s,()=>setTtsId(q.id),()=>setTtsId(null));
    }catch{setTtsLoading(null);}
  };

  const filtered=EXAM_QS.filter(q=>{
    if(modeF==="wrong"&&!wrongSet.has(q.id))return false;
    if(topicF!=="all"&&q.topic!==topicF)return false;
    if(yearF!=="all"&&q.yr!==parseInt(yearF))return false;
    if(cityF!=="all"&&q.city!==cityF)return false;
    if(typeF!=="all"&&q.type!==typeF)return false;
    if(diffF!=="all"&&q.diff!==parseInt(diffF))return false;
    return true;
  });

  return(
    <div style={{padding:22}}>
      {/* Filters */}
      <div style={{background:C.s1,border:`1px solid ${C.border}`,borderRadius:12,
        padding:"14px 18px",marginBottom:20,display:"flex",gap:8,flexWrap:"wrap",alignItems:"center"}}>
        <div style={{display:"flex",gap:6}}>
          <BtnPill label={`全部(${EXAM_QS.length})`} active={modeF==="all"} onClick={()=>setModeF("all")}/>
          <BtnPill label="错题本" active={modeF==="wrong"} onClick={()=>setModeF("wrong")}
            color={C.red} badge={wrongSet.size}/>
        </div>
        <div style={{width:1,height:22,background:C.border}}/>
        {[
          {v:topicF,s:setTopicF,opts:[["all","全部知识点"],...TOPICS.map(t=>[t.id,t.name])]},
          {v:yearF, s:setYearF, opts:[["all","全部年份"],...allYears.map(y=>[String(y),y+"年"])]},
          {v:cityF, s:setCityF, opts:allCities.map(c=>[c,c==="all"?"全部城市":c])},
          {v:typeF, s:setTypeF, opts:[["all","全部题型"],["choice","选择"],["fill","填空"],["solve","解答"]]},
          {v:diffF, s:setDiffF, opts:[["all","全部难度"],["1","⭐"],["2","⭐⭐"],["3","⭐⭐⭐"],["4","⭐⭐⭐⭐"],["5","⭐⭐⭐⭐⭐"]]},
        ].map((f,i)=>(
          <select key={i} value={f.v} onChange={e=>f.s(e.target.value)}
            style={{padding:"5px 9px",borderRadius:7,fontSize:16,background:C.s2,
              border:`1px solid ${C.border}`,color:C.text,outline:"none",cursor:"pointer"}}>
            {f.opts.map(([v,l])=><option key={v} value={v}>{l}</option>)}
          </select>
        ))}
        <span style={{marginLeft:"auto",fontSize:16,color:C.muted}}>
          共<b style={{color:C.text,marginLeft:4}}>{filtered.length}</b>道题
        </span>
      </div>

      {filtered.length===0&&(
        <div style={{textAlign:"center",padding:60,color:C.muted,fontSize:18}}>
          {modeF==="wrong"?"🎉 错题本为空，继续保持！":"没有符合条件的题目"}
        </div>
      )}

      {/* J3.2 未登录预览提示 */}
      {!window.__SHUMAI_TOKEN__&&filtered.length>3&&(
        <div style={{padding:"10px 16px",borderRadius:10,marginBottom:12,
          background:"#fbbf2415",border:"1px solid #fbbf2444",
          display:"flex",alignItems:"center",gap:10,flexWrap:"wrap"}}>
          <span style={{fontSize:18}}>🔒</span>
          <span style={{fontSize:14,color:C.text}}>游客模式仅显示前 <b style={{color:"#fbbf24"}}>3</b> 道题，
            <b style={{color:"#fbbf24"}}>{filtered.length-3}</b> 道需登录后查看</span>
          <button onClick={()=>window.dispatchEvent(new CustomEvent("shumai-nav",{detail:{v:"vip"}}))}
            style={{padding:"5px 14px",borderRadius:8,cursor:"pointer",fontSize:13,fontWeight:700,
              background:"linear-gradient(135deg,#fbbf24,#f59e0b)",color:"#111",border:"none",marginLeft:"auto"}}>
            登录 / 注册
          </button>
        </div>
      )}

      <div style={{display:"flex",flexDirection:"column",gap:14}}>
        {(window.__SHUMAI_TOKEN__?filtered:filtered.slice(0,3)).map((q,idx)=>{
          const t=TOPIC_MAP[q.topic],c=t?DOM[t.domain].color:C.muted;
          const isW=wrongSet.has(q.id),sol=openSol===q.id;
          const subTs=(q.subTopics||[]).map(id=>TOPIC_MAP[id]).filter(Boolean);
          return(
            <div key={q.id} style={{background:C.s1,border:`1px solid ${C.border}`,borderRadius:12,padding:20}}>
              <div style={{display:"flex",gap:7,marginBottom:12,alignItems:"center",flexWrap:"wrap"}}>
                <span style={{fontSize:15,color:C.dim,fontWeight:700}}>#{idx+1}</span>
                {q.city&&<Tag c={C.cyan} sm>{q.city}</Tag>}
                <Tag c={c}>{q.yr}年 第{q.no}题</Tag>
                <Tag c={c}>{t?.name}</Tag>
                <Tag c={C.muted}>{q.type==="choice"?"选择":q.type==="fill"?"填空":"解答"}</Tag>
                <Tag c={C.muted}>{q.score}分</Tag>
                <div style={{display:"flex",gap:2}}>
                  {[1,2,3,4,5].map(i=><span key={i} style={{fontSize:14,color:i<=q.diff?C.gold:C.dim}}>★</span>)}
                </div>
                {q.methods&&q.methods.map(mid=>{
                  const m=METHODS.find(x=>x.id===mid);
                  return m?<Tag key={mid} c={C.purple} sm>{m.name}</Tag>:null;
                })}
                <button onClick={()=>isW?removeWrong(q.id):addWrong(q.id)}
                  style={{marginLeft:"auto",fontSize:15,padding:"3px 10px",borderRadius:5,cursor:"pointer",
                    background:isW?C.red+"1a":"none",color:isW?C.red:C.muted,
                    border:`1px solid ${isW?C.red+"44":C.border}`}}>
                  {isW?"✓ 错题本":"+ 错题本"}
                </button>
              </div>
              <div style={{background:C.s2,padding:"12px 14px",borderRadius:8,
                borderLeft:`3px solid ${c}`,marginBottom:12}}>
                <p style={{margin:0,fontSize:18,color:C.text,lineHeight:1.8}}>{q.content}</p>
              </div>
              <button onClick={()=>setOpenSol(sol?null:q.id)}
                style={{fontSize:16,padding:"4px 12px",borderRadius:6,cursor:"pointer",
                  background:"none",color:C.geo,border:`1px solid ${C.geo}40`}}>
                {sol?"▲ 收起":"▼ 解析"}
              </button>
              {sol&&(
                <div style={{marginTop:10,background:C.geo+"0a",border:`1px solid ${C.geo}22`,
                  borderRadius:8,padding:14}}>
                  <div style={{fontSize:17,fontWeight:700,color:C.gold,marginBottom:8}}>答案：{q.answer}</div>
                  <pre style={{margin:"0 0 10px",fontSize:17,color:C.text,lineHeight:1.9,
                    whiteSpace:"pre-wrap",fontFamily:"inherit"}}>{q.sol}</pre>
                  <div style={{padding:"7px 12px",background:C.red+"0d",borderRadius:6,fontSize:16,color:C.red,marginBottom:10}}>
                    ⚠️ 易错点：{q.error}
                  </div>
                  {/* 语音讲解 */}
                  <div style={{marginBottom:10,display:"flex",gap:8,alignItems:"center",flexWrap:"wrap"}}>
                    <button onClick={()=>handleSpeak(q)}
                      disabled={ttsLoading===q.id}
                      style={{display:"flex",alignItems:"center",gap:6,
                        padding:"5px 14px",borderRadius:20,cursor:"pointer",
                        fontSize:14,fontWeight:700,
                        background:ttsId===q.id?C.red:C.alg,
                        color:"white",border:"none",
                        opacity:ttsLoading===q.id?0.7:1}}>
                      {ttsLoading===q.id?"⏳ 生成中…":ttsId===q.id?"⏹ 停止":"🔊 语音讲解"}
                    </button>
                    <AskTutor q={q} topicName={TOPIC_MAP[q.topic]?.name||"本题"} mode="explain"/>
                  </div>
                  {ttsText[q.id]&&(
                    <div style={{marginBottom:10,padding:"8px 12px",
                      background:C.alg+"0d",borderRadius:6,
                      border:`1px solid ${C.alg}22`,
                      fontSize:14,color:C.text,lineHeight:1.8}}>
                      {ttsText[q.id]}
                    </div>
                  )}
                  {/* 题目知识点分拆 — 双向图谱 */}
                  {subTs.length>1&&(
                    <div style={{padding:"8px 12px",background:C.alg+"0a",borderRadius:6,
                      border:`1px solid ${C.alg}22`}}>
                      <div style={{fontSize:15,color:C.alg,fontWeight:700,marginBottom:6}}>
                        🔗 本题涉及知识点（点击补差）
                      </div>
                      <div style={{display:"flex",gap:5,flexWrap:"wrap"}}>
                        {subTs.map(st=>{
                          const sc=DOM[st.domain].color;
                          return(
                            <button key={st.id} onClick={()=>window.dispatchEvent(new CustomEvent('shumai-nav',{detail:{v:"detail",tid:st.id}}))}
                              style={{padding:"3px 9px",borderRadius:20,fontSize:15,cursor:"pointer",
                                background:sc+"18",border:`1px solid ${sc}44`,color:sc}}>
                              {st.name}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* J3.2 底部登录门槛卡片 */}
      {!window.__SHUMAI_TOKEN__&&filtered.length>3&&(
        <div style={{marginTop:16,padding:28,borderRadius:16,textAlign:"center",
          background:"linear-gradient(135deg,#fbbf2408,#f59e0b06)",
          border:"1px solid #fbbf2444"}}>
          <div style={{fontSize:36,marginBottom:8}}>🔒</div>
          <div style={{fontSize:18,fontWeight:800,color:C.text,marginBottom:6}}>
            还有 {filtered.length-3} 道题等你解锁
          </div>
          <div style={{fontSize:14,color:C.muted,marginBottom:16}}>
            注册免费账号，解锁全部 {filtered.length} 道真题 + 错题本 + AI 学长
          </div>
          <div style={{display:"flex",gap:10,justifyContent:"center",flexWrap:"wrap"}}>
            <button onClick={()=>window.dispatchEvent(new CustomEvent("shumai-nav",{detail:{v:"vip"}}))}
              style={{padding:"10px 28px",borderRadius:12,cursor:"pointer",fontSize:15,fontWeight:800,
                background:"linear-gradient(135deg,#fbbf24,#f59e0b)",color:"#111",border:"none"}}>
              免费注册
            </button>
            <button onClick={()=>window.dispatchEvent(new CustomEvent("shumai-nav",{detail:{v:"vip"}}))}
              style={{padding:"10px 24px",borderRadius:12,cursor:"pointer",fontSize:15,fontWeight:700,
                background:C.s2,color:C.muted,border:"1px solid #fbbf2444"}}>
              了解会员
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

/* ════════════════════════════════════════════════════════════
   PAGE: WRONG BOOK
════════════════════════════════════════════════════════════ */
function PageWrong({wrongSet,removeWrong,mastered,onNav}) {
  const {isMobile}=useBP();
  const [filter,setFilter]=useState(()=>q=>wrongSet.has(q.id));
  const [openSol,setOpenSol]=useState(null);
  const [ttsId,setTtsId]=useState(null);
  const [ttsLoading,setTtsLoading]=useState(null);
  const [ttsText,setTtsText]=useState({});
  const wrongQs=EXAM_QS.filter(filter);

  const handleSpeak = async (q) => {
    const topicName = TOPIC_MAP[q.topic]?.name || "本题";
    if(ttsId===q.id){stopSpeak();setTtsId(null);return;}
    stopSpeak();setTtsId(null);
    if(ttsText[q.id]){setTtsId(q.id);speakText(ttsText[q.id],()=>setTtsId(q.id),()=>setTtsId(null));return;}
    setTtsLoading(q.id);
    try{
      const s=await genVoiceScript(q,topicName);
      setTtsText(p=>({...p,[q.id]:s}));setTtsLoading(null);setTtsId(q.id);
      speakText(s,()=>setTtsId(q.id),()=>setTtsId(null));
    }catch{setTtsLoading(null);}
  };

  // Group by topic + trace root cause
  const byTopic={};
  wrongQs.forEach(q=>{
    if(!byTopic[q.topic])byTopic[q.topic]=[];
    byTopic[q.topic].push(q);
  });

  if(wrongQs.length===0)return(
    <div style={{display:"flex",flexDirection:"column",alignItems:"center",
      justifyContent:"center",height:"60%",gap:16,color:C.muted}}>
      <div style={{fontSize:52}}>🎉</div>
      <div style={{fontSize:22,fontWeight:700,color:C.text}}>错题本为空</div>
      <div style={{fontSize:17}}>做题时点击"+ 错题本"收录错题</div>
    </div>
  );

  return(
    <div style={{padding:24}}>
      <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:20}}>
        <div>
          <h2 style={{margin:"0 0 4px",fontSize:22,fontWeight:800,color:C.text}}>📋 错题本</h2>
          <p style={{margin:0,fontSize:17,color:C.muted}}>
            {wrongQs.length}道错题 · 按知识点分组 · 系统自动追溯根源
          </p>
        </div>
      </div>

      {/* Root cause summary */}
      <div style={{background:C.s1,border:`1px solid ${C.red}20`,borderRadius:12,padding:20,marginBottom:20}}>
        <h3 style={{margin:"0 0 14px",fontSize:17,color:C.red}}>
          🔍 错因追溯——系统定位根源知识点
        </h3>
        {Object.entries(byTopic).map(([tid,qs])=>{
          const {roots,unmastered}=traceRootCause(tid,mastered);
          const c=DOM[TOPIC_MAP[tid]?.domain]?.color||C.muted;
          return(
            <div key={tid} style={{marginBottom:14,padding:14,background:C.s2,borderRadius:10,
              border:`1px solid ${c}20`}}>
              <div style={{display:"flex",gap:8,alignItems:"center",marginBottom:8,flexWrap:"wrap"}}>
                <Tag c={c}>{TOPIC_MAP[tid]?.name}</Tag>
                <span style={{fontSize:16,color:C.muted}}>错{qs.length}题</span>
                <span style={{fontSize:15,color:C.muted}}>→</span>
                {roots.length>0?(
                  <div style={{display:"flex",gap:6,alignItems:"center",flexWrap:"wrap"}}>
                    <span style={{fontSize:15,color:C.red}}>根源薄弱点：</span>
                    {roots.map(rid=>{
                      const rt=TOPIC_MAP[rid];if(!rt)return null;
                      return(
                        <button key={rid} onClick={()=>onNav("detail",rid)}
                          style={{padding:"2px 9px",borderRadius:20,fontSize:15,cursor:"pointer",
                            background:C.red+"18",border:`1px solid ${C.red}44`,color:C.red}}>
                          {rt.name} →补差
                        </button>
                      );
                    })}
                  </div>
                ):<span style={{fontSize:15,color:C.ok}}>本知识点是根节点</span>}
              </div>
              {unmastered.length>1&&(
                <div style={{display:"flex",gap:4,flexWrap:"wrap",alignItems:"center"}}>
                  <span style={{fontSize:14,color:C.muted}}>补差路径：</span>
                  {[...new Set([...roots,...unmastered])].slice(0,5).map((rid,i,arr)=>{
                    const rt=TOPIC_MAP[rid];if(!rt)return null;
                    const c2=DOM[rt.domain].color;
                    return(
                      <span key={rid} style={{display:"flex",alignItems:"center",gap:3}}>
                        <button onClick={()=>onNav("detail",rid)}
                          style={{padding:"1px 7px",borderRadius:20,fontSize:14,cursor:"pointer",
                            background:c2+"14",border:`1px solid ${c2}33`,color:c2}}>
                          {rt.name}
                        </button>
                        {i<arr.length-1&&<span style={{color:C.dim,fontSize:14}}>→</span>}
                      </span>
                    );
                  })}
                  <span style={{fontSize:14,color:C.alg}}>→ 返回{TOPIC_MAP[tid]?.name}</span>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Questions */}
      {Object.entries(byTopic).map(([tid,qs])=>{
        const t=TOPIC_MAP[tid],c=t?DOM[t.domain].color:C.muted;
        return(
          <div key={tid} style={{background:C.s1,border:`1px solid ${C.border}`,
            borderRadius:12,padding:20,marginBottom:14}}>
            <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:14,flexWrap:"wrap"}}>
              <h3 style={{margin:0,fontSize:18,fontWeight:700,color:c}}>{t?.name}</h3>
              <Tag c={c}>{qs.length}道</Tag>
              <button onClick={()=>onNav("detail",tid)}
                style={{marginLeft:"auto",fontSize:15,padding:"3px 10px",borderRadius:5,
                  cursor:"pointer",background:"none",color:c,border:`1px solid ${c}44`}}>
                学习该知识点 →
              </button>
            </div>
            {qs.map(q=>{
              const sol=openSol===q.id;
              return(
                <div key={q.id} style={{borderBottom:`1px solid ${C.border}`,paddingBottom:12,marginBottom:12}}>
                  <div style={{display:"flex",gap:6,marginBottom:8,alignItems:"center",flexWrap:"wrap"}}>
                    <Tag c={C.muted} sm>{q.yr}年</Tag><Tag c={C.muted} sm>{q.score}分</Tag>
                    <button onClick={()=>removeWrong(q.id)}
                      style={{marginLeft:"auto",fontSize:15,padding:"2px 9px",borderRadius:5,
                        cursor:"pointer",background:"none",color:C.muted,border:`1px solid ${C.border}`}}>
                      移出错题本
                    </button>
                  </div>
                  <div style={{background:C.s2,padding:"10px 12px",borderRadius:7,
                    borderLeft:`2px solid ${c}`,marginBottom:8}}>
                    <p style={{margin:0,fontSize:17,color:C.text,lineHeight:1.7}}>{q.content}</p>
                  </div>
                  <button onClick={()=>setOpenSol(sol?null:q.id)}
                    style={{fontSize:16,padding:"3px 10px",borderRadius:5,cursor:"pointer",
                      background:"none",color:C.geo,border:`1px solid ${C.geo}40`}}>
                    {sol?"▲ 收起":"▼ 解析"}
                  </button>
                  {sol&&(
                    <div style={{marginTop:8,background:C.geo+"0a",border:`1px solid ${C.geo}22`,
                      borderRadius:8,padding:12}}>
                      <div style={{fontSize:17,fontWeight:700,color:C.gold,marginBottom:6}}>答案：{q.answer}</div>
                      <pre style={{margin:"0 0 8px",fontSize:16,color:C.text,lineHeight:1.8,
                        whiteSpace:"pre-wrap",fontFamily:"inherit"}}>{q.sol}</pre>
                      <div style={{padding:"6px 10px",background:C.red+"0d",borderRadius:5,fontSize:16,color:C.red,marginBottom:8}}>
                        ⚠️ 易错点：{q.error}
                      </div>
                      {/* 语音讲解 */}
                      <div style={{display:"flex",gap:8,alignItems:"center",flexWrap:"wrap",marginBottom:6}}>
                        <button onClick={()=>handleSpeak(q)}
                          disabled={ttsLoading===q.id}
                          style={{display:"flex",alignItems:"center",gap:6,
                            padding:"5px 14px",borderRadius:20,cursor:"pointer",
                            fontSize:14,fontWeight:700,
                            background:ttsId===q.id?C.red:C.alg,
                            color:"white",border:"none",
                            opacity:ttsLoading===q.id?0.7:1}}>
                          {ttsLoading===q.id?"⏳ 生成中…":ttsId===q.id?"⏹ 停止":"🔊 语音讲解"}
                        </button>
                        <AskTutor q={q} topicName={TOPIC_MAP[q.topic]?.name||"本题"} mode="wrong"/>
                      </div>
                      {ttsText[q.id]&&(
                        <div style={{padding:"8px 12px",background:C.alg+"0d",
                          borderRadius:6,border:`1px solid ${C.alg}22`,
                          fontSize:14,color:C.text,lineHeight:1.8}}>
                          {ttsText[q.id]}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

/* ════════════════════════════════════════════════════════════
   PAGE: DIAGNOSIS
════════════════════════════════════════════════════════════ */
function PageDiag({mastered,wrongSet,onNav}) {
  const {isMobile}=useBP();
  const [step,setStep]=useState(0);
  const [loading,setLoading]=useState(false);
  const [result,setResult]=useState("");

  const weakTopics=[...TOPICS].filter(t=>!mastered.has(t.id)).sort((a,b)=>b.freq-a.freq).slice(0,8);
  const wrongQs=EXAM_QS.filter(q=>wrongSet.has(q.id));
  const wtCounts={};wrongQs.forEach(q=>{wtCounts[q.topic]=(wtCounts[q.topic]||0)+1;});

  // Compute recommended learning path
  const learningPath=[];
  weakTopics.slice(0,5).forEach(t=>{
    const {roots}=traceRootCause(t.id,mastered);
    roots.forEach(rid=>{if(!learningPath.includes(rid))learningPath.push(rid);});
    if(!learningPath.includes(t.id))learningPath.push(t.id);
  });

  const run=async()=>{
    setLoading(true);setResult("");
    try{
      const text=await callClaude(
        `你是"数脉"初中数学学情诊断AI，结合数脉学习法（四模块+23种方法）分析学生数据。
格式：
## 薄弱点诊断
（3-4个高频未掌握考点，说明原因）
## 得分风险预警
（预估可能损失的分数，具体到知识点）
## 知识漏洞追因
（用"知识依赖树"说明根源薄弱点）
## 个性化学习路径
（按数脉四模块顺序：基础知识→基础习题→题组训练→压轴）
## 推荐优先掌握的解题方法
（从23种方法中推荐3-5种）
每段50字以内，面向初中生。`,
        `学生数据：
已掌握${mastered.size}/${TOPICS.length}个知识点
高频未掌握：${weakTopics.map(t=>`${t.name}(${t.freq}%,${t.examYears.length}年)`).join("、")}
错题${wrongQs.length}道，集中在：${Object.entries(wtCounts).map(([id,n])=>`${TOPIC_MAP[id]?.name}(${n}题)`).join("、")||"无"}
推荐学习路径（系统追因）：${learningPath.map(id=>TOPIC_MAP[id]?.name).join("→")||"无"}
请生成诊断报告。`
      );
      setResult(text);
    }catch{setResult("网络错误，请重试。");}
    setLoading(false);
  };

  return(
    <div style={{padding:isMobile?12:28,maxWidth:940,margin:"0 auto"}}>
      <h2 style={{margin:"0 0 20px",fontSize:24,fontWeight:900,color:C.text}}>
        🤖 智能诊断 · 学情分析 · 错误追因
      </h2>

      <div style={{display:"grid",gridTemplateColumns:isMobile?"1fr":"1fr 1fr",gap:14,marginBottom:18}}>
        {/* Weak topics */}
        <div style={{background:C.s1,border:`1px solid ${C.red}20`,borderRadius:12,padding:22}}>
          <h3 style={{margin:"0 0 14px",fontSize:17,color:C.red}}>🔴 高频未掌握考点</h3>
          {weakTopics.slice(0,5).map((t,i)=>{
            const c=DOM[t.domain].color;
            return(
              <div key={t.id} style={{display:"flex",alignItems:"center",gap:10,marginBottom:10,
                padding:"8px 12px",background:C.s2,borderRadius:8,cursor:"pointer"}}
                onClick={()=>onNav("detail",t.id)}>
                <span style={{fontSize:18,fontWeight:900,color:C.dim,minWidth:20}}>{i+1}</span>
                <div style={{flex:1}}>
                  <div style={{fontSize:17,color:C.text,fontWeight:600}}>{t.name}</div>
                  <div style={{fontSize:15,color:C.muted}}>
                    {t.examYears.length}年考察·{t.totalScore}分·{t.freq}%
                  </div>
                </div>
                <div style={{textAlign:"right"}}>
                  <div style={{fontSize:19,fontWeight:900,color:c}}>{t.freq}%</div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Learning path */}
        <div style={{background:C.s1,border:`1px solid ${C.alg}20`,borderRadius:12,padding:22}}>
          <h3 style={{margin:"0 0 14px",fontSize:17,color:C.alg}}>
            🗺️ 系统推荐学习路径
          </h3>
          <p style={{margin:"0 0 12px",fontSize:16,color:C.muted}}>
            基于知识依赖树，系统追溯根源，推荐最优补差顺序：
          </p>
          <div style={{display:"flex",flexDirection:"column",gap:6}}>
            {learningPath.slice(0,7).map((tid,i)=>{
              const t=TOPIC_MAP[tid];if(!t)return null;
              const c=DOM[t.domain].color;
              const isM=mastered.has(tid);
              return(
                <div key={tid} style={{display:"flex",alignItems:"center",gap:8}}>
                  <span style={{fontSize:15,color:C.dim,minWidth:16}}>→</span>
                  <button onClick={()=>onNav("detail",tid)}
                    style={{flex:1,textAlign:"left",padding:"6px 10px",borderRadius:7,cursor:"pointer",
                      background:isM?C.ok+"18":c+"10",border:`1px solid ${isM?C.ok+"44":c+"33"}`,
                      color:isM?C.ok:c,fontSize:16,fontWeight:isM?400:600}}>
                    {isM?"✓ ":""}{t.name}
                    <span style={{fontSize:14,opacity:.6,marginLeft:6}}>{t.freq}%</span>
                  </button>
                  {i<learningPath.length-1&&(
                    <div style={{fontSize:16,color:C.dim}}>↓</div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* 薄弱知识点视频推荐区（V1.5 接口就绪后传入 videos 数组） */}
      <VideoSection
        topicCode={weakTopics[0]?.id}
        videos={[]}
        title={`📺 推荐视频：${weakTopics[0]?.name||""}讲解`}
      />

      {/* AI Report */}
      <div style={{background:C.s1,border:`1px solid ${C.alg}22`,borderRadius:12,padding:24}}>
        <div style={{display:"flex",alignItems:"flex-start",justifyContent:"space-between",
          marginBottom:16,flexWrap:"wrap",gap:12}}>
          <div>
            <h3 style={{margin:"0 0 4px",fontSize:19,color:C.alg}}>🤖 AI学情诊断报告</h3>
            <p style={{margin:0,fontSize:16,color:C.muted}}>
              结合数脉学习法四模块+知识依赖树+10年青岛卷数据，生成专属报告
            </p>
          </div>
          <button onClick={run} disabled={loading}
            style={{padding:"10px 26px",borderRadius:8,cursor:loading?"not-allowed":"pointer",
              fontSize:18,fontWeight:700,background:loading?C.dim:C.alg,
              color:"white",border:"none",transition:"all .2s",flexShrink:0}}>
            {loading?"分析中…":"生成诊断报告"}
          </button>
        </div>
        {result?(
          <div style={{background:C.s2,borderRadius:10,padding:22}}>
            {result.split("\n").map((line,i)=>{
              if(line.startsWith("## "))return(
                <h4 key={i} style={{margin:"14px 0 8px",fontSize:18,color:C.alg}}>
                  {line.replace("## ","")}
                </h4>
              );
              if(line.trim()==="")return <div key={i} style={{height:4}}/>;
              return <p key={i} style={{margin:"0 0 5px",fontSize:17,color:C.text,lineHeight:1.8}}>{line}</p>;
            })}
          </div>
        ):(
          <div style={{background:C.s2,borderRadius:10,padding:44,textAlign:"center",color:C.muted}}>
            <div style={{fontSize:36,marginBottom:10}}>📊</div>
            点击「生成诊断报告」获取你的专属学情分析
          </div>
        )}
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════════════════
   PAGE: PREDICTION
════════════════════════════════════════════════════════════ */
function PagePredict() {
  const {isMobile}=useBP();
  const [result,setResult]=useState("");
  const [loading,setLoading]=useState(false);
  const [year,setYear]=useState("2026");

  const sorted=[...TOPICS].sort((a,b)=>b.freq-a.freq);

  const run=async()=>{
    setLoading(true);setResult("");
    const data=sorted.map(t=>`${t.name}:${t.examYears.length}次(${t.examYears.join(",")})共${t.totalScore}分`).join("；");
    try{
      const text=await callClaude(
        `你是青岛中考数学命题规律专家，基于2015-2025年10年真实数据分析预测。
格式：
## ${year}年青岛中考数学预测报告

### 🔥 必考考点（>90%）
（3-4个，说明理由和预计分值）

### ⚡ 高概率（70-90%）
（4-5个）

### 💡 命题规律
（3条规律）

### 📋 复习优先级TOP10
（格式：序号. 知识点——预计分值——重点方向）

### 🔧 推荐重点掌握的解题方法
（从23种方法中选5种，说明理由）

### ⚠️ 特别提醒
（题型变化预警）

面向初中生，语言直接清晰。`,
        `10年青岛卷数据：${data}\n请预测${year}年。`
      );
      setResult(text);
    }catch{setResult("网络错误，请重试。");}
    setLoading(false);
  };

  return(
    <div style={{padding:28,maxWidth:960,margin:"0 auto"}}>
      <h2 style={{margin:"0 0 6px",fontSize:24,fontWeight:900,color:C.text}}>🎯 中考命题预测</h2>
      <p style={{margin:"0 0 22px",fontSize:17,color:C.muted}}>基于10年真实命题数据，AI分析规律，预测高频考点与方法</p>

      {/* Frequency chart */}
      <div style={{background:C.s1,border:`1px solid ${C.border}`,borderRadius:12,padding:22,marginBottom:20}}>
        <h3 style={{margin:"0 0 16px",fontSize:17,color:C.muted}}>📊 10年考点频率全览</h3>
        <div style={{display:"flex",flexDirection:"column",gap:8}}>
          {sorted.map(t=>{
            const c=DOM[t.domain].color;
            const allYears=[2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025];
            return(
              <div key={t.id} style={{display:"flex",alignItems:"center",gap:10}}>
                <div style={{width:88,fontSize:15,color:c,textAlign:"right",fontWeight:600,flexShrink:0}}>{t.name}</div>
                <Bar v={t.freq} color={c} h={7}/>
                <div style={{display:"flex",gap:2,flexShrink:0}}>
                  {allYears.map(y=>(
                    <div key={y} title={`${y}年`} style={{width:8,height:12,borderRadius:1,
                      background:t.examYears.includes(y)?c:C.dim,opacity:t.examYears.includes(y)?1:.3}}/>
                  ))}
                </div>
                <span style={{fontSize:15,fontWeight:700,color:c,minWidth:34}}>{t.freq}%</span>
                <span style={{fontSize:14,color:C.muted,minWidth:46,flexShrink:0}}>{t.examYears.length}次/{t.totalScore}分</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* AI Prediction */}
      <div style={{background:C.s1,border:`1px solid ${C.gold}22`,borderRadius:12,padding:24}}>
        <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:16,flexWrap:"wrap"}}>
          <div style={{flex:1}}>
            <h3 style={{margin:"0 0 4px",fontSize:19,color:C.gold}}>🤖 AI命题预测报告</h3>
            <p style={{margin:0,fontSize:16,color:C.muted}}>结合10年命题规律+23种解题方法标签，预测下一年度重点</p>
          </div>
          <div style={{display:"flex",gap:8,alignItems:"center"}}>
            <select value={year} onChange={e=>setYear(e.target.value)}
              style={{padding:"7px 10px",borderRadius:7,fontSize:17,background:C.s2,
                border:`1px solid ${C.border}`,color:C.text,outline:"none",cursor:"pointer"}}>
              {["2025","2026","2027"].map(y=><option key={y} value={y}>{y}年</option>)}
            </select>
            <button onClick={run} disabled={loading}
              style={{padding:"9px 22px",borderRadius:8,cursor:loading?"not-allowed":"pointer",
                fontSize:18,fontWeight:700,background:loading?C.dim:C.gold,
                color:"#111",border:"none",transition:"all .2s"}}>
              {loading?"预测中…":"生成预测"}
            </button>
          </div>
        </div>
        {result?(
          <div style={{background:C.s2,borderRadius:10,padding:22}}>
            {result.split("\n").map((line,i)=>{
              if(line.startsWith("## ")&&!line.startsWith("### "))return(
                <h3 key={i} style={{margin:"0 0 14px",fontSize:20,color:C.gold,
                  borderBottom:`1px solid ${C.border}`,paddingBottom:8}}>
                  {line.replace(/^##\s/,"")}
                </h3>
              );
              if(line.startsWith("### "))return(
                <h4 key={i} style={{margin:"12px 0 7px",fontSize:18,color:C.alg}}>
                  {line.replace(/^###\s/,"")}
                </h4>
              );
              if(line.trim()==="")return <div key={i} style={{height:4}}/>;
              return <p key={i} style={{margin:"0 0 5px",fontSize:17,color:C.text,lineHeight:1.8}}>{line}</p>;
            })}
          </div>
        ):(
          <div style={{background:C.s2,borderRadius:10,padding:44,textAlign:"center",color:C.muted}}>
            <div style={{fontSize:40,marginBottom:10}}>🎯</div>
            点击「生成预测」查看{year}年青岛中考数学预测报告
          </div>
        )}
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════════════════
   NAVIGATION CONFIG
════════════════════════════════════════════════════════════ */
const NAV=[
  {id:"home",label:"首页",icon:"⊡"},
  {id:"morning",label:"晨读卡",icon:"☀️"},
  {id:"graph",label:"知识图谱",icon:"◎"},
  {id:"modules",label:"四模块",icon:"▦"},
  {id:"methods",label:"23种方法",icon:"⚙"},
  {id:"practice",label:"真题刷题",icon:"✎"},
  {id:"diag",label:"智能诊断",icon:"◈"},
  {id:"predict",label:"中考预测",icon:"◇"},
  {id:"paper",label:"试卷分析",icon:"📄"},
  {id:"ocr",label:"作业识别",icon:"📸"},
  {id:"sprint",label:"考前冲刺",icon:"🔥"},
  {id:"wrong",label:"错题本",icon:"📋"},
  {id:"agent",label:"学伴Agent",icon:"🤖"},
  // teacher/parent/vip/admin 通过独立URL访问，不在学生端导航显示
];

/* ════════════════════════════════════════════════════════════
   PAGE ME — 手机端"我的"个人中心
════════════════════════════════════════════════════════════ */
function PageMe({mastered, wrongSet, basicWrongSet, aiModel, setAiModel, dsKey, setDsKey, dbKey, setDbKey, onNav, onClear}){
  const [nickname, setNickname]=useState(()=>localStorage.getItem("shumai_nickname")||"");
  const [editingName, setEditingName]=useState(false);
  const [nameInput, setNameInput]=useState("");
  const [grade, setGrade]=useState(()=>localStorage.getItem("shumai_grade")||"九年级");
  const [showAISettings, setShowAISettings]=useState(false);
  const [showClearConfirm, setShowClearConfirm]=useState(false);

  const curModel = AI_MODELS.find(m=>m.id===aiModel)||AI_MODELS[0];
  const isDeepSeek = curModel?.provider==="deepseek";
  const curKey = isDeepSeek ? dsKey : dbKey;
  const setKey = isDeepSeek ? setDsKey : setDbKey;
  const curColor = curModel?.color||C.alg;

  const predictScore = useMemo(()=>{
    if(mastered.size===0) return 0;
    const total = TOPICS.reduce((s,t)=>s+t.freq,0);
    const got = TOPICS.filter(t=>mastered.has(t.id)).reduce((s,t)=>s+t.freq,0);
    return Math.round(40 + (got/total)*75);
  },[mastered]);

  const checkDays = useMemo(()=>{
    try{ const r=localStorage.getItem("shumai_checkins"); return r?JSON.parse(r).length:0; }
    catch{return 0;}
  },[]);

  const saveNickname=()=>{
    const name=nameInput.trim();
    if(name){setNickname(name);localStorage.setItem("shumai_nickname",name);}
    setEditingName(false);
  };

  const tools=[
    {label:"📐 知识图谱",v:"graph",desc:"24个核心知识节点",color:C.alg},
    {label:"📄 试卷分析",v:"paper",desc:"逆向拆解→模拟卷",color:"#a78bfa"},
    {label:"📸 作业识别",v:"ocr",desc:"拍照→AI批改→错题",color:"#22d3ee"},
    {label:"🤖 AI学伴",v:"agent",desc:"个性化学习路径",color:"#a78bfa"},
    {label:"🔥 考前冲刺",v:"sprint",desc:"倒计时+阶段规划",color:C.red},
    {label:"☀️ 晨读卡",v:"morning",desc:"每日知识口诀",color:C.gold},
  ];
  const GRADES=["七年级","八年级","九年级"];

  return(
    <div style={{padding:"16px 16px calc(72px + env(safe-area-inset-bottom))",maxWidth:480,margin:"0 auto"}}>
      {/* 用户卡片 */}
      <div style={{background:C.s1,border:`1px solid ${C.border}`,borderRadius:16,padding:20,marginBottom:16,display:"flex",alignItems:"center",gap:14}}>
        <div style={{width:56,height:56,borderRadius:"50%",flexShrink:0,
          background:`linear-gradient(135deg,${C.alg},#a78bfa)`,
          display:"flex",alignItems:"center",justifyContent:"center",
          fontSize:22,fontWeight:900,color:"white"}}>
          {nickname?nickname[0].toUpperCase():"我"}
        </div>
        <div style={{flex:1,minWidth:0}}>
          {editingName?(
            <div style={{display:"flex",gap:6,alignItems:"center"}}>
              <input value={nameInput} onChange={e=>setNameInput(e.target.value)}
                onKeyDown={e=>e.key==="Enter"&&saveNickname()}
                placeholder="输入昵称" autoFocus
                style={{flex:1,padding:"5px 10px",borderRadius:8,fontSize:15,
                  background:C.s2,border:`1px solid ${C.alg}`,color:C.text,outline:"none"}}/>
              <button onClick={saveNickname}
                style={{padding:"5px 12px",borderRadius:8,background:C.alg,
                  color:"white",border:"none",fontSize:14,fontWeight:700,cursor:"pointer"}}>保存</button>
            </div>
          ):(
            <div style={{display:"flex",alignItems:"center",gap:6,marginBottom:4}}>
              <span style={{fontSize:18,fontWeight:700,color:C.text}}>{nickname||"点击设置昵称"}</span>
              <button onClick={()=>{setNameInput(nickname);setEditingName(true);}}
                style={{background:"none",border:"none",cursor:"pointer",fontSize:13,color:C.muted,padding:"2px 6px",borderRadius:4}}>✏️</button>
            </div>
          )}
          <div style={{display:"flex",gap:4}}>
            {GRADES.map(g=>(
              <button key={g} onClick={()=>{setGrade(g);localStorage.setItem("shumai_grade",g);}}
                style={{padding:"2px 8px",borderRadius:10,fontSize:12,cursor:"pointer",border:"none",
                  background:grade===g?C.alg+"22":"none",
                  color:grade===g?C.alg:C.muted,fontWeight:grade===g?700:400}}>{g}</button>
            ))}
          </div>
        </div>
      </div>

      {/* 学情数据卡 */}
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10,marginBottom:16}}>
        {[
          {label:"已掌握",value:mastered.size,unit:"个知识点",color:C.ok,icon:"✓"},
          {label:"错题本",value:wrongSet.size+basicWrongSet.size,unit:"道待复习",color:C.red,icon:"📋"},
          {label:"预测分",value:predictScore,unit:"分（满分120）",color:C.gold,icon:"🎯"},
          {label:"打卡天数",value:checkDays,unit:"天连续学习",color:C.alg,icon:"🔥"},
        ].map(item=>(
          <div key={item.label} style={{background:C.s1,border:`1px solid ${C.border}`,
            borderRadius:12,padding:"14px 16px",textAlign:"center"}}>
            <div style={{fontSize:11,color:C.muted,marginBottom:4}}>{item.icon} {item.label}</div>
            <div style={{fontSize:26,fontWeight:900,color:item.color,lineHeight:1}}>{item.value}</div>
            <div style={{fontSize:11,color:C.muted,marginTop:2}}>{item.unit}</div>
          </div>
        ))}
      </div>

      {/* 工具入口 */}
      <div style={{background:C.s1,border:`1px solid ${C.border}`,borderRadius:14,padding:"12px 4px",marginBottom:16}}>
        <div style={{fontSize:12,color:C.muted,letterSpacing:1,textTransform:"uppercase",padding:"0 12px 8px"}}>工具</div>
        {tools.map(t=>(
          <button key={t.v} onClick={()=>onNav(t.v)}
            style={{width:"100%",display:"flex",alignItems:"center",gap:12,
              padding:"10px 16px",background:"none",border:"none",cursor:"pointer",textAlign:"left"}}
            onMouseEnter={e=>e.currentTarget.style.background=C.s2}
            onMouseLeave={e=>e.currentTarget.style.background="none"}>
            <span style={{fontSize:20}}>{t.label.split(" ")[0]}</span>
            <div style={{flex:1}}>
              <div style={{fontSize:15,fontWeight:600,color:t.color}}>{t.label.slice(t.label.indexOf(" ")+1)}</div>
              <div style={{fontSize:12,color:C.muted}}>{t.desc}</div>
            </div>
            <span style={{color:C.muted,fontSize:16}}>›</span>
          </button>
        ))}
      </div>

      {/* 设置 */}
      <div style={{background:C.s1,border:`1px solid ${C.border}`,borderRadius:14,padding:"12px 4px",marginBottom:16}}>
        <div style={{fontSize:12,color:C.muted,letterSpacing:1,textTransform:"uppercase",padding:"0 12px 8px"}}>设置</div>
        <button onClick={()=>setShowAISettings(o=>!o)}
          style={{width:"100%",display:"flex",alignItems:"center",gap:12,
            padding:"10px 16px",background:"none",border:"none",cursor:"pointer"}}>
          <span style={{fontSize:20}}>🤖</span>
          <div style={{flex:1,textAlign:"left"}}>
            <div style={{fontSize:15,fontWeight:600,color:C.text}}>AI 模型</div>
            <div style={{fontSize:12,color:curColor}}>{curModel?.label}</div>
          </div>
          <span style={{color:C.muted,fontSize:14}}>{showAISettings?"∧":"›"}</span>
        </button>
        {showAISettings&&(
          <div style={{padding:"0 16px 12px",display:"flex",flexDirection:"column",gap:8}}>
            <select value={aiModel} onChange={e=>setAiModel(e.target.value)}
              style={{padding:"6px 10px",borderRadius:8,fontSize:14,
                background:C.s2,border:`1px solid ${curColor}55`,color:curColor,outline:"none",cursor:"pointer"}}>
              <optgroup label="── DeepSeek">
                {AI_MODELS.filter(m=>m.provider==="deepseek").map(m=>(
                  <option key={m.id} value={m.id}>{m.label} [{m.tag}]</option>
                ))}
              </optgroup>
              <optgroup label="── 豆包（字节）">
                {AI_MODELS.filter(m=>m.provider==="doubao").map(m=>(
                  <option key={m.id} value={m.id}>{m.label} [{m.tag}]</option>
                ))}
              </optgroup>
            </select>
            <input value={curKey} onChange={e=>setKey(e.target.value)}
              placeholder={isDeepSeek?"sk-xxxx DeepSeek Key":"豆包 API Key"}
              type="password"
              style={{padding:"6px 10px",borderRadius:8,fontSize:14,
                background:C.s2,border:`1px solid ${curColor}55`,color:C.text,outline:"none"}}/>
          </div>
        )}
        <button onClick={()=>setShowClearConfirm(o=>!o)}
          style={{width:"100%",display:"flex",alignItems:"center",gap:12,
            padding:"10px 16px",background:"none",border:"none",cursor:"pointer"}}>
          <span style={{fontSize:20}}>🗑️</span>
          <div style={{flex:1,textAlign:"left"}}>
            <div style={{fontSize:15,fontWeight:600,color:C.red}}>清空学习记录</div>
            <div style={{fontSize:12,color:C.muted}}>重置掌握状态和错题本</div>
          </div>
          <span style={{color:C.muted,fontSize:14}}>{showClearConfirm?"∧":"›"}</span>
        </button>
        {showClearConfirm&&(
          <div style={{padding:"0 16px 12px",display:"flex",gap:8}}>
            <button onClick={()=>{onClear();setShowClearConfirm(false);}}
              style={{flex:1,padding:"8px",borderRadius:8,background:C.red,
                color:"white",border:"none",fontSize:14,fontWeight:700,cursor:"pointer"}}>确认清空</button>
            <button onClick={()=>setShowClearConfirm(false)}
              style={{flex:1,padding:"8px",borderRadius:8,background:C.s2,
                color:C.muted,border:`1px solid ${C.border}`,fontSize:14,cursor:"pointer"}}>取消</button>
          </div>
        )}
      </div>

      <div style={{textAlign:"center",padding:"8px 0",color:C.dim,fontSize:12}}>
        数脉 ShuMai · 2026中考版 · 1334道题
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════════════════
   DESKTOP SIDEBAR — 桌面端个人学习仪表盘
════════════════════════════════════════════════════════════ */
function DesktopSidebar({mastered, wrongSet, basicWrongSet, navigate}){
  const [editingName, setEditingName]=useState(false);
  const [nameInput, setNameInput]=useState("");
  const [nickname, setNickname]=useState(()=>localStorage.getItem("shumai_nickname")||"");
  const grade = localStorage.getItem("shumai_grade")||"九年级";

  // 考试倒计时
  const examDate = useMemo(()=>{
    try{ const s=JSON.parse(localStorage.getItem("shumai_v7")||"{}"); return s.examDate||""; }
    catch{return "";}
  },[]);
  const daysLeft = useMemo(()=>{
    if(!examDate) return null;
    const d=new Date(examDate); d.setHours(0,0,0,0);
    const t=new Date(); t.setHours(0,0,0,0);
    return Math.round((d-t)/86400000);
  },[examDate]);
  const sprintPhase = useMemo(()=>{
    if(daysLeft===null) return null;
    if(daysLeft>60) return {label:"备考期",color:C.alg};
    if(daysLeft>30) return {label:"强化期",color:C.geo};
    if(daysLeft>14) return {label:"冲刺期",color:C.gold};
    if(daysLeft>0)  return {label:"保温期",color:C.red};
    return {label:"考试日",color:C.red};
  },[daysLeft]);

  // 预测分
  const predictScore = useMemo(()=>{
    if(mastered.size===0) return 0;
    const total=TOPICS.reduce((s,t)=>s+t.freq,0);
    const got=TOPICS.filter(t=>mastered.has(t.id)).reduce((s,t)=>s+t.freq,0);
    return Math.round(40+(got/total)*75);
  },[mastered]);

  // 薄弱知识点 TOP3（未掌握 + 高考频）
  const weakTop3 = useMemo(()=>
    [...TOPICS].filter(t=>!mastered.has(t.id))
      .sort((a,b)=>b.freq-a.freq).slice(0,3)
  ,[mastered]);

  // 遗忘曲线到期数（简单模拟：有错题就算）
  const reviewDue = wrongSet.size + basicWrongSet.size;

  const saveNickname=()=>{
    const n=nameInput.trim();
    if(n){setNickname(n);localStorage.setItem("shumai_nickname",n);}
    setEditingName(false);
  };

  const SectionLabel=({color,children})=>(
    <div style={{fontSize:14,color:color||C.dim,letterSpacing:"1.5px",
      textTransform:"uppercase",padding:"14px 12px 7px",fontWeight:700}}>
      {children}
    </div>
  );

  return(
    <div style={{height:"100%",overflowY:"auto",display:"flex",flexDirection:"column"}}>

      {/* ① 用户卡片 */}
      <div style={{padding:"12px 12px 0"}}>
        <div style={{background:C.s2,borderRadius:12,padding:"12px 12px",
          display:"flex",alignItems:"center",gap:10,cursor:"pointer"}}
          onClick={()=>!editingName&&setEditingName(true)}>
          <div style={{width:42,height:42,borderRadius:"50%",flexShrink:0,
            background:`linear-gradient(135deg,${C.alg},#a78bfa)`,
            display:"flex",alignItems:"center",justifyContent:"center",
            fontSize:18,fontWeight:900,color:"white"}}>
            {nickname?nickname[0].toUpperCase():"我"}
          </div>
          <div style={{flex:1,minWidth:0}}>
            {editingName?(
              <div style={{display:"flex",gap:4}} onClick={e=>e.stopPropagation()}>
                <input value={nameInput} onChange={e=>setNameInput(e.target.value)}
                  onKeyDown={e=>e.key==="Enter"&&saveNickname()}
                  placeholder="输入昵称" autoFocus
                  style={{flex:1,padding:"3px 8px",borderRadius:6,fontSize:15,
                    background:C.s1,border:`1px solid ${C.alg}`,color:C.text,outline:"none",minWidth:0}}/>
                <button onClick={saveNickname}
                  style={{padding:"3px 8px",borderRadius:6,background:C.alg,
                    color:"white",border:"none",fontSize:14,cursor:"pointer",flexShrink:0}}>✓</button>
              </div>
            ):(
              <div style={{fontSize:17,fontWeight:700,color:C.text,
                overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>
                {nickname||"点击设置昵称"}
              </div>
            )}
            <div style={{fontSize:14,color:C.muted,marginTop:2}}>{grade}</div>
          </div>
        </div>
      </div>

      {/* ② 立即行动 */}
      <SectionLabel color={C.alg}>立即行动</SectionLabel>
      <div style={{padding:"0 10px",display:"flex",flexDirection:"column",gap:5}}>
        {reviewDue>0?(
          <button onClick={()=>navigate("wrong")}
            style={{width:"100%",padding:"10px 12px",borderRadius:10,cursor:"pointer",
              textAlign:"left",background:C.red+"18",border:`1px solid ${C.red}33`,
              display:"flex",alignItems:"center",gap:8}}>
            <span style={{fontSize:18}}>🔄</span>
            <div style={{flex:1}}>
              <div style={{fontSize:16,fontWeight:600,color:C.red}}>今日复习</div>
              <div style={{fontSize:13,color:C.muted}}>{reviewDue}道错题待复习</div>
            </div>
          </button>
        ):(
          <div style={{padding:"9px 12px",borderRadius:10,background:C.ok+"12",
            border:`1px solid ${C.ok}22`,fontSize:15,color:C.ok}}>
            ✓ 今日无待复习错题
          </div>
        )}
        <button onClick={()=>navigate("modules")}
          style={{width:"100%",padding:"10px 12px",borderRadius:10,cursor:"pointer",
            textAlign:"left",background:C.alg+"12",border:`1px solid ${C.alg}22`,
            display:"flex",alignItems:"center",gap:8}}>
          <span style={{fontSize:18}}>📚</span>
          <div style={{flex:1}}>
            <div style={{fontSize:16,fontWeight:600,color:C.alg}}>继续学习</div>
            <div style={{fontSize:13,color:C.muted}}>
              {weakTop3[0]?`推荐：${weakTop3[0].name}`:"选择知识点开始"}
            </div>
          </div>
        </button>
      </div>

      {/* ③ 考试倒计时 */}
      {daysLeft!==null&&daysLeft>=0&&(
        <>
          <SectionLabel color={C.gold}>考试倒计时</SectionLabel>
          <div style={{padding:"0 10px"}}>
            <div style={{background:C.gold+"12",border:`1px solid ${C.gold}30`,
              borderRadius:10,padding:"12px 14px",textAlign:"center"}}>
              <div style={{fontSize:32,fontWeight:900,color:C.gold,lineHeight:1}}>{daysLeft}</div>
              <div style={{fontSize:13,color:C.muted,marginTop:3}}>天后考试</div>
              {sprintPhase&&(
                <div style={{marginTop:7,padding:"3px 10px",borderRadius:10,
                  background:sprintPhase.color+"22",color:sprintPhase.color,
                  fontSize:13,fontWeight:700,display:"inline-block"}}>
                  {sprintPhase.label}
                </div>
              )}
            </div>
          </div>
        </>
      )}
      {!examDate&&(
        <>
          <SectionLabel color={C.gold}>考试倒计时</SectionLabel>
          <div style={{padding:"0 10px"}}>
            <button onClick={()=>navigate("sprint")}
              style={{width:"100%",padding:"10px 12px",borderRadius:10,cursor:"pointer",
                background:C.gold+"12",border:`1px dashed ${C.gold}44`,
                fontSize:15,color:C.gold}}>
              📅 设置考试日期 →
            </button>
          </div>
        </>
      )}

      {/* ④ 我的进度 */}
      <SectionLabel color="#a78bfa">我的进度</SectionLabel>
      <div style={{padding:"0 10px"}}>
        <div style={{display:"flex",gap:6,marginBottom:10}}>
          {[
            {label:"已掌握",val:mastered.size,color:C.ok},
            {label:"错题",val:wrongSet.size+basicWrongSet.size,color:C.red},
            {label:"预测分",val:predictScore,color:C.gold},
          ].map(item=>(
            <div key={item.label} style={{flex:1,textAlign:"center",padding:"8px 4px",
              background:C.s2,borderRadius:8}}>
              <div style={{fontSize:22,fontWeight:900,color:item.color}}>{item.val}</div>
              <div style={{fontSize:12,color:C.muted,marginTop:2}}>{item.label}</div>
            </div>
          ))}
        </div>
        {Object.entries(DOM).map(([k,d])=>{
          const all=TOPICS.filter(t=>t.domain===k),done=all.filter(t=>mastered.has(t.id)).length;
          return(
            <div key={k} style={{marginBottom:8}}>
              <div style={{display:"flex",justifyContent:"space-between",
                fontSize:14,color:d.color,marginBottom:2}}>
                <span>{d.name}</span><span>{done}/{all.length}</span>
              </div>
              <Bar v={Math.round(done/all.length*100)} color={d.color} h={6}/>
            </div>
          );
        })}
      </div>

      {/* ⑤ 薄弱知识点 */}
      <SectionLabel color={C.red}>薄弱知识点</SectionLabel>
      <div style={{padding:"0 10px"}}>
        {weakTop3.length===0?(
          <div style={{padding:"8px 12px",fontSize:15,color:C.ok}}>🎉 全部知识点已掌握！</div>
        ):weakTop3.map(t=>(
          <button key={t.id} onClick={()=>navigate("detail",t.id)}
            style={{width:"100%",display:"flex",alignItems:"center",gap:8,
              padding:"7px 10px",borderRadius:8,marginBottom:4,
              background:"none",border:"none",cursor:"pointer",textAlign:"left"}}
            onMouseEnter={e=>e.currentTarget.style.background=C.s2}
            onMouseLeave={e=>e.currentTarget.style.background="none"}>
            <span style={{fontSize:15,color:C.text,flex:1}}>{t.name}</span>
            <span style={{fontSize:12,color:C.red,background:C.red+"18",
              padding:"2px 7px",borderRadius:6,whiteSpace:"nowrap",flexShrink:0}}>
              {t.freq}%
            </span>
          </button>
        ))}
      </div>

      {/* ⑥ 工具入口 */}
      <SectionLabel>工具</SectionLabel>
      <div style={{padding:"0 10px 16px"}}>
        {[
          {icon:"◎",label:"知识图谱",v:"graph",color:C.alg},
          {icon:"📄",label:"试卷分析",v:"paper",color:"#a78bfa"},
          {icon:"📸",label:"作业识别",v:"ocr",color:"#22d3ee"},
          {icon:"🤖",label:"学伴Agent",v:"agent",color:"#a78bfa"},
        ].map(t=>(
          <button key={t.v} onClick={()=>navigate(t.v)}
            style={{width:"100%",display:"flex",alignItems:"center",gap:9,
              padding:"8px 10px",borderRadius:8,marginBottom:4,
              background:"none",border:"none",cursor:"pointer"}}
            onMouseEnter={e=>e.currentTarget.style.background=C.s2}
            onMouseLeave={e=>e.currentTarget.style.background="none"}>
            <span style={{fontSize:18,color:t.color}}>{t.icon}</span>
            <span style={{fontSize:16,color:C.muted}}>{t.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════════════════
   BOTTOM TAB BAR — 手机端底部导航（仿 App 体验）
════════════════════════════════════════════════════════════ */
function BottomTabBar({view, navigate, wrongCount, basicWrongCount}){
  const totalWrong = wrongCount + basicWrongCount;
  const tabs = [
    {id:"home",    icon:"⊡", label:"首页"},
    {id:"modules", icon:"▦", label:"学习"},
    {id:"practice",icon:"✎", label:"练题"},
    {id:"wrong",   icon:"📋",label:"错题", badge: totalWrong},
    {id:"me",      icon:"👤", label:"我的"},
  ];
  const active = tabs.some(t=>t.id===view) ? view : "home";
  return(
    <nav style={{
      position:"fixed",bottom:0,left:0,right:0,zIndex:200,
      height:`calc(56px + env(safe-area-inset-bottom))`,
      paddingBottom:"env(safe-area-inset-bottom)",
      background:C.s1,borderTop:`1px solid ${C.border}`,
      display:"flex",alignItems:"stretch",
    }}>
      {tabs.map(t=>{
        const isActive = active===t.id || (t.id==="home" && !tabs.some(x=>x.id===view));
        return(
          <button key={t.id} onClick={()=>navigate(t.id)}
            style={{flex:1,display:"flex",flexDirection:"column",alignItems:"center",
              justifyContent:"center",gap:2,border:"none",background:"none",
              cursor:"pointer",position:"relative",padding:"4px 0",
              color:isActive?C.alg:C.muted,transition:"color .15s"}}>
            <span style={{fontSize:20,lineHeight:1,filter:isActive?"none":"grayscale(0.4)"}}>{t.icon}</span>
            <span style={{fontSize:10,fontWeight:isActive?700:400,letterSpacing:0.3}}>{t.label}</span>
            {t.badge>0&&(
              <span style={{
                position:"absolute",top:4,left:"50%",transform:"translateX(4px)",
                background:C.red,color:"white",fontSize:10,fontWeight:700,
                minWidth:16,height:16,borderRadius:8,
                display:"flex",alignItems:"center",justifyContent:"center",
                padding:"0 3px",lineHeight:1,
              }}>{t.badge>99?"99+":t.badge}</span>
            )}
            {isActive&&(
              <span style={{
                position:"absolute",top:0,left:"20%",right:"20%",
                height:2,background:C.alg,borderRadius:"0 0 2px 2px",
              }}/>
            )}
          </button>
        );
      })}
    </nav>
  );
}

/* ════════════════════════════════════════════════════════════
   QUICK DIAGNOSTIC TEST — 首次使用诊断组件
════════════════════════════════════════════════════════════ */
function DiagQuickTest({onComplete}) {
  const {isMobile}=useBP();
  const [step,setStep]=useState("welcome"); // welcome | test | result
  const [grade,setGrade]=useState(9); // 默认九年级
  const [cur,setCur]=useState(0);
  const [answers,setAnswers]=useState({});

  const questions=QUICK_DIAG_QS.filter(q=>q.minGrade<=grade);
  const total=questions.length;
  const q=questions[cur];

  const select=(optIdx)=>{
    setAnswers(prev=>({...prev,[q.id]:optIdx}));
  };

  const goNext=()=>{
    if(cur<total-1) setCur(cur+1);
    else setStep("result");
  };
  const goPrev=()=>{ if(cur>0) setCur(cur-1); };

  // ── 结果计算 ────────────────────
  const results=questions.map(q=>({...q,selected:answers[q.id],isCorrect:answers[q.id]===q.correct}));
  const score=results.filter(r=>r.isCorrect).length;

  const domainScores={};
  results.forEach(r=>{
    if(!domainScores[r.domain]) domainScores[r.domain]={total:0,correct:0};
    domainScores[r.domain].total++;
    if(r.isCorrect) domainScores[r.domain].correct++;
  });

  const weakTopics=results.filter(r=>!r.isCorrect).map(r=>{
    const t=TOPIC_MAP[r.topic];
    return t?{code:r.topic,name:t.name,domain:r.domain}:null;
  }).filter(Boolean);

  const bestDomain=Object.entries(domainScores).sort((a,b)=>(b[1].correct/b[1].total)-(a[1].correct/a[1].total))[0];
  const weakDomain=Object.entries(domainScores).sort((a,b)=>(a[1].correct/a[1].total)-(b[1].correct/b[1].total))[0];

  // 推荐起点：最弱领域中频率最高的未掌握知识点
  const startTopic=weakTopics.length>0
    ? TOPICS.filter(t=>weakTopics.some(w=>w.code===t.id)).sort((a,b)=>b.freq-a.freq)[0]
    : TOPICS.sort((a,b)=>b.freq-a.freq)[0];

  const handleFinish=()=>{
    if(onComplete) onComplete({score,total,grade,domainScores,weakTopics,startTopic});
  };

  // ── 欢迎页 ────────────────────
  if(step==="welcome") return(
    <div style={{display:"flex",alignItems:"center",justifyContent:"center",
      minHeight:"100vh",background:C.bg,padding:20}}>
      <div style={{maxWidth:520,textAlign:"center"}}>
        <div style={{fontSize:60,marginBottom:20}}>📐</div>
        <h1 style={{fontSize:28,fontWeight:900,color:C.text,margin:"0 0 12px"}}>
          欢迎来到数脉
        </h1>
        <p style={{fontSize:18,color:C.muted,lineHeight:1.8,margin:"0 0 8px"}}>
          让我们花 <b style={{color:C.alg}}>5 分钟</b> 做一个快速测试
        </p>
        <p style={{fontSize:17,color:C.dim,lineHeight:1.7,margin:"0 0 20px"}}>
          {total} 道选择题，覆盖你年级的核心知识点<br/>
          测完后为你生成专属学情分析
        </p>

        {/* 年级选择 */}
        <div style={{display:"flex",justifyContent:"center",gap:10,marginBottom:24}}>
          {[{g:7,label:"七年级"},{g:8,label:"八年级"},{g:9,label:"九年级"}].map(({g,label})=>(
            <button key={g} onClick={()=>{setGrade(g);setCur(0);setAnswers({});}}
              style={{padding:"10px 22px",borderRadius:10,fontSize:17,fontWeight:grade===g?700:500,
                cursor:"pointer",transition:"all .15s",
                background:grade===g?C.alg:C.s2,
                color:grade===g?"white":C.muted,
                border:grade===g?"none":`1px solid ${C.border}`}}>
              {label}
            </button>
          ))}
        </div>

        <button onClick={()=>setStep("test")}
          style={{padding:"14px 48px",borderRadius:12,fontSize:20,fontWeight:700,
            cursor:"pointer",border:"none",background:C.alg,color:"white",
            transition:"transform .15s"}}
          onMouseDown={e=>e.currentTarget.style.transform="scale(.97)"}
          onMouseUp={e=>e.currentTarget.style.transform="scale(1)"}>
          开始测试 →
        </button>
        <div style={{marginTop:20}}>
          <button onClick={handleFinish}
            style={{background:"none",border:"none",color:C.dim,fontSize:15,
              cursor:"pointer",textDecoration:"underline"}}>
            跳过，直接进入
          </button>
        </div>
      </div>
    </div>
  );

  // ── 答题页 ────────────────────
  if(step==="test") return(
    <div style={{minHeight:"100vh",background:C.bg,padding:isMobile?16:40}}>
      <div style={{maxWidth:640,margin:"0 auto"}}>
        {/* 进度条 */}
        <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:24}}>
          <span style={{fontSize:15,color:C.muted,minWidth:50}}>{cur+1}/{total}</span>
          <div style={{flex:1,height:6,background:C.s2,borderRadius:3,overflow:"hidden"}}>
            <div style={{width:`${(cur+1)/total*100}%`,height:"100%",
              background:C.alg,borderRadius:3,transition:"width .3s"}}/>
          </div>
        </div>

        {/* 题目卡片 */}
        <div style={{background:C.s1,border:`1px solid ${C.border}`,borderRadius:16,
          padding:isMobile?"20px 18px":"28px 32px",marginBottom:20}}>
          <div style={{display:"flex",gap:8,marginBottom:14,flexWrap:"wrap"}}>
            <span style={{padding:"3px 10px",borderRadius:20,fontSize:13,fontWeight:600,
              background:DOM[q.domain]?.color+"1a",color:DOM[q.domain]?.color,
              border:`1px solid ${DOM[q.domain]?.color}33`}}>
              {DOM[q.domain]?.name}
            </span>
            <span style={{padding:"3px 10px",borderRadius:20,fontSize:13,
              background:C.s2,color:C.muted}}>{TOPIC_MAP[q.topic]?.name}</span>
          </div>

          <p style={{margin:"0 0 22px",fontSize:20,color:C.text,lineHeight:1.7,fontWeight:600}}>
            {q.content}
          </p>

          <div style={{display:"flex",flexDirection:"column",gap:10}}>
            {q.options.map((opt,i)=>{
              const selected=answers[q.id]===i;
              return(
                <button key={i} onClick={()=>select(i)}
                  style={{display:"flex",alignItems:"center",gap:12,padding:"12px 16px",
                    borderRadius:10,cursor:"pointer",fontSize:18,textAlign:"left",
                    transition:"all .15s",
                    background:selected?C.alg+"15":C.s2,
                    border:`2px solid ${selected?C.alg:C.border}`,
                    color:selected?C.alg:C.text}}>
                  <span style={{width:28,height:28,borderRadius:"50%",display:"flex",
                    alignItems:"center",justifyContent:"center",fontSize:14,fontWeight:700,
                    flexShrink:0,
                    background:selected?C.alg:"transparent",
                    color:selected?"white":C.muted,
                    border:`2px solid ${selected?C.alg:C.dim}`}}>
                    {String.fromCharCode(65+i)}
                  </span>
                  {opt}
                </button>
              );
            })}
          </div>
        </div>

        {/* 导航按钮 */}
        <div style={{display:"flex",justifyContent:"space-between",gap:12}}>
          <button onClick={goPrev} disabled={cur===0}
            style={{padding:"10px 24px",borderRadius:8,fontSize:16,cursor:cur===0?"not-allowed":"pointer",
              background:"none",border:`1px solid ${C.border}`,
              color:cur===0?C.dim:C.muted}}>
            ← 上一题
          </button>
          <button onClick={goNext}
            style={{padding:"10px 28px",borderRadius:8,fontSize:16,fontWeight:700,
              cursor:"pointer",border:"none",
              background:answers[q.id]!==undefined?C.alg:C.dim,
              color:"white",transition:"background .2s"}}>
            {cur===total-1?"完成测试 ✓":"下一题 →"}
          </button>
        </div>
      </div>
    </div>
  );

  // ── 结果页 ────────────────────
  return(
    <div style={{minHeight:"100vh",background:C.bg,padding:isMobile?16:40}}>
      <div style={{maxWidth:640,margin:"0 auto"}}>
        {/* 分数总览 */}
        <div style={{textAlign:"center",marginBottom:28}}>
          {(() => { const pct=Math.round(score/total*100); return <>
          <div style={{fontSize:52,marginBottom:8}}>
            {pct>=80?"🎉":pct>=50?"💪":"📚"}
          </div>
          <h2 style={{margin:"0 0 6px",fontSize:26,fontWeight:900,color:C.text}}>
            {["","","","","","","","七","八","九"][grade]}年级诊断完成
          </h2>
          <div style={{fontSize:44,fontWeight:900,color:C.alg,margin:"8px 0"}}>
            {score} <span style={{fontSize:20,color:C.muted}}>/ {total}</span>
            <span style={{fontSize:18,color:C.dim,marginLeft:8}}>（{pct}%）</span>
          </div>
          <p style={{fontSize:17,color:C.muted}}>
            {pct>=80?"基础扎实！重点突破薄弱环节即可":
             pct>=50?"中等水平，系统学习可以大幅提分":
             "别担心，数脉会帮你一步步补回来"}
          </p>
          </>; })()}
        </div>

        {/* 三大模块得分 */}
        <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:10,marginBottom:20}}>
          {Object.entries(domainScores).map(([dom,s])=>{
            const pct=Math.round(s.correct/s.total*100);
            const dc=DOM[dom]?.color||C.muted;
            return(
              <div key={dom} style={{background:C.s1,border:`1px solid ${dc}22`,
                borderRadius:12,padding:"16px 12px",textAlign:"center"}}>
                <div style={{fontSize:14,color:dc,fontWeight:700,marginBottom:8}}>
                  {DOM[dom]?.name}
                </div>
                <div style={{fontSize:28,fontWeight:900,color:pct>=75?C.ok:pct>=50?C.gold:C.red}}>
                  {s.correct}/{s.total}
                </div>
                <div style={{height:4,background:C.s2,borderRadius:2,marginTop:8}}>
                  <div style={{width:`${pct}%`,height:"100%",background:dc,borderRadius:2}}/>
                </div>
              </div>
            );
          })}
        </div>

        {/* 薄弱知识点 */}
        {weakTopics.length>0&&(
          <div style={{background:C.s1,border:`1px solid ${C.red}20`,borderRadius:12,
            padding:20,marginBottom:16}}>
            <h3 style={{margin:"0 0 12px",fontSize:17,color:C.red}}>
              ⚠️ 需要加强的知识点
            </h3>
            <div style={{display:"flex",gap:8,flexWrap:"wrap"}}>
              {weakTopics.map(w=>(
                <span key={w.code} style={{padding:"5px 12px",borderRadius:20,fontSize:15,
                  background:DOM[w.domain]?.color+"15",color:DOM[w.domain]?.color,
                  border:`1px solid ${DOM[w.domain]?.color}33`}}>
                  {w.name}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* AI 推荐起点 */}
        {startTopic&&(
          <div style={{background:C.s1,border:`1px solid ${C.alg}22`,borderRadius:12,
            padding:20,marginBottom:24}}>
            <h3 style={{margin:"0 0 8px",fontSize:17,color:C.alg}}>
              🎯 AI 推荐你从这里开始
            </h3>
            <div style={{display:"flex",alignItems:"center",gap:12,padding:"10px 14px",
              background:C.s2,borderRadius:8}}>
              <span style={{fontSize:24}}>📌</span>
              <div>
                <div style={{fontSize:18,fontWeight:700,color:C.text}}>{startTopic.name}</div>
                <div style={{fontSize:15,color:C.muted}}>
                  考察频率 {startTopic.freq}%，10年考了 {startTopic.examYears?.length} 年
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 开始学习按钮 */}
        <button onClick={handleFinish}
          style={{width:"100%",padding:"16px 0",borderRadius:12,fontSize:20,
            fontWeight:700,cursor:"pointer",border:"none",background:C.alg,
            color:"white",transition:"transform .15s"}}
          onMouseDown={e=>e.currentTarget.style.transform="scale(.98)"}
          onMouseUp={e=>e.currentTarget.style.transform="scale(1)"}>
          开始我的学习之旅 🚀
        </button>
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════════════════
   📄 PAGE: 试卷逆向分析 — 上传试卷 → AI拆解 → 薄弱定位 → 模拟卷
════════════════════════════════════════════════════════════ */
function PagePaper({mastered,onNav}) {
  const {isMobile}=useBP();
  const [step,setStep]=useState("input"); // input → result → mock
  const [paperText,setPaperText]=useState("");
  const [loading,setLoading]=useState(false);
  const [analysis,setAnalysis]=useState(null); // {questions, summary}
  const [weakPath,setWeakPath]=useState(null);
  const [mockPaper,setMockPaper]=useState(null);
  const [mockLoading,setMockLoading]=useState(false);
  const [inputMode,setInputMode]=useState("text"); // text | upload
  const [uploadFile,setUploadFile]=useState(null);
  const [ocrLoading,setOcrLoading]=useState(false);
  const fileRef=useRef(null);

  const handleFileSelect=async(e)=>{
    const file=e.target.files?.[0];
    if(!file)return;
    if(file.size>15*1024*1024){alert("文件不能超过15MB");return;}
    setUploadFile(file);
    // 图片自动OCR提取文字
    if(file.type.startsWith("image/")){
      setOcrLoading(true);
      try{
        const reader=new FileReader();
        const b64=await new Promise(res=>{reader.onload=ev=>res(ev.target.result.split(",")[1]);reader.readAsDataURL(file);});
        const token=localStorage.getItem("shumai_token");
        const resp=await fetch("/api/ocr",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${token}`},body:JSON.stringify({imageBase64:b64})});
        if(resp.ok){const d=await resp.json();if(d.text){setPaperText(d.text);setInputMode("text");}}
        else setPaperText("（图片已上传，OCR识别失败，请手动粘贴文字）");
      }catch{setPaperText("（图片已上传，请手动粘贴或输入题目文字）");}
      setOcrLoading(false);
    }
  };

  const masteredSet=useMemo(()=>mastered instanceof Set?mastered:new Set(mastered||[]),[mastered]);

  // 分析试卷
  const doAnalyze = async () => {
    if(!paperText.trim()){alert("请输入试卷题目内容");return;}
    setLoading(true);
    try {
      const system = `你是资深中考数学阅卷教师。分析以下试卷每道题，返回JSON数组。
每道题格式：{"no":1,"type":"choice|fill|solve","content":"摘要30字","answer":"答案","topics":["知识点code"],"methods":["方法"],"diff":1-5,"keyPoint":"核心考点","trap":"易错点"}
知识点code从以下选：rational,reals,poly,factoring,fraction,linear_eq,quad_eq,equations,inequality,coords,linear_fn,inverse_fn,quad_fn,tri_basic,congruent,pythagorean,special_tri,quadrilateral,similar,trig,circle,transform,stats,prob,segment_angle,parallel,eq_app,quad_eq_app,quad_fn_app,fraction_eq_app,inequality_app,trig_app,circle_app,stat_prob_app
只输出JSON数组，不要其他文字。`;
      const raw = await callAI(system, `分析试卷：\n${paperText}`);
      const jsonStr = raw.replace(/^```json?\s*/i,'').replace(/\s*```$/,'').trim();
      const questions = JSON.parse(jsonStr);

      // 汇总
      const allTopics=[...new Set(questions.flatMap(q=>q.topics||[]))];
      const topicFreq={};
      questions.forEach(q=>(q.topics||[]).forEach(t=>{topicFreq[t]=(topicFreq[t]||0)+1;}));
      const avgDiff=questions.length>0?(questions.reduce((s,q)=>s+(q.diff||3),0)/questions.length).toFixed(1):0;

      const summary={
        totalQuestions:questions.length,
        topicsCovered:allTopics.length,
        topics:allTopics,
        topicFrequency:topicFreq,
        averageDifficulty:parseFloat(avgDiff),
        diffDistribution:{
          easy:questions.filter(q=>q.diff<=2).length,
          medium:questions.filter(q=>q.diff===3).length,
          hard:questions.filter(q=>q.diff>=4).length,
        },
      };

      // 薄弱分析
      const weak=allTopics.filter(t=>!masteredSet.has(t));
      const masteredInPaper=allTopics.filter(t=>masteredSet.has(t));
      setWeakPath({
        weak,mastered:masteredInPaper,
        rate:allTopics.length>0?Math.round(masteredInPaper.length/allTopics.length*100):0,
      });

      setAnalysis({questions,summary});
      setStep("result");
    } catch(e) {
      alert("分析失败："+e.message+"\n请检查输入格式后重试");
    }
    setLoading(false);
  };

  // 生成模拟卷
  const doMock = async () => {
    if(!analysis?.questions?.length) return;
    setMockLoading(true);
    try {
      const brief=analysis.questions.map(q=>
        `第${q.no}题(${q.type},难度${q.diff})：考${(q.topics||[]).join('+')}，${q.keyPoint}`
      ).join('\n');
      const system=`你是中考数学命题教师。根据原卷分析命制同类型模拟卷。
输出JSON数组：[{"no":1,"type":"choice|fill|solve","content":"题目","options":["A","B","C","D"],"answer":"答案","sol":"①...②...③...","topics":["code"],"diff":1-5}]
选择题必须有options，其他空数组。只输出JSON。`;
      const raw=await callAI(system, `原卷分析：\n${brief}\n\n请命制模拟卷。`);
      const jsonStr=raw.replace(/^```json?\s*/i,'').replace(/\s*```$/,'').trim();
      setMockPaper(JSON.parse(jsonStr));
      setStep("mock");
    } catch(e) {
      alert("生成模拟卷失败："+e.message);
    }
    setMockLoading(false);
  };

  const DIFF_LABEL={1:"★ 送分",2:"★★ 基础",3:"★★★ 中档",4:"★★★★ 较难",5:"★★★★★ 压轴"};
  const DIFF_COLOR={1:C.ok,2:C.alg,3:C.sta,4:C.red,5:"#dc2626"};

  return (
    <div style={{padding:isMobile?16:22,maxWidth:900}}>
      <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:20}}>
        <button onClick={()=>onNav("home")}
          style={{padding:"6px 14px",borderRadius:8,cursor:"pointer",
            background:C.s2,color:C.text,border:`1px solid ${C.border}`,fontSize:14}}>
          ← 返回
        </button>
        <h2 style={{fontSize:22,fontWeight:900,color:C.text,margin:0}}>📄 试卷逆向分析</h2>
      </div>

      {/* 步骤指示 */}
      <div style={{display:"flex",gap:4,marginBottom:20}}>
        {["input","result","mock"].map((s,i)=>(
          <div key={s} style={{flex:1,height:4,borderRadius:2,
            background:["input","result","mock"].indexOf(step)>=i?"#a78bfa":C.s2}}/>
        ))}
      </div>

      {/* ── Step 1: 输入 ── */}
      {step==="input"&&(
        <div>
          {/* 输入模式切换 */}
          <div style={{display:"flex",gap:8,marginBottom:16}}>
            {[{k:"text",label:"📝 文字粘贴"},{k:"upload",label:"📷 图片/PDF上传"}].map(m=>(
              <button key={m.k} onClick={()=>setInputMode(m.k)}
                style={{padding:"8px 20px",borderRadius:20,cursor:"pointer",fontSize:15,fontWeight:600,
                  background:inputMode===m.k?"#a78bfa":C.s2,
                  color:inputMode===m.k?"white":C.muted,
                  border:`2px solid ${inputMode===m.k?"#a78bfa":C.border}`}}>
                {m.label}
              </button>
            ))}
          </div>

          {/* 图片/PDF上传区域 */}
          {inputMode==="upload"&&(
            <div>
              <div
                onClick={()=>fileRef.current?.click()}
                style={{border:`2px dashed ${uploadFile?"#a78bfa":C.border}`,borderRadius:16,
                  padding:40,textAlign:"center",cursor:"pointer",marginBottom:12,
                  background:uploadFile?"#a78bfa0a":C.s1,transition:"all .2s"}}
                onDragOver={e=>e.preventDefault()}
                onDrop={e=>{e.preventDefault();const f=e.dataTransfer.files[0];if(f){fileRef.current.files=e.dataTransfer.files;handleFileSelect({target:{files:[f]}});}}}
              >
                <input ref={fileRef} type="file" accept="image/*,.pdf" style={{display:"none"}} onChange={handleFileSelect}/>
                {ocrLoading?(
                  <div>
                    <div style={{fontSize:32,marginBottom:8}}>⏳</div>
                    <div style={{fontSize:16,color:C.muted}}>正在OCR识别文字…</div>
                  </div>
                ):uploadFile?(
                  <div>
                    <div style={{fontSize:32,marginBottom:8}}>✅</div>
                    <div style={{fontSize:16,color:"#a78bfa",fontWeight:700}}>{uploadFile.name}</div>
                    <div style={{fontSize:13,color:C.muted,marginTop:4}}>
                      {uploadFile.type.startsWith("image/")?"图片已识别，可在下方编辑文字":"PDF已上传，请在下方手动输入题目文字"}
                    </div>
                    <div style={{marginTop:10,fontSize:13,color:C.muted}}>点击重新选择</div>
                  </div>
                ):(
                  <div>
                    <div style={{fontSize:40,marginBottom:10}}>📷</div>
                    <div style={{fontSize:17,fontWeight:700,color:C.text,marginBottom:6}}>拖拽或点击上传试卷</div>
                    <div style={{fontSize:14,color:C.muted}}>支持 JPG / PNG / PDF，最大 15MB</div>
                    <div style={{fontSize:13,color:C.muted,marginTop:4}}>图片会自动OCR识别文字</div>
                  </div>
                )}
              </div>
              <button onClick={()=>setInputMode("text")}
                style={{marginBottom:12,padding:"4px 12px",borderRadius:20,cursor:"pointer",
                  fontSize:13,background:"none",color:C.muted,border:`1px solid ${C.border}`}}>
                ✎ 切换到文字编辑
              </button>
            </div>
          )}

          {/* 文字输入区（两种模式都显示） */}
          <div style={{fontSize:14,color:C.muted,marginBottom:6}}>
            {inputMode==="upload"&&uploadFile?"识别结果（可直接编辑）：":"粘贴试卷内容："}
          </div>
          <textarea value={paperText} onChange={e=>setPaperText(e.target.value)}
            placeholder={"请粘贴试卷内容，例如：\n\n1. 计算：(-2)³+|-5|÷(-1)\nA. -13  B. -3  C. 3  D. 13\n\n2. 已知一次函数y=2x+1，当x=3时，y=____\n\n3. 如图，在△ABC中，AB=AC=5，BC=6，求△ABC的面积。"}
            style={{width:"100%",minHeight:220,padding:16,borderRadius:12,
              background:C.s1,border:`2px solid ${C.border}`,
              color:C.text,fontSize:15,lineHeight:1.8,resize:"vertical",
              outline:"none",fontFamily:"inherit",boxSizing:"border-box"}}/>

          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:14,flexWrap:"wrap",gap:10}}>
            <span style={{fontSize:13,color:C.muted}}>
              {paperText.trim()?`已输入 ${paperText.length} 字`:"支持选择题、填空题、解答题混合输入"}
            </span>
            <div style={{display:"flex",gap:8}}>
              {paperText.trim()&&(
                <button onClick={()=>{setPaperText("");setUploadFile(null);}}
                  style={{padding:"10px 20px",borderRadius:12,cursor:"pointer",
                    background:"none",color:C.muted,border:`1px solid ${C.border}`,fontSize:15}}>
                  清空
                </button>
              )}
              <button onClick={doAnalyze} disabled={loading||!paperText.trim()}
                style={{padding:"12px 32px",borderRadius:12,cursor:"pointer",
                  background:paperText.trim()?"linear-gradient(135deg,#a78bfa,#7c3aed)":C.s3,
                  color:"white",border:"none",fontSize:16,fontWeight:800,
                  opacity:loading?0.6:1}}>
                {loading?"⏳ AI 分析中...":"🔍 开始分析"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── Step 2: 分析结果 ── */}
      {step==="result"&&analysis&&(
        <div>
          {/* 总览卡片 */}
          <div style={{display:"grid",gridTemplateColumns:isMobile?"1fr 1fr":"repeat(4,1fr)",
            gap:12,marginBottom:20}}>
            {[
              {label:"题目数",val:analysis.summary.totalQuestions,unit:"道",color:C.alg},
              {label:"知识点",val:analysis.summary.topicsCovered,unit:"个",color:C.geo},
              {label:"平均难度",val:analysis.summary.averageDifficulty,unit:"",color:C.sta},
              {label:"你的覆盖率",val:(weakPath?.rate||0)+"%",unit:"",
                color:weakPath?.rate>=80?C.ok:weakPath?.rate>=50?C.sta:C.red},
            ].map((c,i)=>(
              <div key={i} style={{padding:16,borderRadius:12,background:C.s1,
                border:`1px solid ${c.color}33`,textAlign:"center"}}>
                <div style={{fontSize:28,fontWeight:900,color:c.color}}>{c.val}{c.unit}</div>
                <div style={{fontSize:13,color:C.muted,marginTop:4}}>{c.label}</div>
              </div>
            ))}
          </div>

          {/* 难度分布 */}
          <div style={{padding:16,borderRadius:12,background:C.s1,
            border:`1px solid ${C.border}`,marginBottom:16}}>
            <div style={{fontWeight:800,fontSize:15,color:C.text,marginBottom:10}}>难度分布</div>
            <div style={{display:"flex",gap:8,height:24,borderRadius:6,overflow:"hidden"}}>
              {analysis.summary.diffDistribution.easy>0&&(
                <div style={{flex:analysis.summary.diffDistribution.easy,background:C.ok,
                  display:"flex",alignItems:"center",justifyContent:"center",
                  fontSize:12,color:"white",fontWeight:700}}>
                  易 {analysis.summary.diffDistribution.easy}
                </div>
              )}
              {analysis.summary.diffDistribution.medium>0&&(
                <div style={{flex:analysis.summary.diffDistribution.medium,background:C.sta,
                  display:"flex",alignItems:"center",justifyContent:"center",
                  fontSize:12,color:"white",fontWeight:700}}>
                  中 {analysis.summary.diffDistribution.medium}
                </div>
              )}
              {analysis.summary.diffDistribution.hard>0&&(
                <div style={{flex:analysis.summary.diffDistribution.hard,background:C.red,
                  display:"flex",alignItems:"center",justifyContent:"center",
                  fontSize:12,color:"white",fontWeight:700}}>
                  难 {analysis.summary.diffDistribution.hard}
                </div>
              )}
            </div>
          </div>

          {/* 薄弱点诊断 */}
          {weakPath&&weakPath.weak.length>0&&(
            <div style={{padding:16,borderRadius:12,background:C.red+"0d",
              border:`1px solid ${C.red}33`,marginBottom:16}}>
              <div style={{fontWeight:800,fontSize:15,color:C.red,marginBottom:10}}>
                ⚠ 薄弱点（{weakPath.weak.length}个知识点未掌握）
              </div>
              <div style={{display:"flex",gap:8,flexWrap:"wrap"}}>
                {weakPath.weak.map(t=>(
                  <button key={t} onClick={()=>{onNav("detail",t);}}
                    style={{padding:"5px 12px",borderRadius:16,cursor:"pointer",
                      background:C.red+"1a",color:C.red,border:`1px solid ${C.red}44`,
                      fontSize:13,fontWeight:600}}>
                    {TOPIC_MAP[t]?.name||t} →
                  </button>
                ))}
              </div>
              <div style={{fontSize:13,color:C.muted,marginTop:10}}>
                💡 建议按顺序补习：{weakPath.weak.slice(0,5).map(t=>TOPIC_MAP[t]?.name||t).join(' → ')}
                {weakPath.weak.length>5?" → ...":""}
              </div>
            </div>
          )}
          {weakPath&&weakPath.weak.length===0&&(
            <div style={{padding:16,borderRadius:12,background:C.ok+"0d",
              border:`1px solid ${C.ok}33`,marginBottom:16}}>
              <div style={{fontWeight:800,fontSize:15,color:C.ok}}>
                🎉 这张试卷涉及的知识点你全掌握了！
              </div>
            </div>
          )}

          {/* 逐题分析 */}
          <div style={{fontWeight:800,fontSize:17,color:C.text,marginBottom:12}}>逐题拆解</div>
          {analysis.questions.map((q,i)=>(
            <div key={i} style={{padding:14,borderRadius:12,background:C.s1,
              border:`1px solid ${C.border}`,marginBottom:10}}>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:8}}>
                <span style={{fontWeight:800,fontSize:15,color:C.text}}>
                  第{q.no}题
                  <span style={{fontSize:12,marginLeft:8,padding:"2px 8px",borderRadius:8,
                    background:DIFF_COLOR[q.diff]+"22",color:DIFF_COLOR[q.diff]}}>
                    {DIFF_LABEL[q.diff]||"★★★"}
                  </span>
                </span>
                <span style={{fontSize:12,color:C.muted,padding:"2px 8px",borderRadius:8,
                  background:C.s2}}>
                  {q.type==="choice"?"选择":q.type==="fill"?"填空":"解答"}
                </span>
              </div>
              <div style={{fontSize:14,color:C.text,marginBottom:6}}>{q.content}</div>
              <div style={{fontSize:13,color:C.gold,marginBottom:4}}>
                🎯 {q.keyPoint}
              </div>
              <div style={{fontSize:13,color:C.red,marginBottom:6}}>
                ⚠ {q.trap}
              </div>
              <div style={{display:"flex",gap:6,flexWrap:"wrap"}}>
                {(q.topics||[]).map(t=>(
                  <span key={t} onClick={()=>onNav("detail",t)}
                    style={{padding:"3px 10px",borderRadius:12,cursor:"pointer",
                      fontSize:12,fontWeight:600,
                      background:masteredSet.has(t)?C.ok+"1a":C.red+"1a",
                      color:masteredSet.has(t)?C.ok:C.red,
                      border:`1px solid ${masteredSet.has(t)?C.ok:C.red}44`}}>
                    {TOPIC_MAP[t]?.name||t} {masteredSet.has(t)?"✓":"✗"}
                  </span>
                ))}
              </div>
            </div>
          ))}

          {/* 操作按钮 */}
          <div style={{display:"flex",gap:12,marginTop:20,flexWrap:"wrap"}}>
            <button onClick={()=>{setStep("input");setAnalysis(null);setWeakPath(null);}}
              style={{padding:"10px 24px",borderRadius:10,cursor:"pointer",
                background:C.s2,color:C.text,border:`1px solid ${C.border}`,
                fontSize:15,fontWeight:700}}>
              ← 重新输入
            </button>
            <button onClick={doMock} disabled={mockLoading}
              style={{padding:"10px 24px",borderRadius:10,cursor:"pointer",
                background:"linear-gradient(135deg,#a78bfa,#7c3aed)",
                color:"white",border:"none",fontSize:15,fontWeight:800,
                opacity:mockLoading?0.6:1}}>
              {mockLoading?"⏳ 生成中...":"📝 生成同类型模拟卷"}
            </button>
          </div>
        </div>
      )}

      {/* ── Step 3: 模拟卷 ── */}
      {step==="mock"&&mockPaper&&(
        <div>
          <div style={{fontWeight:800,fontSize:20,color:C.text,marginBottom:6}}>
            📝 AI 模拟卷（{mockPaper.length}道）
          </div>
          <div style={{fontSize:13,color:C.muted,marginBottom:16}}>
            基于原卷知识点和难度分布生成，可直接练习
          </div>
          {mockPaper.map((q,i)=>(
            <MockQuestion key={i} q={q} index={i}/>
          ))}
          <div style={{display:"flex",gap:12,marginTop:20,flexWrap:"wrap"}}>
            <button onClick={()=>setStep("result")}
              style={{padding:"10px 24px",borderRadius:10,cursor:"pointer",
                background:C.s2,color:C.text,border:`1px solid ${C.border}`,
                fontSize:15,fontWeight:700}}>
              ← 返回分析
            </button>
            <button onClick={doMock} disabled={mockLoading}
              style={{padding:"10px 24px",borderRadius:10,cursor:"pointer",
                background:"linear-gradient(135deg,#a78bfa,#7c3aed)",
                color:"white",border:"none",fontSize:15,fontWeight:800,
                opacity:mockLoading?0.6:1}}>
              {mockLoading?"⏳":"🔄 再生成一套"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// 模拟卷单题组件（支持展开答案）
function MockQuestion({q,index}) {
  const [showAns,setShowAns]=useState(false);
  const DIFF_COLOR={1:C.ok,2:C.alg,3:C.sta,4:C.red,5:"#dc2626"};
  return (
    <div style={{padding:14,borderRadius:12,background:C.s1,
      border:`1px solid ${C.border}`,marginBottom:10}}>
      <div style={{display:"flex",justifyContent:"space-between",marginBottom:8}}>
        <span style={{fontWeight:800,color:C.text}}>第{q.no||index+1}题</span>
        <span style={{fontSize:12,color:DIFF_COLOR[q.diff]||C.muted}}>
          {"★".repeat(q.diff||3)}
        </span>
      </div>
      <div style={{fontSize:15,color:C.text,lineHeight:1.8,marginBottom:8}}>{q.content}</div>
      {q.options?.length>0&&(
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:6,marginBottom:8}}>
          {q.options.map((opt,j)=>(
            <div key={j} style={{padding:"6px 12px",borderRadius:8,
              background:C.s2,color:C.text,fontSize:14}}>
              {String.fromCharCode(65+j)}. {opt}
            </div>
          ))}
        </div>
      )}
      <button onClick={()=>setShowAns(!showAns)}
        style={{padding:"5px 14px",borderRadius:8,cursor:"pointer",
          background:showAns?C.gold+"22":C.s2,
          color:showAns?C.gold:C.muted,
          border:`1px solid ${showAns?C.gold+"44":C.border}`,
          fontSize:13,fontWeight:600}}>
        {showAns?"收起答案":"查看答案"}
      </button>
      {showAns&&(
        <div style={{marginTop:8,padding:"10px 14px",borderRadius:8,
          background:C.gold+"0d",border:`1px solid ${C.gold}22`}}>
          <div style={{fontWeight:700,color:C.gold,marginBottom:4}}>答案：{q.answer}</div>
          {q.sol&&<div style={{fontSize:14,color:C.text,lineHeight:1.8}}>{q.sol}</div>}
        </div>
      )}
    </div>
  );
}

/* ════════════════════════════════════════════════════════════
   🔥 PAGE: 考前冲刺模式 — 设置考试日期 → 自动阶段划分 → 每日计划
════════════════════════════════════════════════════════════ */
function PageSprint({mastered,wrongSet,onNav}) {
  const {isMobile}=useBP();
  const STORAGE_KEY="shumai_v7";
  const saved=useMemo(()=>{try{return JSON.parse(localStorage.getItem(STORAGE_KEY)||"{}")}catch{return{}}},[]);

  const [examDate,setExamDate]=useState(()=>saved.examDate||"");
  const [confirmed,setConfirmed]=useState(()=>!!saved.examDate);

  const saveExamDate=(d)=>{
    try{const prev=JSON.parse(localStorage.getItem(STORAGE_KEY)||"{}");localStorage.setItem(STORAGE_KEY,JSON.stringify({...prev,examDate:d}));}catch{}
  };

  const handleConfirm=()=>{
    if(!examDate){alert("请选择考试日期");return;}
    saveExamDate(examDate);
    setConfirmed(true);
  };

  // 冲刺阶段计算
  const sprint=useMemo(()=>{
    if(!examDate) return null;
    const now=new Date(), exam=new Date(examDate);
    const daysLeft=Math.max(0,Math.ceil((exam-now)/86400000));
    if(daysLeft<=0) return {phase:"done",label:"考试已结束",daysLeft:0,color:C.muted};

    const phases=[
      {id:"patch",label:"补漏期",focus:"查漏补缺，攻克薄弱知识点",color:C.alg,
        plan:"3道基础 + 1道真题 + 2道错题复习",icon:"🔧"},
      {id:"enhance",label:"强化期",focus:"题组训练，提升解题速度",color:C.geo,
        plan:"1道基础 + 3道真题 + 2道复习 + 1道挑战",icon:"💪"},
      {id:"sprint",label:"冲刺期",focus:"真题模拟，压轴题突破",color:C.sta,
        plan:"2道真题 + 3道错题 + 2道压轴",icon:"⚡"},
      {id:"warm",label:"保温期",focus:"轻松复习，保持手感",color:C.red,
        plan:"1道真题 + 1道复习",icon:"🌡️"},
    ];
    let phase;
    if(daysLeft>60) phase=phases[0];
    else if(daysLeft>21) phase=phases[1];
    else if(daysLeft>5) phase=phases[2];
    else phase=phases[3];
    return {...phase,daysLeft,examDate};
  },[examDate]);

  const total=TOPICS.length;
  const mCount=mastered instanceof Set?mastered.size:0;
  const pct=Math.round(mCount/total*100);

  // 薄弱知识点（按考频排序）
  const weakTopics=useMemo(()=>{
    const ms=mastered instanceof Set?mastered:new Set();
    return [...TOPICS].filter(t=>!ms.has(t.id)).sort((a,b)=>b.freq-a.freq).slice(0,10);
  },[mastered]);

  return (
    <div style={{padding:isMobile?16:22,maxWidth:900}}>
      <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:20}}>
        <button onClick={()=>onNav("home")}
          style={{padding:"6px 14px",borderRadius:8,cursor:"pointer",
            background:C.s2,color:C.text,border:`1px solid ${C.border}`,fontSize:14}}>
          ← 返回
        </button>
        <h2 style={{fontSize:22,fontWeight:900,color:C.text,margin:0}}>🔥 考前冲刺模式</h2>
      </div>

      {/* 设置考试日期 */}
      {!confirmed?(
        <div style={{padding:30,borderRadius:16,textAlign:"center",
          background:`linear-gradient(135deg,${C.sta}08,${C.red}06)`,
          border:`1px solid ${C.sta}25`}}>
          <div style={{fontSize:50,marginBottom:16}}>🎯</div>
          <div style={{fontSize:20,fontWeight:800,color:C.text,marginBottom:8}}>
            设置你的中考日期
          </div>
          <div style={{fontSize:15,color:C.muted,marginBottom:20}}>
            系统会自动划分学习阶段，每天生成针对性计划
          </div>
          <input type="date" value={examDate} onChange={e=>setExamDate(e.target.value)}
            style={{padding:"12px 20px",borderRadius:12,fontSize:18,
              background:C.s1,border:`2px solid ${C.sta}`,color:C.text,
              outline:"none",textAlign:"center",marginBottom:16}}/>
          <br/>
          <button onClick={handleConfirm}
            style={{padding:"12px 40px",borderRadius:12,cursor:"pointer",
              background:"linear-gradient(135deg,#f5a623,#f04f70)",
              color:"white",border:"none",fontSize:17,fontWeight:800,marginTop:8}}>
            确认开始冲刺
          </button>
        </div>
      ):(
        <div>
          {/* 倒计时大卡片 */}
          {sprint&&sprint.phase!=="done"&&(
            <div style={{padding:24,borderRadius:16,marginBottom:16,textAlign:"center",
              background:`linear-gradient(135deg,${sprint.color}12,${sprint.color}06)`,
              border:`2px solid ${sprint.color}44`,position:"relative",overflow:"hidden"}}>
              <div style={{position:"absolute",top:-50,right:-50,width:200,height:200,
                borderRadius:"50%",background:sprint.color,opacity:0.05}}/>
              <div style={{fontSize:18,color:sprint.color,fontWeight:700,marginBottom:4}}>
                {sprint.icon} {sprint.label}
              </div>
              <div style={{fontSize:56,fontWeight:900,color:C.text,lineHeight:1,marginBottom:4}}>
                {sprint.daysLeft}
              </div>
              <div style={{fontSize:16,color:C.muted,marginBottom:8}}>天后考试</div>
              <div style={{fontSize:15,color:sprint.color,fontWeight:600}}>{sprint.focus}</div>

              {/* 阶段进度条 */}
              <div style={{display:"flex",gap:4,marginTop:16,height:8,borderRadius:4,overflow:"hidden"}}>
                {[
                  {label:"补漏",pct:40,color:C.alg,active:sprint.id==="patch"},
                  {label:"强化",pct:40,color:C.geo,active:sprint.id==="enhance"},
                  {label:"冲刺",pct:15,color:C.sta,active:sprint.id==="sprint"},
                  {label:"保温",pct:5,color:C.red,active:sprint.id==="warm"},
                ].map((p,i)=>(
                  <div key={i} style={{flex:p.pct,borderRadius:2,
                    background:p.active?p.color:C.s3,opacity:p.active?1:0.3}}/>
                ))}
              </div>
              <div style={{display:"flex",justifyContent:"space-between",marginTop:4,fontSize:11,color:C.muted}}>
                <span>补漏40%</span><span>强化40%</span><span>冲刺15%</span><span>保温5%</span>
              </div>
            </div>
          )}
          {sprint&&sprint.phase==="done"&&(
            <div style={{padding:24,borderRadius:16,marginBottom:16,textAlign:"center",
              background:C.ok+"0d",border:`1px solid ${C.ok}33`}}>
              <div style={{fontSize:40,marginBottom:8}}>🎉</div>
              <div style={{fontSize:20,fontWeight:800,color:C.ok}}>考试加油！你已经准备好了</div>
            </div>
          )}

          {/* 今日冲刺计划 */}
          {sprint&&sprint.plan&&(
            <div style={{padding:16,borderRadius:12,background:C.s1,
              border:`1px solid ${C.border}`,marginBottom:16}}>
              <div style={{fontWeight:800,fontSize:16,color:C.text,marginBottom:10}}>📝 今日冲刺计划</div>
              <div style={{fontSize:15,color:sprint.color,fontWeight:600,marginBottom:10}}>{sprint.plan}</div>
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8}}>
                {[
                  {label:"错题复练",icon:"🔄",action:()=>onNav("wrong"),color:C.red},
                  {label:"真题刷题",icon:"✏️",action:()=>onNav("practice"),color:C.sta},
                  {label:"薄弱知识点",icon:"📚",action:()=>onNav("modules"),color:C.alg},
                  {label:"智能诊断",icon:"🤖",action:()=>onNav("diag"),color:C.cyan},
                ].map((b,i)=>(
                  <button key={i} onClick={b.action}
                    style={{padding:"10px 14px",borderRadius:10,cursor:"pointer",
                      background:C.s2,border:`1px solid ${b.color}25`,
                      color:b.color,fontSize:14,fontWeight:700,textAlign:"left"}}>
                    {b.icon} {b.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* 当前状态 */}
          <div style={{display:"grid",gridTemplateColumns:isMobile?"1fr 1fr":"repeat(4,1fr)",
            gap:10,marginBottom:16}}>
            {[
              {label:"已掌握",val:`${mCount}/${total}`,color:C.ok},
              {label:"完成率",val:`${pct}%`,color:pct>=80?C.ok:pct>=50?C.sta:C.red},
              {label:"待攻克错题",val:wrongSet instanceof Set?wrongSet.size:0,color:C.red},
              {label:"剩余天数",val:sprint?.daysLeft||"—",color:sprint?.color||C.muted},
            ].map((c,i)=>(
              <div key={i} style={{padding:14,borderRadius:10,background:C.s1,
                border:`1px solid ${c.color}25`,textAlign:"center"}}>
                <div style={{fontSize:26,fontWeight:900,color:c.color}}>{c.val}</div>
                <div style={{fontSize:12,color:C.muted,marginTop:2}}>{c.label}</div>
              </div>
            ))}
          </div>

          {/* 薄弱知识点 TOP10 */}
          {weakTopics.length>0&&(
            <div style={{padding:16,borderRadius:12,background:C.s1,
              border:`1px solid ${C.border}`,marginBottom:16}}>
              <div style={{fontWeight:800,fontSize:16,color:C.text,marginBottom:10}}>
                ⚠ 薄弱知识点 TOP{weakTopics.length}（按考频排序）
              </div>
              {weakTopics.map((t,i)=>(
                <div key={t.id} onClick={()=>onNav("detail",t.id)}
                  style={{display:"flex",alignItems:"center",gap:10,padding:"8px 10px",
                    marginBottom:4,borderRadius:8,cursor:"pointer",
                    background:C.s2,border:`1px solid ${C.border}`,transition:"all .15s"}}
                  onMouseEnter={e=>e.currentTarget.style.borderColor=DOM[t.domain].color}
                  onMouseLeave={e=>e.currentTarget.style.borderColor=C.border}>
                  <span style={{fontSize:14,fontWeight:900,color:C.dim,minWidth:24}}>#{i+1}</span>
                  <div style={{flex:1}}>
                    <span style={{fontSize:14,fontWeight:700,color:DOM[t.domain].color}}>{t.name}</span>
                    <span style={{fontSize:12,color:C.muted,marginLeft:8}}>考{t.examYears.length}年</span>
                  </div>
                  <span style={{fontSize:14,fontWeight:800,color:C.sta}}>{t.freq}%</span>
                </div>
              ))}
            </div>
          )}

          {/* 修改日期 */}
          <div style={{textAlign:"center",marginTop:10}}>
            <button onClick={()=>setConfirmed(false)}
              style={{padding:"6px 20px",borderRadius:8,cursor:"pointer",
                background:"none",border:`1px solid ${C.border}`,
                color:C.muted,fontSize:13}}>
              修改考试日期
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

/* ════════════════════════════════════════════════════════════
   📸 PAGE: OCR 作业识别 — 拍照/文字 → AI 识别 → 错题录入
════════════════════════════════════════════════════════════ */
function PageOCR({onNav}) {
  const {isMobile}=useBP();
  const [mode,setMode]=useState("upload"); // upload | text | result | search | search_result
  const [loading,setLoading]=useState(false);
  const [result,setResult]=useState(null);
  const [textInput,setTextInput]=useState("");
  const [selectedFile,setSelectedFile]=useState(null);
  const [preview,setPreview]=useState(null);
  const [saveMsg,setSaveMsg]=useState("");
  // M1 拍题搜题
  const [searchFile,setSearchFile]=useState(null);
  const [searchPreview,setSearchPreview]=useState(null);
  const [searchText,setSearchText]=useState("");
  const [searchResult,setSearchResult]=useState(null);
  // M2 变形题
  const [variants,setVariants]=useState(null);
  const [variantLoading,setVariantLoading]=useState(false);

  const API=window.__SHUMAI_API||"";
  const token=window.__SHUMAI_TOKEN||"";

  // 选择文件
  const handleFile=(e)=>{
    const file=e.target.files?.[0];
    if(!file) return;
    if(file.size>10*1024*1024){alert("图片不能超过10MB");return;}
    setSelectedFile(file);
    const reader=new FileReader();
    reader.onload=(ev)=>setPreview(ev.target.result);
    reader.readAsDataURL(file);
  };

  // 图片识别
  const analyzeImage=async()=>{
    if(!selectedFile){alert("请先选择图片");return;}
    setLoading(true);
    try{
      const fd=new FormData();
      fd.append("image",selectedFile);
      const r=await fetch(`${API}/api/ocr/analyze`,{
        method:"POST",headers:{"Authorization":`Bearer ${token}`},body:fd
      });
      if(!r.ok){const e=await r.json().catch(()=>({}));throw new Error(e.error||"识别失败");}
      const data=await r.json();
      setResult(data);
      setMode("result");
    }catch(e){alert("❌ "+e.message);}
    setLoading(false);
  };

  // 文本识别
  const analyzeText=async()=>{
    if(!textInput.trim()){alert("请输入题目文本");return;}
    setLoading(true);
    try{
      const r=await fetch(`${API}/api/ocr/text-analyze`,{
        method:"POST",headers:{"Content-Type":"application/json","Authorization":`Bearer ${token}`},
        body:JSON.stringify({text:textInput})
      });
      if(!r.ok){const e=await r.json().catch(()=>({}));throw new Error(e.error||"识别失败");}
      const data=await r.json();
      setResult(data);
      setMode("result");
    }catch(e){alert("❌ "+e.message);}
    setLoading(false);
  };

  // 修改题目判定
  const toggleCorrect=(idx)=>{
    if(!result) return;
    const qs=[...result.questions];
    const q=qs[idx];
    q.isCorrect=q.isCorrect===true?false:q.isCorrect===false?null:true;
    setResult({...result,questions:qs});
  };

  // 保存结果
  const saveResults=async()=>{
    if(!result?.questions?.length) return;
    setLoading(true);
    try{
      const r=await fetch(`${API}/api/ocr/save`,{
        method:"POST",headers:{"Content-Type":"application/json","Authorization":`Bearer ${token}`},
        body:JSON.stringify({questions:result.questions})
      });
      if(!r.ok){const e=await r.json().catch(()=>({}));throw new Error(e.error||"保存失败");}
      const data=await r.json();
      setSaveMsg(`✅ 已保存！共${data.total}题：正确${data.correct}题，错误${data.wrong}题已录入错题本`);
    }catch(e){setSaveMsg("❌ "+e.message);}
    setLoading(false);
  };

  // 重新开始
  const reset=()=>{
    setMode("upload");setResult(null);setSelectedFile(null);
    setPreview(null);setTextInput("");setSaveMsg("");
  };

  // M1 搜题
  const handleSearchFile=(e)=>{
    const file=e.target.files?.[0];
    if(!file) return;
    setSearchFile(file);
    const reader=new FileReader();
    reader.onload=(ev)=>setSearchPreview(ev.target.result);
    reader.readAsDataURL(file);
  };

  const doSearch=async()=>{
    if(!searchFile&&!searchText.trim()){alert("请上传图片或输入题目");return;}
    setLoading(true);setSearchResult(null);setVariants(null);
    try{
      let data;
      if(searchFile){
        const fd=new FormData();
        fd.append("image",searchFile);
        if(searchText) fd.append("text",searchText);
        const r=await fetch(`${API}/api/ocr/search`,{
          method:"POST",headers:{"Authorization":`Bearer ${token}`},body:fd
        });
        if(!r.ok){const e=await r.json().catch(()=>({}));throw new Error(e.error||"搜题失败");}
        data=await r.json();
      } else {
        const r=await fetch(`${API}/api/ocr/search`,{
          method:"POST",headers:{"Content-Type":"application/json","Authorization":`Bearer ${token}`},
          body:JSON.stringify({text:searchText})
        });
        if(!r.ok){const e=await r.json().catch(()=>({}));throw new Error(e.error||"搜题失败");}
        data=await r.json();
      }
      setSearchResult(data);
      setMode("search_result");
    }catch(e){alert("❌ "+e.message);}
    setLoading(false);
  };

  // M2 生成变形题
  const doVariant=async(content,topic)=>{
    setVariantLoading(true);
    try{
      const r=await fetch(`${API}/api/ocr/variant`,{
        method:"POST",headers:{"Content-Type":"application/json","Authorization":`Bearer ${token}`},
        body:JSON.stringify({questionContent:content,topic,count:3})
      });
      if(!r.ok){const e=await r.json().catch(()=>({}));throw new Error(e.error||"生成失败");}
      const data=await r.json();
      setVariants(data.variants||[]);
    }catch(e){alert("❌ "+e.message);}
    setVariantLoading(false);
  };

  const correctIcon=(v)=>v===true?"✅":v===false?"❌":"❓";
  const correctColor=(v)=>v===true?C.ok:v===false?C.red:C.muted;

  return (
    <div style={{padding:isMobile?16:22,maxWidth:800}}>
      <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:20}}>
        <button onClick={()=>onNav("home")}
          style={{padding:"6px 14px",borderRadius:8,cursor:"pointer",
            background:C.s2,color:C.text,border:`1px solid ${C.border}`,fontSize:14}}>
          ← 返回
        </button>
        <h2 style={{fontSize:22,fontWeight:900,color:C.text,margin:0}}>📸 作业识别</h2>
      </div>

      {/* 模式切换 */}
      {mode!=="result"&&mode!=="search_result"&&(
        <div style={{display:"flex",gap:6,marginBottom:16,flexWrap:"wrap"}}>
          {[
            {v:"upload",label:"📷 拍照识别",c:C.alg},
            {v:"text",label:"✏️ 文字输入",c:C.geo},
            {v:"search",label:"🔍 拍题搜题",c:"#f472b6"},
          ].map(tab=>(
            <button key={tab.v} onClick={()=>setMode(tab.v)}
              style={{padding:"8px 20px",borderRadius:10,cursor:"pointer",fontSize:14,fontWeight:700,
                background:mode===tab.v?tab.c+"22":C.s2,color:mode===tab.v?tab.c:C.muted,
                border:`1px solid ${mode===tab.v?tab.c+"55":C.border}`}}>
              {tab.label}
            </button>
          ))}
        </div>
      )}

      {/* 图片上传模式 */}
      {mode==="upload"&&(
        <div>
          <div style={{padding:40,borderRadius:16,textAlign:"center",
            background:C.s1,border:`2px dashed ${C.border}`,marginBottom:16,cursor:"pointer",
            position:"relative"}}
            onClick={()=>document.getElementById("ocr-file-input")?.click()}>
            <input id="ocr-file-input" type="file" accept="image/*" capture="environment"
              onChange={handleFile} style={{display:"none"}}/>
            {preview?(
              <img src={preview} alt="预览" style={{maxWidth:"100%",maxHeight:300,borderRadius:12}}/>
            ):(
              <div>
                <div style={{fontSize:50,marginBottom:12}}>📷</div>
                <div style={{fontSize:16,fontWeight:700,color:C.text,marginBottom:4}}>
                  点击拍照或选择图片
                </div>
                <div style={{fontSize:14,color:C.muted}}>
                  支持 JPG/PNG/WebP，最大 10MB
                </div>
              </div>
            )}
          </div>
          {selectedFile&&(
            <div style={{display:"flex",gap:8}}>
              <button onClick={analyzeImage} disabled={loading}
                style={{flex:1,padding:"12px 0",borderRadius:12,cursor:"pointer",
                  background:loading?"#555":"linear-gradient(135deg,#3a9eff,#1ed9a0)",
                  color:"white",border:"none",fontSize:16,fontWeight:800}}>
                {loading?"⏳ AI 识别中...":"🔍 开始识别"}
              </button>
              <button onClick={()=>{setSelectedFile(null);setPreview(null);}}
                style={{padding:"12px 20px",borderRadius:12,cursor:"pointer",
                  background:C.s2,color:C.muted,border:`1px solid ${C.border}`,fontSize:14}}>
                清除
              </button>
            </div>
          )}
        </div>
      )}

      {/* 文字输入模式 */}
      {mode==="text"&&(
        <div>
          <textarea value={textInput} onChange={e=>setTextInput(e.target.value)}
            placeholder="粘贴或手动输入题目文本...&#10;&#10;例如：&#10;1. 计算 (-2)³ + |−5|&#10;2. 解方程 2x + 3 = 7&#10;3. 已知三角形ABC中，AB=AC=5，BC=6，求面积"
            style={{width:"100%",minHeight:180,padding:16,borderRadius:12,fontSize:15,
              background:C.s1,border:`1px solid ${C.border}`,color:C.text,
              outline:"none",resize:"vertical",lineHeight:1.8}}/>
          <button onClick={analyzeText} disabled={loading||!textInput.trim()}
            style={{width:"100%",padding:"12px 0",borderRadius:12,cursor:"pointer",marginTop:10,
              background:loading?"#555":"linear-gradient(135deg,#1ed9a0,#3a9eff)",
              color:"white",border:"none",fontSize:16,fontWeight:800}}>
            {loading?"⏳ AI 分析中...":"🔍 智能分析"}
          </button>
        </div>
      )}

      {/* 结果展示 */}
      {mode==="result"&&result&&(
        <div>
          {/* 总结卡片 */}
          <div style={{padding:16,borderRadius:12,marginBottom:16,
            background:`linear-gradient(135deg,${C.alg}10,${C.geo}08)`,
            border:`1px solid ${C.alg}33`}}>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
              <div>
                <div style={{fontSize:16,fontWeight:800,color:C.text}}>
                  📋 共识别 {result.questions?.length||0} 道题
                </div>
                <div style={{fontSize:14,color:C.muted,marginTop:4}}>{result.summary}</div>
              </div>
              <div style={{display:"flex",gap:10}}>
                <div style={{textAlign:"center"}}>
                  <div style={{fontSize:24,fontWeight:900,color:C.ok}}>
                    {result.questions?.filter(q=>q.isCorrect===true).length||0}
                  </div>
                  <div style={{fontSize:11,color:C.muted}}>正确</div>
                </div>
                <div style={{textAlign:"center"}}>
                  <div style={{fontSize:24,fontWeight:900,color:C.red}}>
                    {result.questions?.filter(q=>q.isCorrect===false).length||0}
                  </div>
                  <div style={{fontSize:11,color:C.muted}}>错误</div>
                </div>
              </div>
            </div>
          </div>

          {/* 提示 */}
          <div style={{fontSize:13,color:C.muted,marginBottom:10}}>
            💡 点击 ✅/❌/❓ 可手动修改判定结果
          </div>

          {/* 题目列表 */}
          {result.questions?.map((q,i)=>(
            <div key={i} style={{padding:14,borderRadius:12,background:C.s1,
              border:`1px solid ${correctColor(q.isCorrect)}33`,marginBottom:8}}>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:6}}>
                <div style={{flex:1}}>
                  <span style={{fontSize:14,fontWeight:800,color:C.dim,marginRight:8}}>第{q.index}题</span>
                  <span style={{fontSize:13,padding:"2px 8px",borderRadius:6,
                    background:C.sta+"18",color:C.sta,fontWeight:600}}>{q.topic}</span>
                  {q.difficulty&&(
                    <span style={{fontSize:12,color:C.muted,marginLeft:6}}>
                      难度{"⭐".repeat(Math.min(q.difficulty,5))}
                    </span>
                  )}
                </div>
                <button onClick={()=>toggleCorrect(i)}
                  style={{fontSize:22,cursor:"pointer",background:"none",border:"none",
                    padding:"2px 8px",borderRadius:6}}>
                  {correctIcon(q.isCorrect)}
                </button>
              </div>
              <div style={{fontSize:14,color:C.text,lineHeight:1.7,marginBottom:6}}>{q.content}</div>
              {q.studentAnswer&&(
                <div style={{fontSize:13,color:q.isCorrect===false?C.red:C.muted}}>
                  学生答案：{q.studentAnswer}
                </div>
              )}
              {q.correctAnswer&&(
                <div style={{fontSize:13,color:C.ok}}>正确答案：{q.correctAnswer}</div>
              )}
              {q.analysis&&(
                <div style={{fontSize:13,color:C.muted,marginTop:4,fontStyle:"italic"}}>
                  💡 {q.analysis}
                </div>
              )}
            </div>
          ))}

          {/* 操作按钮 */}
          <div style={{display:"flex",gap:8,marginTop:16}}>
            <button onClick={saveResults} disabled={loading}
              style={{flex:1,padding:"12px 0",borderRadius:12,cursor:"pointer",
                background:loading?"#555":"linear-gradient(135deg,#f5a623,#f04f70)",
                color:"white",border:"none",fontSize:16,fontWeight:800}}>
              {loading?"⏳ 保存中...":"💾 确认保存（错题自动录入）"}
            </button>
            <button onClick={reset}
              style={{padding:"12px 20px",borderRadius:12,cursor:"pointer",
                background:C.s2,color:C.muted,border:`1px solid ${C.border}`,fontSize:14}}>
              重新识别
            </button>
          </div>

          {saveMsg&&(
            <div style={{marginTop:12,padding:12,borderRadius:10,textAlign:"center",fontSize:14,fontWeight:600,
              background:saveMsg.startsWith("✅")?C.ok+"15":C.red+"15",
              color:saveMsg.startsWith("✅")?C.ok:C.red}}>
              {saveMsg}
            </div>
          )}
        </div>
      )}

      {/* M1 拍题搜题模式 */}
      {mode==="search"&&(
        <div>
          <div style={{padding:30,borderRadius:16,textAlign:"center",
            background:C.s1,border:`2px dashed ${C.border}`,marginBottom:12,cursor:"pointer",
            position:"relative"}}
            onClick={()=>document.getElementById("search-file-input")?.click()}>
            <input id="search-file-input" type="file" accept="image/*" capture="environment"
              onChange={handleSearchFile} style={{display:"none"}}/>
            {searchPreview?(
              <img src={searchPreview} alt="预览" style={{maxWidth:"100%",maxHeight:260,borderRadius:12}}/>
            ):(
              <div>
                <div style={{fontSize:42,marginBottom:8}}>🔍</div>
                <div style={{fontSize:15,fontWeight:700,color:C.text,marginBottom:4}}>拍照搜题</div>
                <div style={{fontSize:13,color:C.muted}}>拍下题目 → AI 自动解题 + 知识点 + 变形题</div>
              </div>
            )}
          </div>
          <div style={{marginBottom:12}}>
            <textarea value={searchText} onChange={e=>setSearchText(e.target.value)}
              placeholder="或直接输入题目文字（支持图片+文字混合）"
              style={{width:"100%",minHeight:80,padding:"10px 12px",borderRadius:10,resize:"vertical",
                background:C.s1,color:C.text,border:`1px solid ${C.border}`,fontSize:14,boxSizing:"border-box"}}/>
          </div>
          <button onClick={doSearch} disabled={loading}
            style={{width:"100%",padding:"12px 0",borderRadius:12,cursor:"pointer",
              background:loading?"#555":"linear-gradient(135deg,#f472b6,#a78bfa)",
              color:"white",border:"none",fontSize:16,fontWeight:800}}>
            {loading?"⏳ AI 解题中...":"🔍 搜题解答"}
          </button>
        </div>
      )}

      {/* M1 搜题结果 */}
      {mode==="search_result"&&searchResult&&(
        <div>
          <div style={{display:"flex",gap:8,marginBottom:16}}>
            <button onClick={()=>{setMode("search");setSearchResult(null);setVariants(null);setSearchFile(null);setSearchPreview(null);setSearchText("");}}
              style={{padding:"8px 16px",borderRadius:8,cursor:"pointer",
                background:C.s2,color:C.muted,border:`1px solid ${C.border}`,fontSize:14}}>
              ← 重新搜题
            </button>
            <div style={{fontSize:13,color:C.muted,alignSelf:"center"}}>
              📚 知识点：<b style={{color:"#f472b6"}}>{searchResult.topic||"—"}</b>
              &nbsp;&nbsp;难度：{"⭐".repeat(searchResult.difficulty||3)}
            </div>
          </div>

          {/* 题目 */}
          {searchResult.question&&(
            <div style={{padding:14,borderRadius:12,background:C.s1,border:`1px solid ${C.border}`,marginBottom:12}}>
              <div style={{fontSize:13,color:C.muted,marginBottom:6}}>📋 题目</div>
              <div style={{fontSize:15,color:C.text,lineHeight:1.7}}>{searchResult.question}</div>
            </div>
          )}

          {/* 解题步骤 */}
          {searchResult.steps?.length>0&&(
            <div style={{padding:14,borderRadius:12,background:"#1a2744",border:`1px solid ${C.alg}33`,marginBottom:12}}>
              <div style={{fontSize:13,color:C.alg,fontWeight:700,marginBottom:8}}>📐 解题步骤</div>
              {searchResult.steps.map((s,i)=>(
                <div key={i} style={{fontSize:14,color:C.text,lineHeight:1.8,marginBottom:4}}>
                  <b style={{color:C.alg}}>{i+1}.</b> {s}
                </div>
              ))}
              <div style={{marginTop:10,padding:"8px 12px",borderRadius:8,background:C.ok+"15",
                border:`1px solid ${C.ok}33`,fontSize:15,fontWeight:800,color:C.ok}}>
                答案：{searchResult.answer}
              </div>
            </div>
          )}

          {/* 核心方法 + 常见错误 */}
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10,marginBottom:12}}>
            {searchResult.keyMethod&&(
              <div style={{padding:12,borderRadius:10,background:C.s1,border:`1px solid ${C.sta}33`}}>
                <div style={{fontSize:12,color:C.sta,fontWeight:700,marginBottom:4}}>💡 核心方法</div>
                <div style={{fontSize:13,color:C.text}}>{searchResult.keyMethod}</div>
              </div>
            )}
            {searchResult.commonErrors&&(
              <div style={{padding:12,borderRadius:10,background:C.s1,border:`1px solid ${C.red}33`}}>
                <div style={{fontSize:12,color:C.red,fontWeight:700,marginBottom:4}}>⚠️ 常见错误</div>
                <div style={{fontSize:13,color:C.text}}>{searchResult.commonErrors}</div>
              </div>
            )}
          </div>

          {/* M2 生成变形题按钮 */}
          {!variants&&(
            <button onClick={()=>doVariant(searchResult.question,searchResult.topic)}
              disabled={variantLoading}
              style={{width:"100%",padding:"10px 0",borderRadius:12,cursor:"pointer",marginBottom:12,
                background:variantLoading?"#555":"linear-gradient(135deg,#a78bfa,#f472b6)",
                color:"white",border:"none",fontSize:15,fontWeight:700}}>
              {variantLoading?"⏳ 生成中...":"🔄 生成 3 道变形题"}
            </button>
          )}

          {/* M2 变形题列表 */}
          {variants&&variants.length>0&&(
            <div style={{marginBottom:12}}>
              <div style={{fontSize:15,fontWeight:800,color:"#a78bfa",marginBottom:10}}>🔄 变形题练习</div>
              {variants.map((v,i)=>{
                const [showAns,setShowAns]=React.useState?.[i]||React.useState(false);
                return (
                  <VariantCard key={i} v={v} idx={i}/>
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* 使用说明 */}
      {mode!=="result"&&mode!=="search_result"&&(
        <div style={{marginTop:20,padding:16,borderRadius:12,background:C.s1,border:`1px solid ${C.border}`}}>
          <div style={{fontWeight:700,color:C.text,marginBottom:8}}>📖 使用说明</div>
          <div style={{fontSize:14,color:C.muted,lineHeight:2}}>
            {mode==="search"?(
              <>1. 拍照/截图上传题目，或直接输入题目文字<br/>
              2. AI 自动解题，给出详细步骤和答案<br/>
              3. 识别题目知识点，方便对应复习<br/>
              4. 一键生成同类型变形题，强化训练</>
            ):(
              <>1. 拍照上传作业或试卷照片（清晰平整效果更好）<br/>
              2. AI 自动识别题目并匹配知识点<br/>
              3. 检查识别结果，点击 ✅/❌ 手动修正判定<br/>
              4. 确认保存，错题自动录入错题本<br/>
              5. 也可用文字模式直接粘贴题目</>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

function VariantCard({v,idx}) {
  const [showAns,setShowAns]=useState(false);
  return (
    <div style={{padding:14,borderRadius:12,background:C.s1,border:`1px solid ${"#a78bfa"}33`,marginBottom:10}}>
      <div style={{fontSize:13,color:"#a78bfa",fontWeight:700,marginBottom:6}}>变形题 {idx+1}
        {v.diff&&<span style={{marginLeft:8,color:C.muted}}>{"⭐".repeat(v.diff)}</span>}
      </div>
      <div style={{fontSize:14,color:C.text,lineHeight:1.7,marginBottom:8}}>{v.content}</div>
      {v.hint&&<div style={{fontSize:13,color:C.muted,marginBottom:8}}>💡 思路：{v.hint}</div>}
      <button onClick={()=>setShowAns(!showAns)}
        style={{padding:"6px 14px",borderRadius:8,cursor:"pointer",fontSize:13,fontWeight:700,
          background:showAns?"#a78bfa22":C.s2,color:showAns?"#a78bfa":C.muted,
          border:`1px solid ${"#a78bfa"}${showAns?"55":"22"}`}}>
        {showAns?"隐藏答案":"查看答案"}
      </button>
      {showAns&&<div style={{marginTop:8,padding:"8px 12px",borderRadius:8,
        background:C.ok+"15",color:C.ok,fontSize:14,fontWeight:700}}>
        答案：{v.answer}
      </div>}
    </div>
  );
}

/* ════════════════════════════════════════════════════════════
   🤖 PAGE: 学伴Agent — 个性化学习路径规划 (M4)
════════════════════════════════════════════════════════════ */
function PageAgent({onNav}) {
  const {isMobile}=useBP();
  const [plan,setPlan]=useState(null);
  const [loading,setLoading]=useState(false);
  const [minutes,setMinutes]=useState(45);
  const [examDate,setExamDate]=useState(()=>{
    try{return JSON.parse(localStorage.getItem("shumai_v7")||"{}").examDate||"";}catch{return "";}
  });

  const API=window.__SHUMAI_API||"";
  const token=window.__SHUMAI_TOKEN||"";

  const TYPE_META={
    review:   {icon:"🔄",color:"#f472b6",label:"错题复练"},
    newLearn: {icon:"📚",color:C.alg,    label:"学新内容"},
    practice: {icon:"✏️",color:C.geo,    label:"刷题训练"},
    challenge:{icon:"⚡",color:C.sta,    label:"压轴挑战"},
  };
  const PRIORITY_COLOR={high:C.red,medium:C.sta,low:C.muted};

  const generate=async()=>{
    if(!token){alert("请先登录后使用学伴Agent");return;}
    setLoading(true);setPlan(null);
    try{
      const r=await fetch(`${API}/api/ai/learning-path`,{
        method:"POST",
        headers:{"Content-Type":"application/json","Authorization":`Bearer ${token}`},
        body:JSON.stringify({examDate:examDate||null,todayMinutes:minutes})
      });
      if(!r.ok){const e=await r.json().catch(()=>({}));throw new Error(e.error||"生成失败");}
      const data=await r.json();
      setPlan(data);
    }catch(e){alert("❌ "+e.message);}
    setLoading(false);
  };

  const stepNav=(step)=>{
    const typeToNav={review:"wrong",practice:"practice",newLearn:"modules",challenge:"practice"};
    const v=typeToNav[step.type]||"home";
    onNav(v);
  };

  return(
    <div style={{padding:isMobile?16:22,maxWidth:720}}>
      <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:20}}>
        <button onClick={()=>onNav("home")}
          style={{padding:"6px 14px",borderRadius:8,cursor:"pointer",
            background:C.s2,color:C.text,border:`1px solid ${C.border}`,fontSize:14}}>
          ← 返回
        </button>
        <h2 style={{fontSize:22,fontWeight:900,color:C.text,margin:0}}>🤖 学伴Agent · 个性化学习规划</h2>
      </div>

      {/* 参数设置 */}
      <div style={{padding:16,borderRadius:12,background:C.s1,border:`1px solid ${C.border}`,marginBottom:16}}>
        <div style={{fontWeight:700,color:C.text,marginBottom:12,fontSize:15}}>📋 生成参数</div>
        <div style={{display:"grid",gridTemplateColumns:isMobile?"1fr":"1fr 1fr",gap:12}}>
          <div>
            <div style={{fontSize:13,color:C.muted,marginBottom:6}}>今日可用时间（分钟）</div>
            <div style={{display:"flex",gap:6,flexWrap:"wrap"}}>
              {[20,30,45,60,90].map(m=>(
                <button key={m} onClick={()=>setMinutes(m)}
                  style={{padding:"6px 14px",borderRadius:8,cursor:"pointer",fontSize:14,fontWeight:700,
                    background:minutes===m?C.alg+"22":C.s2,
                    color:minutes===m?C.alg:C.muted,
                    border:`1px solid ${minutes===m?C.alg+"55":C.border}`}}>
                  {m}分
                </button>
              ))}
            </div>
          </div>
          <div>
            <div style={{fontSize:13,color:C.muted,marginBottom:6}}>中考日期（选填）</div>
            <input type="date" value={examDate} onChange={e=>setExamDate(e.target.value)}
              style={{padding:"8px 12px",borderRadius:8,fontSize:14,
                background:C.s2,border:`1px solid ${C.border}`,color:C.text,outline:"none"}}/>
          </div>
        </div>
        <button onClick={generate} disabled={loading}
          style={{marginTop:14,width:"100%",padding:"12px 0",borderRadius:12,cursor:"pointer",
            background:loading?"#555":"linear-gradient(135deg,#a78bfa,#3a9eff)",
            color:"white",border:"none",fontSize:16,fontWeight:800}}>
          {loading?"⏳ AI 规划中...":"✨ 生成今日学习计划"}
        </button>
      </div>

      {/* 学习计划结果 */}
      {plan&&(
        <div>
          {/* 问候 + 数据快览 */}
          <div style={{padding:16,borderRadius:12,marginBottom:14,
            background:"linear-gradient(135deg,#a78bfa12,#3a9eff08)",
            border:"1px solid #a78bfa33"}}>
            <div style={{fontSize:16,fontWeight:800,color:"#a78bfa",marginBottom:8}}>
              👋 {plan.greeting}
            </div>
            {plan.profile&&(
              <div style={{display:"flex",gap:16,flexWrap:"wrap"}}>
                {[
                  {label:"已掌握",val:plan.profile.masteredCount+"个",c:C.ok},
                  {label:"待补漏",val:plan.profile.weakCount+"个",c:C.red},
                  {label:"错题",val:plan.profile.wrongCount+"道",c:"#f472b6"},
                  {label:"连续打卡",val:plan.profile.streakDays+"天",c:C.sta},
                ].map((s,i)=>(
                  <div key={i} style={{textAlign:"center"}}>
                    <div style={{fontSize:20,fontWeight:900,color:s.c}}>{s.val}</div>
                    <div style={{fontSize:12,color:C.muted}}>{s.label}</div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* 今日计划步骤 */}
          <div style={{fontWeight:800,fontSize:16,color:C.text,marginBottom:10}}>
            📅 今日计划（{minutes}分钟）
          </div>
          {(plan.todayPlan||[]).map((step,i)=>{
            const meta=TYPE_META[step.type]||{icon:"📌",color:C.muted,label:step.type};
            return(
              <div key={i} style={{padding:14,borderRadius:12,marginBottom:10,
                background:C.s1,border:`1px solid ${meta.color}33`,
                borderLeft:`4px solid ${meta.color}`}}>
                <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:6,flexWrap:"wrap"}}>
                  <span style={{fontSize:22}}>{meta.icon}</span>
                  <span style={{fontWeight:800,fontSize:15,color:meta.color}}>{step.title}</span>
                  <span style={{fontSize:12,padding:"2px 8px",borderRadius:10,
                    background:meta.color+"18",color:meta.color,border:`1px solid ${meta.color}33`}}>
                    {meta.label}
                  </span>
                  <span style={{fontSize:12,padding:"2px 8px",borderRadius:10,
                    background:PRIORITY_COLOR[step.priority]+"15",
                    color:PRIORITY_COLOR[step.priority]}}>
                    {step.priority==="high"?"🔴 优先":step.priority==="medium"?"🟡 次要":"🟢 选做"}
                  </span>
                  <span style={{marginLeft:"auto",fontSize:13,color:C.muted}}>
                    ⏱ {step.minutes}分钟
                  </span>
                </div>
                <div style={{fontSize:14,color:C.text,marginBottom:4}}>{step.desc}</div>
                {step.reason&&(
                  <div style={{fontSize:12,color:C.muted,marginBottom:8}}>
                    💡 {step.reason}
                  </div>
                )}
                <button onClick={()=>stepNav(step)}
                  style={{padding:"5px 14px",borderRadius:8,cursor:"pointer",fontSize:13,fontWeight:700,
                    background:meta.color+"22",color:meta.color,
                    border:`1px solid ${meta.color}44`}}>
                  开始 →
                </button>
              </div>
            );
          })}

          {/* 今日焦点 + 激励 + 周目标 */}
          <div style={{display:"grid",gridTemplateColumns:isMobile?"1fr":"1fr 1fr",gap:10,marginTop:4}}>
            <div style={{padding:12,borderRadius:10,background:C.s1,border:`1px solid ${C.alg}33`}}>
              <div style={{fontSize:12,color:C.alg,fontWeight:700,marginBottom:4}}>🎯 今日重点</div>
              <div style={{fontSize:15,fontWeight:700,color:C.text}}>{plan.focusTopic||"—"}</div>
            </div>
            <div style={{padding:12,borderRadius:10,background:C.s1,border:`1px solid ${C.geo}33`}}>
              <div style={{fontSize:12,color:C.geo,fontWeight:700,marginBottom:4}}>📆 本周目标</div>
              <div style={{fontSize:14,color:C.text}}>{plan.weeklyGoal||"—"}</div>
            </div>
          </div>
          {plan.motiveTip&&(
            <div style={{marginTop:10,padding:"10px 16px",borderRadius:10,textAlign:"center",
              background:"#a78bfa0d",border:"1px solid #a78bfa22",
              fontSize:15,fontWeight:700,color:"#a78bfa"}}>
              "{plan.motiveTip}"
            </div>
          )}

          {/* 重新生成 */}
          <button onClick={generate} disabled={loading}
            style={{marginTop:16,width:"100%",padding:"10px 0",borderRadius:12,cursor:"pointer",
              background:C.s2,color:C.muted,border:`1px solid ${C.border}`,fontSize:14}}>
            🔄 重新规划
          </button>
        </div>
      )}

      {/* 未登录提示 */}
      {!token&&!loading&&!plan&&(
        <div style={{padding:40,borderRadius:16,textAlign:"center",
          background:C.s1,border:`1px solid ${C.border}`}}>
          <div style={{fontSize:40,marginBottom:12}}>🤖</div>
          <div style={{fontSize:17,fontWeight:700,color:C.text,marginBottom:8}}>
            学伴Agent需要登录后使用
          </div>
          <div style={{fontSize:14,color:C.muted,marginBottom:16}}>
            登录后AI会读取你的真实学情数据，生成专属学习计划
          </div>
          <button onClick={()=>onNav("vip")}
            style={{padding:"10px 28px",borderRadius:12,cursor:"pointer",fontSize:15,fontWeight:800,
              background:"linear-gradient(135deg,#a78bfa,#3a9eff)",color:"white",border:"none"}}>
            去登录 / 注册
          </button>
        </div>
      )}
    </div>
  );
}

/* ════════════════════════════════════════════════════════════
   💎 PAGE: 会员中心 — 套餐对比 / 开通 / 使用量
════════════════════════════════════════════════════════════ */
function PageVIP({onNav}) {
  const {isMobile}=useBP();
  const [plans,setPlans]=useState(null);
  const [status,setStatus]=useState(null);
  const [usage,setUsage]=useState(null);
  const [loading,setLoading]=useState(false);
  const [msg,setMsg]=useState("");
  const [months,setMonths]=useState(1);

  const API=window.__SHUMAI_API||"";
  const token=window.__SHUMAI_TOKEN||"";
  const headers={"Content-Type":"application/json","Authorization":`Bearer ${token}`};

  const api=async(method,path,body)=>{
    const opts={method,headers};
    if(body) opts.body=JSON.stringify(body);
    const r=await fetch(`${API}/api/subscription${path}`,opts);
    if(!r.ok){const e=await r.json().catch(()=>({}));throw new Error(e.error||r.statusText);}
    return r.json();
  };

  const load=async()=>{
    setLoading(true);
    try{
      const [p,s,u]=await Promise.all([
        api("GET","/plans"),
        api("GET","/status"),
        api("GET","/usage"),
      ]);
      setPlans(p);setStatus(s);setUsage(u);
    }catch(e){setMsg("❌ "+e.message);}
    setLoading(false);
  };

  useEffect(()=>{load();},[]);

  const activate=async(plan)=>{
    setLoading(true);
    try{
      const data=await api("POST","/activate",{plan,months});
      setMsg(data.message);
      load();
      setTimeout(()=>setMsg(""),3000);
    }catch(e){setMsg("❌ "+e.message);}
    setLoading(false);
  };

  const planColors={free:C.muted,vip:C.gold,pro:"#a78bfa"};
  const planIcons={free:"🆓",vip:"💎",pro:"👑"};

  return (
    <div style={{padding:isMobile?16:22,maxWidth:900}}>
      <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:20}}>
        <button onClick={()=>onNav("home")}
          style={{padding:"6px 14px",borderRadius:8,cursor:"pointer",
            background:C.s2,color:C.text,border:`1px solid ${C.border}`,fontSize:14}}>
          ← 返回
        </button>
        <h2 style={{fontSize:22,fontWeight:900,color:C.text,margin:0}}>💎 会员中心</h2>
        {msg&&<span style={{fontSize:13,color:msg.startsWith("✅")||msg.startsWith("已")?C.ok:C.red,fontWeight:600,marginLeft:8}}>{msg}</span>}
      </div>

      {loading&&<div style={{textAlign:"center",padding:40,color:C.muted}}>⏳ 加载中...</div>}

      {/* 当前状态 */}
      {status&&!loading&&(
        <div style={{padding:16,borderRadius:12,marginBottom:16,
          background:`linear-gradient(135deg,${planColors[status.plan]}10,${planColors[status.plan]}05)`,
          border:`1px solid ${planColors[status.plan]}44`}}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
            <div>
              <span style={{fontSize:28}}>{planIcons[status.plan]}</span>
              <span style={{fontSize:20,fontWeight:900,color:planColors[status.plan],marginLeft:8}}>
                {status.name}
              </span>
            </div>
            {status.expiresAt&&(
              <div style={{fontSize:13,color:C.muted}}>
                到期：{new Date(status.expiresAt).toLocaleDateString("zh-CN")}
              </div>
            )}
          </div>
          {usage&&(
            <div style={{display:"flex",gap:16,marginTop:10}}>
              <span style={{fontSize:13,color:C.muted}}>
                今日AI调用：<b style={{color:usage.todayAiCalls>=status.features?.dailyAiCalls?C.red:C.text}}>
                  {usage.todayAiCalls}/{status.features?.dailyAiCalls||"∞"}
                </b>
              </span>
              <span style={{fontSize:13,color:C.muted}}>
                今日OCR：<b style={{color:C.text}}>{usage.todayOcrCalls}/{status.features?.ocrDaily||"∞"}</b>
              </span>
            </div>
          )}
        </div>
      )}

      {/* 时长选择 */}
      <div style={{display:"flex",gap:8,marginBottom:16,justifyContent:"center"}}>
        {[{m:1,label:"1个月",discount:""},{m:3,label:"3个月",discount:"9折"},
          {m:6,label:"6个月",discount:"8折"},{m:12,label:"12个月",discount:"7折"}].map(opt=>(
          <button key={opt.m} onClick={()=>setMonths(opt.m)}
            style={{padding:"8px 16px",borderRadius:10,cursor:"pointer",fontSize:14,
              fontWeight:months===opt.m?800:400,
              background:months===opt.m?C.gold+"20":C.s2,
              color:months===opt.m?C.gold:C.muted,
              border:`1px solid ${months===opt.m?C.gold+"55":C.border}`}}>
            {opt.label}
            {opt.discount&&<div style={{fontSize:10,color:C.red}}>{opt.discount}</div>}
          </button>
        ))}
      </div>

      {/* 套餐对比 */}
      {plans&&!loading&&(
        <div style={{display:"grid",gridTemplateColumns:isMobile?"1fr":"repeat(3,1fr)",gap:12}}>
          {Object.entries(plans).map(([key,plan])=>{
            const isCurrent=status?.plan===key;
            const color=planColors[key];
            const discount=months>=12?0.7:months>=6?0.8:months>=3?0.9:1;
            const totalPrice=Math.round(plan.price*months*discount*100)/100;
            return (
              <div key={key} style={{padding:20,borderRadius:16,
                background:isCurrent?color+"08":C.s1,
                border:`2px solid ${isCurrent?color:C.border}`,
                position:"relative"}}>
                {isCurrent&&(
                  <div style={{position:"absolute",top:-10,right:16,padding:"2px 12px",borderRadius:8,
                    background:color,color:"white",fontSize:12,fontWeight:700}}>当前</div>
                )}
                <div style={{textAlign:"center",marginBottom:16}}>
                  <div style={{fontSize:36}}>{planIcons[key]}</div>
                  <div style={{fontSize:20,fontWeight:900,color}}>{plan.name}</div>
                  {plan.price>0?(
                    <div style={{marginTop:6}}>
                      <span style={{fontSize:28,fontWeight:900,color}}>¥{totalPrice}</span>
                      <span style={{fontSize:14,color:C.muted}}>/{months}个月</span>
                      {months>1&&<div style={{fontSize:12,color:C.muted}}>约¥{Math.round(totalPrice/months*10)/10}/月</div>}
                    </div>
                  ):(
                    <div style={{fontSize:28,fontWeight:900,color:C.muted,marginTop:6}}>免费</div>
                  )}
                </div>
                {/* 功能列表 */}
                <div style={{fontSize:13,lineHeight:2.2}}>
                  {[
                    {k:"dailyAiCalls",label:"AI对话"},
                    {k:"examQsAccess",label:"真题访问"},
                    {k:"ocrDaily",label:"每日OCR"},
                    {k:"wrongBookLimit",label:"错题本"},
                    {k:"paperAnalysis",label:"试卷分析",bool:true},
                    {k:"mockPaper",label:"模拟卷",bool:true},
                    {k:"sprintMode",label:"冲刺模式",bool:true},
                    {k:"voiceExplain",label:"语音讲解",bool:true},
                  ].map(f=>{
                    const v=plan.features[f.k];
                    const has=f.bool?v===true:v>0;
                    return (
                      <div key={f.k} style={{display:"flex",justifyContent:"space-between",
                        color:has?C.text:C.dim}}>
                        <span>{has?"✅":"❌"} {f.label}</span>
                        <span style={{fontWeight:600}}>
                          {f.bool?(has?"有":"无"):(v>=999?"无限":v+"/天")}
                        </span>
                      </div>
                    );
                  })}
                </div>
                {/* 操作按钮 */}
                {key!=="free"&&!isCurrent&&(
                  <button onClick={()=>activate(key)}
                    style={{width:"100%",padding:"10px 0",borderRadius:10,cursor:"pointer",marginTop:14,
                      fontSize:15,fontWeight:800,border:"none",
                      background:`linear-gradient(135deg,${color},${color}cc)`,color:"white"}}>
                    立即开通
                  </button>
                )}
                {isCurrent&&key!=="free"&&(
                  <button onClick={()=>activate(key)}
                    style={{width:"100%",padding:"10px 0",borderRadius:10,cursor:"pointer",marginTop:14,
                      fontSize:15,fontWeight:700,background:C.s2,color,
                      border:`1px solid ${color}44`}}>
                    续费
                  </button>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* 说明 */}
      <div style={{marginTop:20,padding:14,borderRadius:10,background:C.s1,border:`1px solid ${C.border}`,fontSize:13,color:C.muted,lineHeight:1.8}}>
        ⚠️ 当前为内测阶段，支付功能开发中。如需开通会员请联系管理员。<br/>
        所有套餐均支持随时升级，剩余时间自动折算。
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════════════════
   👨‍👩‍👦 PAGE: 家长端 — 绑定孩子 / 每日摘要 / 周报 / 成绩曲线
════════════════════════════════════════════════════════════ */
function PageParent({onNav}) {
  const {isMobile}=useBP();
  const [children,setChildren]=useState([]);
  const [selectedChild,setSelectedChild]=useState(null);
  const [daily,setDaily]=useState(null);
  const [weekly,setWeekly]=useState(null);
  const [loading,setLoading]=useState(false);
  const [msg,setMsg]=useState("");
  const [bindPhone,setBindPhone]=useState("");

  const API=window.__SHUMAI_API||"";
  const token=window.__SHUMAI_TOKEN||"";
  const headers={"Content-Type":"application/json","Authorization":`Bearer ${token}`};

  const api=async(method,path,body)=>{
    const opts={method,headers};
    if(body) opts.body=JSON.stringify(body);
    const r=await fetch(`${API}/api/parent${path}`,opts);
    if(!r.ok){const e=await r.json().catch(()=>({}));throw new Error(e.error||r.statusText);}
    return r.json();
  };

  const loadChildren=async()=>{
    setLoading(true);
    try{setChildren(await api("GET","/children"));}
    catch(e){setMsg("❌ "+e.message);}
    setLoading(false);
  };

  useEffect(()=>{loadChildren();},[]);

  const bindChild=async()=>{
    if(!bindPhone.trim()) return;
    try{
      const data=await api("POST","/bind",{phone:bindPhone});
      setMsg(`✅ 已绑定 ${data.student.nickname}`);
      setBindPhone("");
      loadChildren();
      setTimeout(()=>setMsg(""),2000);
    }catch(e){setMsg("❌ "+e.message);}
  };

  const selectChild=async(child)=>{
    setSelectedChild(child);
    setLoading(true);
    try{
      const [d,w]=await Promise.all([
        api("GET",`/daily/${child.id}`),
        api("GET",`/weekly/${child.id}`),
      ]);
      setDaily(d);setWeekly(w);
    }catch(e){setMsg("❌ "+e.message);}
    setLoading(false);
  };

  return (
    <div style={{padding:isMobile?16:22,maxWidth:800}}>
      <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:20}}>
        <button onClick={()=>onNav("home")}
          style={{padding:"6px 14px",borderRadius:8,cursor:"pointer",
            background:C.s2,color:C.text,border:`1px solid ${C.border}`,fontSize:14}}>
          ← 返回
        </button>
        <h2 style={{fontSize:22,fontWeight:900,color:C.text,margin:0}}>👨‍👩‍👦 家长看板</h2>
        {msg&&<span style={{fontSize:13,color:msg.startsWith("✅")?C.ok:C.red,fontWeight:600,marginLeft:8}}>{msg}</span>}
      </div>

      {/* 绑定孩子 */}
      <div style={{padding:16,borderRadius:12,background:C.s1,border:`1px solid ${C.border}`,marginBottom:16}}>
        <div style={{fontWeight:700,color:C.text,marginBottom:10}}>🔗 绑定孩子</div>
        <div style={{display:"flex",gap:8}}>
          <input value={bindPhone} onChange={e=>setBindPhone(e.target.value)}
            placeholder="输入孩子注册手机号"
            style={{flex:1,padding:"8px 14px",borderRadius:8,fontSize:14,
              background:C.s2,border:`1px solid ${C.border}`,color:C.text,outline:"none"}}/>
          <button onClick={bindChild}
            style={{padding:"8px 20px",borderRadius:8,cursor:"pointer",fontSize:14,fontWeight:700,
              background:C.geo,color:"white",border:"none"}}>
            绑定
          </button>
        </div>
      </div>

      {/* 孩子列表 */}
      {children.length===0&&!loading&&(
        <div style={{textAlign:"center",padding:40,color:C.muted}}>
          暂未绑定孩子，请输入孩子的注册手机号进行绑定
        </div>
      )}

      {children.map(child=>(
        <div key={child.id} onClick={()=>selectChild(child)}
          style={{padding:16,borderRadius:12,background:C.s1,
            border:`1px solid ${selectedChild?.id===child.id?C.geo+"55":C.border}`,
            marginBottom:10,cursor:"pointer"}}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
            <div>
              <span style={{fontSize:18,fontWeight:800,color:C.text}}>{child.nickname}</span>
              <span style={{fontSize:13,color:C.muted,marginLeft:8}}>{child.grade}年级</span>
            </div>
            <div style={{display:"flex",gap:12}}>
              <div style={{textAlign:"center"}}>
                <div style={{fontSize:20,fontWeight:900,color:C.ok}}>{child.mastered}</div>
                <div style={{fontSize:10,color:C.muted}}>掌握</div>
              </div>
              <div style={{textAlign:"center"}}>
                <div style={{fontSize:20,fontWeight:900,color:parseInt(child.wrong_pending)>5?C.red:C.sta}}>
                  {child.wrong_pending}
                </div>
                <div style={{fontSize:10,color:C.muted}}>错题</div>
              </div>
              <div style={{textAlign:"center"}}>
                <div style={{fontSize:20,fontWeight:900,color:C.sta}}>{child.checkin_days}</div>
                <div style={{fontSize:10,color:C.muted}}>打卡天</div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* 详情面板 */}
      {selectedChild&&!loading&&(
        <div style={{marginTop:16}}>
          {/* 今日学情 */}
          {daily&&(
            <div style={{padding:16,borderRadius:12,background:C.s1,border:`1px solid ${C.alg}33`,marginBottom:12}}>
              <div style={{fontWeight:700,color:C.alg,marginBottom:10}}>📅 今日学情</div>
              <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:10}}>
                <div style={{textAlign:"center",padding:10,borderRadius:8,background:C.s2}}>
                  <div style={{fontSize:24,color:daily.checkedIn?C.ok:C.red}}>
                    {daily.checkedIn?"✅":"❌"}
                  </div>
                  <div style={{fontSize:12,color:C.muted}}>今日打卡</div>
                </div>
                <div style={{textAlign:"center",padding:10,borderRadius:8,background:C.s2}}>
                  <div style={{fontSize:24,fontWeight:900,color:C.sta}}>
                    {daily.todayTask?`${JSON.parse(daily.todayTask.task_data||"{}").newCount||0}题`:"—"}
                  </div>
                  <div style={{fontSize:12,color:C.muted}}>今日任务</div>
                </div>
                <div style={{textAlign:"center",padding:10,borderRadius:8,background:C.s2}}>
                  <div style={{fontSize:24,fontWeight:900,color:parseInt(daily.wrongPending)>5?C.red:C.muted}}>
                    {daily.wrongPending}
                  </div>
                  <div style={{fontSize:12,color:C.muted}}>待解错题</div>
                </div>
              </div>
            </div>
          )}

          {/* 周报 */}
          {weekly&&(
            <div style={{padding:16,borderRadius:12,background:C.s1,border:`1px solid ${C.geo}33`,marginBottom:12}}>
              <div style={{fontWeight:700,color:C.geo,marginBottom:10}}>📊 本周学习周报</div>
              <div style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:10,marginBottom:12}}>
                <div style={{padding:12,borderRadius:8,background:C.s2,textAlign:"center"}}>
                  <div style={{fontSize:28,fontWeight:900,color:C.ok}}>+{weekly.weekNewMastered}</div>
                  <div style={{fontSize:12,color:C.muted}}>本周新掌握</div>
                </div>
                <div style={{padding:12,borderRadius:8,background:C.s2,textAlign:"center"}}>
                  <div style={{fontSize:28,fontWeight:900,color:C.sta}}>{weekly.weekWrongResolved}</div>
                  <div style={{fontSize:12,color:C.muted}}>解决错题</div>
                </div>
              </div>

              {/* 打卡日历 */}
              <div style={{marginBottom:10}}>
                <div style={{fontSize:13,color:C.muted,marginBottom:6}}>📅 本周打卡</div>
                <div style={{display:"flex",gap:4}}>
                  {["一","二","三","四","五","六","日"].map((d,i)=>{
                    const now=new Date();
                    const dayOfWeek=now.getDay()||7;
                    const date=new Date(now);
                    date.setDate(now.getDate()-(dayOfWeek-1)+i);
                    const dateStr=date.toISOString().split("T")[0];
                    const checked=weekly.weekCheckins?.some(c=>(typeof c==="string"?c:new Date(c).toISOString()).startsWith(dateStr));
                    return (
                      <div key={i} style={{flex:1,textAlign:"center",padding:"6px 0",borderRadius:6,
                        background:checked?C.ok+"20":C.s2,border:`1px solid ${checked?C.ok+"44":C.border}`}}>
                        <div style={{fontSize:11,color:C.muted}}>周{d}</div>
                        <div style={{fontSize:16,color:checked?C.ok:C.dim}}>{checked?"✓":"·"}</div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* 总进度条 */}
              <div>
                <div style={{display:"flex",justifyContent:"space-between",fontSize:13,color:C.muted,marginBottom:4}}>
                  <span>总进度</span>
                  <span>{weekly.totalMastered}/{weekly.totalTopics}个知识点</span>
                </div>
                <div style={{height:10,borderRadius:5,background:C.s3,overflow:"hidden"}}>
                  <div style={{height:"100%",borderRadius:5,
                    width:`${Math.round(weekly.totalMastered/weekly.totalTopics*100)}%`,
                    background:`linear-gradient(90deg,${C.alg},${C.geo})`}}/>
                </div>
                <div style={{textAlign:"right",fontSize:13,fontWeight:700,marginTop:4,
                  color:weekly.totalMastered>=150?C.ok:weekly.totalMastered>=100?C.sta:C.red}}>
                  {Math.round(weekly.totalMastered/weekly.totalTopics*100)}%
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {loading&&<div style={{textAlign:"center",padding:40,color:C.muted}}>⏳ 加载中...</div>}
    </div>
  );
}

/* ════════════════════════════════════════════════════════════
   🏫 PAGE: 教师端 — 班级管理 / 学情汇总 / 试卷生成 / AI周报
════════════════════════════════════════════════════════════ */
function PageTeacher({onNav}) {
  const {isMobile}=useBP();
  const [tab,setTab]=useState("classes"); // classes | students | report | paper
  const [classes,setClasses]=useState([]);
  const [selectedClass,setSelectedClass]=useState(null);
  const [students,setStudents]=useState([]);
  const [report,setReport]=useState(null);
  const [paper,setPaper]=useState("");
  const [aiReport,setAiReport]=useState("");
  const [loading,setLoading]=useState(false);
  const [msg,setMsg]=useState("");
  const [newClassName,setNewClassName]=useState("");
  const [newGrade,setNewGrade]=useState(9);
  const [paperDiff,setPaperDiff]=useState("中等");
  const [paperCount,setPaperCount]=useState(10);

  const API=window.__SHUMAI_API||"";
  const token=window.__SHUMAI_TOKEN||"";
  const headers={"Content-Type":"application/json","Authorization":`Bearer ${token}`};

  const api=async(method,path,body)=>{
    const opts={method,headers};
    if(body) opts.body=JSON.stringify(body);
    const r=await fetch(`${API}/api/teacher${path}`,opts);
    if(!r.ok){const e=await r.json().catch(()=>({}));throw new Error(e.error||r.statusText);}
    return r.json();
  };

  // 加载班级
  const loadClasses=async()=>{
    setLoading(true);
    try{setClasses(await api("GET","/classes"));}
    catch(e){setMsg("❌ "+e.message);}
    setLoading(false);
  };

  useEffect(()=>{loadClasses();},[]);

  // 创建班级
  const createClass=async()=>{
    if(!newClassName.trim()) return;
    try{
      await api("POST","/classes",{name:newClassName,grade:newGrade});
      setNewClassName("");
      setMsg("✅ 班级已创建");
      loadClasses();
      setTimeout(()=>setMsg(""),2000);
    }catch(e){setMsg("❌ "+e.message);}
  };

  // 删除班级
  const deleteClass=async(id)=>{
    if(!confirm("确认删除此班级？")) return;
    try{
      await api("DELETE",`/classes/${id}`);
      loadClasses();
      if(selectedClass?.id===id) setSelectedClass(null);
    }catch(e){setMsg("❌ "+e.message);}
  };

  // 选择班级 → 加载学生
  const selectClass=async(cls)=>{
    setSelectedClass(cls);
    setTab("students");
    setLoading(true);
    try{
      const [stu,rpt]=await Promise.all([
        api("GET",`/classes/${cls.id}/students`),
        api("GET",`/classes/${cls.id}/report`),
      ]);
      setStudents(stu);
      setReport(rpt);
    }catch(e){setMsg("❌ "+e.message);}
    setLoading(false);
  };

  // 移除学生
  const removeStudent=async(sid)=>{
    if(!selectedClass||!confirm("确认移除此学生？")) return;
    try{
      await api("DELETE",`/classes/${selectedClass.id}/students/${sid}`);
      selectClass(selectedClass);
    }catch(e){setMsg("❌ "+e.message);}
  };

  // AI 生成试卷
  const genPaper=async()=>{
    setLoading(true);setPaper("");
    try{
      const data=await api("POST","/generate-paper",{
        classId:selectedClass?.id,difficulty:paperDiff,questionCount:paperCount
      });
      setPaper(data.paper);
      setTab("paper");
    }catch(e){setMsg("❌ "+e.message);}
    setLoading(false);
  };

  // AI 周报
  const genAiReport=async()=>{
    if(!selectedClass) return;
    setLoading(true);setAiReport("");
    try{
      const data=await api("POST","/ai-report",{classId:selectedClass.id});
      setAiReport(data.report);
    }catch(e){setMsg("❌ "+e.message);}
    setLoading(false);
  };

  const TABS=[
    {id:"classes",label:"🏫 我的班级",color:C.alg},
    ...(selectedClass?[
      {id:"students",label:"👨‍🎓 学生学情",color:C.geo},
      {id:"paper",label:"📄 出卷",color:C.sta},
    ]:[]),
  ];

  return (
    <div style={{padding:isMobile?16:22,maxWidth:1000}}>
      <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:20}}>
        <button onClick={()=>onNav("home")}
          style={{padding:"6px 14px",borderRadius:8,cursor:"pointer",
            background:C.s2,color:C.text,border:`1px solid ${C.border}`,fontSize:14}}>
          ← 返回
        </button>
        <h2 style={{fontSize:22,fontWeight:900,color:C.text,margin:0}}>🏫 教师工作台</h2>
        {msg&&<span style={{fontSize:13,color:msg.startsWith("✅")?C.ok:C.red,fontWeight:600,marginLeft:8}}>{msg}</span>}
      </div>

      {/* Tab */}
      <div style={{display:"flex",gap:6,marginBottom:20,flexWrap:"wrap"}}>
        {TABS.map(t=>(
          <button key={t.id} onClick={()=>setTab(t.id)}
            style={{padding:"8px 16px",borderRadius:10,cursor:"pointer",fontSize:14,fontWeight:700,
              background:tab===t.id?t.color+"22":C.s2,color:tab===t.id?t.color:C.muted,
              border:`1px solid ${tab===t.id?t.color+"55":C.border}`}}>
            {t.label}
          </button>
        ))}
        {selectedClass&&(
          <span style={{fontSize:13,color:C.muted,padding:"8px 0",marginLeft:6}}>
            当前：{selectedClass.name}
          </span>
        )}
      </div>

      {loading&&<div style={{textAlign:"center",padding:40,color:C.muted}}>⏳ 加载中...</div>}

      {/* ── 我的班级 ── */}
      {tab==="classes"&&!loading&&(
        <div>
          {/* 创建班级 */}
          <div style={{padding:16,borderRadius:12,background:C.s1,border:`1px solid ${C.border}`,marginBottom:16}}>
            <div style={{fontWeight:700,color:C.text,marginBottom:10}}>➕ 创建班级</div>
            <div style={{display:"flex",gap:8,flexWrap:"wrap"}}>
              <input value={newClassName} onChange={e=>setNewClassName(e.target.value)}
                placeholder="班级名称（如：九年级1班）"
                style={{flex:1,minWidth:160,padding:"8px 14px",borderRadius:8,fontSize:14,
                  background:C.s2,border:`1px solid ${C.border}`,color:C.text,outline:"none"}}/>
              <select value={newGrade} onChange={e=>setNewGrade(parseInt(e.target.value))}
                style={{padding:"8px 10px",borderRadius:8,fontSize:14,
                  background:C.s2,border:`1px solid ${C.border}`,color:C.text}}>
                <option value={7}>七年级</option>
                <option value={8}>八年级</option>
                <option value={9}>九年级</option>
              </select>
              <button onClick={createClass}
                style={{padding:"8px 20px",borderRadius:8,cursor:"pointer",fontSize:14,fontWeight:700,
                  background:C.alg,color:"white",border:"none"}}>
                创建
              </button>
            </div>
          </div>

          {/* 班级列表 */}
          {classes.length===0?(
            <div style={{textAlign:"center",padding:40,color:C.muted}}>暂无班级，请先创建</div>
          ):classes.map(cls=>(
            <div key={cls.id} style={{padding:16,borderRadius:12,background:C.s1,
              border:`1px solid ${selectedClass?.id===cls.id?C.alg+"55":C.border}`,marginBottom:8,
              cursor:"pointer",transition:"all .2s"}}
              onClick={()=>selectClass(cls)}>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                <div>
                  <span style={{fontSize:17,fontWeight:800,color:C.text}}>{cls.name}</span>
                  <span style={{fontSize:13,color:C.muted,marginLeft:10}}>{cls.grade}年级</span>
                </div>
                <div style={{display:"flex",gap:8,alignItems:"center"}}>
                  <span style={{fontSize:14,fontWeight:700,color:C.alg}}>{cls.student_count}人</span>
                  <button onClick={e=>{e.stopPropagation();deleteClass(cls.id);}}
                    style={{padding:"4px 10px",borderRadius:6,cursor:"pointer",fontSize:12,
                      background:C.red+"15",color:C.red,border:`1px solid ${C.red}33`}}>
                    删除
                  </button>
                </div>
              </div>
              <div style={{display:"flex",gap:12,marginTop:8,alignItems:"center"}}>
                <span style={{fontSize:13,color:C.muted}}>邀请码：</span>
                <span style={{fontSize:15,fontWeight:800,color:C.sta,fontFamily:"monospace",
                  padding:"2px 10px",borderRadius:6,background:C.sta+"15",letterSpacing:2}}>
                  {cls.invite_code}
                </span>
                <button onClick={e=>{
                  e.stopPropagation();
                  navigator.clipboard?.writeText(cls.invite_code);
                  setMsg("✅ 已复制邀请码");
                  setTimeout(()=>setMsg(""),1500);
                }} style={{fontSize:12,background:"none",border:"none",color:C.alg,cursor:"pointer"}}>
                  📋 复制
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ── 学生学情 ── */}
      {tab==="students"&&!loading&&selectedClass&&(
        <div>
          {/* 班级概览 */}
          {report?.stats&&(
            <div style={{display:"grid",gridTemplateColumns:isMobile?"repeat(3,1fr)":"repeat(6,1fr)",
              gap:8,marginBottom:16}}>
              {[
                {label:"学生",val:report.stats.total_students,color:C.alg},
                {label:"平均掌握",val:report.stats.avg_mastered,color:C.geo},
                {label:"最高",val:report.stats.max_mastered,color:C.ok},
                {label:"最低",val:report.stats.min_mastered,color:C.red},
                {label:"平均错题",val:report.stats.avg_wrong,color:C.sta},
                {label:"平均打卡",val:report.stats.avg_checkin+"天",color:C.purple},
              ].map((s,i)=>(
                <div key={i} style={{padding:12,borderRadius:10,background:C.s1,
                  border:`1px solid ${s.color}33`,textAlign:"center"}}>
                  <div style={{fontSize:22,fontWeight:900,color:s.color}}>{s.val||0}</div>
                  <div style={{fontSize:11,color:C.muted}}>{s.label}</div>
                </div>
              ))}
            </div>
          )}

          {/* AI 周报按钮 */}
          <div style={{display:"flex",gap:8,marginBottom:14}}>
            <button onClick={genAiReport}
              style={{padding:"8px 18px",borderRadius:8,cursor:"pointer",fontSize:14,fontWeight:700,
                background:"linear-gradient(135deg,#3a9eff,#1ed9a0)",color:"white",border:"none"}}>
              🤖 AI 生成周报
            </button>
            <button onClick={genPaper}
              style={{padding:"8px 18px",borderRadius:8,cursor:"pointer",fontSize:14,fontWeight:700,
                background:"linear-gradient(135deg,#f5a623,#f04f70)",color:"white",border:"none"}}>
              📄 智能出卷
            </button>
          </div>

          {/* AI 周报展示 */}
          {aiReport&&(
            <div style={{padding:16,borderRadius:12,background:C.s1,border:`1px solid ${C.alg}33`,marginBottom:14}}>
              <div style={{fontWeight:700,color:C.alg,marginBottom:8}}>🤖 AI 班级周报</div>
              <div style={{fontSize:14,color:C.text,lineHeight:1.8,whiteSpace:"pre-wrap"}}>{aiReport}</div>
            </div>
          )}

          {/* 学生表格 */}
          <div style={{overflowX:"auto"}}>
            <table style={{width:"100%",borderCollapse:"collapse",fontSize:14}}>
              <thead>
                <tr style={{borderBottom:`2px solid ${C.border}`}}>
                  {["姓名","掌握","错题","打卡","周活跃","操作"].map(h=>(
                    <th key={h} style={{padding:"8px 10px",textAlign:"left",color:C.muted,
                      fontWeight:600,whiteSpace:"nowrap"}}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {students.map(s=>(
                  <tr key={s.id} style={{borderBottom:`1px solid ${C.border}`}}>
                    <td style={{padding:"8px 10px",fontWeight:700,color:C.text}}>{s.nickname}</td>
                    <td style={{padding:"8px 10px",color:C.ok,fontWeight:600}}>
                      {s.mastered}
                      <span style={{fontSize:11,color:C.dim}}>/194</span>
                    </td>
                    <td style={{padding:"8px 10px",color:parseInt(s.wrong_pending)>5?C.red:C.muted}}>
                      {s.wrong_pending}
                    </td>
                    <td style={{padding:"8px 10px",color:C.sta}}>{s.checkin_days}天</td>
                    <td style={{padding:"8px 10px"}}>
                      <span style={{padding:"2px 8px",borderRadius:6,fontSize:12,fontWeight:600,
                        background:parseInt(s.week_active)>=5?C.ok+"20":parseInt(s.week_active)>=2?C.sta+"20":C.red+"20",
                        color:parseInt(s.week_active)>=5?C.ok:parseInt(s.week_active)>=2?C.sta:C.red}}>
                        {s.week_active}天
                      </span>
                    </td>
                    <td style={{padding:"8px 10px"}}>
                      <button onClick={()=>removeStudent(s.id)}
                        style={{padding:"3px 10px",borderRadius:6,cursor:"pointer",fontSize:12,
                          background:C.s2,color:C.red,border:`1px solid ${C.red}33`}}>
                        移除
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {students.length===0&&(
              <div style={{textAlign:"center",padding:30,color:C.muted}}>
                暂无学生，分享邀请码让学生加入
              </div>
            )}
          </div>
        </div>
      )}

      {/* ── 试卷生成 ── */}
      {tab==="paper"&&!loading&&(
        <div>
          <div style={{display:"flex",gap:8,marginBottom:14,flexWrap:"wrap",alignItems:"center"}}>
            <select value={paperDiff} onChange={e=>setPaperDiff(e.target.value)}
              style={{padding:"8px 12px",borderRadius:8,fontSize:14,
                background:C.s2,border:`1px solid ${C.border}`,color:C.text}}>
              <option value="基础">基础</option>
              <option value="中等">中等</option>
              <option value="较难">较难</option>
              <option value="压轴">压轴</option>
            </select>
            <select value={paperCount} onChange={e=>setPaperCount(parseInt(e.target.value))}
              style={{padding:"8px 12px",borderRadius:8,fontSize:14,
                background:C.s2,border:`1px solid ${C.border}`,color:C.text}}>
              {[5,8,10,15,20,25].map(n=>(
                <option key={n} value={n}>{n}题</option>
              ))}
            </select>
            <button onClick={genPaper}
              style={{padding:"8px 20px",borderRadius:8,cursor:"pointer",fontSize:14,fontWeight:700,
                background:"linear-gradient(135deg,#f5a623,#f04f70)",color:"white",border:"none"}}>
              {loading?"⏳ 生成中...":"🔄 重新生成"}
            </button>
            {paper&&(
              <button onClick={()=>{
                navigator.clipboard?.writeText(paper);
                setMsg("✅ 已复制试卷");setTimeout(()=>setMsg(""),1500);
              }} style={{padding:"8px 16px",borderRadius:8,cursor:"pointer",fontSize:14,
                background:C.s2,color:C.alg,border:`1px solid ${C.alg}33`}}>
                📋 复制
              </button>
            )}
          </div>
          {paper?(
            <div style={{padding:20,borderRadius:12,background:C.s1,border:`1px solid ${C.border}`,
              fontSize:15,color:C.text,lineHeight:1.9,whiteSpace:"pre-wrap",fontFamily:"serif"}}>
              {paper}
            </div>
          ):(
            <div style={{textAlign:"center",padding:40,color:C.muted}}>
              选择难度和题量后点击生成
            </div>
          )}
        </div>
      )}
    </div>
  );
}

/* ════════════════════════════════════════════════════════════
   ⚙️ PAGE: 后台管理 — 定时任务配置 / 用户管理 / 系统统计
════════════════════════════════════════════════════════════ */
function PageAdmin({onNav}) {
  const {isMobile}=useBP();
  const [tab,setTab]=useState("cron"); // cron | users | stats | config | questions
  const [configs,setConfigs]=useState([]);
  const [users,setUsers]=useState([]);
  const [stats,setStats]=useState(null);
  const [loading,setLoading]=useState(false);
  const [msg,setMsg]=useState("");
  // D6 题库状态
  const [qSearch,setQSearch]=useState("");
  const [qDomain,setQDomain]=useState("all");
  const [editingQ,setEditingQ]=useState(null); // {topicId, qIndex, ...}

  const API=window.__SHUMAI_API||"";
  const token=window.__SHUMAI_TOKEN||"";
  const headers={"Content-Type":"application/json","Authorization":`Bearer ${token}`};

  const api=async(method,path,body)=>{
    const opts={method,headers};
    if(body) opts.body=JSON.stringify(body);
    const r=await fetch(`${API}/api/admin${path}`,opts);
    if(!r.ok){const e=await r.json().catch(()=>({}));throw new Error(e.error||r.statusText);}
    return r.json();
  };

  // 加载数据
  const loadConfigs=async()=>{setLoading(true);try{setConfigs(await api("GET","/config"));}catch(e){setMsg("❌ "+e.message);}setLoading(false);};
  const loadUsers=async()=>{setLoading(true);try{setUsers(await api("GET","/users"));}catch(e){setMsg("❌ "+e.message);}setLoading(false);};
  const loadStats=async()=>{setLoading(true);try{setStats(await api("GET","/stats"));}catch(e){setMsg("❌ "+e.message);}setLoading(false);};

  useEffect(()=>{
    if(tab==="cron"||tab==="config") loadConfigs();
    else if(tab==="users") loadUsers();
    else if(tab==="stats") loadStats();
  },[tab]);

  // 更新配置
  const updateConfig=async(key,newValue)=>{
    try{
      await api("PUT",`/config/${key}`,{value:newValue});
      setMsg("✅ 已保存");
      loadConfigs();
      setTimeout(()=>setMsg(""),2000);
    }catch(e){setMsg("❌ "+e.message);}
  };

  // 手动触发任务
  const triggerCron=async(key)=>{
    try{
      await api("POST","/cron/trigger",{taskKey:key});
      setMsg("✅ 已触发执行");
      setTimeout(()=>setMsg(""),2000);
    }catch(e){setMsg("❌ "+e.message);}
  };

  // 修改用户角色
  const changeRole=async(userId,role)=>{
    try{
      await api("PUT",`/users/${userId}/role`,{role});
      setMsg("✅ 角色已更新");
      loadUsers();
      setTimeout(()=>setMsg(""),2000);
    }catch(e){setMsg("❌ "+e.message);}
  };

  const cronConfigs=configs.filter(c=>c.category==="cron");
  const otherConfigs=configs.filter(c=>c.category!=="cron");

  const TABS=[
    {id:"cron",label:"⏰ 定时任务",color:C.sta},
    {id:"users",label:"👥 用户管理",color:C.alg},
    {id:"stats",label:"📊 数据统计",color:C.geo},
    {id:"questions",label:"📝 题库管理",color:"#22d3ee"},
    {id:"config",label:"⚙️ 系统配置",color:C.purple},
  ];

  return (
    <div style={{padding:isMobile?16:22,maxWidth:1000}}>
      <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:20}}>
        <button onClick={()=>onNav("home")}
          style={{padding:"6px 14px",borderRadius:8,cursor:"pointer",
            background:C.s2,color:C.text,border:`1px solid ${C.border}`,fontSize:14}}>
          ← 返回
        </button>
        <h2 style={{fontSize:22,fontWeight:900,color:C.text,margin:0}}>⚙️ 后台管理</h2>
        {msg&&<span style={{fontSize:13,color:msg.startsWith("✅")?C.ok:C.red,fontWeight:600}}>{msg}</span>}
      </div>

      {/* Tab 切换 */}
      <div style={{display:"flex",gap:6,marginBottom:20,flexWrap:"wrap"}}>
        {TABS.map(t=>(
          <button key={t.id} onClick={()=>setTab(t.id)}
            style={{padding:"8px 16px",borderRadius:10,cursor:"pointer",fontSize:14,fontWeight:700,
              background:tab===t.id?t.color+"22":C.s2,
              color:tab===t.id?t.color:C.muted,
              border:`1px solid ${tab===t.id?t.color+"55":C.border}`}}>
            {t.label}
          </button>
        ))}
      </div>

      {loading&&<div style={{textAlign:"center",padding:40,color:C.muted}}>⏳ 加载中...</div>}

      {/* ── 定时任务配置 ── */}
      {tab==="cron"&&!loading&&(
        <div>
          <div style={{fontSize:14,color:C.muted,marginBottom:14}}>
            修改 cron 表达式后自动重载，支持启用/禁用和手动触发
          </div>
          {cronConfigs.map(cfg=>{
            const val=typeof cfg.value==="string"?JSON.parse(cfg.value):cfg.value;
            return (
              <CronEditor key={cfg.key} cfg={cfg} val={val}
                onSave={(nv)=>updateConfig(cfg.key,nv)}
                onTrigger={()=>triggerCron(cfg.key)}/>
            );
          })}
          {cronConfigs.length===0&&(
            <div style={{padding:20,textAlign:"center",color:C.muted}}>
              暂无定时任务配置。请先执行 schema.sql 初始化数据库。
            </div>
          )}
        </div>
      )}

      {/* ── 用户管理 ── */}
      {tab==="users"&&!loading&&(
        <div>
          <div style={{fontSize:14,color:C.muted,marginBottom:14}}>
            共 {users.length} 位用户
          </div>
          <div style={{overflowX:"auto"}}>
            <table style={{width:"100%",borderCollapse:"collapse",fontSize:14}}>
              <thead>
                <tr style={{borderBottom:`2px solid ${C.border}`}}>
                  {["ID","昵称","手机","年级","角色","微信","掌握","错题","打卡","注册时间"].map(h=>(
                    <th key={h} style={{padding:"8px 10px",textAlign:"left",color:C.muted,
                      fontWeight:600,whiteSpace:"nowrap"}}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {users.map(u=>(
                  <tr key={u.id} style={{borderBottom:`1px solid ${C.border}`}}>
                    <td style={{padding:"8px 10px",color:C.dim}}>{u.id}</td>
                    <td style={{padding:"8px 10px",color:C.text,fontWeight:600}}>{u.nickname}</td>
                    <td style={{padding:"8px 10px",color:C.muted}}>{u.phone}</td>
                    <td style={{padding:"8px 10px",color:C.muted}}>{u.grade}年级</td>
                    <td style={{padding:"8px 10px"}}>
                      <select value={u.role||"student"} onChange={e=>changeRole(u.id,e.target.value)}
                        style={{padding:"3px 8px",borderRadius:6,fontSize:13,
                          background:u.role==="admin"?C.red+"22":C.s2,
                          color:u.role==="admin"?C.red:C.text,
                          border:`1px solid ${C.border}`,cursor:"pointer"}}>
                        <option value="student">学生</option>
                        <option value="admin">管理员</option>
                        <option value="teacher">教师</option>
                        <option value="parent">家长</option>
                      </select>
                    </td>
                    <td style={{padding:"8px 10px",color:u.wechat_bound?C.ok:C.dim}}>
                      {u.wechat_bound?"✓":"—"}
                    </td>
                    <td style={{padding:"8px 10px",color:C.ok,fontWeight:600}}>{u.mastered_count}</td>
                    <td style={{padding:"8px 10px",color:parseInt(u.wrong_count)>0?C.red:C.dim}}>{u.wrong_count}</td>
                    <td style={{padding:"8px 10px",color:C.sta}}>{u.checkin_days}天</td>
                    <td style={{padding:"8px 10px",color:C.dim,fontSize:12}}>
                      {new Date(u.created_at).toLocaleDateString("zh-CN")}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ── 数据统计 ── */}
      {tab==="stats"&&!loading&&stats&&(
        <div>
          <div style={{display:"grid",gridTemplateColumns:isMobile?"1fr 1fr":"repeat(5,1fr)",
            gap:12,marginBottom:20}}>
            {[
              {label:"总用户",val:stats.users?.total,color:C.alg},
              {label:"微信绑定",val:stats.users?.wechatBound,color:C.geo},
              {label:"7日活跃",val:stats.weeklyActive,color:C.sta},
              {label:"待解错题",val:stats.wrong?.pending,color:C.red},
              {label:"今日任务",val:stats.todayTasks,color:C.purple},
            ].map((s,i)=>(
              <div key={i} style={{padding:16,borderRadius:12,background:C.s1,
                border:`1px solid ${s.color}33`,textAlign:"center"}}>
                <div style={{fontSize:32,fontWeight:900,color:s.color}}>{s.val||0}</div>
                <div style={{fontSize:13,color:C.muted,marginTop:4}}>{s.label}</div>
              </div>
            ))}
          </div>
          <div style={{padding:16,borderRadius:12,background:C.s1,border:`1px solid ${C.border}`}}>
            <div style={{fontWeight:700,color:C.text,marginBottom:8}}>📚 学习进度总量</div>
            <div style={{fontSize:14,color:C.muted}}>
              掌握记录：{stats.progress?.mastered||0} 条 / 总 {stats.progress?.total||0} 条
            </div>
            <div style={{fontSize:14,color:C.muted}}>
              错题总量：{stats.wrong?.total||0}（待解：{stats.wrong?.pending||0}）
            </div>
          </div>
        </div>
      )}

      {/* ── D6 题库管理 ── */}
      {tab==="questions"&&(()=>{
        const filtered=TOPICS.filter(t=>{
          if(qDomain!=="all"&&t.domain!==qDomain) return false;
          if(qSearch&&!t.name.includes(qSearch)&&!t.id.includes(qSearch)) return false;
          return true;
        });
        return (
          <div>
            <div style={{display:"flex",gap:8,marginBottom:14,flexWrap:"wrap"}}>
              <input value={qSearch} onChange={e=>setQSearch(e.target.value)}
                placeholder="搜索知识点..."
                style={{padding:"6px 14px",borderRadius:8,fontSize:14,flex:1,minWidth:150,
                  background:C.s2,border:`1px solid ${C.border}`,color:C.text,outline:"none"}}/>
              <select value={qDomain} onChange={e=>setQDomain(e.target.value)}
                style={{padding:"6px 10px",borderRadius:8,fontSize:14,
                  background:C.s2,border:`1px solid ${C.border}`,color:C.text,cursor:"pointer"}}>
                <option value="all">全部领域</option>
                <option value="algebra">代数</option>
                <option value="geometry">几何</option>
                <option value="stats">统计概率</option>
              </select>
              <span style={{fontSize:13,color:C.muted,padding:"8px 0"}}>{filtered.length}个知识点</span>
            </div>

            {/* 统计概览 */}
            <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:8,marginBottom:14}}>
              {[
                {label:"知识点",val:TOPICS.length,color:C.alg},
                {label:"真题",val:EXAM_QS.length,color:C.sta},
                {label:"领域",val:3,color:C.geo},
                {label:"平均考频",val:Math.round(TOPICS.reduce((s,t)=>s+t.freq,0)/TOPICS.length)+"%",color:C.purple},
              ].map((s,i)=>(
                <div key={i} style={{padding:10,borderRadius:8,background:C.s1,
                  border:`1px solid ${s.color}33`,textAlign:"center"}}>
                  <div style={{fontSize:22,fontWeight:900,color:s.color}}>{s.val}</div>
                  <div style={{fontSize:11,color:C.muted}}>{s.label}</div>
                </div>
              ))}
            </div>

            {/* 知识点列表 */}
            <div style={{maxHeight:500,overflowY:"auto"}}>
              {filtered.slice(0,50).map(t=>(
                <div key={t.id} style={{padding:12,borderRadius:10,background:C.s1,
                  border:`1px solid ${DOM[t.domain].color}22`,marginBottom:6}}>
                  <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                    <div>
                      <span style={{fontSize:15,fontWeight:700,color:DOM[t.domain].color}}>{t.name}</span>
                      <span style={{fontSize:12,color:C.dim,marginLeft:8}}>{t.id}</span>
                    </div>
                    <div style={{display:"flex",gap:6,alignItems:"center"}}>
                      <span style={{fontSize:12,padding:"2px 8px",borderRadius:6,
                        background:C.sta+"18",color:C.sta}}>考频{t.freq}%</span>
                      <span style={{fontSize:12,color:C.muted}}>
                        {t.semester} | 考{t.examYears?.length||"-"}年
                      </span>
                    </div>
                  </div>
                  {/* 关键信息 */}
                  <div style={{display:"flex",gap:10,marginTop:6,flexWrap:"wrap"}}>
                    {t.fivePoints?.slice(0,3).map((p,i)=>(
                      <span key={i} style={{fontSize:12,padding:"2px 6px",borderRadius:4,
                        background:C.s2,color:C.muted}}>{p}</span>
                    ))}
                    {t.methods?.slice(0,2).map((m,i)=>(
                      <span key={'m'+i} style={{fontSize:12,padding:"2px 6px",borderRadius:4,
                        background:C.geo+"15",color:C.geo}}>{m}</span>
                    ))}
                  </div>
                  {t.tips&&(
                    <div style={{fontSize:12,color:C.muted,marginTop:4,fontStyle:"italic"}}>💡 {t.tips}</div>
                  )}
                </div>
              ))}
              {filtered.length>50&&(
                <div style={{textAlign:"center",padding:10,color:C.muted,fontSize:13}}>
                  还有 {filtered.length-50} 个知识点，请搜索缩小范围
                </div>
              )}
            </div>

            {/* 真题统计概览 */}
            <div style={{marginTop:14,padding:14,borderRadius:10,background:C.s1,
              border:`1px solid ${C.border}`}}>
              <div style={{fontWeight:700,color:C.text,marginBottom:8}}>真题分布统计</div>
              <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:8}}>
                {Object.entries(DOM).map(([k,d])=>{
                  const count=EXAM_QS.filter(q=>{
                    const t=TOPICS.find(tp=>tp.id===q.topic);
                    return t?.domain===k;
                  }).length;
                  return (
                    <div key={k} style={{textAlign:"center"}}>
                      <div style={{fontSize:20,fontWeight:900,color:d.color}}>{count}</div>
                      <div style={{fontSize:12,color:C.muted}}>{d.name}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })()}

      {/* ── 其他系统配置 ── */}
      {tab==="config"&&!loading&&(
        <div>
          <div style={{fontSize:14,color:C.muted,marginBottom:14}}>
            学习参数配置（遗忘曲线间隔、冲刺阶段阈值等）
          </div>
          {otherConfigs.map(cfg=>{
            const val=typeof cfg.value==="string"?JSON.parse(cfg.value):cfg.value;
            return (
              <ConfigEditor key={cfg.key} cfg={cfg} val={val}
                onSave={(nv)=>updateConfig(cfg.key,nv)}/>
            );
          })}
        </div>
      )}
    </div>
  );
}

// Cron 编辑器子组件
function CronEditor({cfg,val,onSave,onTrigger}) {
  const [cronExpr,setCronExpr]=useState(val.cron||"");
  const [enabled,setEnabled]=useState(val.enabled!==false);
  const [desc,setDesc]=useState(val.desc||"");
  const [editing,setEditing]=useState(false);

  const CRON_PRESETS=[
    {label:"每天 6:00",val:"0 6 * * *"},
    {label:"每天 7:00",val:"0 7 * * *"},
    {label:"每天 8:00",val:"0 8 * * *"},
    {label:"每天 12:00",val:"0 12 * * *"},
    {label:"每天 18:00",val:"0 18 * * *"},
    {label:"每天 20:00",val:"0 20 * * *"},
    {label:"每天 21:00",val:"0 21 * * *"},
    {label:"每天 22:00",val:"0 22 * * *"},
    {label:"凌晨 1:00",val:"0 1 * * *"},
    {label:"周一 8:00",val:"0 8 * * 1"},
    {label:"周五 18:00",val:"0 18 * * 5"},
    {label:"每小时",val:"0 * * * *"},
  ];

  const save=()=>{
    onSave({cron:cronExpr,enabled,desc});
    setEditing(false);
  };

  // 解析 cron 表达式为可读文本
  const cronToText=(expr)=>{
    const parts=expr.split(" ");
    if(parts.length!==5) return expr;
    const [min,hr,dom,mon,dow]=parts;
    const dowMap={"0":"周日","1":"周一","2":"周二","3":"周三","4":"周四","5":"周五","6":"周六","7":"周日"};
    let text="";
    if(dow!=="*") text+=dowMap[dow]||`周${dow}`;
    else if(dom!=="*") text+=`每月${dom}日`;
    else text+="每天";
    if(hr!=="*") text+=` ${hr.padStart(2,"0")}:${min.padStart(2,"0")}`;
    else text+=` 每小时第${min}分`;
    return text;
  };

  return (
    <div style={{padding:16,borderRadius:12,background:C.s1,
      border:`1px solid ${enabled?C.sta+"33":C.border}`,marginBottom:10}}>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:8}}>
        <div style={{display:"flex",alignItems:"center",gap:10}}>
          <span style={{fontSize:18}}>{enabled?"✅":"⏸"}</span>
          <div>
            <div style={{fontSize:15,fontWeight:700,color:C.text}}>{cfg.label||cfg.key}</div>
            <div style={{fontSize:12,color:C.muted}}>{desc||cfg.key}</div>
          </div>
        </div>
        <div style={{display:"flex",gap:6}}>
          <button onClick={()=>setEditing(!editing)}
            style={{padding:"4px 12px",borderRadius:6,cursor:"pointer",fontSize:12,
              background:C.s2,color:C.muted,border:`1px solid ${C.border}`}}>
            {editing?"取消":"编辑"}
          </button>
          <button onClick={onTrigger}
            style={{padding:"4px 12px",borderRadius:6,cursor:"pointer",fontSize:12,
              background:C.sta+"22",color:C.sta,border:`1px solid ${C.sta}44`}}>
            ▶ 立即执行
          </button>
        </div>
      </div>

      {/* 当前时间 */}
      {!editing&&(
        <div style={{display:"flex",gap:12,alignItems:"center"}}>
          <span style={{padding:"4px 12px",borderRadius:8,fontSize:13,fontWeight:700,
            background:C.sta+"15",color:C.sta,fontFamily:"monospace"}}>{cronExpr}</span>
          <span style={{fontSize:13,color:C.muted}}>{cronToText(cronExpr)}</span>
        </div>
      )}

      {/* 编辑模式 */}
      {editing&&(
        <div style={{marginTop:8}}>
          <div style={{display:"flex",gap:8,alignItems:"center",marginBottom:8}}>
            <label style={{fontSize:13,color:C.muted,minWidth:60}}>启用</label>
            <button onClick={()=>setEnabled(!enabled)}
              style={{padding:"4px 16px",borderRadius:6,cursor:"pointer",fontSize:13,fontWeight:700,
                background:enabled?C.ok+"22":C.red+"22",
                color:enabled?C.ok:C.red,
                border:`1px solid ${enabled?C.ok:C.red}44`}}>
              {enabled?"已启用":"已禁用"}
            </button>
          </div>
          <div style={{display:"flex",gap:8,alignItems:"center",marginBottom:8}}>
            <label style={{fontSize:13,color:C.muted,minWidth:60}}>表达式</label>
            <input value={cronExpr} onChange={e=>setCronExpr(e.target.value)}
              style={{padding:"6px 12px",borderRadius:8,fontSize:14,flex:1,
                background:C.s2,border:`1px solid ${C.border}`,color:C.text,
                outline:"none",fontFamily:"monospace"}}/>
          </div>
          {/* 快捷预设 */}
          <div style={{display:"flex",gap:4,flexWrap:"wrap",marginBottom:8}}>
            {CRON_PRESETS.map(p=>(
              <button key={p.val} onClick={()=>setCronExpr(p.val)}
                style={{padding:"3px 10px",borderRadius:6,cursor:"pointer",fontSize:11,
                  background:cronExpr===p.val?C.sta+"22":C.s2,
                  color:cronExpr===p.val?C.sta:C.muted,
                  border:`1px solid ${cronExpr===p.val?C.sta+"44":C.border}`}}>
                {p.label}
              </button>
            ))}
          </div>
          <div style={{display:"flex",gap:8,alignItems:"center",marginBottom:8}}>
            <label style={{fontSize:13,color:C.muted,minWidth:60}}>说明</label>
            <input value={desc} onChange={e=>setDesc(e.target.value)}
              style={{padding:"6px 12px",borderRadius:8,fontSize:14,flex:1,
                background:C.s2,border:`1px solid ${C.border}`,color:C.text,outline:"none"}}/>
          </div>
          <button onClick={save}
            style={{padding:"8px 24px",borderRadius:8,cursor:"pointer",fontSize:14,fontWeight:700,
              background:"linear-gradient(135deg,#f5a623,#f04f70)",color:"white",border:"none"}}>
            保存并重载
          </button>
        </div>
      )}
    </div>
  );
}

// 通用配置编辑器
function ConfigEditor({cfg,val,onSave}) {
  const [jsonStr,setJsonStr]=useState(JSON.stringify(val,null,2));
  const [editing,setEditing]=useState(false);

  const save=()=>{
    try{
      const parsed=JSON.parse(jsonStr);
      onSave(parsed);
      setEditing(false);
    }catch(e){alert("JSON格式错误: "+e.message);}
  };

  return (
    <div style={{padding:14,borderRadius:12,background:C.s1,
      border:`1px solid ${C.border}`,marginBottom:10}}>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:6}}>
        <div>
          <span style={{fontSize:15,fontWeight:700,color:C.text}}>{cfg.label||cfg.key}</span>
          <span style={{fontSize:12,color:C.dim,marginLeft:8}}>{cfg.key}</span>
        </div>
        <button onClick={()=>setEditing(!editing)}
          style={{padding:"4px 12px",borderRadius:6,cursor:"pointer",fontSize:12,
            background:C.s2,color:C.muted,border:`1px solid ${C.border}`}}>
          {editing?"取消":"编辑"}
        </button>
      </div>
      {!editing?(
        <pre style={{margin:0,fontSize:13,color:C.muted,fontFamily:"monospace",
          background:C.s2,padding:8,borderRadius:6,overflowX:"auto"}}>
          {JSON.stringify(val,null,2)}
        </pre>
      ):(
        <div>
          <textarea value={jsonStr} onChange={e=>setJsonStr(e.target.value)}
            style={{width:"100%",minHeight:80,padding:10,borderRadius:8,fontSize:13,
              background:C.s2,border:`1px solid ${C.border}`,color:C.text,
              outline:"none",fontFamily:"monospace",resize:"vertical"}}/>
          <button onClick={save}
            style={{padding:"6px 20px",borderRadius:8,cursor:"pointer",fontSize:13,fontWeight:700,
              background:C.purple,color:"white",border:"none",marginTop:6}}>
            保存
          </button>
        </div>
      )}
    </div>
  );
}

/* ════════════════════════════════════════════════════════════
   ERROR BOUNDARY — 防止单页崩溃影响全局
════════════════════════════════════════════════════════════ */
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  componentDidCatch(error, info) {
    console.error("[ErrorBoundary]", this.props.label, error, info);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div style={{display:"flex",flexDirection:"column",alignItems:"center",
          justifyContent:"center",minHeight:300,padding:40,textAlign:"center"}}>
          <div style={{fontSize:40,marginBottom:16}}>⚠️</div>
          <div style={{color:C.text,fontSize:18,fontWeight:600,marginBottom:8}}>
            {this.props.label||"页面"}出现了问题
          </div>
          <div style={{color:C.muted,fontSize:13,marginBottom:24,maxWidth:320}}>
            {this.state.error?.message||"未知错误，请刷新页面重试"}
          </div>
          <button
            onClick={()=>this.setState({hasError:false,error:null})}
            style={{padding:"8px 24px",borderRadius:8,border:"none",
              background:C.alg,color:"white",cursor:"pointer",fontSize:14,fontWeight:600}}>
            重新加载
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

/* ════════════════════════════════════════════════════════════
   🖼️ GeoFigure — AI 生成几何示意图
════════════════════════════════════════════════════════════ */
const GEO_TOPIC_IDS = new Set([
  'tri_basic','congruent','pythagorean','special_tri','quadrilateral','similar',
  'trig','circle','transform','coords','solid_geo','three_views',
  'lines_angles','parallel_perp','angle_relations','parallel_lines',
  'perp_bisector','angle_bisector','proof_logic','parallel_proof',
  'tri_interior_angle','tri_exterior_angle','tri_sides','tri_special_lines','ruler_compass',
  'congruent_sss','congruent_sas','congruent_asa','congruent_hl','congruent_app',
  'iso_property','iso_judge','equilateral_tri','isosceles',
  'pythagorean_inv','pyth_app','right_tri_proof',
  'midline','polygon_angle','special_quad','trapezoid','quad_special','tessellation',
  'similar_judge','similar_property','parallel_cut','similar_transform',
  'symmetry_axis','sym_property','sym_shortest_path','translation',
  'rotation','rotation_coord','central_sym',
  'trig_def','trig_special','solve_rt_tri','trig_app',
  'circle_basic','circle_angle','circle_tangent','arc_area','circle_symmetry',
  'chord_relation','inscribed_angle_90','inscribed_quad','circle_determine',
  'line_circle_pos','tangent_judge','tangent_length','circle_circle_pos','cone_surface',
  'coord_quadrant','coord_symmetry','distance_formula',
  'segment_compare','angle_measure','angle_compare','vertical_angle','three_angle_types',
  'expand_fold','projection_parallel','projection_center','solid_vol',
]);

const GEO_KW = /如图|△|∠|⊥|∥|三角形|圆|梯形|菱形|矩形|正方形|平行四边形|线段|射线|多边形|对角线|中点|垂线|角平分线|切线|弧|弦/;

function GeoFigure({content, topicIds=[], questionId="", questionType="basic"}) {
  const [svg,setSvg]=useState("");
  const [loading,setLoading]=useState(false);
  const [err,setErr]=useState(false);
  const [fromCache,setFromCache]=useState(false);
  const API=window.__SHUMAI_API||"";

  const needsFigure=topicIds.some(t=>GEO_TOPIC_IDS.has(t))||GEO_KW.test(content);
  // ⚠️ 不能在 useEffect 之前 return（违反 React Hooks 规则），移到所有 Hook 之后

  // 自动读取缓存
  useEffect(()=>{
    if(!needsFigure||!questionId||svg) return;
    fetch(`${API}/api/svg/${encodeURIComponent(questionId)}`)
      .then(r=>r.json())
      .then(d=>{
        if(d.exists&&d.svg){ setSvg(d.svg); setFromCache(true); }
      })
      .catch(()=>{});
  },[questionId,needsFigure]);

  const saveSvg=async(svgStr)=>{
    if(!questionId||!API) return;
    const topic=topicIds[0]||"";
    try{
      await fetch(`${API}/api/svg/${encodeURIComponent(questionId)}`,{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({svg:svgStr,questionType,topic}),
      });
    }catch{}
  };

  const generate=async()=>{
    setLoading(true);setErr(false);
    try{
      const sys=`你是数学几何示意图生成器。只输出SVG代码，从<svg开始到</svg>结束，不要任何其他文字。
规则：
- viewBox="0 0 300 220" width="100%" style="background:#0d1f35;border-radius:8px;display:block"
- 线条 stroke="#60a5fa" fill="none" stroke-width="1.5"
- 文字 fill="#e2e8f0" font-size="12" font-family="sans-serif"
- 标注字母（A B C等）和关键数据（长度、角度）
- 只画核心几何元素，保持整洁
- 坐标系题目画坐标轴+函数/点
- 圆的题目画圆+相关线段`;
      const raw=await callAI(sys,`画这道几何题的示意图：${content.slice(0,300)}`);
      const m=raw.match(/<svg[\s\S]*?<\/svg>/i);
      if(m){
        setSvg(m[0]);
        setFromCache(false);
        saveSvg(m[0]); // 自动保存缓存
      } else setErr(true);
    }catch{setErr(true);}
    setLoading(false);
  };

  // 如果有API Key且无缓存，自动触发生成
  useEffect(()=>{
    if(!needsFigure) return;
    if(!svg && !loading && !err && window.__SHUMAI_API &&
       (window.__SHUMAI_DSKEY || window.__SHUMAI_DBKEY)){
      // 延迟500ms避免同时大量请求
      const timer = setTimeout(()=>generate(), 500);
      return ()=>clearTimeout(timer);
    }
  },[svg, loading, err, needsFigure]);

  if(!needsFigure) return null; // 所有 Hook 已调用，可以安全提前返回

  if(svg) return(
    <div style={{marginTop:8,marginBottom:8}}>
      <div dangerouslySetInnerHTML={{__html:svg}}
        style={{borderRadius:8,overflow:"hidden"}}/>
      <div style={{display:"flex",gap:10,marginTop:4,alignItems:"center"}}>
        {fromCache&&(
          <span style={{fontSize:11,color:C.ok}}>✓ 已缓存</span>
        )}
        <button onClick={generate} disabled={loading}
          style={{fontSize:12,color:C.muted,background:"none",border:"none",
            cursor:"pointer",padding:0,opacity:loading?0.5:1}}>
          {loading?"⏳ 重新生成中…":"🔄 重新生成"}
        </button>
        <button onClick={()=>setSvg("")}
          style={{fontSize:12,color:C.muted,background:"none",border:"none",cursor:"pointer",padding:0}}>
          隐藏图形
        </button>
      </div>
    </div>
  );

  return(
    <div style={{marginTop:6,marginBottom:6}}>
      {loading?(
        <div style={{fontSize:13,color:C.geo,padding:"4px 0"}}>
          ⏳ AI 生成示意图中…
        </div>
      ):(
        <button onClick={generate} disabled={loading}
          style={{padding:"4px 14px",borderRadius:6,cursor:"pointer",fontSize:14,
            background:err?C.red+"18":C.geo+"18",
            color:err?C.red:C.geo,
            border:`1px solid ${err?C.red+"33":C.geo+"33"}`,
            opacity:loading?0.7:1}}>
          {err?"⚠️ 生成失败，重试":"🖼️ AI生成示意图"}
        </button>
      )}
    </div>
  );
}

/* ════════════════════════════════════════════════════════════
   🔑 登录 / 注册 弹窗
════════════════════════════════════════════════════════════ */
const BACKEND_URL = "https://shumai-2026-production.up.railway.app";

function AuthModal({onClose, onLogin}) {
  const [tab,setTab]=useState("login");
  const [phone,setPhone]=useState("");
  const [password,setPassword]=useState("");
  const [nickname,setNickname]=useState("");
  const [loading,setLoading]=useState(false);
  const [err,setErr]=useState("");

  const submit=async()=>{
    setErr("");
    if(!phone.trim()||!password.trim()){setErr("手机号和密码必填");return;}
    if(tab==="register"&&password.length<6){setErr("密码至少6位");return;}
    setLoading(true);
    try{
      const url=`${BACKEND_URL}/api/auth/${tab==="login"?"login":"register"}`;
      const body=tab==="login"
        ?{phone:phone.trim(),password}
        :{phone:phone.trim(),password,nickname:nickname.trim()||"\u540c\u5b66"};
      const r=await fetch(url,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(body)});
      const d=await r.json();
      if(!r.ok){setErr(d.error||"操作失败");setLoading(false);return;}
      onLogin(d.user,d.token);
      onClose();
    }catch{setErr("网络错误，请稍后重试");}
    setLoading(false);
  };

  return(
    <>
      <div onClick={onClose}
        style={{position:"fixed",inset:0,zIndex:299,background:"rgba(0,0,0,.65)"}}/>
      <div style={{position:"fixed",top:"50%",left:"50%",transform:"translate(-50%,-50%)",
        zIndex:300,background:C.s1,border:`1px solid ${C.border}`,
        borderRadius:18,padding:"28px 28px 22px",width:320,maxWidth:"92vw",
        boxShadow:"0 16px 56px #000d"}}>

        <div style={{fontSize:20,fontWeight:900,color:C.text,marginBottom:20,textAlign:"center"}}>
          ∑ 数脉
        </div>

        {/* Tab 切换 */}
        <div style={{display:"flex",gap:0,marginBottom:20,
          background:C.s2,borderRadius:8,padding:3}}>
          {[["login","登录"],["register","注册"]].map(([t,l])=>(
            <button key={t} onClick={()=>{setTab(t);setErr("");}}
              style={{flex:1,padding:"8px",borderRadius:6,cursor:"pointer",
                fontSize:15,fontWeight:700,border:"none",
                background:tab===t?C.alg:"transparent",
                color:tab===t?"white":C.muted,transition:"all .18s"}}>
              {l}
            </button>
          ))}
        </div>

        {/* 表单 */}
        <div style={{display:"flex",flexDirection:"column",gap:10}}>
          <input value={phone} onChange={e=>setPhone(e.target.value)}
            placeholder="手机号" type="tel" inputMode="numeric"
            style={{padding:"11px 14px",borderRadius:8,fontSize:15,
              background:C.s2,border:`1px solid ${C.border}`,
              color:C.text,outline:"none"}}/>
          <input value={password} onChange={e=>setPassword(e.target.value)}
            placeholder={tab==="register"?"密码（至少6位）":"密码"}
            type="password"
            onKeyDown={e=>e.key==="Enter"&&submit()}
            style={{padding:"11px 14px",borderRadius:8,fontSize:15,
              background:C.s2,border:`1px solid ${C.border}`,
              color:C.text,outline:"none"}}/>
          {tab==="register"&&(
            <input value={nickname} onChange={e=>setNickname(e.target.value)}
              placeholder="昵称（选填）"
              style={{padding:"11px 14px",borderRadius:8,fontSize:15,
                background:C.s2,border:`1px solid ${C.border}`,
                color:C.text,outline:"none"}}/>
          )}
        </div>

        {err&&(
          <div style={{marginTop:10,padding:"8px 12px",borderRadius:7,
            background:C.red+"18",color:C.red,fontSize:13,textAlign:"center"}}>
            {err}
          </div>
        )}

        <button onClick={submit} disabled={loading}
          style={{width:"100%",marginTop:16,padding:"13px",borderRadius:10,
            cursor:"pointer",fontSize:16,fontWeight:800,border:"none",
            background:loading?C.border:C.alg,color:"white",
            opacity:loading?0.7:1,transition:"all .2s"}}>
          {loading?"请稍候…":(tab==="login"?"登录":"注册")}
        </button>

        <button onClick={onClose}
          style={{width:"100%",marginTop:8,padding:"9px",borderRadius:8,
            cursor:"pointer",fontSize:14,background:"none",
            color:C.muted,border:`1px solid ${C.border}`}}>
          取消
        </button>

        {tab==="register"&&(
          <div style={{marginTop:12,fontSize:12,color:C.dim,textAlign:"center",lineHeight:1.6}}>
            注册即同意服务条款
          </div>
        )}
      </div>
    </>
  );
}

/* ════════════════════════════════════════════════════════════
   🤖 AI 讲解卡片组件 — "问学长"按钮点击后展开
════════════════════════════════════════════════════════════ */
function AskTutor({q, topicName, mode="explain"}) {
  const [open,setOpen]=useState(false);
  const [text,setText]=useState("");
  const [loading,setLoading]=useState(false);
  const [followUp,setFollowUp]=useState("");
  const [history,setHistory]=useState([]);
  const [micOn,setMicOn]=useState(false);
  const recRef=useRef(null);

  const startVoice=()=>{
    const SR=window.SpeechRecognition||window.webkitSpeechRecognition;
    if(!SR){alert("请使用Chrome浏览器以支持语音输入");return;}
    const r=new SR();
    r.lang="zh-CN";r.continuous=false;r.interimResults=false;
    r.onresult=e=>{
      const t=Array.from(e.results).filter(x=>x.isFinal).map(x=>x[0].transcript).join("");
      if(t) setFollowUp(t);
    };
    r.onerror=e=>{setMicOn(false);if(e.error==="not-allowed")alert("请允许麦克风权限后重试");};
    r.onend=()=>setMicOn(false);
    r.start();
    recRef.current=r;
    setMicOn(true);
  };
  const stopVoice=()=>{recRef.current?.stop();setMicOn(false);};

  const doAsk = async (userMsg) => {
    setLoading(true);
    try {
      const system = mode==="wrong"
        ? `你是数脉学长，帮学生分析错题。知识点：${topicName}。题目：${q.content}。答案：${q.answer}。错因：${q.error||'未知'}。用①②③分步讲解，150字以内，不用LaTeX。`
        : mode==="topic"
        ? `你是数脉学长，总结知识点"${topicName}"。要求：核心公式+高频考法+易错点+口诀，150字以内，不用LaTeX。`
        : `你是数脉学长，讲解这道题。知识点：${topicName}。题目：${q.content}。答案：${q.answer}。解法：${q.sol||'无'}。错因：${q.error||'无'}。用①②③分步讲解，点出易错点，给记忆技巧，150字以内，不用LaTeX。`;
      const result = await callAI(system, userMsg || "请讲解", history);
      setText(result);
      setHistory(prev=>[...prev,{r:"user",t:userMsg||"请讲解"},{r:"ai",t:result}]);
    } catch(e) { setText("⚠️ AI暂时不在线，请稍后重试"); }
    setLoading(false);
  };

  const handleOpen = () => {
    if (open) { stopVoice(); setOpen(false); return; }
    setOpen(true);
    if (!text) doAsk();
  };

  const handleFollowUp = () => {
    if (!followUp.trim()) return;
    doAsk(followUp.trim());
    setFollowUp("");
  };

  return (
    <>
      <button onClick={handleOpen}
        style={{display:"inline-flex",alignItems:"center",gap:6,
          padding:"6px 16px",borderRadius:20,cursor:"pointer",
          fontSize:15,fontWeight:700,
          background:open?"#a78bfa":C.s2,
          color:open?"white":"#a78bfa",
          border:`2px solid #a78bfa`,
          transition:"all .2s"}}>
        {loading?"⏳ 思考中…":open?"✕ 收起":"🤖 问学长"}
      </button>
      {open&&(
        <div style={{marginTop:8,padding:"12px 16px",
          background:"#a78bfa0d",borderRadius:10,
          border:"1px solid #a78bfa25"}}>
          {loading&&!text?(
            <div style={{color:C.muted,fontSize:14}}>💭 学长正在思考...</div>
          ):text?(
            <>
              <div style={{fontSize:15,color:C.text,lineHeight:1.8,whiteSpace:"pre-wrap",marginBottom:10}}>{text}</div>
              {loading&&<div style={{fontSize:13,color:"#a78bfa",marginBottom:8}}>💭 学长正在回答...</div>}
              {/* 追问输入行 */}
              <div style={{display:"flex",gap:6,alignItems:"center"}}>
                <input value={followUp} onChange={e=>setFollowUp(e.target.value)}
                  onKeyDown={e=>e.key==="Enter"&&handleFollowUp()}
                  placeholder={micOn?"🎤 正在听，说完自动填入…":"继续追问学长…"}
                  style={{flex:1,padding:"8px 14px",borderRadius:20,
                    background:micOn?"#ef44440d":C.s1,
                    border:`1px solid ${micOn?"#ef4444":C.border}`,
                    color:C.text,fontSize:14,outline:"none",
                    transition:"all .2s"}}/>
                {/* 语音追问按钮 */}
                <button onClick={micOn?stopVoice:startVoice}
                  style={{flexShrink:0,padding:"7px 10px",borderRadius:8,
                    cursor:"pointer",fontSize:13,fontWeight:600,whiteSpace:"nowrap",
                    background:micOn?"#ef444422":"#a78bfa11",
                    color:micOn?"#ef4444":"#a78bfa",
                    border:`1px solid ${micOn?"#ef444466":"#a78bfa44"}`,
                    transition:"all .2s"}}>
                  {micOn?"⏹ 停止":"语音追问"}
                </button>
                <button onClick={handleFollowUp} disabled={loading||!followUp.trim()}
                  style={{flexShrink:0,padding:"8px 16px",borderRadius:20,cursor:"pointer",
                    background:"#a78bfa",color:"white",border:"none",
                    fontSize:14,fontWeight:700,opacity:loading||!followUp.trim()?0.5:1}}>
                  {loading?"⏳":"发送"}
                </button>
              </div>
              {micOn&&(
                <div style={{marginTop:6,fontSize:12,color:"#ef4444",
                  display:"flex",alignItems:"center",gap:4}}>
                  <span style={{display:"inline-block",width:6,height:6,borderRadius:"50%",
                    background:"#ef4444",animation:"pulse 1s infinite"}}/>
                  录音中…说完会自动停止，也可点⏹手动停止
                </div>
              )}
            </>
          ):null}
        </div>
      )}
    </>
  );
}

/* ════════════════════════════════════════════════════════════
   🤖 全局 AI 浮窗 — 页面右下角常驻 "问学长" 气泡
════════════════════════════════════════════════════════════ */
function AIFloat({context}) {
  const [open,setOpen]=useState(false);
  const [msgs,setMsgs]=useState([]);
  const [input,setInput]=useState("");
  const [loading,setLoading]=useState(false);
  const [micOn,setMicOn]=useState(false);
  const scrollRef=useRef(null);
  const recRef=useRef(null);
  const {isMobile}=useBP();

  const startVoice=()=>{
    const SR=window.SpeechRecognition||window.webkitSpeechRecognition;
    if(!SR){alert("请使用Chrome浏览器以支持语音输入");return;}
    const r=new SR();
    r.lang="zh-CN";r.continuous=false;r.interimResults=false;
    r.onresult=e=>{const t=Array.from(e.results).filter(x=>x.isFinal).map(x=>x[0].transcript).join("");if(t)setInput(t);};
    r.onerror=e=>{setMicOn(false);if(e.error==="not-allowed")alert("请允许麦克风权限后重试");};
    r.onend=()=>setMicOn(false);
    r.start();recRef.current=r;setMicOn(true);
  };
  const stopVoice=()=>{recRef.current?.stop();setMicOn(false);};

  useEffect(()=>{
    if(scrollRef.current) scrollRef.current.scrollTop=scrollRef.current.scrollHeight;
  },[msgs]);

  const send = async () => {
    if(!input.trim()||loading) return;
    const userMsg=input.trim();
    setInput("");
    setMsgs(prev=>[...prev,{r:"user",t:userMsg}]);
    setLoading(true);
    try {
      const ctxHint = context?.topicName
        ? `学生当前正在看「${context.topicName}」知识点。`
        : context?.questionContent
        ? `学生当前正在看这道题：${context.questionContent}`
        : "";
      const system = `你是数脉学长，正在通过H5页面和学生聊天。${ctxHint}
回答中考数学相关问题，用①②③分步讲解，150字以内，口语化，不用LaTeX和Markdown。
如果学生问非数学问题，简短回应后温柔引导回数学。`;
      const hist = msgs.slice(-10);
      const result = await callAI(system, userMsg, hist);
      setMsgs(prev=>[...prev,{r:"ai",t:result}]);
    } catch(e) {
      setMsgs(prev=>[...prev,{r:"ai",t:"⚠️ 网络异常，请稍后重试"}]);
    }
    setLoading(false);
  };

  if(!open) return (
    <button onClick={()=>setOpen(true)}
      style={{position:"fixed",bottom:isMobile?70:30,right:isMobile?16:30,
        zIndex:9999,width:56,height:56,borderRadius:28,
        background:"linear-gradient(135deg,#a78bfa,#7c3aed)",
        color:"white",border:"none",cursor:"pointer",
        fontSize:24,fontWeight:900,
        boxShadow:"0 4px 20px rgba(167,139,250,0.4)",
        display:"flex",alignItems:"center",justifyContent:"center",
        transition:"transform .2s"}}>
      🤖
    </button>
  );

  return (
    <div style={{position:"fixed",
      bottom:isMobile?0:30,right:isMobile?0:30,
      width:isMobile?"100vw":380,
      height:isMobile?"85vh":500,
      zIndex:9999,borderRadius:isMobile?"16px 16px 0 0":16,
      background:C.s1,border:`1px solid ${C.border}`,
      boxShadow:"0 8px 40px rgba(0,0,0,0.5)",
      display:"flex",flexDirection:"column",overflow:"hidden"}}>
      {/* Header */}
      <div style={{padding:"12px 16px",display:"flex",justifyContent:"space-between",
        alignItems:"center",background:C.s2,borderBottom:`1px solid ${C.border}`}}>
        <div style={{display:"flex",alignItems:"center",gap:8}}>
          <span style={{fontSize:20}}>🤖</span>
          <span style={{fontWeight:800,fontSize:16,color:C.text}}>数脉学长</span>
          <span style={{fontSize:11,color:"#a78bfa",padding:"2px 8px",
            background:"#a78bfa1a",borderRadius:10}}>AI学伴</span>
        </div>
        <button onClick={()=>setOpen(false)}
          style={{background:"none",border:"none",color:C.muted,
            fontSize:20,cursor:"pointer",padding:4}}>✕</button>
      </div>
      {/* Messages */}
      <div ref={scrollRef} style={{flex:1,overflowY:"auto",padding:16,
        display:"flex",flexDirection:"column",gap:12}}>
        {msgs.length===0&&(
          <div style={{textAlign:"center",color:C.muted,fontSize:14,marginTop:40}}>
            <div style={{fontSize:40,marginBottom:12}}>🎓</div>
            <div>嗯嗯，有什么数学问题？</div>
            <div style={{marginTop:8,fontSize:12}}>可以直接发题目、问知识点、聊学习方法</div>
          </div>
        )}
        {msgs.map((m,i)=>(
          <div key={i} style={{display:"flex",
            justifyContent:m.r==="user"?"flex-end":"flex-start"}}>
            <div style={{maxWidth:"85%",padding:"10px 14px",borderRadius:14,
              background:m.r==="user"?"#a78bfa":"#1a2d44",
              color:C.text,fontSize:15,lineHeight:1.7,
              borderBottomRightRadius:m.r==="user"?4:14,
              borderBottomLeftRadius:m.r==="user"?14:4,
              whiteSpace:"pre-wrap"}}>
              {m.t}
            </div>
          </div>
        ))}
        {loading&&(
          <div style={{display:"flex",justifyContent:"flex-start"}}>
            <div style={{padding:"10px 14px",borderRadius:14,
              background:"#1a2d44",color:C.muted,fontSize:14}}>
              💭 思考中...
            </div>
          </div>
        )}
      </div>
      {/* Input */}
      <div style={{padding:"10px 12px",borderTop:`1px solid ${C.border}`,
        background:C.s2}}>
        {micOn&&(
          <div style={{fontSize:12,color:"#ef4444",marginBottom:6,
            display:"flex",alignItems:"center",gap:4,paddingLeft:4}}>
            <span style={{display:"inline-block",width:6,height:6,borderRadius:"50%",
              background:"#ef4444"}}/>
            录音中…说完自动停止
          </div>
        )}
        <div style={{display:"flex",gap:8,alignItems:"center"}}>
          <button onClick={micOn?stopVoice:startVoice}
            title={micOn?"停止录音":"语音提问"}
            style={{flexShrink:0,width:38,height:38,borderRadius:"50%",
              cursor:"pointer",border:"none",fontSize:18,
              display:"flex",alignItems:"center",justifyContent:"center",
              background:micOn?"#ef4444":"#a78bfa22",
              color:micOn?"white":"#a78bfa",
              boxShadow:micOn?"0 0 0 4px #ef444430":"none",
              transition:"all .2s"}}>
            {micOn?"⏹":"🎤"}
          </button>
          <input value={input} onChange={e=>setInput(e.target.value)}
            onKeyDown={e=>e.key==="Enter"&&send()}
            placeholder={micOn?"🎤 正在听…":"问学长数学问题…或点🎤语音提问"}
            style={{flex:1,padding:"10px 16px",borderRadius:22,
              background:micOn?"#ef44440d":C.bg,
              border:`1px solid ${micOn?"#ef4444":C.border}`,
              color:C.text,fontSize:15,outline:"none",transition:"all .2s"}}/>
          <button onClick={send} disabled={loading||!input.trim()}
            style={{flexShrink:0,padding:"10px 20px",borderRadius:22,cursor:"pointer",
              background:input.trim()?"#a78bfa":C.s3,
              color:"white",border:"none",fontSize:15,fontWeight:700,
              opacity:loading?0.5:1,transition:"background .2s"}}>
            {loading?"⏳":"发送"}
          </button>
        </div>
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════════════════
   ROOT APP
════════════════════════════════════════════════════════════ */
export default function App() {
  const [view,setView]=useState(()=>{
    const p=new URLSearchParams(window.location.search).get("view");
    if(p) return p;
    try{ return JSON.parse(localStorage.getItem("shumai_v7")||"{}").lastView||"home"; }catch{ return "home"; }
  });
  const [detailId,setDetailId]=useState(null);
  const bp = useWindowSize();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // ── localStorage 持久化工具 ──────────────────────────────
  const STORAGE_KEY = "shumai_v7";
  const loadStorage = () => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return {};
      return JSON.parse(raw);
    } catch { return {}; }
  };
  const saveStorage = (patch) => {
    try {
      const prev = loadStorage();
      localStorage.setItem(STORAGE_KEY, JSON.stringify({...prev, ...patch}));
    } catch {}
  };

  // 从 localStorage 读取初始值
  const _saved = loadStorage();
  const [mastered,setMastered]=useState(()=>new Set(_saved.mastered||[]));
  const [wrongSet,setWrongSet]=useState(()=>new Set(_saved.wrongSet||[]));
  const [basicWrongSet,setBasicWrongSet]=useState(()=>new Set(_saved.basicWrongSet||[]));

  // ── 首次诊断状态 ──────────────────────────────
  const [diagDone,setDiagDone]=useState(()=>!!_saved.diagDone);
  const handleDiagComplete=(result)=>{
    saveStorage({diagDone:true,diagResult:result});
    setDiagDone(true);
    if(result?.startTopic) {
      setDetailId(result.startTopic.id);
      setView("detail");
    }
  };

  // 每次状态变化时自动保存
  useEffect(()=>{ saveStorage({mastered:[...mastered]}); },[mastered]);
  useEffect(()=>{ saveStorage({wrongSet:[...wrongSet]}); },[wrongSet]);
  useEffect(()=>{ saveStorage({basicWrongSet:[...basicWrongSet]}); },[basicWrongSet]);
  useEffect(()=>{ saveStorage({lastView:view}); },[view]);

  // AI 模型选择（从 localStorage 恢复上次的选择和 Key）
  const [aiModel,setAiModel]=useState(_saved.aiModel||"deepseek-chat");
  const [dsKey,setDsKey]=useState(_saved.dsKey||"");
  const [dbKey,setDbKey]=useState(_saved.dbKey||"");
  const [showKeyInput,setShowKeyInput]=useState(false);
  const [showClearConfirm,setShowClearConfirm]=useState(false);

  // AI 设置变化时自动保存
  useEffect(()=>{ saveStorage({aiModel,dsKey,dbKey}); },[aiModel,dsKey,dbKey]);

  // ── 主题系统 ──────────────────────────────────────────────
  const [themeId,setThemeId]=useState(_saved.themeId||"dark");
  const [forceKey,setForceKey]=useState(0); // 切换主题时强制全量重渲染
  const [showSettings,setShowSettings]=useState(false);

  // ── 用户系统 ──────────────────────────────────────────────
  const [authUser,setAuthUser]=useState(()=>{
    try{return JSON.parse(localStorage.getItem("shumai_auth_user")||"null");}catch{return null;}
  });
  const [authToken,setAuthToken]=useState(()=>localStorage.getItem("shumai_auth_token")||"");
  const [showAuth,setShowAuth]=useState(false);
  const handleLogin=(user,token)=>{
    setAuthUser(user);
    setAuthToken(token);
    try{
      localStorage.setItem("shumai_auth_user",JSON.stringify(user));
      localStorage.setItem("shumai_auth_token",token);
    }catch{}
  };
  const handleLogout=()=>{
    setAuthUser(null);
    setAuthToken("");
    try{
      localStorage.removeItem("shumai_auth_user");
      localStorage.removeItem("shumai_auth_token");
    }catch{}
  };
  const applyTheme=(id)=>{
    if(!THEMES[id])return;
    Object.assign(C,THEMES[id]);
    setThemeId(id);
    setForceKey(k=>k+1);
    saveStorage({themeId:id});
  };

  // 清空所有学习记录（保留 API Key）
  const clearAllProgress = () => {
    setMastered(new Set());
    setWrongSet(new Set());
    setBasicWrongSet(new Set());
    try {
      const saved = loadStorage();
      // 只清除学习记录，保留 Key、模型选择和诊断结果
      localStorage.setItem(STORAGE_KEY, JSON.stringify({
        aiModel: saved.aiModel,
        dsKey:   saved.dsKey,
        dbKey:   saved.dbKey,
        diagDone: saved.diagDone,
        diagResult: saved.diagResult,
      }));
    } catch {}
    setShowClearConfirm(false);
  };

  // 同步到 window 供 callAI 使用
  window.__SHUMAI_MODEL__ = aiModel;
  window.__SHUMAI_DSKEY__ = dsKey;
  window.__SHUMAI_DBKEY__ = dbKey;

  const curModel = AI_MODELS.find(m=>m.id===aiModel) || AI_MODELS[0];
  const isDeepSeek = curModel.provider === "deepseek";
  const isDoubao   = curModel.provider === "doubao";
  const needKey    = true;  // DeepSeek 和豆包都需要 Key
  const curKey     = isDeepSeek ? dsKey : dbKey;
  const curColor   = curModel.color || C.alg;
  const setKey     = isDeepSeek ? setDsKey : setDbKey;
  const keyPlaceholder = isDeepSeek ? "sk-xxxx DeepSeek Key" : "豆包 API Key（火山引擎）";

  const navigate=useCallback((v,tid=null)=>{
    if(tid){setDetailId(tid);setView("detail");}
    else setView(v);
    setSidebarOpen(false);
  },[]);

  // 监听子组件发出的跨页面导航事件（用于真题页的知识点分拆跳转）
  useEffect(()=>{
    const handler=(e)=>{
      const {v,tid}=e.detail||{};
      if(v&&tid){setDetailId(tid);setView("detail");}
      else if(v){setView(v);}
    };
    window.addEventListener('shumai-nav',handler);
    return ()=>window.removeEventListener('shumai-nav',handler);
  },[]);

  const toggleM=useCallback(id=>{
    setMastered(p=>{const n=new Set(p);n.has(id)?n.delete(id):n.add(id);return n;});
  },[]);
  const addWrong=useCallback(id=>setWrongSet(p=>new Set([...p,id])),[]);
  const removeWrong=useCallback(id=>setWrongSet(p=>{const n=new Set(p);n.delete(id);return n;}),[]);
  const addBasicWrong=useCallback(id=>setBasicWrongSet(p=>new Set([...p,id])),[]);
  const removeBasicWrong=useCallback(id=>setBasicWrongSet(p=>{const n=new Set(p);n.delete(id);return n;}),[]);

  const activeNav=view==="detail"?"modules":view;

  // ── 诊断测试视图 ──────────────────────
  if(view==="quickdiag") return(
    <BPCtx.Provider value={bp}>
      <DiagQuickTest onComplete={(result)=>{
        handleDiagComplete(result);
        if(!result?.startTopic) setView("home");
      }}/>
    </BPCtx.Provider>
  );

  return(
    <BPCtx.Provider value={bp}>
    <div key={forceKey} style={{minHeight:"100vh",background:C.bg,color:C.text,
      fontFamily:"'PingFang SC','Noto Sans SC','Microsoft YaHei',sans-serif"}}>
      <style>{`
        *{box-sizing:border-box;margin:0;padding:0;}
        ::-webkit-scrollbar{width:4px;height:4px}
        ::-webkit-scrollbar-track{background:transparent}
        ::-webkit-scrollbar-thumb{background:${C.border2};border-radius:2px}
        input::placeholder{color:${C.muted}}
        button,select,input{font-family:inherit}
        select option{background:${C.s2};color:${C.text}}
        html,body{max-width:100vw;overflow-x:hidden}
        nav::-webkit-scrollbar{display:none}
        @keyframes pulse{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.6;transform:scale(1.15)}}
      `}</style>

      {/* HEADER */}
      <header style={{height:52,display:"flex",alignItems:"center",
        padding:bp.isMobile?"0 8px":"0 18px",
        background:C.s1,borderBottom:`1px solid ${C.border}`,
        position:"sticky",top:0,zIndex:101,gap:bp.isMobile?5:10}}>

        {/* Hamburger — tablet only (mobile uses bottom tabs) */}
        {bp.isTablet&&(
          <button onClick={()=>setSidebarOpen(o=>!o)}
            style={{padding:"5px 8px",borderRadius:6,cursor:"pointer",flexShrink:0,
              background:sidebarOpen?C.alg+"22":"none",
              border:`1px solid ${sidebarOpen?C.alg:C.border}`,
              color:sidebarOpen?C.alg:C.muted,fontSize:18,lineHeight:1}}>
            ☰
          </button>
        )}

        <div style={{fontWeight:900,fontSize:bp.isMobile?17:20,color:C.text,display:"flex",
          alignItems:"center",gap:bp.isMobile?4:7,whiteSpace:"nowrap",cursor:"pointer",flexShrink:0}}
          onClick={()=>setView("home")}>
          <span style={{color:C.alg,fontSize:bp.isMobile?20:24,fontWeight:900}}>∑</span>
          <span>数脉</span>
          {!bp.isMobile&&<span style={{fontSize:14,color:C.muted,fontWeight:400}}>ShuMai</span>}
        </div>
        {!bp.isMobile&&<div style={{width:1,height:22,background:C.border,flexShrink:0}}/>}

        <nav style={{display:"flex",gap:2,overflowX:"auto",flex:1,scrollbarWidth:"none",
          ...(bp.isMobile?{display:"none"}:{})}}>
          {NAV.map(n=>(
            <button key={n.id} onClick={()=>navigate(n.id)}
              style={{padding:bp.isMobile?"6px 8px":"5px 10px",borderRadius:6,
                fontSize:bp.isMobile?20:15,cursor:"pointer",
                border:"none",whiteSpace:"nowrap",flexShrink:0,
                background:activeNav===n.id?C.alg+"22":"transparent",
                color:activeNav===n.id?C.alg:C.muted,
                display:"flex",alignItems:"center",gap:3,position:"relative"}}>
              <span>{n.icon}</span>
              {!bp.isMobile&&<span>{n.label}</span>}
              {n.id==="wrong"&&wrongSet.size>0&&(
                <span style={{background:C.red,color:"white",fontSize:11,fontWeight:700,
                  padding:"1px 4px",borderRadius:10}}>{wrongSet.size}</span>
              )}
            </button>
          ))}
        </nav>

        {/* Right controls — responsive */}
        <div style={{display:"flex",alignItems:"center",gap:bp.isMobile?4:8,flexShrink:0}}>
          {!bp.isMobile&&<>
            <span style={{fontSize:15,color:C.muted}}>{mastered.size}/{TOPICS.length}</span>
            <div style={{width:56}}><Bar v={Math.round(mastered.size/TOPICS.length*100)} color={C.ok} h={5}/></div>
            {/* 清空记录按钮 */}
            {!showClearConfirm?(
              <button onClick={()=>setShowClearConfirm(true)} title="清空所有学习记录"
                style={{padding:"2px 8px",borderRadius:5,cursor:"pointer",fontSize:13,
                  background:"none",color:C.dim,border:`1px solid ${C.border}`,flexShrink:0}}>
                🗑
              </button>
            ):(
              <div style={{display:"flex",alignItems:"center",gap:4,
                background:C.red+"18",borderRadius:7,padding:"3px 8px",
                border:`1px solid ${C.red}44`}}>
                <span style={{fontSize:12,color:C.red,whiteSpace:"nowrap"}}>确认清空？</span>
                <button onClick={clearAllProgress}
                  style={{padding:"1px 8px",borderRadius:4,cursor:"pointer",
                    fontSize:12,background:C.red,color:"white",border:"none",fontWeight:700}}>
                  清空
                </button>
                <button onClick={()=>setShowClearConfirm(false)}
                  style={{padding:"1px 6px",borderRadius:4,cursor:"pointer",
                    fontSize:12,background:"none",color:C.muted,border:`1px solid ${C.border}`}}>
                  取消
                </button>
              </div>
            )}
            <div style={{width:1,height:22,background:C.border}}/>
          </>}

          {/* AI 模型 + Key */}
          <div style={{display:"flex",alignItems:"center",gap:4}}>
            {!bp.isMobile&&(
              <select value={aiModel} onChange={e=>{setAiModel(e.target.value);setShowKeyInput(false);}}
                style={{padding:"3px 8px",borderRadius:6,fontSize:14,background:C.s2,
                  border:`1px solid ${curColor}55`,color:curColor,
                  outline:"none",cursor:"pointer",fontWeight:600,maxWidth:140}}>
                <optgroup label="── DeepSeek">
                  {AI_MODELS.filter(m=>m.provider==="deepseek").map(m=>(
                    <option key={m.id} value={m.id}>{m.label} [{m.tag}]</option>
                  ))}
                </optgroup>
                <optgroup label="── 豆包（字节）">
                  {AI_MODELS.filter(m=>m.provider==="doubao").map(m=>(
                    <option key={m.id} value={m.id}>{m.label} [{m.tag}]</option>
                  ))}
                </optgroup>
              </select>
            )}
            {needKey&&(
              showKeyInput?(
                <div style={{display:"flex",alignItems:"center",gap:4}}>
                  <input value={curKey} onChange={e=>setKey(e.target.value)}
                    placeholder={keyPlaceholder} type="password"
                    style={{padding:"3px 8px",borderRadius:6,fontSize:14,
                      width:bp.isMobile?110:160,
                      background:C.s2,border:`1px solid ${curColor}55`,
                      color:C.text,outline:"none"}}/>
                  <button onClick={()=>setShowKeyInput(false)}
                    style={{padding:"2px 8px",borderRadius:5,cursor:"pointer",fontSize:14,
                      background:curColor,color:"white",border:"none",fontWeight:600}}>
                    确认
                  </button>
                </div>
              ):(
                <button onClick={()=>setShowKeyInput(true)}
                  style={{padding:"3px 9px",borderRadius:6,cursor:"pointer",fontSize:13,
                    background:curKey?curColor+"22":curColor,
                    color:curKey?curColor:"white",whiteSpace:"nowrap",
                    border:`1px solid ${curKey?curColor+"55":curColor}`,fontWeight:600}}>
                  {curKey?(bp.isMobile?"✓Key":"✓ Key已设置"):(bp.isMobile?"Key":"设置 Key")}
                </button>
              )
            )}
          </div>

          {/* 设置按钮 */}
          <button onClick={()=>setShowSettings(o=>!o)}
            title="设置"
            style={{padding:"6px 10px",borderRadius:8,cursor:"pointer",fontSize:22,lineHeight:1,
              background:showSettings?C.alg+"22":"none",flexShrink:0,
              color:showSettings?C.alg:C.muted,
              border:`1px solid ${showSettings?C.alg+"55":C.border}`}}>
            ⚙
          </button>
        </div>
      </header>

      {/* ── 设置面板 ── */}
      {showSettings&&(
        <>
          <div onClick={()=>setShowSettings(false)}
            style={{position:"fixed",inset:0,zIndex:199,background:"rgba(0,0,0,.4)"}}/>
          <div style={{position:"fixed",top:58,right:bp.isMobile?8:18,zIndex:200,
            background:C.s1,border:`1px solid ${C.border}`,borderRadius:14,
            padding:"18px 20px",minWidth:260,maxWidth:320,
            boxShadow:"0 8px 32px #000a"}}>
            <div style={{fontSize:16,fontWeight:700,color:C.text,marginBottom:14}}>
              ⚙ 外观设置
            </div>

            {/* 主题选择 */}
            <div style={{fontSize:13,color:C.muted,marginBottom:8,letterSpacing:"0.5px"}}>主题</div>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8,marginBottom:16}}>
              {[
                {id:"dark", label:"🌙 深色", preview:["#040810","#dce8f8"]},
                {id:"light",label:"☀️ 浅色", preview:["#f4f7fb","#1a2a3a"]},
                {id:"green",label:"🌿 护眼", preview:["#05120a","#cceedd"]},
                {id:"sepia",label:"📜 暖棕", preview:["#191510","#e8d4af"]},
              ].map(t=>(
                <button key={t.id} onClick={()=>applyTheme(t.id)}
                  style={{padding:"10px 12px",borderRadius:10,cursor:"pointer",
                    display:"flex",alignItems:"center",gap:8,
                    background:themeId===t.id?C.alg+"22":C.s2,
                    border:`2px solid ${themeId===t.id?C.alg:C.border}`,
                    color:C.text,fontSize:14,fontWeight:themeId===t.id?700:400}}>
                  <div style={{display:"flex",gap:3}}>
                    <div style={{width:14,height:14,borderRadius:3,background:t.preview[0],border:"1px solid #fff2"}}/>
                    <div style={{width:14,height:14,borderRadius:3,background:t.preview[1],border:"1px solid #fff2"}}/>
                  </div>
                  {t.label}
                  {themeId===t.id&&<span style={{marginLeft:"auto",color:C.alg,fontSize:16}}>✓</span>}
                </button>
              ))}
            </div>

            {/* 账号区 */}
            <div style={{borderTop:`1px solid ${C.border}`,paddingTop:12,marginBottom:12}}>
              <div style={{fontSize:13,color:C.muted,marginBottom:8}}>账号</div>
              {authUser?(
                <div>
                  <div style={{padding:"10px 14px",borderRadius:8,
                    background:C.s2,border:`1px solid ${C.border}`,
                    marginBottom:8}}>
                    <div style={{fontSize:14,fontWeight:700,color:C.text}}>
                      👤 {authUser.nickname}
                    </div>
                    <div style={{fontSize:12,color:C.muted,marginTop:2}}>
                      {authUser.phone}
                    </div>
                  </div>
                  <button onClick={()=>{handleLogout();setShowSettings(false);}}
                    style={{width:"100%",padding:"8px 14px",borderRadius:8,cursor:"pointer",
                      fontSize:14,background:"none",color:C.red,
                      border:`1px solid ${C.red}44`,textAlign:"left"}}>
                    🚪 退出登录
                  </button>
                </div>
              ):(
                <button onClick={()=>{setShowAuth(true);setShowSettings(false);}}
                  style={{width:"100%",padding:"9px 14px",borderRadius:8,cursor:"pointer",
                    fontSize:14,background:C.alg,color:"white",
                    border:"none",fontWeight:700,textAlign:"center"}}>
                  🔑 登录 / 注册
                </button>
              )}
            </div>

            {/* 清空记录 */}
            <div style={{borderTop:`1px solid ${C.border}`,paddingTop:12}}>
              <div style={{fontSize:13,color:C.muted,marginBottom:8}}>数据</div>
              {!showClearConfirm?(
                <button onClick={()=>setShowClearConfirm(true)}
                  style={{width:"100%",padding:"8px 14px",borderRadius:8,cursor:"pointer",fontSize:14,
                    background:"none",color:C.red,border:`1px solid ${C.red}44`,textAlign:"left"}}>
                  🗑 清空所有学习记录
                </button>
              ):(
                <div style={{display:"flex",gap:8}}>
                  <button onClick={()=>{clearAllProgress();setShowSettings(false);}}
                    style={{flex:1,padding:"7px",borderRadius:7,cursor:"pointer",fontSize:14,
                      background:C.red,color:"white",border:"none",fontWeight:700}}>
                    确认清空
                  </button>
                  <button onClick={()=>setShowClearConfirm(false)}
                    style={{flex:1,padding:"7px",borderRadius:7,cursor:"pointer",fontSize:14,
                      background:"none",color:C.muted,border:`1px solid ${C.border}`}}>
                    取消
                  </button>
                </div>
              )}
            </div>
          </div>
        </>
      )}

      {/* 登录注册弹窗 */}
      {showAuth&&(
        <AuthModal
          onClose={()=>setShowAuth(false)}
          onLogin={(user,token)=>{handleLogin(user,token);}}
        />
      )}

      {/* BODY */}
      <div style={{display:"flex",height:"calc(100vh - 52px)",position:"relative",overflow:"hidden"}}>
        {/* Tablet backdrop */}
        {bp.isTablet&&sidebarOpen&&(
          <div onClick={()=>setSidebarOpen(false)}
            style={{position:"fixed",inset:0,top:52,background:"rgba(0,0,0,.55)",zIndex:99}}/>
        )}
        {/* SIDEBAR — hidden on mobile, icon-only on tablet, full on desktop */}
        {!bp.isMobile&&(
        <aside style={{
          width: bp.isTablet ? (sidebarOpen ? 240 : 44) : 240,
          background:C.s1,borderRight:`1px solid ${C.border}`,
          flexShrink:0,overflowY:"auto",paddingTop:8,
          transition:"width .22s ease",
          ...(bp.isTablet ? {
            position:"fixed",top:52,left:0,bottom:0,zIndex:100,
            overflow:"hidden",
          } : {}),
        }}
          onMouseEnter={()=>bp.isTablet&&setSidebarOpen(true)}
          onMouseLeave={()=>bp.isTablet&&setSidebarOpen(false)}
        >
          {bp.isTablet ? (
            /* ── TABLET: 图标侧边栏 ── */
            <div style={{width:240,paddingTop:4}}>
              {/* 图标导航项 */}
              {[
                {icon:"⊡", label:"首页",     v:"home",    badge:0,            color:C.alg},
                {icon:"▦", label:"四模块",   v:"modules", badge:0,            color:C.geo},
                {icon:"✎", label:"真题刷题", v:"practice",badge:0,            color:C.sta},
                {icon:"📋",label:"错题本",   v:"wrong",   badge:wrongSet.size+basicWrongSet.size, color:C.red},
                {icon:"◎", label:"知识图谱", v:"graph",   badge:0,            color:C.alg},
                {icon:"◈", label:"智能诊断", v:"diag",    badge:0,            color:C.cyan},
                {icon:"📄",label:"试卷分析", v:"paper",   badge:0,            color:"#a78bfa"},
                {icon:"📸",label:"作业识别", v:"ocr",     badge:0,            color:"#22d3ee"},
                {icon:"🔥",label:"考前冲刺", v:"sprint",  badge:0,            color:C.red},
                {icon:"🤖",label:"学伴Agent",v:"agent",  badge:0,            color:"#a78bfa"},
              ].map(item=>{
                const isActive = view===item.v;
                return(
                  <button key={item.v} onClick={()=>{navigate(item.v);setSidebarOpen(false);}}
                    style={{width:"100%",display:"flex",alignItems:"center",
                      padding:"8px 0 8px 10px",gap:10,
                      background:isActive?C.alg+"18":"none",
                      border:"none",cursor:"pointer",position:"relative",
                      borderLeft:isActive?`2px solid ${C.alg}`:"2px solid transparent"}}>
                    <span style={{fontSize:18,minWidth:24,textAlign:"center",flexShrink:0,
                      color:isActive?C.alg:item.color}}>{item.icon}</span>
                    <span style={{fontSize:14,color:isActive?C.alg:C.muted,
                      whiteSpace:"nowrap",opacity:sidebarOpen?1:0,
                      transition:"opacity .15s",fontWeight:isActive?700:400}}>
                      {item.label}
                    </span>
                    {item.badge>0&&(
                      <span style={{
                        position:"absolute",top:6,left:22,
                        background:C.red,color:"white",fontSize:9,fontWeight:700,
                        minWidth:14,height:14,borderRadius:7,
                        display:"flex",alignItems:"center",justifyContent:"center",
                        padding:"0 2px",
                      }}>{item.badge>99?"99+":item.badge}</span>
                    )}
                  </button>
                );
              })}

              {/* 掌握进度（展开时显示） */}
              {sidebarOpen&&(
                <div style={{padding:"8px 12px",borderTop:`1px solid ${C.border}`,marginTop:4}}>
                  <div style={{fontSize:11,color:C.dim,letterSpacing:"1.5px",padding:"4px 0 6px",textTransform:"uppercase"}}>掌握进度</div>
                  {Object.entries(DOM).map(([k,d])=>{
                    const all=TOPICS.filter(t=>t.domain===k),done=all.filter(t=>mastered.has(t.id)).length;
                    return(
                      <div key={k} style={{marginBottom:7}}>
                        <div style={{display:"flex",justifyContent:"space-between",fontSize:12,color:d.color,marginBottom:2}}>
                          <span>{d.name}</span><span>{done}/{all.length}</span>
                        </div>
                        <Bar v={Math.round(done/all.length*100)} color={d.color} h={3}/>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          ) : (
            /* ── DESKTOP: 个人学习仪表盘侧边栏 ── */
            <DesktopSidebar
              mastered={mastered}
              wrongSet={wrongSet}
              basicWrongSet={basicWrongSet}
              navigate={navigate}
            />
          )}
        </aside>
        )}

        {/* Tablet sidebar overlay backdrop */}
        {bp.isTablet&&sidebarOpen&&(
          <div style={{position:"fixed",inset:0,top:52,zIndex:99,pointerEvents:"none"}}/>
        )}

        {/* MAIN */}
        <main style={{flex:1,overflowY:"auto",minWidth:0,
          ...(bp.isMobile?{paddingBottom:"calc(56px + env(safe-area-inset-bottom))"}:{}),
          ...(bp.isTablet?{marginLeft:44}:{})}}>
          {view==="home"&&<PageHome mastered={mastered} wrongSet={wrongSet} progress={0} onNav={navigate}/>}
          {view==="me"&&<PageMe
            mastered={mastered} wrongSet={wrongSet} basicWrongSet={basicWrongSet}
            aiModel={aiModel} setAiModel={setAiModel}
            dsKey={dsKey} setDsKey={setDsKey}
            dbKey={dbKey} setDbKey={setDbKey}
            onNav={navigate} onClear={clearAllProgress}
          />}
          {view==="graph"&&<ErrorBoundary label="知识图谱"><PageGraph mastered={mastered} onNav={navigate}/></ErrorBoundary>}
          {view==="modules"&&<PageModules mastered={mastered} wrongSet={wrongSet} onNav={navigate}
            addWrong={addWrong} removeWrong={removeWrong}
            basicWrongSet={basicWrongSet} addBasicWrong={addBasicWrong} removeBasicWrong={removeBasicWrong}/>}
          {view==="detail"&&<PageDetail topicId={detailId} mastered={mastered} onToggle={toggleM}
            onNav={navigate} wrongSet={wrongSet} addWrong={addWrong} removeWrong={removeWrong}/>}
          {view==="methods"&&<PageMethods onNav={navigate}/>}
          {view==="practice"&&<PagePractice wrongSet={wrongSet} addWrong={addWrong} removeWrong={removeWrong}/>}
          {view==="wrong"&&<ErrorBoundary label="错题本"><PageWrong wrongSet={wrongSet} removeWrong={removeWrong} mastered={mastered} onNav={navigate}/></ErrorBoundary>}
          {view==="diag"&&<ErrorBoundary label="智能诊断"><PageDiag mastered={mastered} wrongSet={wrongSet} onNav={navigate}/></ErrorBoundary>}
          {view==="predict"&&<PagePredict/>}
          {view==="paper"&&<ErrorBoundary label="试卷分析"><PagePaper mastered={mastered} onNav={navigate}/></ErrorBoundary>}
          {view==="sprint"&&<ErrorBoundary label="考前冲刺"><PageSprint mastered={mastered} wrongSet={wrongSet} onNav={navigate}/></ErrorBoundary>}
          {view==="ocr"&&<ErrorBoundary label="作业识别"><PageOCR onNav={navigate}/></ErrorBoundary>}
          {view==="teacher"&&<ErrorBoundary label="教师端"><PageTeacher onNav={navigate}/></ErrorBoundary>}
          {view==="parent"&&<ErrorBoundary label="家长端"><PageParent onNav={navigate}/></ErrorBoundary>}
          {view==="vip"&&<ErrorBoundary label="会员中心"><PageVIP onNav={navigate}/></ErrorBoundary>}
          {view==="agent"&&<ErrorBoundary label="学伴Agent"><PageAgent onNav={navigate}/></ErrorBoundary>}
          {view==="admin"&&<ErrorBoundary label="后台管理"><PageAdmin onNav={navigate}/></ErrorBoundary>}
          {view==="morning"&&<PageMorning mastered={mastered} wrongSet={wrongSet} basicWrongSet={basicWrongSet}/>}
        </main>
        <AIFloat context={detailId ? {topicName: TOPIC_MAP[detailId]?.name} : null}/>
      </div>
      {/* 手机端底部 Tab 栏 */}
      {bp.isMobile&&(
        <BottomTabBar
          view={view}
          navigate={navigate}
          wrongCount={wrongSet.size}
          basicWrongCount={basicWrongSet.size}
        />
      )}
    </div>
    </BPCtx.Provider>
  );
}

