# 数脉 ShuMai — AI 助手指令

> 本文件供 AI 助手（Claude/Windsurf/Cursor 等）在每次对话开始时自动读取，快速恢复项目上下文。  
> 最后更新：2026-04-29

---

## 项目简介

中考数学智能学习系统（"数脉"），面向初中生，目标：从"百科全书"变成"私人教练"。
- **前端**：React 18 + Vite 5，部署 Netlify → https://shumai-2026.netlify.app
- **后端**：Node.js + Express（待搭建），部署阿里云/腾讯云
- **微信**：ClawBot（腾讯官方 iLink 协议），学生在微信里和 AI 学伴对话
- **AI**：DeepSeek API，每道题/每个知识点一键 AI 讲解
- **学段**：初中数学（七～九年级），后续扩展高中/小学
- **学习模式**：正向递进（知识→题目）+ 逆向归因（试卷→知识点→补漏）

## 系统架构

```
学生手机(PWA/H5) ──┐
                    ├──→ 后端(Express) ──→ PostgreSQL
学生微信 ──→ ClawBot ──┘       │
                              ├──→ DeepSeek AI API
                              ├──→ OCR API (Mathpix/PaddleOCR)
                              └──→ node-cron 定时推送
```

---

## 核心文件

| 文件 | 用途 |
|------|------|
| `src/App.jsx` | 所有 UI 组件（~6400行），含 PageOCR/PageVIP/PageParent/PageTeacher/PageAdmin |
| `server/index.js` | Express 主入口，注册所有路由 |
| `server/bot.js` | ClawBot 微信机器人（含图片/PDF试卷分析） |
| `server/api/ocr.js` | OCR + M1搜题 + M2变形题 + M3错误模式分析 |
| `server/api/teacher.js` | 教师端 API（班级/学情/AI周报/出卷） |
| `server/api/parent.js` | 家长端 API（绑定/每日摘要/周报） |
| `server/api/subscription.js` | 收费体系（free/VIP/Pro 套餐 + 门控） |
| `tasks.md` | 任务看板，找第一个 `[ ]` 继续执行 |
| `claude.md` | 本文件，AI 助手指令 |
| `.windsurf/system-map.md` | 文件行号分布 + 数据模型（最新） |

### 拆分后目标结构（S1 任务）

```
src/
  data/
    topics.js        ← 194 知识点
    exam-qs.js       ← 624 道真题
    basics.js        ← 基础题+题组+压轴
    graph.js         ← 知识点依赖图
    constants.js     ← 色板/方法/学期等常量
  App.jsx            ← 所有 UI 组件
  main.jsx           ← 入口
server/
  bot.js             ← ClawBot 微信机器人
  api/               ← Express 路由
  services/          ← AI/OCR/推送等服务
```

---

## 数据规模（2026-04-27）

| 类别 | 数量 |
|------|------|
| 知识点（TOPICS） | 194 |
| 中考真题（EXAM_QS） | 624 |
| 基础题（BASICS_BY_TOPIC） | 500 |
| 题组训练（TOPIC_GROUPS） | 137 |
| 压轴组（FINAL_GROUPS） | 58 |
| 诊断题（DiagQuickTest） | 15 |
| **题目总计** | **1334** |

---

## 开发规则

### 必须遵守
1. **数据与 UI 分离**：拆分后数据文件（`src/data/`）只 export 纯数据，UI 组件通过 import 使用
2. **深色主题**：背景 `#040810`，文字 `#dce8f8`，代数蓝 `#3a9eff`，几何绿 `#1ed9a0`，统计橙 `#f5a623`
3. **中文优先**：UI 文案、注释、sol 解题步骤全部用中文
4. **sol 格式**：步骤用 ①②③ 编号，含公式和结果，如 `①设未知数x；②列方程2x+1=5；③解得x=2`
5. **不删测试/注释**：除非用户明确要求，不删除现有注释和代码
6. **备份优先**：修改大量数据前先备份（`.bak` 文件）
7. **题库防盗版**：后端 API 按需返回单题，前端不存全量题库数据

### 编码风格
- 前端组件：函数式 + hooks（useState, useMemo, useBP）
- 常量全大写：`TOPICS`, `EXAM_QS`, `BASICS_BY_TOPIC`
- 颜色统一用 `C` 对象：`C.bg`, `C.text`, `C.s1`, `C.s2`, `C.fg`
- 领域颜色用 `DOM` 对象：`DOM.algebra`, `DOM.geometry`, `DOM.stats`
- 后端：Express + async/await，错误统一 try/catch 中间件

