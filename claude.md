# 数脉 ShuMai — AI 助手指令

> 本文件供 AI 助手（Claude/Windsurf/Cursor 等）在每次对话开始时自动读取，快速恢复项目上下文。  
> 最后更新：2026-05-05

---

## 项目简介

中考数学智能学习系统（"数脉"），面向初中生，目标：从"百科全书"变成"私人教练"。
- **前端**：React 18 + Vite 5，部署轻量云香港服务器 → https://shumai.cc
- **后端**：Node.js + Express，PM2 运行在香港服务器 43.128.59.105，端口 3001
- **数据库**：PostgreSQL（本地 localhost:5432）
- **微信**：ClawBot（腾讯官方 iLink 协议），学生在微信里和 AI 学伴对话
- **AI**：DeepSeek API，每道题/每个知识点一键 AI 讲解
- **学段**：初中数学（七～九年级），后续扩展高中/小学
- **学习模式**：正向递进（知识→题目）+ 逆向归因（试卷→知识点→补漏）

## 系统架构

```
学生手机(PWA/H5) ──┐
                    ├──→ Nginx(shumai.cc) ──→ 前端静态文件(/var/www/shumai)
学生微信 ──→ ClawBot ──┘       │
                               └──→ 后端(PM2/Node.js :3001) ──→ PostgreSQL(localhost)
                                          │
                                          ├──→ DeepSeek AI API
                                          ├──→ OCR API
                                          └──→ node-cron 定时推送
```

## 部署地址

| 服务 | 地址 | 用途 |
|------|------|------|
| 前端（香港服务器） | https://shumai.cc | 学生端 |
| 后端（香港服务器） | http://43.128.59.105:3001 | API 服务（Nginx反代） |
| 后台管理 | https://shumai.cc/?view=admin | 管理端 |
| 教师端 | https://shumai.cc/?view=teacher | 教师端 |
| 家长端 | https://shumai.cc/?view=parent | 家长端 |
| 会员中心 | https://shumai.cc/?view=vip | 会员中心 |
| 健康检查 | https://shumai.cc/api/health | 后端状态 |

---

## 核心文件

| 文件 | 用途 |
|------|------|
| `src/App.jsx` | 所有 UI 组件（~8500行），含所有页面组件 |
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
| `server/api/auth.js` | 注册/登录/昵称修改 API |
| `deploy/nginx-shumai.conf` | Nginx 配置（前端托管 + /api/* 反代） |
| `deploy/deploy.sh` | 一键部署前端脚本 |
| `ecosystem.config.cjs` | PM2 启动配置（含环境变量）|

---

## 数据规模（2026-05-04）

| 类别 | 数量 |
|------|------|
| 知识点（TOPICS） | 194 |
| 中考真题（EXAM_QS） | 624 |
| 基础题（BASICS_BY_TOPIC） | 500 |
| 题组训练（TOPIC_GROUPS） | 50 |
| 压轴组（FINAL_GROUPS） | 30 |
| 诊断题（DiagQuickTest） | 15 |
| **题目总计** | **1334** |

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
- TOPIC_GROUPS 题 ID：`tgNN_i`（如 `tg01_0`）——`lookupBasicQ(id)` 可查询
- FINAL_GROUPS 题 ID：`fgNN_i`（如 `fg08_0`）——同上
- 知识点 topic code：英文小写（如 `rational`, `quad_fn`, `circle`）

### 学期编码
`7a`=七上, `7b`=七下, `8a`=八上, `8b`=八下, `9a`=九上, `9b`=九下

### 部署更新流程
- **改前端**：本地 `git push` → 服务器上 `cd /opt/shumai && git pull && npm run build && cp -r dist/* /var/www/shumai/`
- **改后端**：本地 `git push` → 服务器上 `cd /opt/shumai && git pull && pm2 restart shumai-api`
- **URL 参数路由**：`?view=admin/teacher/parent/vip` 跳转管理页面（不持久化，读后清理）
- **API 代理**：Nginx `/api/*` → `localhost:3001`
- **服务器**：43.128.59.105，用户 ubuntu，代码在 `/opt/shumai/`，前端静态文件在 `/var/www/shumai/`

### 用户认证
- `window.__SHUMAI_TOKEN` 全局 token（单下划线，切勿写成 `__SHUMAI_TOKEN__`）
- `authUser` 对象包含 `{id, phone, nickname, grade, role}`
- localStorage 键：`shumai_auth_token`、`shumai_auth_user`、`shumai_nickname`
- admin 访问：DB `role='admin'` 或 `ADMIN_PHONE` 环境变量（逗号分隔多个）

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
- **S1 文件拆分 ✅** / **S2 PWA ✅** / **S3 后端 ✅** / **迁移 轻量云香港服务器 shumai.cc ✅**

**核心功能：**
- **W1 ClawBot ✅** / **G1 全面AI化 ✅** / **P1 试卷逆向 ✅**
- **F2-F3 每日任务+遗忘曲线 ✅** / **I1 考前冲刺 ✅**
- **H1-H4 激励可视化 ✅** / **J3 防盗版 ✅** / **T1 定时任务 ✅**
- **M1-M3 高级AI ✅** / **D1-D6 管理端 ✅** / **K1-K5 教师端 ✅**
- **L1-L4 家长端 ✅** / **E1-E6 收费体系 ✅** / **W2 OCR ✅**
- **U1.1-U1.6 UI重构 ✅**：手机 Tab栏 / Pad侧边栏 / 桌面侧边栏 / PageMe
- **Q1.1-Q1.5 题库扩充 ✅**：50组题组 + 30组压轴 + sol润色
- **T2 主题切换 ✅**：深色/浅色/护眼/暖棕四种

**用户认证（A1 系列）✅：**
- 手机号注册/登录，密码可见性切换
- 注册后显示昵称头像，昵称可编辑（后端 `PUT /api/auth/profile`）
- `?view=admin` 读后清理 URL，不持久化
- `ADMIN_PHONE` 环境变量支持备用 admin 账号（在 ecosystem.config.cjs 里设置）
- Nginx `/api/*` 反代到 `localhost:3001`

**Bug 修复（B1 系列）✅：**
- M2 错题角标错误计数（父级共享问题）
- M3/M4 错题刷新后消失（懒初始化修复）
- 错题本显示为空（新增 `lookupBasicQ()` ）
- 真题登录后仍锁定（`__SHUMAI_TOKEN__` 拼写 bug）

### 🔥 下一步

- [x] **迁移** 前端+后端从 Netlify/Railway 迁移到轻量云香港服务器（shumai.cc）
- [x] **SSL** HTTPS 证书已申请（certbot，shumai.cc）
- [ ] **Gzip** Nginx 开启 gzip 压缩，减少前端加载时间（命令：在 `/etc/nginx/nginx.conf` http块加 gzip on; gzip_types ...）
- [ ] **V1** AI 知识点讲解视频（DeepSeek + HyperFrames）
- [ ] **V2** 个性化学习计划模块（PagePlan）

