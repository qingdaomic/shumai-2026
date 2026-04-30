# 中考数学系统权限设计文档

> 版本：V1.0 | 对应阶段：最小后端 + 正式运营版

---

## 一、角色定义

系统中共有以下角色，存储在 `users.role` 字段：

| 角色 key | 显示名称 | 说明 |
|----------|---------|------|
| `student` | 学员 | 普通学习用户，前台默认角色 |
| `operator` | 教研/运营 | 内容维护与审核人员，无财务权限 |
| `admin` | 管理员 | 最高权限，可操作所有功能 |

> 注意：`admin` 和 `operator` 都只能在管理端使用，不能通过前台注册获得。

---

## 二、学员账户状态与能力

学员有以下状态，影响其可访问的内容范围：

| status | 说明 | 可用功能 |
|--------|------|---------|
| `trial` | 试用期 | 部分模块（见下方试用限制） |
| `active` | 正式会员 | 全部功能 |
| `expired` | 套餐过期 | 仅浏览免费内容，无法做题和诊断 |
| `inactive` | 未激活 | 仅登录，无法使用任何学习功能 |
| `banned` | 封禁 | 无法登录 |

### 试用期（trial）可用功能

| 功能 | trial 可用 | active 可用 |
|------|-----------|------------|
| 晨读卡 | ✅ 全部 | ✅ |
| 知识图谱（只读） | ✅ | ✅ |
| 基础知识（只读） | ✅ | ✅ |
| 基础习题 | 每知识点前 5 道 | ✅ 全部 |
| 题组训练 | 前 3 组 | ✅ 全部 |
| 压轴突破 | 前 2 组 | ✅ 全部 |
| 智能诊断 | 1 次 | ✅ 不限 |
| 错题本 | ✅（收藏不超过 20 条） | ✅ |
| 视频讲解 | ✅ | ✅ |
| 个人中心 | ✅（仅基础资料） | ✅ |

> 试用限制由前端 service 层预判断提示，后端接口在超出配额时返回 `code: 2002`。

---

## 三、API 权限矩阵

### 3.1 认证接口（无鉴权）

| 接口 | 说明 |
|------|------|
| POST /auth/register | 注册（角色固定为 student） |
| POST /auth/login | 登录（任意角色） |

---

### 3.2 学员端接口权限

| 接口 | 是否需要登录 | 额外限制 |
|------|------------|---------|
| GET /topics | 否 | 仅返回 published 状态 |
| GET /topics/:code | 否 | 仅返回 published 状态 |
| GET /topics/:code/videos | 否 | 仅返回 approved 视频 |
| GET /questions | 否 | 仅返回 published 状态 |
| GET /questions/:code | 否 | 仅返回 published 状态 |
| GET /question-groups | 否 | 仅返回 published 状态 |
| GET /question-groups/:code | 否 | — |
| POST /question-attempts | 是 | status=active 或 trial（配额内） |
| GET /wrong-book | 是 | 仅自身数据 |
| PUT /wrong-book/:code | 是 | 仅自身数据 |
| PUT /wrong-book/batch | 是 | 仅自身数据 |
| POST /favorites | 是 | status=active 或 trial（配额内） |
| DELETE /favorites | 是 | 仅自身数据 |
| GET /favorites | 是 | 仅自身数据 |
| POST /diagnosis | 是 | active 不限，trial 最多 1 次 |
| GET /diagnosis | 是 | 仅自身数据 |
| GET /diagnosis/latest | 是 | 仅自身数据 |
| GET /me | 是 | 仅自身 |
| PUT /me/profile | 是 | 仅自身 |
| GET /me/stats | 是 | 仅自身 |
| GET /study-progress | 是 | 仅自身 |
| POST /video-clicks | 否 | 可匿名记录 |

---

### 3.3 管理端接口权限

