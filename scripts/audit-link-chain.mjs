#!/usr/bin/env node

import fs from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL, fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const DEFAULT_PROFILE = {
  label: '初中数学链路审计',
  paths: {
    app: 'src/App.jsx',
    topics: 'src/data/topics.js',
    basics: 'src/data/basics.js',
    graph: 'src/data/graph.js',
    exams: 'src/data/exam-qs.js',
  },
  exports: {
    topics: 'TOPICS',
    basicsByTopic: 'BASICS_BY_TOPIC',
    topicGroups: 'TOPIC_GROUPS',
    finalGroups: 'FINAL_GROUPS',
    graph: 'GRAPH',
    topicMap: 'TOPIC_MAP',
    exams: 'EXAM_QS',
  },
  uiKeywords: [
    '向上提升',
    '向下补差',
    '查看完整知识点',
    '去练推荐题',
    '进入综合真题',
    '前置知识补差',
    '题组训练',
    '压轴题组',
    '10年真题',
  ],
};

function parseArgs(argv) {
  const out = { json: false, config: null };
  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === '--json') out.json = true;
    if (arg === '--config') out.config = argv[i + 1] || null;
  }
  return out;
}

function resolvePath(p, baseDir = ROOT) {
  if (!p) return null;
  return path.isAbsolute(p) ? p : path.resolve(baseDir, p);
}

async function readJsonConfig(configPath) {
  const abs = resolvePath(configPath);
  const raw = await fs.readFile(abs, 'utf8');
  const cfg = JSON.parse(raw);
  const baseDir = path.dirname(abs);
  return {
    label: cfg.label || DEFAULT_PROFILE.label,
    paths: {
      ...DEFAULT_PROFILE.paths,
      ...(cfg.paths || {}),
    },
    exports: {
      ...DEFAULT_PROFILE.exports,
      ...(cfg.exports || {}),
    },
    uiKeywords: Array.isArray(cfg.uiKeywords) && cfg.uiKeywords.length
      ? cfg.uiKeywords
      : DEFAULT_PROFILE.uiKeywords,
    baseDir,
  };
}

async function loadModule(relPath, baseDir = ROOT) {
  const abs = resolvePath(relPath, baseDir);
  return import(pathToFileURL(abs).href);
}

function pick(mod, exportName) {
  return mod[exportName] ?? mod.default;
}

function inc(map, key, value) {
  if (!map.has(key)) map.set(key, []);
  map.get(key).push(value);
}

function sample(list, n = 10) {
  return list.slice(0, n);
}

function scanKeywords(source, keywords) {
  const lines = source.split(/\r?\n/);
  return keywords.map(keyword => {
    const hits = [];
    lines.forEach((line, idx) => {
      if (line.includes(keyword)) hits.push(idx + 1);
    });
    return { keyword, count: hits.length, lines: hits.slice(0, 6) };
  });
}

