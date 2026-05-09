# 树脉 ShuMai 开发任务清单

> 使用说明：每次新对话开始时，AI 先读 `claude.md` → 再读此文件，找到第一个 `[ ]` 未完成任务继续执行。  
> 用户只需输入"继续"即可推进。每完成一项，将 `[ ]` 改为 `[x]`。  
> 最后更新：2026-05-09

---

## 系统定位

> **从"百科全书"变成"私人教练"**  
> 学生打开就知道"今天练什么"，练完能看到"我又变强了"。  
> 架构：学生微信 ←→ ClawBot ←→ 后端 ←→ AI Agent + 题库  
> 付费模式：游客免费体验 → 注册保存数据 → 付费解锁完整功能  
> 学段规划：先初中 → 后高中 → 后小学（代码用 `stage` 字段区分）  
> 学习模式：正向递进（知识→基础→题组→压轴）+ 逆向归因（试卷→知识点→补漏）

## V4 身份与执行标准

> 每次进入 UI / 页面 / 产品体验改造前，先按 `AGENTS.md` 恢复身份：从 2035 年回来的数学、英语、计算机、AI、美学、心理学、逻辑学、效率学、结构学、学习学、规划学专家，同时是苹果公司能力全面资深工程师、苹果美学工程师、资深 UI 工程师、资深前端工程师。

V4 目标：

- 做未来三年内最好的 AI 学习网站之一
- 看起来、用起来像全面 AI 化的私人教练系统
- 不再默认在旧页面上缝缝补补，允许全面重建 UI 与信息架构
- 总首页、数学分支、英语分支、题目教练场、知识树、错因系统、家长端、教师端都要按未来产品标准重建
- 保留树脉数学的根：基础知识、基础题、题组训练、压轴题组、10 年真题、23 种方法、向上提升、向下补差、题目-知识-方法-错因-真题网状关联

---

## ✅ 已完成

- [x] **A1-A4** 代码质量（service 层、错误边界、数据校验、视频占位）
- [x] **B1-B2** 工程化 + Netlify 部署 → 已迁移香港轻量云（https://shumai.cc）
- [x] **F1** 首次诊断流程（DiagQuickTest 10题摸底）
- [x] **J0** 题库总体规划（`题库规划表.md`）
- [~] **J0.1** sol 字段补写 ~80%（极短清零，偏短 459 个待润色）
- [x] 知识图谱改为技能树布局
- [x] 194 知识点去重完毕
- [x] 全部文档体系（12 个设计文档）
- [x] 新增树脉 V3 总体方案与系统建设记录文档
- [x] 固定协作工作法：主窗口总控 + 新窗口单任务 + 交接卡

---

## 🔥 P0：立即执行（基础设施）

### S1. 前端文件拆分 ⭐

> 当前 `shumai-v7-1.jsx` 13441 行，70% 是数据。拆分后省 token、数据独立、为后端 API 化做准备。

- [x] **S1.1** 拆出 `src/data/topics.js` — 194 知识点（2739 行）
- [x] **S1.2** 拆出 `src/data/exam-qs.js` — 624 道真题（4942 行）
- [x] **S1.3** 拆出 `src/data/basics.js` — 基础题 + 题组 + 压轴（1723 行）
- [x] **S1.4** 拆出 `src/data/graph.js` — 知识点依赖图 + EDGES + TOPIC_MAP（63 行）
- [x] **S1.5** 拆出 `src/data/constants.js` — C色板 + METHODS（179 行）
- [x] **S1.6** 拆出 `src/data/diag.js` — QUICK_DIAG_QS（59 行）
- [x] **S1.7** 主文件 → `src/App.jsx`（3719 行，纯 UI + AI/TTS）
- [x] **S1.8** Vite build 通过 ✅ dev server 运行正常 ✅

### S2. PWA 移动端优化

> 学生主要用安卓手机/Pad 访问，PWA 可"添加到主屏幕"像 App 体验。

- [x] **S2.1** 添加 `public/manifest.json` + SVG 图标（192+512）
- [x] **S2.2** 添加 `public/sw.js`（网络优先 + 离线缓存策略）
- [x] **S2.3** 移动端适配：viewport-fit=cover、safe-area、min-height:44px 触摸目标、防缩放、滚动优化、刘海屏

### S3. 后端搭建

> 微信 ClawBot、AI 对话、题库 API、定时任务全都依赖后端。

- [x] **S3.1** 初始化 `server/` 目录（Express + dotenv + cors + pg + jwt + bcrypt + cron + openai）
- [x] **S3.2** 建表脚本 `server/schema.sql`（users/progress/wrong_questions/chat_history/checkins）
- [x] **S3.3** 题库 API：`/api/questions/exam/:id`、`/basics/:topic`、`/groups/:id`（鉴权 + 按需返回）
- [x] **S3.4** 用户认证：`/api/auth/register` + `/login`（bcrypt + JWT 30天）
- [x] **S3.5** 学习记录 API：`/api/progress` + `/wrong`（UPSERT + 软删除）
- [x] **S3.6** 健康检查 `/api/health` ✅ 服务已验证启动
- [x] **S3.7** 部署后端 ✅ 香港轻量云 43.128.59.105，PM2 + PostgreSQL + Nginx，域名 shumai.cc，HTTPS ✅

---

## 🔴 P1：核心功能（用户价值最高）

### SKE. 树脉教学 Skill 引擎 ⭐⭐⭐⭐

> 目标：把提示词仓库、前台引导气泡、后台专家提示词、AI 模型调用和效果反馈做成可调用、可记录、可评估、可进化的教学 Skill 系统。
> 战略文档：`文档/树脉教学Skill引擎与商业模式设计.md`
> 实施交接卡：`文档/任务交接卡-SKE教学Skill引擎.md`

- [x] **SKE-0** 战略与商业模式文档沉淀：免费共建、数据生长、智力生长、提示词护城河、模型路由与 AI 点数
- [~] **SKE-1** 数据库结构：`prompt_skills` + `prompt_skill_events`，并加入 30-50 条种子 Skill（V4.32 已完成最小 migration 草案与 41 条种子 Skill 草案，尚未执行 SQL / 上线）
- [~] **SKE-2** 后端推荐 API：`/api/skills/recommend` + `/api/skills/event`（V4.33 已实现 service/API 文件与 seed fallback，尚未挂载 `server/index.js`，未部署）
- [~] **SKE-3** AI Skill 调用：新增 `/api/ai/skill`，组合学生画像、题目信息、Skill 内容与现有树脉学长提示词（V4.41 已完成最小后端实现，尚未 push / 部署 / 前端接入）
- [~] **SKE-4** 题目页引导气泡与提问斜杠：题目教练场输入 `/` 已弹出 3-5 条动态提问词，点击后调用 AI Skill，并记录 impression / click；外显“你可以这样问”和有帮助反馈后续补齐
- [ ] **SKE-4.1** 提问斜杠权重回流：根据学生基础、错因、知识点、题型和历史点击效果，动态调整提问词推荐顺序
- [x] **SKE-4.2** 树脉搜索接入 SKE：搜索知识点、题目、方法、错因、真题和 AI 问法，结果不只是资料列表，而是回到补法、题组和今日任务
- [x] **SKE-5** 后台 Skill 管理：管理端新增教学 Skill tab，支持列表、筛选、启停、权重、基础统计
- [x] **SKE-6** 模型路由与 AI 点数预案：基础模型 / 深度模型 / 质检模型分层，不把学生端做成模型超市
- [x] **SKE-7** Skill 质量评测：按知识点、题型、学生行为评估提示词有效性，低效降权，高效沉淀

> 第一阶段完成标准：学生打开一道题能看到 3 条推荐提示，点击后触发 AI 一步提示或讲解，系统记录展示、点击和反馈，后台能看到基础效果数据。

### PET. 树脉学伴宠物 ⭐⭐⭐

> 目标：把小狗 / 小猫宠物做成学生学习成长的可视化分身，提升情感连接和长期粘性；成长绑定有效学习行为，不绑定单纯在线时长。
> 实施交接卡：`文档/任务交接卡-PET树脉学伴宠物.md`

- [x] **PET-0** 战略与实施交接卡沉淀：定位、成长规则、代码建议、测试与验收标准
- [x] **PET-1** 第一版前端学伴：右下角小狗 / 小猫，支持展开、收起、状态、等级、XP、本地保存
- [ ] **PET-2** 接入有效学习行为：做对题、订正错题、掌握知识点、完成今日任务增加 XP
- [ ] **PET-3** 接入 AI 状态：AI 生成中 thinking，完成后 review，失败后恢复 idle
- [ ] **PET-4** 接入教学 Skill：宠物动作按钮提供“给我一个突破口 / 判断错因 / 来一道更简单的”
- [ ] **PET-5** 后端同步：`pet_states` + `pet_events`，支持跨设备和防刷奖励
- [ ] **PET-6** 成长图鉴与家长端：展示本周成长、修复错因、掌握知识点，不做焦虑排名

