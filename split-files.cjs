/**
 * split-files.cjs — 将 shumai-v7-1.jsx 拆分为多个模块文件
 * 
 * 拆分方案：
 *   src/data/constants.js  — C色板, METHODS, DOM, AI_MODELS, QUICK_DIAG_QS
 *   src/data/topics.js     — TOPICS 数组 (194个知识点)
 *   src/data/exam-qs.js    — EXAM_QS 数组 (624道真题)
 *   src/data/basics.js     — BASICS_BY_TOPIC + TOPIC_GROUPS + FINAL_GROUPS
 *   src/data/graph.js      — GRAPH + EDGES 生成逻辑
 *   src/App.jsx            — 所有 UI 组件 + App
 */

const fs = require('fs');
const path = require('path');

const SRC = 'shumai-v7-1.jsx';
const lines = fs.readFileSync(SRC, 'utf8').split('\n');
const total = lines.length;
console.log(`✓ 读取 ${SRC}：${total} 行`);

// 备份
fs.copyFileSync(SRC, SRC + '.pre-split.bak');
console.log(`✓ 备份 → ${SRC}.pre-split.bak`);

// Helper: 提取行范围（1-indexed, inclusive）
function extract(start, end) {
  return lines.slice(start - 1, end).join('\n');
}

// 查找行号（精确匹配行首）
function findLine(prefix) {
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].startsWith(prefix)) return i + 1; // 1-indexed
  }
  throw new Error(`找不到: "${prefix}"`);
}

// 查找从某行开始，向后找到 ]; 或 }; 结束行
function findClose(startLine, closer = '];') {
  for (let i = startLine - 1; i < lines.length; i++) {
    if (lines[i].trimStart().startsWith(closer)) return i + 1;
  }
  throw new Error(`从第${startLine}行找不到 "${closer}"`);
}

// === 定位各区域 ===
const L_C = findLine('const C = {');
const L_METHODS = findLine('const METHODS = [');
const L_METHODS_END = findClose(L_METHODS);
const L_TOPICS = findLine('const TOPICS = [');
const L_TOPICS_END = findClose(L_TOPICS);
const L_TOPIC_MAP = findLine('const TOPIC_MAP =');
const L_DOM = findLine('const DOM = {');
const L_EXAM_QS = findLine('const EXAM_QS = [');
const L_EXAM_QS_END = findClose(L_EXAM_QS);
const L_GRAPH = findLine('const GRAPH = {');

// Find end of EDGES generation (after TOPICS.forEach block)
let L_GRAPH_BLOCK_END;
for (let i = L_GRAPH - 1; i < lines.length; i++) {
  if (lines[i].startsWith('});') && i > L_GRAPH + 10) {
    L_GRAPH_BLOCK_END = i + 1;
    break;
  }
}

const L_BASICS = findLine('const BASICS_BY_TOPIC = {');
const L_TOPIC_GROUPS = findLine('const TOPIC_GROUPS = [');
const L_FINAL_GROUPS = findLine('const FINAL_GROUPS = [');
const L_FINAL_GROUPS_END = findClose(L_FINAL_GROUPS);
const L_QUICK_DIAG = findLine('const QUICK_DIAG_QS = [');
const L_QUICK_DIAG_END = findClose(L_QUICK_DIAG);
const L_AI_MODELS = findLine('const AI_MODELS = [');
const L_AI_MODELS_END = findClose(L_AI_MODELS);
const L_CALLAI = findLine('async function callAI(');
const L_CALLAI_COMPAT = findLine('const callClaude = callAI;');
const L_MICRO = findLine('const Tag = ');
const L_APP = findLine('export default function App()');