function formatLines(items) {
  return items.map(item => {
    const lines = item.lines.length ? ` @ ${item.lines.join(',')}` : '';
    return `- ${item.keyword}: ${item.count}${lines}`;
  }).join('\n');
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const profile = args.config ? await readJsonConfig(args.config) : DEFAULT_PROFILE;
  const baseDir = profile.baseDir || ROOT;

  const [topicsMod, basicsMod, graphMod, examsMod, appSource] = await Promise.all([
    loadModule(profile.paths.topics, baseDir),
    loadModule(profile.paths.basics, baseDir),
    loadModule(profile.paths.graph, baseDir),
    loadModule(profile.paths.exams, baseDir),
    fs.readFile(resolvePath(profile.paths.app, baseDir), 'utf8'),
  ]);

  const TOPICS = pick(topicsMod, profile.exports.topics);
  const BASICS_BY_TOPIC = pick(basicsMod, profile.exports.basicsByTopic);
  const TOPIC_GROUPS = pick(basicsMod, profile.exports.topicGroups);
  const FINAL_GROUPS = pick(basicsMod, profile.exports.finalGroups);
  const GRAPH = pick(graphMod, profile.exports.graph);
  const EXAM_QS = pick(examsMod, profile.exports.exams);
  const FULL_TOPIC_MAP = Object.fromEntries(TOPICS.map(t => [t.id, t]));

  if (!Array.isArray(TOPICS) || !BASICS_BY_TOPIC || !Array.isArray(TOPIC_GROUPS) || !Array.isArray(FINAL_GROUPS) || !GRAPH || !Array.isArray(EXAM_QS)) {
    throw new Error('审计脚本读取到的数据导出不完整，请检查 profile.exports 配置。');
  }

  const basicsFlat = Object.entries(BASICS_BY_TOPIC).flatMap(([topicId, qs]) =>
    (qs || []).map(q => ({ ...q, topicId }))
  );
  const basicsTopicCount = Object.keys(BASICS_BY_TOPIC).length;
  const basicsCount = basicsFlat.length;
  const basicsWithUp = basicsFlat.filter(q => (q.upLink || []).length > 0).length;
  const basicsWithDown = basicsFlat.filter(q => (q.downLink || []).length > 0).length;
  const basicUpTargets = new Set(basicsFlat.flatMap(q => q.upLink || []));
  const basicDownTargets = new Set(basicsFlat.flatMap(q => q.downLink || []));

  const groupQuestionCount = TOPIC_GROUPS.reduce((sum, g) => sum + (g.questions?.length || 0), 0);
  const finalQuestionCount = FINAL_GROUPS.reduce((sum, g) => sum + (g.questions?.length || 0), 0);

  const topicBasicsRefs = new Map();
  const topicGroupRefs = new Map();
  const topicFinalRefs = new Map();
  for (const [topicId, qs] of Object.entries(BASICS_BY_TOPIC)) {
    topicBasicsRefs.set(topicId, (qs || []).length);
  }
  for (const group of TOPIC_GROUPS) {
    (group.topics || []).forEach(topicId => inc(topicGroupRefs, topicId, group.id));
  }
  for (const group of FINAL_GROUPS) {
    (group.topics || []).forEach(topicId => inc(topicFinalRefs, topicId, group.id));
  }

  const graphKeys = Object.keys(GRAPH);
  const graphOnlyKeys = graphKeys.filter(id => !TOPICS.some(t => t.id === id));
  const graphMissingTopics = TOPICS.filter(t => !GRAPH[t.id]);

  const invalidTopicPreRefs = [];
  const invalidTopicRelRefs = [];
  TOPICS.forEach(topic => {
    (topic.pre || []).forEach(id => {
      if (!FULL_TOPIC_MAP[id]) invalidTopicPreRefs.push(`${topic.id} -> ${id}`);
    });
    (topic.rel || []).forEach(id => {
      if (!FULL_TOPIC_MAP[id]) invalidTopicRelRefs.push(`${topic.id} -> ${id}`);
    });
  });

  const invalidGraphRefs = [];
  Object.entries(GRAPH).forEach(([topicId, node]) => {
    (node.pre || []).forEach(id => {
      if (!FULL_TOPIC_MAP[id]) invalidGraphRefs.push(`${topicId}.pre -> ${id}`);
    });
    (node.next || []).forEach(id => {
      if (!FULL_TOPIC_MAP[id]) invalidGraphRefs.push(`${topicId}.next -> ${id}`);
    });
    (node.groupIds || []).forEach(id => {
      if (!TOPIC_GROUPS.some(g => g.id === id)) invalidGraphRefs.push(`${topicId}.groupIds -> ${id}`);
    });
    (node.finalIds || []).forEach(id => {
      if (!FINAL_GROUPS.some(g => g.id === id)) invalidGraphRefs.push(`${topicId}.finalIds -> ${id}`);
    });
  });

  const topicCountMismatches = [];
  TOPICS.forEach(topic => {
    const basicsActual = topicBasicsRefs.get(topic.id) || 0;
    const groupsActual = (topicGroupRefs.get(topic.id) || []).length;
    const finalsActual = (topicFinalRefs.get(topic.id) || []).length;
    const diffs = [];
    if (typeof topic.basicsCount === 'number' && topic.basicsCount !== basicsActual) {
      diffs.push(`基础题 ${topic.basicsCount}≠${basicsActual}`);
    }
    if (typeof topic.groupCount === 'number' && topic.groupCount !== groupsActual) {
      diffs.push(`题组 ${topic.groupCount}≠${groupsActual}`);
    }
    if (typeof topic.finalCount === 'number' && topic.finalCount !== finalsActual) {
      diffs.push(`压轴 ${topic.finalCount}≠${finalsActual}`);
    }
    if (diffs.length) topicCountMismatches.push({ id: topic.id, name: topic.name, diffs });
  });

  const examWithoutTopic = EXAM_QS.filter(q => !q.topic);
  const examWithoutMethods = EXAM_QS.filter(q => !q.methods || q.methods.length === 0);

  const keywordHits = scanKeywords(appSource, profile.uiKeywords);

  const report = {
    label: profile.label,
    overview: {
      topics: TOPICS.length,
      graphNodes: graphKeys.length,
      basicsTopics: basicsTopicCount,
      basicsCount,
      topicGroups: TOPIC_GROUPS.length,
      topicGroupQuestions: groupQuestionCount,
      finalGroups: FINAL_GROUPS.length,
      finalGroupQuestions: finalQuestionCount,
      exams: EXAM_QS.length,
    },
    coverage: {
      basicsWithUp,
      basicsWithDown,
      basicsUpTargets: basicUpTargets.size,
      basicsDownTargets: basicDownTargets.size,
      topicsWithGraph: TOPICS.length - graphMissingTopics.length,
      graphMissingTopics: graphMissingTopics.length,
      topicPreMissing: invalidTopicPreRefs.length,
      topicRelMissing: invalidTopicRelRefs.length,
      graphInvalidRefs: invalidGraphRefs.length,
      examWithoutTopic: examWithoutTopic.length,
      examWithoutMethods: examWithoutMethods.length,
    },
    mismatches: {
      topicCountMismatches: topicCountMismatches.length,
      samples: sample(topicCountMismatches, 12),
    },
    ui: keywordHits,
    graphOnlyKeys,
    graphMissingTopics,
    invalidTopicPreRefs,
    invalidTopicRelRefs,
    invalidGraphRefs,
  };

  if (args.json) {
    console.log(JSON.stringify(report, null, 2));
    return;
  }

  console.log(`=== ${profile.label} ===`);
  console.log('[数据概览]');
  console.log(`- 知识点: ${report.overview.topics}`);
  console.log(`- 核心图谱节点: ${report.overview.graphNodes}`);
  console.log(`- 基础题挂载主题: ${report.overview.basicsTopics} 个主题 / ${report.overview.basicsCount} 道题`);
  console.log(`- 题组: ${report.overview.topicGroups} 组 / ${report.overview.topicGroupQuestions} 道题`);
  console.log(`- 压轴: ${report.overview.finalGroups} 组 / ${report.overview.finalGroupQuestions} 道题`);
  console.log(`- 真题: ${report.overview.exams} 道`);

  console.log('[覆盖检查]');
  console.log(`- 基础题 upLink: ${report.coverage.basicsWithUp}/${report.overview.basicsCount}`);
  console.log(`- 基础题 downLink: ${report.coverage.basicsWithDown}/${report.overview.basicsCount}`);
  console.log(`- 真题 topic: ${report.coverage.examWithoutTopic === 0 ? '100%' : `${report.coverage.examWithoutTopic} 条缺失`}`);
  console.log(`- 真题 methods: ${report.coverage.examWithoutMethods === 0 ? '100%' : `${report.coverage.examWithoutMethods} 条缺失`}`);
  console.log(`- topic.pre / rel 无效引用: ${report.coverage.topicPreMissing + report.coverage.topicRelMissing}`);
  console.log(`- GRAPH 无效引用: ${report.coverage.graphInvalidRefs}`);
  console.log(`- 图谱未覆盖知识点: ${report.coverage.graphMissingTopics}`);
  if (report.graphOnlyKeys.length) {
    console.log(`- GRAPH 独有节点: ${report.graphOnlyKeys.join('、')}`);
  }

  console.log('[一致性检查]');
  console.log(`- 主题级数量不一致: ${report.mismatches.topicCountMismatches}`);
  if (report.mismatches.samples.length) {
    report.mismatches.samples.forEach(item => {
      console.log(`  · ${item.name} (${item.id})：${item.diffs.join('；')}`);
    });
  }

  console.log('[缺口样本]');
  console.log(`- topic.pre / rel: ${report.invalidTopicPreRefs.length + report.invalidTopicRelRefs.length}`);
  sample([...report.invalidTopicPreRefs, ...report.invalidTopicRelRefs], 8).forEach(item => {
    console.log(`  · ${item}`);
  });
  console.log(`- GRAPH: ${report.invalidGraphRefs.length}`);
  sample(report.invalidGraphRefs, 8).forEach(item => {
    console.log(`  · ${item}`);
  });

  console.log('[页面入口关键词]');
  console.log(formatLines(keywordHits));

  console.log('[结论]');
  console.log('- 当前链路不是空的，核心路径已经有数据和 UI 入口。');
  console.log('- 但“每个知识点、每道题都完整上下串联”的目标还没有全量达成，脚本会继续作为固定审计工具保留。');
}

main().catch(err => {
  console.error(`审计失败：${err.message}`);
  process.exitCode = 1;
});