> 第一版完成标准：学生进入树脉能看到可收起的学伴宠物；做对题或完成订正后 XP 增长；AI 讲解时宠物显示思考状态；刷新后状态保留。

### V3. 树脉 AI 学习中枢 ⭐⭐⭐

> 目标：把首页升级为“今日学习驾驶舱”，并为数学/英语总入口、学段权限、反向规划、动态计划、AI 客服与微信提醒预留统一结构。

- [x] **V3.1** 首页改造：今日学习驾驶舱（今日任务 / 为什么学 / 做完到哪里）
- [~] **V3.2** 数学/英语总入口结构（先并列入口，内容分阶段补齐）
- [x] **V3.3** 学段权限入口（小学/初中/高中按账号可见）
- [x] **V3.4** 反向规划入口（目标分数/时间/测评/时长 → 动态计划）
- [ ] **V3.5** 学习建设记录模板化（日记式文风 + 截图 + 自媒体复用）
- [x] **V3.6** 首页文案与气质重构（安静、清晰、有方向、有恢复感）
- [x] **V3.7** 错题本升级为错因修复系统（高频错因 / 高频知识点 / 清除标准）
- [x] **V3.8** 题目详情页升级为教练场（作答区 / 归因区 / AI 三模式）
- [x] **V3.9** 真题刷题页接入教练场（解析区内作答 / 归因 / AI 三模式）
- [x] **V3.10** 知识树节点行动化（状态 / 推荐题 / 最近错题 / 下一节点）
- [x] **V3.11** 纸质训练单入口（反向规划 / 首页入口 / 浏览器打印）
- [x] **V3.12** 动态纸质训练单（薄弱点 / 推荐题 / 错题复盘）
- [x] **V3.13** 微信 AI 教练提醒（今日判断 / 为什么学 / 做完推进哪里 / 晚间收束）
- [x] **V3.14** 微信提醒接入每日任务引擎（错题复练 / 遗忘复习 / 薄弱点 / 挑战题）
- [x] **V3.15** 反向规划保存闭环（study_plans 表 / API / 前端保存目标计划）
- [x] **V3.16** 确认微信主路径：扫码 ClawBot 私聊绑定，不规划服务号/企业微信主通道
- [x] **V3.17** ClawBot 私聊上下文持久化（保存最近 context_token / last_seen，提升定时推送稳定性）
- [x] **V3.18** 每日任务读取目标计划（按目标阶段 / 每日时长调整错题、复习、挑战任务量）
- [x] **V3.19** 纸质训练单读取目标计划（目标分 / 阶段路线 / 每日时长进入打印页）
- [x] **V3.20** 家长端行动建议（孩子卡点 / 该鼓励什么 / 不该催什么 / 今晚动作）
- [x] **V3.21** 教师端明天课堂建议（讲评焦点 / 10分钟流程 / 推荐题 / 分层名单）
- [x] **V3.22** H5 微信绑定体验（我的页展示树脉学长入口 / 绑定指令 / 最近互动状态）
- [x] **V3.23** 首页层级校准（树脉总首页 / 数学分支二级首页拆开）

> 本阶段原则：
> - 数学底座保留：基础知识、基础题、题组训练、压轴题组、10年真题、23种方法、向上提升、向下补差、题目-知识-方法-错因网状结构
> - 英语后续单独体系化，不沿用数学底座直接套用
> - 每次推进需同步说明下一阶段、下一步、后几步

> 当前完成内容：
> - 首页首屏加入“树脉 AI 学习中枢”语义
> - 增加数学 / 英语总入口第一层占位
> - 增加身份感标签与今日学习判断
> - 保留并重命名数学底座为“数学主体系”
> - 增加学段权限条：小学 / 初中 / 高中可见，当前账号学段开放
> - 增加反向规划页面与首页入口：当前成绩/目标成绩/剩余时间/每日时长 → 阶段方案
> - 手机端底栏调整为：今日 / 知识树 / 练题 / 错题 / 我的
> - 今日 3 件事改为教练式建议：做什么 / 为什么做 / 做完推进哪里
> - 错题本新增高频错因、高频知识点、清除标准，并给错题显示错因标签
> - 题目详情页真题解析新增教练场：自信度/用时、错因标签、提示/讲解/追问模式
> - 真题刷题页解析区接入同一教练场组件，保留语音讲解和视频入口
> - 知识树选中节点新增行动面板：当前状态、推荐3题、最近错题、下一节点、去练题入口
> - 新增纸质训练单页面，可从首页和反向规划进入，并支持浏览器打印
> - 纸质训练单根据掌握状态和错题动态生成今日目标、推荐题、错题复盘
> - 微信早提醒升级为“树脉 AI 今日学习驾驶舱”：今日判断、今日 3 件事、为什么是它、做完推进哪里
> - 微信错题报告升级为错因修复提醒：按“看提示做对 → 隔天独立做对 → 一周后独立做对”清除
> - 微信晚提醒升级为学习收束：回看今日关键一步和主要错因，不制造焦虑
> - 微信“今日任务”已接入 `generateDailyTask()`，根据错题复练、遗忘曲线到期、薄弱知识点和挑战题生成教练式提醒
> - 新增 `study_plans` 学习目标计划表与 `/api/study-plan`，反向规划页面可保存目标成绩、目标日期、每日时长与阶段方案
> - 微信路径收束为 ClawBot 私聊绑定：用户扫码添加“树脉学长”后直接对话、发题、收计划和个性化提醒
> - 新增 `wechat_context_token` 和 `wechat_last_seen`，用户每次在微信私聊中互动都会刷新上下文，定时推送优先使用最近 token
> - `generateDailyTask()` 已读取 active study plan，按补根基 / 提方法 / 稳输出 / 保温阶段和每日时长调整任务包
> - 纸质训练单已读取 active study plan，把目标分、目标日期、每日时长、阶段路线写入纸面训练安排
> - 家长端每日摘要新增行动建议：今天状态、孩子卡点、该鼓励什么、不该催什么、今晚动作
> - 教师端班级报告新增“明天课堂建议”：共性错因讲评、10分钟流程、推荐讲评题、关注学生、分层名单
> - 我的页新增“微信里的 AI 教练”模块：扫码或搜索树脉学长 → 发送“绑定 手机号” → 在微信内对话、收计划、发题分析；已绑定用户显示最近互动时间
> - 首页结构已拆层：`home` 为树脉总首页，`math` 为数学分支二级首页，数学题库数字和训练入口不再堆在总首页

### V4. 树脉界面全面重建 ⭐⭐⭐⭐

> 目标：按照 2035 未来专家 + 苹果级工程与美学标准，全面重建树脉 UI 与信息架构。V4 不再默认缝补旧页面，而是允许重建页面、重排层级、重做组件；保留数学根基和数据资产。