| 接口前缀 | admin | operator | student |
|---------|-------|----------|---------|
| GET /admin/analytics/* | ✅ | ✅（仅内容相关） | ❌ |
| GET /admin/students | ✅ | ❌ | ❌ |
| PUT /admin/students/:id/* | ✅ | ❌ | ❌ |
| POST /admin/students/:id/grant-plan | ✅ | ❌ | ❌ |
| GET /admin/topics | ✅ | ✅ | ❌ |
| POST /admin/topics | ✅ | ✅ | ❌ |
| PUT /admin/topics/:code | ✅ | ✅ | ❌ |
| PUT /admin/topics/:code/status | ✅ | ✅ | ❌ |
| GET /admin/questions | ✅ | ✅ | ❌ |
| POST /admin/questions | ✅ | ✅ | ❌ |
| PUT /admin/questions/:code | ✅ | ✅ | ❌ |
| GET /admin/videos | ✅ | ✅ | ❌ |
| POST /admin/videos | ✅ | ✅ | ❌ |
| PUT /admin/videos/:id/review | ✅ | ✅ | ❌ |
| POST /admin/topic-videos | ✅ | ✅ | ❌ |
| DELETE /admin/topic-videos/:id | ✅ | ✅ | ❌ |
| GET /admin/orders | ✅ | ❌ | ❌ |
| PUT /admin/orders/:no/refund | ✅ | ❌ | ❌ |
| GET /admin/feature-flags | ✅ | ❌ | ❌ |
| PUT /admin/feature-flags/:key | ✅ | ❌ | ❌ |

---

## 四、前端路由守卫规则

前端需要在以下维度实施路由访问控制：

### 4.1 学员端路由

| 路由 | 未登录 | trial | active | expired |
|------|--------|-------|--------|---------|
| / 首页 | ✅ | ✅ | ✅ | ✅ |
| /morning 晨读卡 | ✅ | ✅ | ✅ | ✅ |
| /graph 知识图谱 | ✅ | ✅ | ✅ | ✅ |
| /knowledge 基础知识 | ✅ | ✅ | ✅ | ✅（只读） |
| /basic-questions 基础习题 | 跳转登录 | 限量 | ✅ | 提示续费 |
| /groups 题组训练 | 跳转登录 | 限量 | ✅ | 提示续费 |
| /final 压轴突破 | 跳转登录 | 限量 | ✅ | 提示续费 |
| /diagnosis 智能诊断 | 跳转登录 | 限 1 次 | ✅ | 提示续费 |
| /wrong-book 错题本 | 跳转登录 | 限量 | ✅ | ✅（只读） |
| /profile 个人中心 | 跳转登录 | ✅ | ✅ | ✅ |

### 4.2 管理端路由

- 所有 `/admin/*` 路由，必须登录且 `role = admin` 或 `role = operator`
- student 访问 `/admin/*` 一律跳转 403 页面
- operator 访问财务相关路由跳转 403

---

## 五、数据隔离规则

后端所有涉及用户私有数据的接口，必须强制过滤 `user_id = 当前登录用户 id`，禁止用户查看他人数据。

受保护的数据类型：

- `question_attempts`
- `wrong_book_records`
- `favorite_records`
- `study_progress`
- `diagnosis_records`
- `student_profiles`
- `orders`

后端实现建议：在 Service 层统一注入 `currentUserId`，不依赖请求参数中的 `user_id`。

---

## 六、Token 安全策略

| 策略 | 说明 |
|------|------|
| Token 有效期 | 7 天 |
| 刷新机制 | 请求时若剩余有效期不足 1 天，响应头返回新 token |
| 强制吊销 | 改密码 / 封禁账户时，服务端在 user_sessions 中标记 revoked_at |
| 多端限制 | V1 不限，V2 可配置最多同时登录设备数 |
| HTTPS 强制 | 生产环境所有接口必须走 HTTPS |

---

## 七、敏感信息规范

| 数据 | 处理方式 |
|------|---------|
| 密码 | bcrypt 哈希存储，不可逆 |
| 手机号 | 返回时脱敏：`138****5678` |
| AI API Key | 只存服务端环境变量，前端不可见 |
| 支付回调 | 验签后处理，不信任前端传递的支付状态 |
| 行为日志 | 最小必要采集，不采集与业务无关信息 |

---

## 八、V1 阶段权限最小实现建议

测试版上线前，权限系统不需要完整实现，但至少要做到：

1. **注册默认 role = student，状态 = trial**
2. **所有私有数据接口必须校验登录 token**
3. **数据隔离：任何用户只能查自己的数据**
4. **管理端入口不对外暴露，由独立域名或路径访问**
5. **前端路由守卫：未登录跳登录页，trial 超配额提示升级**