console.log('\n=== 区域定位 ===');
console.log(`C色板:        ${L_C}`);
console.log(`METHODS:      ${L_METHODS}-${L_METHODS_END}`);
console.log(`TOPICS:       ${L_TOPICS}-${L_TOPICS_END}`);
console.log(`TOPIC_MAP:    ${L_TOPIC_MAP}`);
console.log(`DOM:          ${L_DOM}`);
console.log(`EXAM_QS:      ${L_EXAM_QS}-${L_EXAM_QS_END}`);
console.log(`GRAPH block:  ${L_GRAPH}-${L_GRAPH_BLOCK_END}`);
console.log(`BASICS:       ${L_BASICS}`);
console.log(`TOPIC_GROUPS: ${L_TOPIC_GROUPS}`);
console.log(`FINAL_GROUPS: ${L_FINAL_GROUPS}-${L_FINAL_GROUPS_END}`);
console.log(`QUICK_DIAG:   ${L_QUICK_DIAG}-${L_QUICK_DIAG_END}`);
console.log(`AI_MODELS:    ${L_AI_MODELS}-${L_AI_MODELS_END}`);
console.log(`callAI:       ${L_CALLAI}`);
console.log(`Micro comps:  ${L_MICRO}`);
console.log(`App:          ${L_APP}`);

// === 创建目录 ===
fs.mkdirSync('src/data', { recursive: true });

// === 1. src/data/constants.js ===
// C色板(行22-35) + METHODS(行40-195)
const constantsContent = `// 数脉设计系统常量
// 自动从 shumai-v7-1.jsx 拆分生成

${extract(L_C, L_C + 13)}

${extract(L_METHODS - 3, L_METHODS_END)}
`;
fs.writeFileSync('src/data/constants.js', constantsContent);
console.log(`\n✓ src/data/constants.js (C + METHODS)`);

// === 2. src/data/topics.js ===
const topicsContent = `// 数脉知识点数据 — 194个知识点
// 自动从 shumai-v7-1.jsx 拆分生成

${extract(L_TOPICS - 3, L_TOPICS_END)}

export { TOPICS };
`;
fs.writeFileSync('src/data/topics.js', topicsContent);
console.log(`✓ src/data/topics.js (TOPICS[])`);

// === 3. src/data/exam-qs.js ===
// 找到 EXAM_QS 上面的注释块
let examCommentStart = L_EXAM_QS;
for (let i = L_EXAM_QS - 2; i >= L_EXAM_QS - 10; i--) {
  if (lines[i].includes('════')) { examCommentStart = i + 1; break; }
}
const examContent = `// 数脉中考真题库 — 624道题 (id:0-623)
// 自动从 shumai-v7-1.jsx 拆分生成

${extract(examCommentStart, L_EXAM_QS_END)}

export { EXAM_QS };
`;
fs.writeFileSync('src/data/exam-qs.js', examContent);
console.log(`✓ src/data/exam-qs.js (EXAM_QS[])`);

// === 4. src/data/basics.js ===
// BASICS_BY_TOPIC + TOPIC_GROUPS + FINAL_GROUPS
let basicsCommentStart = L_BASICS;
for (let i = L_BASICS - 2; i >= L_BASICS - 10; i--) {
  if (lines[i].includes('════')) { basicsCommentStart = i + 1; break; }
}
const basicsContent = `// 数脉习题库 — 基础题+题组+压轴
// 自动从 shumai-v7-1.jsx 拆分生成

${extract(basicsCommentStart, L_FINAL_GROUPS_END)}

export { BASICS_BY_TOPIC, TOPIC_GROUPS, FINAL_GROUPS };
`;
fs.writeFileSync('src/data/basics.js', basicsContent);
console.log(`✓ src/data/basics.js (BASICS_BY_TOPIC + TOPIC_GROUPS + FINAL_GROUPS)`);