- [x] **V4.0** 写入长期身份与审美标准（AGENTS.md / tasks.md）
- [x] **V4.1** 建立 V4 界面重建设计规范（`文档/树脉V4界面重建设计规范.md`）
- [x] **V4.2** 重建树脉总首页（产品级总入口，不是数学首页）
- [x] **V4.2.1** Refero 风格参考融合定案：静谧智能 OS + 温暖 AI 教练 + 知识树脉络
- [x] **V4.3** 重建数学驾驶舱（数学分支二级首页）
- [x] **V4.4** 重建题目教练场
- [x] **V4.5** 重建知识树行动页
- [x] **V4.6** 重建错因修复系统
- [x] **V4.7** 升级纸质训练单视觉与结构
- [x] **V4.8** 重建家长端行动建议工作台
- [x] **V4.9** 重建教师端明天课堂建议工作台
- [x] **V4.10** 整体体验体检：统一主导航、路由命名与 V4 主路径
- [x] **V4.11** 真实浏览器视觉检查第一轮：桌面/手机首屏截图，修复横向溢出防线与侧栏滚动线
- [x] **V4.12** 总首页层级校准：白色主题观察版，首页保留通用侧栏，只放数学/英语双入口和共用 AI 信息
- [x] **V4.13** 总首页顶栏产品化：深/浅主题切换 + 登录/注册入口，隐藏模型/Key 调试控件
- [x] **V4.14** 登录/注册账户中心重建：扫码入口、验证码入口、账号登录、注册表单、协议与监护人同意
- [x] **V4.15** 账户安全与腾讯云短信预案：已具备腾讯云账号条件，但短信验证码暂缓接入
- [x] **V4.16** 账户中心本地视觉检查：新增 QA deep link，修正移动端防溢出，构建通过
- [x] **V4.17** 总首页顶栏重复导航修复：修正 `PORTAL_NAV` 重复 key，截图入档，构建通过
- [x] **V4.18** 总入口二级页导航修复：英语 / 微信 AI / 我的 / 反向规划继续使用通用导航，微信 AI 独立成总入口页面
- [x] **V4.19** 总入口壳层移动端复核：修正首页 / 英语页移动端文字裁切风险，微信 AI / 我的绑定区窄屏安全，截图入档，构建通过
- [x] **V4.20** 总入口真实设备与深色主题复核：响应式浏览器检查浅色 / 深色总入口页，无真实横向滚动，无数学底部导航误入，截图入档，构建通过
- [x] **V4.21** 服务器同步前检查：盘点本地变更、后端影响、敏感信息与构建状态，确认不直接部署
- [x] **V4.22** 前端静态同步与线上复查：只同步 V4.14-V4.20 前端 `dist/` 静态产物，备份线上静态文件，未 git pull，未同步后端，未重启 PM2，线上截图入档
- [x] **V4.23** 本地工作区整理与后端变更分组：确认当前工作区不适合直接 git push 或服务器 git pull，已将前端、文档、后端、TTS/ASR、动画、部署脚本、本地私密和大型产物分组，并形成报告
- [x] **V4.24** `.gitignore` 补漏与提交拆分清单：隔离 `local-notes/`、`video/`、`server/cosyvoice/`、`dist-singlefile/` 等风险目录，产出提交拆分建议，不提交不部署
- [x] **V4.25** GitHub 提交拆分执行：将 V4 总入口与账户中心前端稳定版、V4 文档与截图记录拆成两个干净提交，未混入后端、部署、语音、动画和私密目录
- [x] **V4.26** 推送 V4 干净提交到 GitHub：已将 `9b67776` 与 `e90e9fb` 推送到 `origin/main`，未部署、未服务器操作、未重启 PM2
- [x] **V4.27** 后端变更拆分与风险归档：盘点剩余后端、schema、TTS/ASR、动画、部署脚本、SKE 前置资料和私密目录边界，形成 `文档/V4.27后端变更拆分报告.md`，不提交不部署
- [x] **V4.28** 后端稳定能力逐文件审查与安全提交计划：审查 `server/index.js`、`server/api/*`、`server/services/*`、`server/bot.js`、`server/schema.sql`、`deploy/*`、`public/animations/`、`dist-singlefile/`，形成 `文档/V4.28后端稳定能力审查报告.md`，不提交不部署
- [x] **V4.29** 后端低风险稳定提交执行：只提交 `server/api/ai.js`、`server/prompts/tutor.js`、`server/api/teacher.js` 三个低风险后端文件，并用独立 docs commit 记录 V4.27-V4.29 边界；不 push、不部署、不服务器操作
- [x] **V4.30** 推送 V4.29 干净提交到 GitHub：已将 `c4d06be` 与 `0546eb0` 推送到 `origin/main`，未部署、未服务器操作、未重启 PM2
- [x] **V4.31** schema / 数据库变更拆分计划：拆清 `server/schema.sql` 中学习计划、角色、微信上下文、资源统计、TTS 用量等能力边界，形成 `文档/V4.31数据库变更拆分计划.md`，不提交不部署不改数据库
- [x] **V4.32** SKE-1 最小 migration 与种子 Skill 草案：新增独立 `server/migrations/20260508_ske_minimal.sql` 草案与 `server/seeds/prompt_skills_seed.json` 41 条初中数学种子 Skill，不执行 SQL、不改 `server/schema.sql`、不部署
- [x] **V4.33** SKE-1 推荐 API 与事件记录最小实现：新增 `server/services/prompt-skills.js` 与 `server/api/skills.js`，支持推荐 3 条 Skill、记录 impression / click、数据库不可用时 seed fallback；不挂载、不部署、不执行 SQL
- [x] **V4.34** 提交 V4.31-V4.33 SKE 草案与最小 API：已将 SKE migration、seed、service/API 与阶段文档形成干净 commit `554828f`，未提交 `server/index.js` / `server/schema.sql`
- [x] **V4.35** 推送 SKE 最小后端骨架到 GitHub：已将 `554828f feat: add minimal SKE skill recommendation backend` 推送到 `origin/main`，未部署、未服务器操作、未重启 PM2
- [x] **V4.36** `/api/skills` 本地挂载验证：新增 `server/scripts/verify-skills-api.js` 临时本地验证入口，不改 `server/index.js`；已验证 `/recommend` seed fallback 返回 3 条 Skill，`/event` impression / click 在数据库未迁移时返回 `stored:false`
- [x] **V4.37** 提交 SKE 本地验证脚本与记录：已创建 `0adcf09 test: add local verification for SKE skills API`，只包含验证脚本、V4.36 记录、tasks 和建设记录
- [x] **V4.38** 推送 SKE 本地验证 commit 到 GitHub：已将 `0adcf09` 推送到 `origin/main`，未部署、未服务器操作、未重启 PM2
- [x] **V4.39** `/api/skills` 干净挂载实现与本地验证：只在 `server/index.js` 中挂载 `skillsRouter`，通过部分暂存避免带入 TTS / ASR、study-plan、动画 cron 等已有脏改；本地验证继续通过 seed fallback 和事件 no-op
- [x] **V4.40** 推送 SKE 路由挂载 commit 到 GitHub：已将 `ee4259a feat: mount SKE skills API route` 推送到 `origin/main`，只包含 `/api/skills` 两行挂载与对应文档，未部署、未服务器操作
- [x] **V4.41** SKE-1C `/api/ai/skill` 最小实现：新增 AI Skill 服务层与 `POST /api/ai/skill`，支持指定 Skill、推荐 Skill 和 AI 不可用 fallback；不 push、不部署、不改数据库
- [x] **V4.42** 本地验证 `/api/ai/skill`：新增本地验证脚本，覆盖指定 Skill、自动推荐 Skill、缺参错误和未知 topic fallback；不 push、不部署、不改数据库
- [x] **V4.43** 推送 V4.41-V4.42 干净 commit 到 GitHub：已将 SKE roadmap、AI Skill endpoint 和本地验证脚本推送到 `origin/main`，未部署、未服务器操作
- [x] **V4.44** 提问斜杠产品设计：新增 `文档/V4.44提问斜杠产品设计与交互规格.md`，明确输入 `/` 触发 3-5 条下拉式动态提问词，点击后直接发送
- [x] **V4.45** 题目页提问斜杠前端最小版：在题目教练场输入框内触发下拉式推荐，首版抽 `SlashPromptMenu`，不做卷帘式或瀑布式
- [x] **V4.46** 树脉搜索产品设计：新增 `文档/V4.46树脉搜索产品设计.md`，定义搜索知识点、题目、方法、错因、真题、AI 问法和学习路径的分组结果
- [x] **V4.47** 树脉搜索最小版：总首页和数学主页已接入本地索引搜索，支持知识点、题目、方法、错因、真题和 AI 问法分组结果
- [x] **V4.47a** 微信标题与 PWA 元信息校准：网页标题、description、application-name、OG 标题描述和 manifest 已从中考数学单科定位改为 AI 学习教练总入口定位
- [x] **V4.48** 树脉搜索 AI 化：搜索结果从列表升级为“补法建议”，给出基础题、题组、真题、错因和可问 AI 的提问词
- [x] **V4.49** 提问词事件记录与权重回流：补齐 ai_used / helpful，根据学生个性化行为调整提问词排序

> V4 每次开工前必须读：
> - `AGENTS.md`
> - `tasks.md`
> - `文档/树脉V4界面重建设计规范.md`

> V4.11 当前结论：
> - 本地 dev server 已启动并完成首页桌面/手机截图检查
> - 桌面首页整体结构稳定，已处理侧栏亮白滚动线的视觉噪音
> - 移动端截图发现 headless Chrome 窄窗口下有裁切现象，已增加根容器、主区域、首页网格、学段条、底部导航、AI 浮窗的宽度约束
> - `npm run build` 已通过
> - 下一阶段进入 V4.12：逐页视觉巡检总首页 / 数学驾驶舱 / 知识树 / 错因 / 训练单 / 家长端 / 教师端

> V4.12 当前结论：
> - 总首页改为白色浅主题观察版
> - 总首页主体只保留数学 / 英语两个入口、身份学段、微信 AI 教练、共用 AI 学习 OS 信息
> - 总首页左侧栏保留，但改为通用系统侧栏：身份、学科入口、微信 AI 教练、反向规划、系统阶段
> - 总首页顶部导航改为通用导航：首页、数学、英语、微信 AI、反向规划、我的
> - 总首页不再展示数学掌握率、数学知识树进度、错因数量、薄弱知识点、二次函数等单科信息
> - 数学单科导航（知识树、练题、错因、训练单、23 种方法、0/194 进度）只在进入数学体系后出现
> - 数学单科信息只在进入 `math` 数学驾驶舱后出现
> - `npm run build` 已通过，桌面截图检查通过

