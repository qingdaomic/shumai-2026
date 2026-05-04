# 数脉 ShuMai — AI 助手指令

> 本文件供 AI 助手（Claude/Windsurf/Cursor 等）在每次对话开始时自动读取，快速恢复项目上下文。  
> 最后更新：2026-05-01

---

## 项目简介

中考数学智能学习系统（"数脉"），面向初中生，目标：从"百科全书"变成"私人教练"。
- **前端**：React 18 + Vite 5，部署 Netlify → https://shumai-2026.netlify.app
- **后端**：Node.js + Express，部署 Railway → https://shumai-2026-production.up.railway.app
- **数据库**：PostgreSQL（Railway 托管）
- **微信**：ClawBot（腾讯官方 iLink 协议），学生在微信里和 AI 学伴对话
- **AI**：DeepSeek API，每道题/每个知识点一键 AI 讲解
- **学段**：初中数学（七～九年级），后续扩展高中/小学
- **学习模式**：正向递进（知识→题目）+ 逆向归因（试卷→知识点→补漏）

## 系统架构

```
学生手机(PWA/H5) ──┐
                    ├──→ 后端(Express/Railway) ──→ PostgreSQL(Railway)
学生微信 ──→ ClawBot ──┘       │
                              ├──→ DeepSeek AI API
                              ├──→ OCR API (Mathpix/PaddleOCR)
                              └──→ node-cron 定时推送
```

## 部署地址

| 服务 | 地址 | 用途 |
|------|------|------|
| 前端（Netlify） | https://shumai-2026.netlify.app | 学生端 |
| 后端（Railway） | https://shumai-2026-production.up.railway.app | API 服务 |
| 后台管理 | https://shumai-2026.netlify.app/?view=admin | 管理端 |
| 教师端 | https://shumai-2026.netlify.app/?view=teacher | 教师端 |
| 家长端 | https://shumai-2026.netlify.app/?view=parent | 家长端 |
| 会员中心 | https://shumai-2026.netlify.app/?view=vip | 会员中心 |
| 健康检查 | https://shumai-2026-production.up.railway.app/api/health | 后端状态 |

---

## 核心文件

| 文件 | 用途 |
|------|------|
| `src/App.jsx` | 所有 UI 组件（~7900行），含所有页面组件 |
| `src/data/topics.js` | 194 知识点数据 |
| `src/data/exam-qs.js` | 624 道真题数据 |
| `src/data/basics.js` | 基础题 + 题组 + 压轴数据 |
| `src/data/graph.js` | 知识点依赖图 |
| `src/data/constants.js` | 色板/方法/学期等常量 |
| `src/data/diag.js` | 诊断题数据 |
| `server/index.js` | Express 主入口，启动时自动建表 |
| `server/bot.js` | ClawBot 微信机器人 |
| `server/schema.sql` | 数据库表结构 |
| `server/db.js` | PostgreSQL 连接池 |
| `tasks.md` | 任务看板 |
| `claude.md` | 本文件，AI 助手指令 |
| `FEATURES.md` | 产品功能全景文档 |
| `RAILWAY.md` | Railway 部署指南 |

---

## 数据规模（2026-05-01）

| 类别 | 数量 |
|------|------|
| 知识点（TOPICS） | 194 |
| 中考真题（EXAM_QS） | 624 |
| 基础题（BASICS_BY_TOPIC） | 500 |
| 题组训练（TOPIC_GROUPS） | 35 |
| 压轴组（FINAL_GROUPS） | 20 |
| 诊断题（DiagQuickTest） | 15 |
| **题目总计** | **1194** |

---

## 开发规则