// === 5. src/data/graph.js ===
let graphCommentStart = L_GRAPH;
for (let i = L_GRAPH - 2; i >= L_GRAPH - 10; i--) {
  if (lines[i].includes('════')) { graphCommentStart = i + 1; break; }
}
// GRAPH needs TOPICS and TOPIC_MAP, so it imports them
const graphContent = `// 数脉知识点依赖图
// 自动从 shumai-v7-1.jsx 拆分生成

import { TOPICS } from './topics.js';

const TOPIC_MAP = Object.fromEntries(TOPICS.map(t=>[t.id,t]));

${extract(graphCommentStart, L_GRAPH_BLOCK_END)}

export { GRAPH, EDGES, TOPIC_MAP };
`;
fs.writeFileSync('src/data/graph.js', graphContent);
console.log(`✓ src/data/graph.js (GRAPH + EDGES + TOPIC_MAP)`);

// === 6. src/data/diag.js (QUICK_DIAG_QS) ===
const diagContent = `// 数脉快速诊断题
// 自动从 shumai-v7-1.jsx 拆分生成

${extract(L_QUICK_DIAG - 4, L_QUICK_DIAG_END)}

export { QUICK_DIAG_QS };
`;
fs.writeFileSync('src/data/diag.js', diagContent);
console.log(`✓ src/data/diag.js (QUICK_DIAG_QS)`);

// === 7. src/data/ai.js (AI_MODELS + callAI + TTS) ===
// AI_MODELS + window globals + callAI function + callClaude + TTS functions
// Find TTS section end (before MICRO COMPONENTS)
const aiContent = `// 数脉 AI 配置与调用
// 自动从 shumai-v7-1.jsx 拆分生成

${extract(L_AI_MODELS - 3, L_MICRO - 3)}

export { AI_MODELS, callAI, callClaude };
`;
fs.writeFileSync('src/data/ai.js', aiContent);
console.log(`✓ src/data/ai.js (AI_MODELS + callAI + TTS)`);

// === 8. src/App.jsx — UI 组件 ===
// Contains: import line, useBP/BPCtx, DOM constant, TOPIC_MAP ref,
// micro components (Tag/Bar/etc), all Page components, App component

// Build the import block
const appImports = `import { useState, useRef, useEffect, useCallback, useMemo, createContext, useContext, Component } from "react";
import { C, METHODS } from "./data/constants.js";
import { TOPICS } from "./data/topics.js";
import { EXAM_QS } from "./data/exam-qs.js";
import { BASICS_BY_TOPIC, TOPIC_GROUPS, FINAL_GROUPS } from "./data/basics.js";
import { GRAPH, EDGES, TOPIC_MAP } from "./data/graph.js";
import { QUICK_DIAG_QS } from "./data/diag.js";
import { AI_MODELS, callAI, callClaude } from "./data/ai.js";
`;

// BPCtx (lines 3-17)
const bpBlock = extract(3, 17);

// DOM constant
const domLine = lines[L_DOM - 1]; // single line

// Micro components to App end
const uiBlock = extract(L_MICRO, total);

const appContent = `${appImports}
/* ── Responsive Breakpoint System ──── */
${bpBlock}

const DOM = ${domLine.replace('const DOM = ', '')};

${uiBlock}
`;

fs.writeFileSync('src/App.jsx', appContent);
console.log(`✓ src/App.jsx (UI 组件)`);

// === 9. Update src/main.jsx ===
const mainContent = `import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
`;
fs.writeFileSync('src/main.jsx', mainContent);
console.log(`✓ src/main.jsx (更新 import 路径)`);

// === Summary ===
console.log('\n=== 拆分完成 ===');
const files = [
  'src/data/constants.js', 'src/data/topics.js', 'src/data/exam-qs.js',
  'src/data/basics.js', 'src/data/graph.js', 'src/data/diag.js',
  'src/data/ai.js', 'src/App.jsx', 'src/main.jsx'
];
for (const f of files) {
  const stat = fs.statSync(f);
  const lineCount = fs.readFileSync(f, 'utf8').split('\n').length;
  console.log(`  ${f.padEnd(25)} ${lineCount} 行  ${(stat.size/1024).toFixed(0)} KB`);
}
console.log(`\n原文件 ${SRC} 未修改（备份在 ${SRC}.pre-split.bak）`);
console.log('下一步：运行 npm run dev 验证构建');