> V4.13 当前结论：
> - 主题保留用户可调，默认浅色，顶栏提供“浅 / 深”快速切换
> - 设置面板继续保留深色、浅色、护眼、暖棕四种主题
> - 总首页右上角增加“登录 / 注册”，登录为安静文字按钮，注册为紫色主按钮
> - 注册按钮直接打开注册 tab，登录按钮直接打开登录 tab
> - 总首页隐藏 DeepSeek 模型和 Key 调试控件，进入学科页后仍可使用
> - `npm run build` 已通过，桌面截图检查通过
>
> V4.14 当前结论：
> - 登录 / 注册弹窗升级为树脉账户中心，不再是旧版两 tab 小表单
> - 账户中心包含扫码登录、验证码登录、账号登录、注册账号四种路径语义
> - 当前真正可用能力仍为手机号 + 密码登录 / 注册，沿用现有后端认证接口
> - 验证码登录和网页微信扫码登录先做正式入口与状态说明，不假装已经接通短信或网页扫码服务
> - 扫码页明确树脉当前主路径是 ClawBot 私聊绑定：微信添加“树脉学长”后发送“绑定 手机号”
> - 注册页补齐手机号、验证码、密码、确认密码、昵称、邀请码、隐私政策 / 用户协议 / 监护人同意函
> - 注册按钮按手机号、8 位密码、两次密码一致、协议勾选做前端禁用约束
> - `npm run build` 已通过
>
> V4.15 当前结论：
> - 用户已注册腾讯云，未来短信验证码具备接入条件
> - 但当前阶段不急着接短信验证码，继续保留账号密码登录 / 注册 + 微信 ClawBot 私聊绑定
> - 另一个对话里的腾讯云账号、用户名、密码、验证码等敏感信息不会自动进入本窗口；不要依赖跨窗口记忆敏感凭据
> - 未来如需进入腾讯云控制台，优先由用户本机登录，或创建权限受限的 CAM 子账号
> - API SecretId / SecretKey 只能放服务器环境变量，不写入代码、文档或前端
> - 短信正式接入前必须先设计验证码表、防刷规则、发送频率限制、IP 限制和验证码过期策略
> - 腾讯云短信作为优先供应商，阿里云作为备选
>
> V4.16 当前结论：
> - 新增账户中心 QA deep link：`?auth=register|scan|sms|login` 可直接打开对应弹窗，`?theme=dark|light|green|sepia` 可直接检查主题
> - 移动端账户中心增加硬性宽度约束、禁横向滚动、窄屏验证码上下排列、协议和底部 tab 换行
> - 已生成本地截图检查注册页、扫码页、验证码页和深色主题状态
> - Chrome headless 在 390px 移动截图下仍可能出现工具级裁切误差，后续部署前建议用真实浏览器响应式模式或手机实机复核
> - `npm run build` 已通过
>
> V4.17 当前结论：
> - 总首页顶栏重复出现多个“微信 AI”的根因是 `PORTAL_NAV` 中 `id:"me"` 被同时用于“微信 AI”和“我的”，React key 重复导致导航项复用错乱
> - 已将“微信 AI”改为唯一 `id:"wechat"`，V4.18 已进一步升级为独立微信 AI 页面
> - 导航渲染 key 已加上 label 和 index，降低后续重复 key 风险
> - 已截图保存到 `文档/截图记录/2026-05-08-v4-17-home-nav-desktop.png`
> - `npm run build` 已通过
>
> V4.18 当前结论：
> - 总入口壳层固定为 `home / english / wechat / me / plan`，这些页面必须使用通用总入口导航和通用侧边栏
> - 数学单科导航只在 `math / graph / practice / wrong / printplan / methods / diag / paper / ocr / sprint / agent` 等数学功能页出现
> - “微信 AI”不再借道“我的”，已独立为 `wechat` 页面，顶栏会高亮“微信 AI”，页面内容聚焦 ClawBot 私聊绑定
> - 修复 `?view=english`、`?view=wechat` 在 React 严格模式下被过早清理导致 QA 截图回到首页的问题
> - 已截图保存英语页和微信 AI 页：`文档/截图记录/2026-05-08-v4-18-english-nav-fixed-desktop.png`、`文档/截图记录/2026-05-08-v4-18-wechat-nav-fixed-desktop.png`
> - `npm run build` 已通过
>
> V4.19 当前结论：
> - 移动端总入口壳层继续保持 `home / english / wechat / me / plan`，不出现数学底部导航和数学单科进度信息
> - 首页、英语页增加总入口文案防裁切规则：关键标题、段落、标签、按钮和卡片都允许收缩与换行
> - 微信 AI / 我的页复用 `WechatCoachPanel`，窄屏下二维码、步骤、绑定指令和登录按钮改为安全布局
> - 移动端总入口顶栏未登录状态收束为一个“登录”主入口，减少右侧挤压
> - 本地 DOM 复核确认 390px 视口下页面走移动断点、主体为单列、关键文字具备断行规则；Chrome headless PNG 截图仍可能出现工具级右侧裁切误差，后续建议用真实浏览器响应式模式或手机实机复核最终观感
> - 已截图保存移动端复核图：`文档/截图记录/2026-05-08-v4-19-home-mobile-final-wait.png`、`文档/截图记录/2026-05-08-v4-19-english-mobile-fixed-2.png`、`文档/截图记录/2026-05-08-v4-19-wechat-mobile-fixed.png`、`文档/截图记录/2026-05-08-v4-19-me-mobile-fixed.png`
> - `npm run build` 已通过
>
> V4.20 当前结论：
> - 使用本地 dev server 和应用内真实浏览器响应式视口 `390×844` 复核总入口四页：`home / english / wechat / me`
> - 浅色主题和深色主题均已检查：标题、段落、标签、按钮、微信绑定区、我的页数据卡均自然换行，没有真实横向滚动
> - 横向滚动拖动测试确认 8 个组合画面不发生水平位移；DOM 快照确认总入口页不出现数学底部导航文本组合
> - 深色主题保持安静、清晰、有未来感；登录入口清楚但不喧宾夺主
> - 本阶段没有发现需要改 `src/App.jsx` 的问题，只更新任务与文档记录，不部署线上
> - 已截图保存：`2026-05-08-v4-20-home-light-mobile.png`、`2026-05-08-v4-20-english-light-mobile.png`、`2026-05-08-v4-20-wechat-light-mobile.png`、`2026-05-08-v4-20-me-light-mobile.png`、`2026-05-08-v4-20-home-dark-mobile.png`、`2026-05-08-v4-20-english-dark-mobile.png`、`2026-05-08-v4-20-wechat-dark-mobile.png`、`2026-05-08-v4-20-me-dark-mobile.png`
> - `npm run build` 已通过
>
> V4.21 当前结论：
> - 已读取 `AGENTS.md`、`tasks.md`、`文档/树脉V4界面重建设计规范.md`、`文档/树脉系统建设记录.md`、`文档/重启后继续提示词.md`
> - `git status --short` 显示当前工作区不只是 V4 总入口前端 UI，还包含后端、部署脚本、TTS/ASR、动画、视频子项目、文档和截图等多类改动
> - `src/App.jsx` 是主要前端改动文件，已包含 V4 总入口、账户中心、语音/AI 教练等多阶段累积改动
> - `server/` 目录存在实际后端改动和新增文件：如 `server/api/asr.js`、`server/api/tts.js`、`server/api/study-plan.js`、`server/services/tts.js`、`server/services/tencent-sign.js`、`server/services/animation-cron.js` 等，不能把本阶段简单判断为“只需前端静态部署”
> - `deploy/deploy.sh`、`deploy/deploy-backend.sh`、`server/ecosystem.config.cjs` 也有部署路径和用户调整，部署前需要单独确认脚本策略
> - 存在构建/生成产物与大型目录：`dist-singlefile/`、`public/animations/`、`video/`，其中 `video/` 约 1GB，不建议混入本次线上同步
> - `local-notes/` 是本地备忘目录，包含腾讯云 TTS 配置提示，未发现明文密钥，但不应提交或同步
> - 敏感信息扫描未发现明文 SecretId / SecretKey / DeepSeek Key；看到的是真实能力所需的环境变量名、占位值和安全说明
> - `npm run build` 已通过：Vite 生产包生成成功，`data` 包 gzip 约 222.85 kB，主应用包 gzip 约 97.28 kB
> - `git diff --check` 发现 `tasks.md` 原有 3 处行尾空格，本阶段顺手清理
> - 本阶段不部署线上；若进入 V4.22，建议先按“前端静态同步”和“后端能力同步”拆成两个明确步骤
> - V4.21 为同步前检查阶段，无新增 UI 截图；线上同步后再保存线上复查截图
>
> V4.22 当前结论：
> - 已重新运行 `npm run build`，构建通过，`dist/` 为本阶段最新产物
> - 先按文档备份并覆盖 `/var/www/shumai`，随后发现 Nginx 实际线上根目录是 `/opt/shumai/dist`
> - 已额外备份 `/opt/shumai/dist`，并只把本地 `dist/` 静态文件同步到该目录
> - 全程没有执行 `git push`、服务器 `git pull`，没有同步 `server/`，没有同步 `local-notes/`、`video/`，没有重启 PM2，没有改数据库
> - 线上 `https://shumai.cc` 已返回新构建资源 `/assets/index-BqO7Cdc5.js`
> - `https://shumai.cc/api/health` 返回正常：`{"status":"ok","name":"树脉后端","version":"1.0.0"}`
> - 线上复查截图已保存：总首页 / 英语页 / 微信 AI 页桌面端与手机端、注册弹窗手机端
> - 复查确认总首页不是数学首页，英语 / 微信 AI 使用通用总入口壳层，注册弹窗手机端不横向溢出，验证码入口仍为诚实占位
>
> V4.23 当前结论：
> - 已按 2号窗口职责完成本地工作区整理和风险分组，本阶段没有部署、没有 git push、没有服务器 git pull、没有重启后端、没有改数据库、没有删除文件
> - 当前工作区仍然不适合直接 `git push`：V4 前端 UI、文档截图、后端 API、TTS/ASR、动画、部署脚本、视频子项目和本地私密笔记混在一起
> - 当前工作区也不适合服务器 `git pull`：`server/` 已包含 TTS/ASR/study-plan 路由、数据库结构、微信绑定、动画定时任务和 PM2/部署配置变化，需要独立后端审查
> - 敏感信息扫描未确认发现明文真实云密钥；但 `local-notes/` 与云服务配置相关，应保持本地私密，不提交、不同步
> - 发现大型目录 `video/` 约 1.0G，其中 `video/node_modules/` 约 998M，必须排除在 GitHub 和服务器同步之外
> - 建议提交前先补 `.gitignore`：`local-notes/`、`video/`、`server/cosyvoice/`、`dist-singlefile/`、`*.log`
> - 已新增整理报告：`文档/V4.23本地工作区整理报告.md`
>
> V4.24 当前结论：
> - 已补齐 `.gitignore`：新增 `local-notes/`、`video/`、`server/cosyvoice/`、`dist-singlefile/`、`*.log`
> - 保留既有 `dist/`、`.env`、`.env.*`、`*.local`、`.DS_Store` 忽略规则
> - `local-notes/`、`video/`、`server/cosyvoice/` 当前未被 Git 跟踪，ignore 生效后会从 `git status` 中消失
> - 已按最小安全补漏要求单独复核 `video/`：`git ls-files video` 无输出，确认未被 Git 跟踪；`.gitignore` 中已有 `video/`，未删除、未移动、未执行 `git rm --cached`
> - 已继续复核高风险忽略项：`local-notes/`、`.env`、`.env.*`、`*.local`、`server/cosyvoice/`、`dist-singlefile/`、`*.log`、`.DS_Store` 均已存在于 `.gitignore`
> - `git ls-files local-notes server/cosyvoice dist-singlefile .env .env.local` 只显示 `dist-singlefile/` 下 5 个已跟踪文件；本阶段只报告，不执行 `git rm --cached`
> - `dist-singlefile/` 已加入 ignore，但其中 5 个文件已被 Git 跟踪，ignore 不会自动移除；后续如要移出版本库，需要单独确认
> - `public/animations/` 暂不忽略，因为它可能是未来前端可访问资源，需产品和部署策略单独判断
> - 已更新提交拆分执行顺序清单：`文档/V4.24提交拆分清单.md`，明确 7 组提交顺序、永久不提交清单、暂缓提交清单、`dist-singlefile/` 特别处理和下一阶段建议
> - V4.24 全程没有 `git add`、没有 `git commit`、没有 `git push`、没有 `git rm --cached`、没有删除文件、没有服务器操作
>
> V4.25 / V4.26 当前结论：
> - 已创建并推送两个干净提交到 `origin/main`：`9b67776 feat: rebuild ShuMai V4 portal and account experience`、`e90e9fb docs: record V4 portal rollout and deployment findings`
> - V4 前端稳定成果提交只包含 `src/App.jsx`、`index.html`、`public/manifest.json`、`public/sw.js`
> - V4 文档截图提交包含 `.gitignore`、`tasks.md`、V4.23 / V4.24 报告、设计规范、建设记录和截图记录
> - 未提交 `server/`、`deploy/`、`video/`、`local-notes/`、`public/animations/`、`server/cosyvoice/`、`dist-singlefile/`
> - 未部署、未服务器操作、未重启 PM2、未改数据库
>
> V4.27 当前结论：
> - 已检查剩余工作区：后端 API、schema、微信、TTS / ASR、动画、部署脚本、旧产物、数据注释和 SKE 前置资料仍混在一起
> - 当前剩余变更仍不适合直接 `git push`，也不适合服务器整仓 `git pull`
> - 已将剩余文件分为：后端稳定能力候选、数据库 / schema、TTS / ASR 暂缓、动画 / HyperFrames 暂缓、部署脚本与线上路径修正、SKE 前置资料、本地私密 / 绝不提交内容
> - 敏感信息扫描未确认发现明文真实云密钥；看到的主要是环境变量名、占位值、示例说明和从 `process.env` 读取密钥的正常代码
> - `public/animations/` 约 1.4M、89 个文件，暂不提交；`dist-singlefile/` 约 1.1M，其中 5 个文件已被 Git 跟踪，暂不处理
> - 已新增报告：`文档/V4.27后端变更拆分报告.md`
> - V4.27 全程没有 `git add`、没有 `git commit`、没有 `git push`、没有服务器操作、没有部署、没有重启 PM2、没有改数据库、没有删除文件
>
> V4.28 当前结论：
> - 已逐文件审查后端稳定候选，确认 V4.29 只能做很窄的低风险提交，不能整体提交 `server/`
> - 可进入 V4.29 的候选：`server/api/ai.js`、`server/prompts/tutor.js`、`server/api/teacher.js`
> - 需要拆小后再考虑的文件：`server/index.js`、`server/package.json`、`server/api/wechat.js`、`server/bot.js`、`server/api/parent.js`
> - 必须暂缓：`server/schema.sql`、`server/api/study-plan.js`、`server/services/daily.js`、`server/api/admin.js`、`server/api/svg.js`、全部 TTS / ASR、全部动画 / HyperFrames、部署脚本、`public/animations/`、`dist-singlefile/`
> - `server/index.js` 当前同时挂载 TTS、ASR、study-plan，并在启动时调用动画 cron，不能原样进入后端稳定提交
> - 敏感信息扫描未确认发现明文真实云密钥；看到的主要是环境变量名、占位示例和从 `process.env` 读取密钥的正常代码
> - 已新增报告：`文档/V4.28后端稳定能力审查报告.md`
> - V4.28 全程没有 `git add`、没有 `git commit`、没有 `git push`、没有服务器操作、没有部署、没有重启 PM2、没有改数据库、没有删除文件
>
> V4.29 当前结论：
> - 已复核允许进入本轮的 3 个后端文件：`server/api/ai.js`、`server/prompts/tutor.js`、`server/api/teacher.js`
> - 三个文件均不依赖 `server/index.js` 新挂载逻辑、不依赖未部署 schema、不依赖 TTS / ASR / 动画、不包含真实密钥、token、账号密码
> - 已运行 `node --check server/api/ai.js`、`node --check server/prompts/tutor.js`、`node --check server/api/teacher.js`，均通过
> - 本阶段计划创建两个本地 commit：低风险后端能力 commit、阶段审查文档 commit
> - 本阶段不提交 `server/index.js`、`server/schema.sql`、`server/package.json`、`server/api/wechat.js`、`server/bot.js`、`server/api/parent.js`、`server/api/study-plan.js`、`server/services/daily.js`、`server/api/admin.js`、`server/api/svg.js`、TTS / ASR、动画、部署脚本、`public/animations/`、`dist-singlefile/`
> - 已新增记录：`文档/V4.29后端低风险稳定提交记录.md`
> - V4.29 不 push、不部署、不服务器操作、不重启 PM2、不改数据库、不删除文件
>
> V4.30 当前结论：
> - 用户在本机终端成功执行 `git push origin main`
> - 已推送两个 V4.29 干净提交：`c4d06be feat: refine low-risk AI tutoring backend modules`、`0546eb0 docs: record backend review and low-risk commit boundary`
> - 推送后 `main...origin/main` 不再 ahead
> - 未部署、未服务器操作、未重启 PM2、未改数据库
>
> V4.31 当前结论：
> - 已审查 `server/schema.sql`、`server/index.js`、`server/api/study-plan.js`、`server/services/daily.js`、`server/api/parent.js`、`server/api/admin.js`、`server/api/svg.js`、`server/api/wechat.js`、`server/bot.js`
> - 当前 schema diff 混有 `study_plans`、`users.exam_date`、`users.role`、微信上下文字段、`resource_billing`、`tts_usage` 等多条能力线，不适合整体提交或直接上线
> - `question_svgs` 表在当前 HEAD 已存在，本轮主要风险是 `server/api/svg.js` 的文件缓存与直出能力，需单独审查
> - SKE-1 最小数据库范围应单独设计 `prompt_skills` 与 `prompt_skill_events`，不依赖 study-plan、TTS、SVG、微信上下文或动画
> - 建议后续新增独立 migration 文件，而不是继续依赖后端启动时执行整份 `schema.sql`
> - 已新增计划：`文档/V4.31数据库变更拆分计划.md`
> - V4.31 全程没有 `git add`、没有 `git commit`、没有 `git push`、没有服务器操作、没有部署、没有重启 PM2、没有改数据库、没有执行 SQL、没有删除文件
>
> V4.32 当前结论：
> - 已新增 SKE-1 独立 migration 草案：`server/migrations/20260508_ske_minimal.sql`
> - migration 只包含 `prompt_skills`、`prompt_skill_events` 和必要索引，不混入 study-plan、TTS / ASR、SVG、微信上下文、动画 cron
> - 已新增种子 Skill 草案：`server/seeds/prompt_skills_seed.json`
> - 种子 Skill 共 41 条，JSON 解析通过，`skill_key` 无重复；聚焦初中数学，不做英语
> - 覆盖基础知识、基础题、题组训练、压轴题组、10 年中考真题、23 种方法、向上提升、向下补差、错因复盘等树脉数学根基
> - 已新增报告：`文档/V4.32-SKE1最小migration与种子Skill草案.md`
> - V4.32 全程没有执行 SQL、没有连接数据库、没有改线上数据库、没有部署、没有服务器操作、没有重启 PM2、没有 `git add / commit / push`
>
> V4.33 当前结论：
> - 已新增 `server/services/prompt-skills.js`，实现数据库优先、seed 降级的 Skill 推荐服务
> - 已新增 `server/api/skills.js`，提供 `POST /recommend` 与 `POST /event` Router 草案
> - 推荐 API 目标返回 3 条 Skill；事件 API 仅支持 `impression` / `click`
> - 数据库不可用或表未迁移时，推荐接口读取 `server/seeds/prompt_skills_seed.json`，事件记录降级为 no-op 并返回 `stored:false`
> - 本阶段没有修改 `server/index.js`，没有挂载 `/api/skills`，没有执行 SQL，未部署
> - 已运行 `node --check server/services/prompt-skills.js`、`node --check server/api/skills.js`，均通过；seed fallback 验证返回 3 条 Skill；`git diff --check` 通过
> - 已新增记录：`文档/V4.33-SKE1推荐API与事件记录实现记录.md`
>
> V4.34 / V4.35 当前结论：
> - 已创建并推送 `554828f feat: add minimal SKE skill recommendation backend`
> - 提交范围只包含 SKE 最小 migration、41 条种子 Skill、`server/services/prompt-skills.js`、`server/api/skills.js`、`tasks.md`、建设记录和 V4.31-V4.33 文档
> - 没有提交 `server/index.js`、`server/schema.sql`、TTS / ASR、部署脚本、动画、study-plan、SVG、微信相关文件
> - 未部署、未服务器操作、未重启 PM2、未执行 SQL、未修改数据库
>
> V4.36 当前结论：
> - `server/index.js` 仍按 V4.28 / V4.31 判定为高风险混合文件，本阶段不直接修改、不提交
> - 新增本地临时验证脚本：`server/scripts/verify-skills-api.js`
> - 脚本创建临时 Express app，将 `skillsRouter` 挂载到 `/api/skills`，使用本地测试 JWT 调用接口，结束后自动关闭
> - `/api/skills/recommend` 本地验证返回 200，`source: seed`，返回 3 条 Skill：`math_topic_quadratic_function_breakthrough_001`、`math_topic_function_image_reading_001`、`math_common_hint_first_step_001`
> - `/api/skills/event` 的 `impression` 与 `click` 均返回 200、`ok:true`、`stored:false`，说明数据库未迁移时 no-op 降级正常
> - 已运行 `node --check server/scripts/verify-skills-api.js`、`node --check server/api/skills.js`、`node --check server/services/prompt-skills.js`，均通过
>
> V4.37 / V4.38 当前结论：
> - 已创建并推送 `0adcf09 test: add local verification for SKE skills API`
> - 提交范围只包含 `server/scripts/verify-skills-api.js`、`文档/V4.36-SKE1本地挂载验证记录.md`、`tasks.md`、`文档/树脉系统建设记录.md`
> - 未提交 `server/index.js`、`server/schema.sql`、TTS / ASR、study-plan、SVG、微信、部署脚本、动画、私密目录
> - 未部署、未服务器操作、未重启 PM2、未执行 SQL、未修改数据库
>
> V4.39 当前结论：
> - 已在 `server/index.js` 中做 `/api/skills` 最小挂载：引入 `skillsRouter`，并 `app.use('/api/skills', skillsRouter)`
> - 因 `server/index.js` 工作区已有 TTS / ASR、study-plan、动画 cron 等脏改，本阶段只允许把 `/api/skills` 两行作为干净变更进入提交
> - 没有启动真实 `server/index.js`，避免触发未拆分的动画 cron 或其它实验能力
> - 使用 `server/scripts/verify-skills-api.js` 再次验证：`recommend` 返回 3 条 seed Skill，`impression` / `click` 均返回 `ok:true`、`stored:false`
> - 已运行 `node --check server/index.js`、`node --check server/api/skills.js`、`node --check server/services/prompt-skills.js`，均通过