### 必须遵守
1. **数据与 UI 分离**：数据文件（`src/data/`）只 export 纯数据，UI 组件通过 import 使用
2. **深色主题**：背景 `#040810`，文字 `#dce8f8`，代数蓝 `#3a9eff`，几何绿 `#1ed9a0`，统计橙 `#f5a623`
3. **中文优先**：UI 文案、注释、sol 解题步骤全部用中文
4. **sol 格式**：步骤用 ①②③ 编号，含公式和结果
5. **不删测试/注释**：除非用户明确要求
6. **备份优先**：修改大量数据前先备份
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

### 部署更新流程
- **改前端**：`npx vite build` → 拖 `dist/` 到 Netlify
- **改后端**：`git push` → Railway 自动部署
- **URL 参数路由**：`?view=admin/teacher/parent/vip` 跳转管理页面

---

## 工作流程

1. **开始新对话时**：先读 `claude.md`（本文件），再读 `tasks.md` 找当前任务
2. **需要前端代码细节时**：读 `src/App.jsx` 对应区块
3. **需要功能全景时**：读 `FEATURES.md`
4. **修改大量数据时**：优先写脚本，不要手动逐条改
5. **完成任务后**：更新 `tasks.md` 标记 `[x]`，更新 `FEATURES.md` 和相关文档

---

## 当前状态与行动计划

### ✅ 已完成（全部）

**基础设施：**
- **S1 文件拆分 ✅**：8 个文件（6 数据 + App.jsx + main.jsx），Vite build 通过
- **S2 PWA ✅**：manifest.json + SW + 移动端触摸/安全区/滚动优化
- **S3 后端 ✅**：Express 服务器 + 5 张表 + 认证/题库/进度/微信 API
- **R1 Railway 部署 ✅**：后端+PostgreSQL 在线运行，健康检查通过

**核心功能：**
- **W1 ClawBot ✅**：bot.js 完整实现（登录/轮询/绑定/AI对话/定时推送/指令）
- **W1.6 智能互动推送 ✅**：遗忘曲线提醒 + 考前倒计时 + 薄弱点提醒
- **G1 全面AI化 ✅**：后端5接口 + RTF提示词6场景 + 前端AskTutor组件 + AIFloat全局浮窗
- **P1 试卷逆向分析 ✅**：录入→AI拆解→薄弱定位→模拟卷生成

**增强功能：**
- **F2-F3 每日任务+遗忘曲线 ✅**
- **H1-H4 激励可视化 ✅**：XP + 打卡 + 雷达图 + 方法卡
- **J3 防盗版 ✅**
- **T1 定时任务 ✅**
- **I1 考前冲刺 ✅**
- **M1-M3 高级AI ✅**：拍题搜题 + 变形题 + 错误模式分析
- **D1-D6 管理端 ✅**
- **K1-K5 教师端 ✅**
- **L1-L4 家长端 ✅**
- **E1-E6 收费体系 ✅**
- **W2 OCR作业识别 ✅**
- **H3 分数预测曲线 ✅**

**UI 重构（U1 系列）：**
- **U1.1 导航栏精简 ✅**：移除教师端/家长端/会员/后台入口
- **U1.2 手机端底部 Tab 栏 ✅**：5Tab（首页/学习/练题/错题/我的）
- **U1.3 PageMe 个人中心 ✅**：头像/昵称/学情/工具/设置
- **U1.4 Pad 端图标侧边栏 ✅**：44px 收起 / hover 展开 / badge
- **U1.5 桌面端侧边栏重构 ✅**：用户卡片/立即行动/倒计时/进度/薄弱点/工具
- **U1.6 首页布局调整 ✅**：数据总览横排 + 快速入口横排 + 能力雷达优化

### 🔥 下一步

- [ ] **Q1** 题库扩充（1194→1500道）
- [ ] 主题切换（深色/浅色/暖色）
- [ ] **C1** 腾讯云备案（并行进行）

### 🎬 V2 规划

- [ ] **V1** AI 知识点讲解视频（DeepSeek + HyperFrames）
- [ ] **V2** 个性化学习计划模块（PagePlan，参考 Khan Academy）