### 数据 ID 规则
- EXAM_QS：数字 id（0-623）
- BASICS：字符串 `b_xxx_nn`（如 `b_rat_04`）
- TOPIC_GROUPS：字符串 `tgNN`（如 `tg15`）
- FINAL_GROUPS：字符串 `fgNN`（如 `fg08`）
- 知识点 topic code：英文小写（如 `rational`, `quad_fn`, `circle`）

### 学期编码
`7a`=七上, `7b`=七下, `8a`=八上, `8b`=八下, `9a`=九上, `9b`=九下

---

## 工作流程

1. **开始新对话时**：先读 `claude.md`（本文件），再读 `tasks.md` 找当前任务
2. **需要前端代码细节时**：读 `.windsurf/system-map.md` 获取行号分布
3. **需要 ClawBot 细节时**：读 `文档/wechat-clawbot.md`
4. **修改大量数据时**：优先写脚本（如 `.cjs`），不要手动逐条改
5. **完成任务后**：更新 `tasks.md` 标记 `[x]`，更新相关 `.md` 文件

---

## 当前状态与行动计划

### ✅ 已完成
- 194 知识点 + 技能树布局 + 首次诊断 + sol 补写 80%
- **S1 文件拆分 ✅**：8 个文件（6 数据 + App.jsx + main.jsx），Vite build 通过
- **S2 PWA ✅**：manifest.json + SW + 移动端触摸/安全区/滚动优化
- **S3 后端 ✅**：Express 服务器 + 5 张表 + 认证/题库/进度/微信 API
- **W1 ClawBot ✅**：bot.js 完整实现（登录/轮询/绑定/AI对话/定时推送/指令）
- **G1 全面AI化 ✅**：后端5接口 + RTF提示词6场景 + 前端AskTutor组件 + AIFloat全局浮窗
- **P1 试卷逆向分析 ✅**：录入→AI拆解→薄弱定位→模拟卷生成，三步流程完整

- **F2-F3 每日任务+遗忘曲线 ✅**：首页任务卡片 + daily API + 间隔复习调度
- **H1-H4 激励可视化 ✅**：XP经验值 + 打卡火焰 + 6维雷达图 + 23方法卡收集
- **J3 防盗版 ✅**：API限流30/min + CSS防复制

- **T1 定时任务 ✅**：凌晨1:00预生成 + 7:00推送+冲刺提醒 + 21:00小结 + 周一8:00周报
- **I1 考前冲刺 ✅**：日期设置→4阶段倒计时→每日计划→薄弱TOP10

- **D1-D5 管理端 ✅**：4Tab管理面板(定时任务/用户/统计/配置) + system_config表 + admin鉴权 + cron热重载

### ✅ Sprint 1 完成（方案A 产品体验优先）

- **W2 OCR作业识别 ✅**：PageOCR + ocr.js API（拍照/文字双模式→AI识别→手动修正→错题自动录入）
- **H3 分数预测曲线 ✅**：首页SVG折线图（掌握度×考频权重→非线性映射→"你在这里"标注）
- **D6 题库管理 ✅**：管理端新Tab（搜索/筛选/统计概览+真题分布+关键点方法展示）

### ✅ Sprint 2 完成

- **K1-K5 教师端 ✅**：`teacher.js` + `PageTeacher`（班级CRUD+邀请码+学情表+AI周报+智能出卷）
- **L1-L4 家长端 ✅**：`parent.js` + `PageParent`（绑定+每日学情+周报+打卡日历）
- **E1-E6 收费体系 ✅**：`subscription.js` + `PageVIP`（free/VIP/Pro套餐+开通+用量统计）
- **微信Bot增强 ✅**：图片/PDF试卷 → AI分析（`handleImageMessage`）

### ✅ Sprint 3 M1-M3 完成

- **M1 拍题搜题 ✅**：`PageOCR` 新增搜题Tab，图片/文字 → AI解题+步骤+知识点+方法+常见错误
- **M2 变形题生成 ✅**：搜题结果页一键生成3道变式题（`VariantCard` 组件，含答案折叠）
- **M3 错误模式分析 ✅**：`/api/ocr/error-pattern`，基于错题库AI分析规律+补救建议

### 🔥 下一步（Sprint 3 尾 + 运营准备）

- [ ] **M4** 学伴 Agent 策略升级（个性化学习路径推荐）
- [ ] **S3.7** 后端部署（阿里云/腾讯云轻量服务器，~¥40/月）
- [ ] **J3.2** 未登录用户只显示题目前3题预览（防盗版增强）
- [ ] **W1.4** 微信语音消息识别（AMR→Whisper→文字）
- [ ] **N1** 高中数学版本
- [ ] **N2** 小学数学版本