### W1. 微信 ClawBot 集成 ⭐⭐⭐

> 基于腾讯官方 iLink 协议（`@tencent-weixin/openclaw-weixin`），合法、不封号。  
> 学生加微信好友即绑定，在微信里直接和 AI 学伴对话。

- [x] **W1.1** ClawBot 基础接入（`server/bot.js`）  
  · 扫码登录（QR 码生成 + 轮询确认 + token 保存）  
  · 长轮询消息接收（getupdates）  
  · 回复封装（sendmessage）  
  · 自动重连（token 过期重新登录）

- [x] **W1.2** 学生绑定流程  
  · 学生发"绑定 手机号" → 匹配 users 表 → 写入 wechat_uid  
  · 未绑定用户自动提示绑定流程  
  · 后端 API：`/api/wechat/status` + `/api/wechat/unbind`
  · H5 我的页展示树脉学长微信入口、绑定指令、绑定状态和最近互动时间

- [x] **W1.3** AI 对话（文字）  
  · 消息 → 查学情(掌握/薄弱/错题数) → 组装 Prompt → DeepSeek → 回复  
  · System Prompt 注入学生人格化上下文  
  · 保存 chat_history 支持多轮追问（最近10条）

- [x] **W1.4** AI 对话（语音）  
  · 微信语音 → AMR → Whisper/讯飞 → 文字 → AI 回复

