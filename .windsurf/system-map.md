# 数脉系统地图（供 AI 助手恢复上下文）

> 最后更新：2026-04-29

## 核心文件（拆分后 2026-04-27）

| 文件 | 用途 | 行数 |
|------|------|------|
| `src/App.jsx` | UI 组件 + AI/TTS 逻辑 | ~5440 |
| `src/data/topics.js` | 194 知识点（TOPICS） | 2739 |
| `src/data/exam-qs.js` | 624 道真题（EXAM_QS） | 4942 |
| `src/data/basics.js` | 习题（BASICS+GROUPS+FINALS） | 1723 |
| `src/data/graph.js` | 依赖图（GRAPH+EDGES+TOPIC_MAP） | 63 |
| `src/data/constants.js` | 色板 C + METHODS | 179 |
| `src/data/diag.js` | 诊断题（QUICK_DIAG_QS） | 59 |
| `src/main.jsx` | Vite 入口 | 9 |
| `server/index.js` | Express 主入口 | 57 |
| `server/bot.js` | ClawBot 微信机器人 | 410 |
| `server/prompts/tutor.js` | RTF 结构化提示词（6场景） | 220 |
| `server/api/ai.js` | AI 接口（explain/wrong/chat 等5个） | 180 |
| `server/api/auth.js` | 认证（注册/登录/JWT） | 60 |
| `server/api/questions.js` | 题库 API + 限流 | 85 |
| `server/api/progress.js` | 进度+错题 API | 80 |
| `server/api/wechat.js` | 微信绑定状态 API | 40 |
| `server/api/paper.js` | 试卷分析+模拟卷 API | 190 |
| `server/api/daily.js` | 每日任务+遗忘曲线 API | 32 |
| `server/services/daily.js` | 任务生成+复习调度服务 | 100 |
| `server/services/cron-tasks.js` | T1定时任务+周报+冲刺服务 | 145 |
| `server/api/admin.js` | 管理端 API（配置/用户/统计/触发） | 170 |
| `server/api/ocr.js` | OCR+M1搜题+M2变形题+M3错误分析 API | 433 |
| `server/api/teacher.js` | 教师端 API（班级/学情/AI周报/出卷） | 299 |
| `server/api/parent.js` | 家长端 API（绑定/每日摘要/周报） | 232 |
| `server/api/subscription.js` | 收费体系 API（free/VIP/Pro套餐） | 230 |
| `server/schema.sql` | 数据库建表脚本（含classes/class_students） | 107 |
| `shumai-v7-1.jsx` | 旧主文件（已不使用，保留备份） | 13441 |

## 代码结构（src/App.jsx 行号分布）

```
行 1-7         import 声明（数据从 data/*.js 导入）
行 9-23        useBP() 响应式 hook + BPCtx
行 25          DOM 领域常量
行 27-150      微组件（Tag/Bar/Dots/YearRow/ErrorBoundary/validateExamData）
行 215-450     AI 调用（AI_MODELS/callAI/TTS/speakText/genVoiceScript）
行 456-505     晨读数据 MORNING_DATA
行 506-770     辅助函数（排序/过滤/知识点分析）
行 770-810     traceRootCause / getDownLinks / getUpLinks
行 815-1100    PageHome
行 1100-1450   PageMorning
行 1450-1700   PageGraph（技能树）
行 1700-2500   PageModules（四大模块）
行 2500-2750   PageDetail
行 2750-2850   PageMethods
行 2850-3000   PagePractice
行 3000-3150   PageWrong
行 3150-3300   PageDiag + PagePredict
行 3300-3430   PagePaper（试卷逆向分析）
行 3430-3740   MockQuestion + DiagQuickTest
行 3780-3990   PageSprint（考前冲刺模式）
行 3998-4600   PageOCR（作业识别 + M1搜题 + M2变形题）+ VariantCard
行 4600-4760   PageVIP（会员中心：套餐对比/开通/续费/用量）
行 4760-4970   PageParent（家长端：绑定/每日/周报/日历）
行 4970-5240   PageTeacher（教师端：班级/学情/AI周报/出卷）
行 5240-5700   PageAdmin（后台管理：6Tab含D6题库管理）
行 5700-5780   CronEditor / ConfigEditor
行 5780-5830   ErrorBoundary
行 5830-6400   App 根组件（路由/状态管理/NAV含vip+parent+teacher）
```

## 题目统计（2026-04-27）

| 数据区域 | 说明 | 题目数 |
|---------|------|--------|
| EXAM_QS | 中考真题（id:0-623） | 624 |
| BASICS_BY_TOPIC | 25个知识点基础题 | 500 |
| TOPIC_GROUPS | 35个题组（含子题） | 137 |
| FINAL_GROUPS | 20个压轴组（含子题） | 58 |
| DiagQuickTest | 快速诊断题 | 15 |
| **总计** | | **1334** |

### sol 字段质量（2026-04-27）
- 极短（≤15字）：0 ✅
- 偏短（16-55字）：459（已有①②③结构）
- 完整（>55字）：859

## 数据模型

### TOPICS 知识点对象
```js
{ id, name, semester, chapter, domain,
  x, y,  // 已废弃（旧力导向图坐标）
  fivePoints:[], keys:[], tips:"",
  pre:[], rel:[],
  examYears:[], totalScore, freq, diff,
  methods:[], basicsCount, groupCount, finalCount }
```

### EXAM_QS 题目对象
```js
{ id, yr, no, city, type, topic, score, diff,
  subTopics:[], methods:[],
  content, answer, sol, error }
```

### BASICS 题目对象
```js
{ id:"b_xxx_nn", diff, content, answer, sol, error,
  upLink:[], downLink:[] }
```

### 学期编码
7a=七上, 7b=七下, 8a=八上, 8b=八下, 9a=九上, 9b=九下

### 领域
algebra(代数), geometry(几何), stats(统计概率)

### 色板
bg:#040810, s1:#080f1a, s2:#0d1825, fg/text:#dce8f8
alg:#3a9eff, geo:#1ed9a0, sta:#f5a623

## 当前状态（2026-04-29）
- 194知识点 ✅（去重0重复）
- 题目总数：1334 道
- **S1 文件拆分 ✅**：8 个文件，Vite build 通过
- 部署：Netlify https://shumai-2026.netlify.app
- **Sprint 1 ✅**：W2 OCR + H3 分数预测 + D6 题库管理
- **Sprint 2 ✅**：K1-K5 教师端 + L1-L4 家长端 + E1-E6 收费体系 + 微信Bot图片分析
- **Sprint 3 M1-M3 ✅**：拍题搜题 + 变形题生成 + 错误模式分析
- **下一步**：M4学伴升级 / S3.6后端部署 / J3.2未登录预览 / W1.4语音

## 关键决策记录
1. **文件拆分 ✅**：`shumai-v7-1.jsx` → `src/data/*.js`(6个数据文件) + `src/App.jsx`
2. 技能树取代力导向图：190+节点力导向不可用
3. 知识点x,y字段已废弃但保留（不影响新UI）
4. 深色主题：深海蓝背景
5. sol扩展用脚本+手工结合：expand-sol.cjs 按模板批量扩展
6. **微信 ClawBot**：腾讯官方 iLink 协议，`@tencent-weixin/openclaw-weixin`，不用 Starchild
7. **AI**：DeepSeek API，每题/每知识点加 AI 讲解按钮
8. **双学习模式**：正向递进（知识→题目）+ 逆向归因（试卷→知识点→补漏）
9. **PWA**：学生安卓手机/Pad 访问，添加到主屏幕像 App
10. **题库防盗版**：后端 API 按需返回单题，前端不存全量数据