- [x] **W1.5** 定时推送（node-cron）  
  · 每天 7:00 今日任务 / 21:00 学习小结 / 周一 8:00 周报  
  · 批量推送所有绑定用户（限速 500ms/人）

- [x] **W1.6** 智能互动推送  
  · 遗忘曲线触发复习提醒（每天14:00，仅推送到期用户）/ 考前倒计时关键节点（30/14/7/3/1天）/ 薄弱点提醒（每周三20:00，超7天未练知识点）

### G1. 全面 AI 化 ⭐⭐⭐

> 每个知识点、每道题都有明显的"AI 讲解"按钮，一键获得大模型讲解。

- [x] **G1.1** DeepSeek API 后端接入  
  · `server/api/ai.js`：5个接口（explain / wrong-analysis / topic-summary / voice-script / chat）  
  · 每个接口自动查询学生画像注入 Prompt  
  · 对话记录保存到 chat_history 表

- [x] **G1.2** 学伴 Agent 人格（RTF 结构化提示词）  
  · `server/prompts/tutor.js`：6个场景化 Prompt 生成函数  
  · "树脉学长"人设：研究生学长，耐心不啰嗦，有家教经验
  · 真人化规则：口语表达、时间感知问候、情绪识别、思考停顿  
  · 禁止列表：AI感表达、说教、过度语气词、Markdown格式  
  · 学生上下文注入：年级/掌握/薄弱/错题/打卡天数

- [x] **G1.3** 前端 AI 讲解按钮（`AskTutor` 组件）  
  · 3处题目展示区均添加"🤖 问学长"按钮（基础模块/练习页/错题页）  
  · 点击自动调用 callAI → 展开讲解卡片（紫色主题）  
  · 支持追问：底部输入框 + 对话历史保持  
  · 模式切换：explain（讲解）/ wrong（错题分析）/ topic（知识点总结）

- [x] **G1.4** 全局 AI 浮窗（`AIFloat` 组件）  
  · 右下角紫色渐变 🤖 气泡按钮（移动端适配底部偏移）  
  · 点击展开完整聊天界面（桌面380px/移动端全宽85vh）  
  · 自动感知当前页面上下文（详情页注入知识点名称）  
  · 聊天气泡UI：用户紫色右对齐 + 学长蓝灰左对齐  
  · 空状态引导："嗯嗯，有什么数学问题？"

### P1. 试卷逆向分析模块 ⭐⭐

> 一套试卷怎样考满分？逆向拆解出题意图。  
> 支持两种学习模式：正向递进 + 逆向归因。

- [x] **P1.1** 试卷录入  
  · 文本粘贴输入（选择/填空/解答混合）  
  · AI 逐题解析：知识点code + 难度 + 考点 + 易错点  
  · 后端 API：`POST /api/paper/analyze`

- [x] **P1.2** 试卷逆向拆解（`PagePaper` 组件）  
  · 总览卡片：题目数/知识点数/平均难度/覆盖率  
  · 难度分布可视化（易/中/难彩色条）  
  · 薄弱点诊断：标红未掌握知识点，可点击跳转补习  
  · 补习路径建议（按知识依赖顺序排列）  
  · 逐题拆解卡片（难度星级 + 考点 + 易错点 + 知识点标签✓/✗）

- [x] **P1.3** 生成同类型模拟卷  
  · AI 根据原卷分析命制同知识点同难度新题  
  · `MockQuestion` 子组件（展开/收起答案）  
  · 支持"再生成一套"  
  · 后端 API：`POST /api/paper/mock`

- [x] **P1.4** 双模式 UI  
  · 首页快速入口 + 侧边栏导航 "📄 试卷分析"  
  · 三步流程：输入 → 分析结果 → 模拟卷（进度条指示）  
  · 正向（知识树→练习）+ 逆向（试卷→薄弱→补习）双通道

### U1. 首页 UI 重构 ⭐⭐⭐

> 从"百科全书"界面变成"私人教练"界面。  
> 三端适配：手机端底部 Tab 栏（仿 App）、Pad 端图标侧边栏、桌面端全功能侧边栏。  
> 导航栏精简：移除教师端/家长端/会员中心/后台管理的入口（独立页面访问）。

- [x] **U1.1** 顶部导航栏精简  
  · 从 NAV 数组删除 `teacher`/`parent`/`vip`/`admin`  
  · 从首页快速入口删除对应四个按钮  
  · 页面路由保留（通过 URL 直接访问），只隐藏导航入口  
  · 验证：顶部导航只剩学生相关功能

- [x] **U1.2** 手机端底部 Tab 栏  
  · 新增 `BottomTabBar` 组件，5个 Tab：首页(⊡)/学习(▦)/练习(✎)/错题(📋)/我的(👤)  
  · 手机端（<640px）隐藏顶部导航功能按钮，只保留 Logo+头像  
  · 手机端隐藏左侧抽屉式侧边栏，改用底部 Tab 导航  
  · 错题 Tab 带红色 badge 显示数量  
  · 底部栏 safe-area 适配（env(safe-area-inset-bottom)）  
  · 验证：手机端点击5个 Tab 均可正常切换页面

- [x] **U1.3** "我的"页面（PageMe）  
  · 新增 `PageMe` 组件，手机端"我的"Tab 对应的完整个人中心  
  · 用户头像（首字母圆形）+ 自定义昵称 + 年级显示  
  · 学情数据卡：已掌握/错题数/预测分/打卡天数  
  · 工具入口列表：知识图谱、试卷分析、作业识别、AI学伴、考前冲刺、晨读卡  
  · 设置入口：AI 模型选择、API Key 设置  
  · 数据存储：昵称存 localStorage  
  · 验证：手机端点"我的"Tab 显示完整个人中心

- [x] **U1.4** Pad 端图标侧边栏  
  · Pad 端（640-1024px）侧边栏改为 44px 图标-only 模式  
  · 点击/hover 展开到 200px 显示完整标签（overlay 模式，不推挤内容）  
  · 图标带红点 badge（遗忘到期数、错题数）  
  · 收起时只显示图标，展开时显示图标+文字  
  · 验证：Pad 端侧边栏可正常收起/展开

- [x] **U1.5** 桌面端侧边栏内容重构  
  · 侧边栏顶部增加用户卡片（头像+昵称+年级，点击编辑昵称）  
  · 五个新区块替换现有内容：  
    ① 立即行动（今日任务进度、遗忘曲线到期、AI推荐下一知识点）  
    ② 考试倒计时（大字天数+阶段+重点）  
    ③ 我的进度（三数字卡+三领域进度条）  
    ④ 薄弱知识点 TOP3（动态计算，带考频标签）  
    ⑤ 工具入口（精简4-5个）  
  · 验证：桌面端侧边栏显示新内容，数据动态变化

- [x] **U1.6** 首页主区域布局调整  
  · 快速入口改为横排，放在领域掌握进度上方  
  · 领域掌握进度改为横排（三列并排）  
  · 调整 grid 布局顺序  
  · 验证：首页从上到下依次为 Hero→快速入口(横排)→领域进度(横排)→其余内容

---

## 🔶 P2：增强功能

### W2. 文档分析（作业/试卷 OCR）

> 学生微信拍照上传作业/试卷 → 智能解析 → 记录掌握情况 → 融入学习计划。

- [x] **W2.1** H5端图片上传组件（拍照/相册/10MB限制） + 文字输入模式
- [x] **W2.2** AI智能解析（DeepSeek Vision）→ 识别题目 + 匹配知识点 + 判对错 + 难度分级
- [x] **W2.3** 错题自动录入（可手动修正判定） + 记录分析历史  
  · 识别出的错题自动加入学生错题本  
  · 关联知识点 + 推荐对应练习题  
  · 更新学生学情数据（薄弱点重新计算）

### J3. 题库防盗版

> 1334 道题不能全部暴露在前端 JS 中。

- [x] **J3.1** 题库 API 化（后端 `questions.js` 按需返回单题）
- [x] **J3.2** 未登录用户只显示题目前 3 题预览（顶部提示条 + 底部解锁卡片 → 跳转会员中心）
- [x] **J3.3** API 限流（30次/分钟/用户，内存 Map + 定时清理）
https://shumai-2026.netlify.app/?view=admin- [x] **J3.4** 题目内容防复制（CSS `.q-content` user-select:none）

### F2-F3. 每日任务 + 遗忘曲线

- [x] **F2** 每日任务系统  
  · 首页"今日任务"卡片：错题复练 + 新知识点 + 挑战题 + 晨读卡  
  · XP 经验值奖励显示  
  · 后端 `GET /api/daily` 接口 + `server/services/daily.js` 服务

- [x] **F3** 遗忘曲线复习调度  
  · 间隔：1天 → 3天 → 7天 → 30天，再错重置  
  · `POST /api/daily/review` 更新调度  
  · schema 新增 `review_interval` + `next_review` 字段 + 索引

### H1-H4. 激励与可视化

- [x] **H1** 经验值 + 连续打卡（火焰图标 + XP 计数）
- [x] **H2** 能力雷达图（6维SVG：代数/几何/统计/函数/方法/速度）
- [x] **H3** 分数预测曲线（掌握度×考频权重→预测分，首页SVG折线图 + 非线性映射 + “你在这里”标注）
- [x] **H4** 方法卡收集（23张卡进度 + 全集齐"方法大师"成就）

### T1. 定时任务自动化

- [x] **T1.1** 每日凌晨1:00预生成所有用户任务（`cron-tasks.js` + `daily_tasks`表）
- [x] **T1.2** 每周一8:00推送周报（`generateWeeklyReport` 含掌握/错题/打卡/曲线统计）
- [x] **T1.3** 每晚21:00推送学习小结
- [x] **T1.4** 每日7:00推送含冲刺阶段提醒（`getSprintPhase` 自动判断）

### I1. 考前冲刺模式

- [x] **I1** `PageSprint` 完整实现  
  · 日期选择器（持久化localStorage）  
  · 倒计时大卡片 + 4阶段进度条（补漏→强化→冲刺→保温）  
  · 每日冲刺计划（按阶段自动调整题量配比）  
  · 4格状态卡（掌握/完成率/错题/剩余天数）  
  · 薄弱知识点TOP10（按考频排序，可跳转）  
  · 后端 `getSprintPhase` + `buildDailyPlan` 服务

---

## 🚀 下一阶段：Railway 部署 + 题库扩充

### R1. Railway 部署（测试环境）

- [x] **R1.1** 创建 `railway.toml` 配置文件（构建命令、启动命令、端口）
- [x] **R1.2** 配置环境变量（DATABASE_URL、DEEPSEEK_KEY、JWT_SECRET 等）
- [x] **R1.3** PostgreSQL 数据库迁移（Railway 托管 Postgres，运行 schema.sql）
- [x] **R1.4** 前端 Vite build 部署到 Netlify，后端 API 部署到 Railway
- [x] **R1.5** 验证：健康检查 `/api/health` ✅
- [x] **R1.6** 自定义域名 shumai.cc 已上线✅

### A1. 用户认证系统（2026-05-04）

- [x] **A1.1** 注册/登录 Modal（手机号+密码，密码可见性切换 👁）
- [x] **A1.2** 注册后左上角显示昵称+头像（第一个汉字圆形头像）
- [x] **A1.3** 昵称可编辑（`NicknameEditModal` + 后端 `PUT /api/auth/profile`）
- [x] **A1.4** `?view=admin` URL 读后即清理（不持久化到 localStorage，刷新不还原）
- [x] **A1.5** 侧边栏昵称与认证用户同步（`shumai_nickname` ← `authUser.nickname`）
- [x] **A1.6** API 代理 → 已改为 Nginx 反代 `/api/*` → localhost:3001✅
- [x] **A1.7** `window.__SHUMAI_TOKEN` 全局 token（启动读 localStorage，登录后写）
- [x] **A1.8** 后台 admin 权限支持 `ADMIN_PHONE` 环境变量（Railway 配置）

### B1. Bug 修复（2026-05-04）

- [x] **B1.1** M2 基础习题错题角标错误计数 → 仅统计 `BASICS_BY_TOPIC[t.id]` 直接拥有的题目，不跨父级共享
- [x] **B1.2** M3 题组 / M4 压轴做错题未累加左侧进度 → 同步调用 `addBasicWrong`
- [x] **B1.3** M3/M4 错题刷新后消失 → `m3WrongSet`/`m4WrongSet` 从 `basicWrongSet` 懒初始化恢复
- [x] **B1.4** 错题本显示为空 → 新增 `lookupBasicQ()` 工具函数，错题本统一显示真题+基础+题组+压轴
- [x] **B1.5** 真题刷题登录后仍锁定 → 修正 `window.__SHUMAI_TOKEN__`（多余下划线）→ `window.__SHUMAI_TOKEN`

### Q1. 题库扩充（目标：1500 道精品题）

> 当前：624真题 + 500基础 + 35题组 + 20压轴 + 15诊断 = **1194 道**  
> 目标：基础题 500→550，题组 35→50，压轴 20→30

- [x] **Q1.1** 补充基础题 50 道（优先代数高频：quad_eq/quad_fn/linear_fn）→ 500→549道
- [x] **Q1.2** 补充题组 15 组（方法专练：配方法/换元法/相似判定）→ 35→50组
- [x] **Q1.3** 补充压轴题 10 组（二次函数综合 + 圆与切线综合）→ 20→30组
- [x] **Q1.4** 几何题补充 SVG 图形（自动生成+缓存系统，questionId传入，有Key自动触发）
- [x] **Q1.5** sol 字段润色（极短sol从133道降至4道，129道补写完整步骤）

### C1. 腾讯云备案 — 香港服务器无需ICP备案，已删除此任务 ✅

### 模块 D：管理端

- [x] **D1** 管理端框架（`PageAdmin` 4个Tab + admin鉴权 + `system_config`表）
- [x] **D2** 定时任务可视化配置（cron编辑器+快捷预设+启用/禁用+手动触发+热重载）
- [x] **D3** 用户管理（列表+角色切换：学生/管理员/教师/家长+学情概览）
- [x] **D4** 数据统计面板（总用户/微信绑定/7日活跃/待解错题/今日任务）
- [x] **D5** 系统配置编辑（遗忘曲线间隔、冲刺阶段阈值等 JSON 编辑器）
- [x] **D6** 题库管理（知识点搜索/筛选/统计概览 + 真题分布统计 + 关键点/方法展示）

### 模块 K：教师端

- [x] **K1-K5** 班级管理 + 教师 Agent 周报 + 试卷 PDF 生成
  · `server/api/teacher.js`：班级CRUD + 学情汇总 + AI周报 + 智能出卷  
  · `PageTeacher`：班级列表（邀请码）+ 学生学情表 + AI周报生成 + 出卷界面

### 模块 L：家长端

- [x] **L1-L4** H5 页面 + 每日摘要 + 周报 + 微信推送
  · `server/api/parent.js`：绑定孩子（手机号）+ 每日学情 + 周报数据  
  · `PageParent`：绑定流程 + 孩子卡片 + 今日打卡/任务 + 周报+打卡日历+进度条


### 模块 M：高级 AI（Sprint 3）

- [x] **M1** 拍题搜题（图片/文字 → AI解题 → 知识点+步骤+方法+常见错误）
- [x] **M2** 错题变形题自动生成（一键生挅3道变式题+答案+思路）
- [x] **M3** 错误模式分析（基于错题库分析错误规律+补救建议）
- [x] **M4** 学伴 Agent 策略升级（个性化学习路径推荐）✅ `PageAgent` + `/api/ai/learning-path`

### 模块 E：收费体系

- [x] **E1-E6** 三层用户体系 + 微信支付（预留）+ 门控逻辑
  · `server/api/subscription.js`：free/VIP/Pro套餐定义 + 订阅状态 + 开通/续费 + 使用量  
  · `PageVIP`：套餐对比卡片（功能矩阵）+ 时长选择（7折优惠）+ 当前状态展示  
  · 微信ClawBot增强：图片/PDF直接发送 → AI分析试卷（`handleImageMessage`）

### 模块 T：主题切换

- [x] **T2** 深色/浅色/护眼/暖棕四种主题切换（设置面板 + localStorage 持久化 + 全局颜色 mutate）

### 模块 N：学段扩展

- [ ] **N1** 高中数学版本
- [ ] **N2** 小学数学版本

---

## 🎬 V2：AI 视频生成 + 个性化学习计划

### V1. AI 知识点讲解视频（Codex + HyperFrames）

> 目标：每个知识点自动生成一个 2-3 分钟的讲解视频  
> 技术：Codex 生成/编辑 HyperFrames HTML → HyperFrames 渲染 MP4
> 独立子项目，不影响主站开发

- [x] **V1.1** 环境搭建：video/hyperframes 子目录，HyperFrames 0.5.3，Node.js 24 ✅
- [x] **V1.2** 视频模板：Codex 可直接编辑的 HTML/CSS/GSAP 时间轴，深色主题树脉品牌色 ✅
- [x] **V1.3** 默认工作流改为 Codex + HyperFrames；旧 DeepSeek+Remotion 脚本改为 legacy ✅
- [x] **V1.4** 跑通 HyperFrames 自检：lint/validate/inspect 均通过 ✅
  - TTS：edge-tts `zh-CN-YunxiNeural` 微软神经网络男声，5段旁白自动生成
  - 旧流水线：DeepSeek生成脚本 → edge-tts生成音频 → Remotion渲染静音视频 → ffmpeg合并音轨，保留为 legacy
- [x] **V1.4.1** 压轴题 HTML 动画补齐：88 道压轴题生成 `/animations/questions/fgXX_i.html`，后端每日 03:17 自动补缺失 ✅
- [ ] **V1.5** 批量生成流水线（194个知识点 → 194个视频）
- [ ] **V1.6** 集成到树脉（知识点详情页嵌入视频播放器 / 上传B站链接回树脉）

### V2. 个性化学习计划模块（PagePlan）

> 参考 Khan Academy 个性化学习路径构建器  
> 把树脉已有的分散功能串成完整的"私人教练"体验
> 一个入口页面，学生填基本信息 → AI 生成完整学习计划

- [ ] **V2.1** 学生画像采集页（年级/目标分数/每日可用时间/薄弱科目自评/学习风格偏好）
- [ ] **V2.2** AI 生成个性化学习路线图（DeepSeek 基于画像+诊断数据+知识图谱生成）
  · 周目标（第1周补xx，第2周强化yy...）
  · 每日练习计划（具体题目+知识点+时长）
  · 阶段里程碑（每2周一个检查点）
- [ ] **V2.3** 学习路线图可视化（时间轴/甘特图，标记当前进度"你在这里"）
- [ ] **V2.4** 里程碑检查（阶段性小测试，自动调整后续计划）
- [ ] **V2.5** 信心建设系统（成就徽章 + "你已超越60%的学生" + 鼓励语）
- [ ] **V2.6** 家长版学习计划（简化版，含进度摘要+建议+家长该做什么）
- [ ] **V2.7** 计划动态调整（根据每日完成情况+错题自动修订后续计划）

> 树脉已有能力复用：
> - ✅ 首次诊断 → V2.1 画像采集
> - ✅ BFS错题追因 → V2.2 知识缺口
> - ✅ 今日任务+遗忘曲线 → V2.2 每日计划
> - ✅ 能力雷达+预测分 → V2.3 进度可视化
> - ✅ 方法卡+XP → V2.5 信心建设
> - ✅ 家长端 → V2.6 家长指南

---

## 📋 已完成历史

- [x] 生成 `README.md`（项目概述）
- [x] 生成 `design.md`（系统设计文档）
- [x] 生成 12 个 `文档/*.md` 设计文档
- [x] 更新 `README.md` + `design.md`（反映平台化演进）
- [x] 创建 `claude.md`（AI 助手指令）
- [x] 创建 `.windsurf/system-map.md`（代码行号地图）
- [x] 题库统计确认：1334 道题（624真题+500基础+137题组+58压轴+15诊断）
- [x] 用户认证系统完整实现（注册/登录/昵称/头像/后端同步）
- [x] 5 项错题计数 Bug 修复（2026-05-04）
- [x] 服务器迁移：Netlify+Railway → 香港轻量云 shumai.cc（2026-05-05）
- [x] Nginx gzip 压缩 + HSTS + Vite 分包优化（2026-05-06）
- [x] PageDetail「← 返回」跳回来源页修复（viewRef 方案，2026-05-06）
- [ ] **Bug-1** PagePractice 筛选条件导航后丢失（topicF/yearF 等提升到 App 层）
- [ ] **Bug-2** 真题刷题跳转详情后返回无法定位来源题目（highlightQId + 滚动）
- [ ] **V2** PagePlan 个性化学习计划模块（有新想法待融合，暂缓）
