# 中考数学系统 API 设计文档

> 版本：V1.0 | 对应阶段：最小后端 + 正式运营版  
> Base URL：`https://your-domain.com/api/v1`

---

## 一、全局规范

### 1.1 统一响应结构

所有接口必须返回以下格式：

```json
{
  "code": 0,
  "message": "ok",
  "data": {}
}
```

**字段说明**：

| 字段 | 类型 | 说明 |
|------|------|------|
| code | int | 0 表示成功，非 0 为业务错误码 |
| message | string | 英文错误 key 或 "ok" |
| data | object / array / null | 业务数据 |

分页响应时 `data` 结构：

```json
{
  "code": 0,
  "message": "ok",
  "data": {
    "list": [],
    "total": 100,
    "page": 1,
    "page_size": 20
  }
}
```

---

### 1.2 错误码规范

| code | message | 说明 |
|------|---------|------|
| 0 | ok | 成功 |
| 1001 | unauthorized | 未登录或 token 失效 |
| 1002 | forbidden | 无权限访问 |
| 1003 | not_found | 资源不存在 |
| 1004 | validation_error | 参数校验失败 |
| 1005 | duplicate | 数据已存在 |
| 2001 | plan_expired | 套餐已到期 |
| 2002 | trial_required | 需要先开始试用 |
| 3001 | ai_unavailable | AI 服务不可用 |
| 5000 | server_error | 服务端内部错误 |

---

### 1.3 鉴权方式

- 采用 **JWT Bearer Token**
- 请求头：`Authorization: Bearer <token>`
- Token 有效期：7 天
- 刷新策略：客户端在请求时若响应头携带 `X-Refresh-Token`，自动替换本地 token

---

### 1.4 分页参数规范

分页接口统一支持：

| 参数 | 类型 | 默认 | 说明 |
|------|------|------|------|
| page | int | 1 | 页码 |
| page_size | int | 20 | 每页条数，最大 100 |

---

### 1.5 时间格式

所有时间统一返回 ISO 8601 格式：`2025-04-24T01:30:00Z`（UTC）

---

## 二、认证接口

### 2.1 注册

`POST /auth/register`

**请求体**：
```json
{
  "phone": "13812345678",
  "password": "your_password",
  "nickname": "小明"
}
```

**成功响应**：
```json
{
  "code": 0,
  "message": "ok",
  "data": {
    "token": "eyJhbGci...",
    "user": {
      "id": 1,
      "phone": "138****5678",
      "nickname": "小明",
      "role": "student",
      "status": "trial"
    }
  }
}
```

---

### 2.2 登录

`POST /auth/login`

**请求体**：
```json
{
  "phone": "13812345678",
  "password": "your_password"
}
```

**成功响应**：同注册

---

### 2.3 退出登录

`POST /auth/logout`

**需要鉴权**：是  
**请求体**：无  
**成功响应**：`{ "code": 0, "message": "ok", "data": null }`

---

### 2.4 修改密码

`POST /auth/change-password`

**需要鉴权**：是

**请求体**：
```json
{
  "old_password": "...",
  "new_password": "..."
}
```

---

## 三、当前用户接口

### 3.1 获取当前用户信息

`GET /me`

**需要鉴权**：是

**成功响应**：
```json
{
  "code": 0,
  "message": "ok",
  "data": {
    "id": 1,
    "phone": "138****5678",
    "nickname": "小明",
    "avatar_url": null,
    "role": "student",
    "status": "active",
    "profile": {
      "real_name": null,
      "grade": "grade9",
      "school": null,
      "target_score": 140,
      "exam_city": "北京",
      "plan_id": 2,
      "plan_expires_at": "2026-06-30T00:00:00Z",
      "total_study_minutes": 320
    }
  }
}
```

---

### 3.2 更新个人资料

`PUT /me/profile`

**需要鉴权**：是

**请求体**：
```json
{
  "nickname": "小明同学",
  "grade": "grade9",
  "school": "北京XX中学",
  "target_score": 140,
  "exam_city": "北京"
}
```

---

### 3.3 获取学习统计

`GET /me/stats`

**需要鉴权**：是

**成功响应**：
```json
{
  "code": 0,
  "message": "ok",
  "data": {
    "total_study_minutes": 320,
    "questions_done": 480,
    "questions_correct": 390,
    "wrong_book_count": 45,
    "wrong_resolved_count": 20,
    "diagnosis_count": 3,
    "topics_mastered": 8,
    "topics_learning": 12
  }
}
```

---

## 四、知识点接口

### 4.1 获取知识点列表

`GET /topics`

**需要鉴权**：否（已发布内容公开）

**查询参数**：

| 参数 | 类型 | 说明 |
|------|------|------|
| grade | string | 7a / 7b / 8a / 8b / 9a / 9b |
| category | string | 数与代数 / 图形与几何 / 统计概率 |
| keyword | string | 名称模糊搜索 |

**成功响应**：
```json
{
  "code": 0,
  "message": "ok",
  "data": [
    {
      "code": "rational",
      "name": "有理数",
      "grade": "7a",
      "category": "数与代数",
      "difficulty": 1,
      "status": "published"
    }
  ]
}
```

---

### 4.2 获取单个知识点详情

`GET /topics/:code`

**需要鉴权**：否

**成功响应**：
```json
{
  "code": 0,
  "message": "ok",
  "data": {
    "code": "rational",
    "name": "有理数",
    "grade": "7a",
    "category": "数与代数",
    "difficulty": 1,
    "definition": "...",
    "formula": "...",
    "trap": "...",
    "slogan": "...",
    "relations": {
      "prerequisites": ["integers"],
      "related": ["reals"]
    },
    "primary_video": {
      "id": 12,
      "title": "有理数基础讲解",
      "url": "https://www.bilibili.com/video/BVxxxxxx",
      "uploader": "某某老师",
      "duration_sec": 680,
      "suitable_for": "basic"
    }
  }
}
```

---

### 4.3 获取知识点对应的视频列表

`GET /topics/:code/videos`

**需要鉴权**：否

**成功响应**：
```json
{
  "code": 0,
  "message": "ok",
  "data": [
    {
      "video_id": 12,
      "is_primary": true,
      "priority": 0,
      "title": "有理数基础讲解",
      "url": "https://www.bilibili.com/video/BVxxxxxx",
      "uploader": "某某老师",
      "duration_sec": 680,
      "suitable_for": "basic"
    }
  ]
}
```

---

## 五、题目接口

### 5.1 获取基础题列表

`GET /questions`

**需要鉴权**：否

**查询参数**：

| 参数 | 类型 | 说明 |
|------|------|------|
| type | string | basic / exam / group / final |
| topic_code | string | 按知识点筛选 |
| difficulty | int | 1-5 |
| page | int | — |
| page_size | int | — |

---

### 5.2 获取单题详情

`GET /questions/:code`

**需要鉴权**：否

**成功响应**：
```json
{
  "code": 0,
  "message": "ok",
  "data": {
    "code": "b_rat_01",
    "type": "basic",
    "topic_code": "rational",
    "content": "计算：(-3) + (+5) = ?",
    "answer": "2",
    "solution": "异号相加，取绝对值较大的符号，|5|-|3|=2",
    "error_note": "注意符号判断",
    "difficulty": 1
  }
}
```

---

### 5.3 提交做题记录

`POST /question-attempts`

**需要鉴权**：是

**请求体**：
```json
{
  "question_code": "b_rat_01",
  "result": "wrong",
  "time_spent_sec": 45,
  "attempt_source": "basic"
}
```

**成功响应**：
```json
{
  "code": 0,
  "message": "ok",
  "data": {
    "attempt_id": 1023,
    "added_to_wrong_book": true
  }
}
```

---

## 六、题组接口

### 6.1 获取题组列表

`GET /question-groups`

**查询参数**：`type` (topic_group / final_group)、`topic_code`、`difficulty`

---

### 6.2 获取题组详情

`GET /question-groups/:code`

返回题组基本信息及题目列表。

---

## 七、错题本接口

### 7.1 获取错题本列表

`GET /wrong-book`

**需要鉴权**：是

**查询参数**：

| 参数 | 类型 | 说明 |
|------|------|------|
| topic_code | string | 按知识点筛选 |
| status | string | active / resolved / ignored |
| page | int | — |
| page_size | int | — |

**成功响应**（list 示例）：
```json
{
  "question_code": "b_rat_01",
  "topic_code": "rational",
  "status": "active",
  "wrong_count": 2,
  "last_wrong_at": "2025-04-20T10:00:00Z",
  "note": null,
  "question": {
    "content": "...",
    "difficulty": 1
  }
}
```

---

### 7.2 更新错题状态

`PUT /wrong-book/:question_code`

**需要鉴权**：是

**请求体**：
```json
{
  "status": "resolved",
  "note": "这道题已经彻底搞明白了"
}
```

---

### 7.3 批量更新错题状态

`PUT /wrong-book/batch`

**请求体**：
```json
{
  "question_codes": ["b_rat_01", "b_rat_02"],
  "status": "resolved"
}
```

---

## 八、收藏接口

### 8.1 添加收藏

`POST /favorites`

**需要鉴权**：是

**请求体**：
```json
{
  "target_type": "question",
  "target_code": "b_rat_01"
}
```

---

### 8.2 取消收藏

`DELETE /favorites`

**请求体**：
```json
{
  "target_type": "question",
  "target_code": "b_rat_01"
}
```

---

### 8.3 获取收藏列表

`GET /favorites?target_type=question&page=1&page_size=20`

---

## 九、智能诊断接口

### 9.1 发起诊断

`POST /diagnosis`

**需要鉴权**：是

**请求体**：
```json
{
  "trigger_type": "manual",
  "question_codes": ["b_rat_01", "b_rat_02", "b_lin_01"],
  "results": [
    { "question_code": "b_rat_01", "result": "correct" },
    { "question_code": "b_rat_02", "result": "wrong" },
    { "question_code": "b_lin_01", "result": "wrong" }
  ]
}
```

**成功响应**：
```json
{
  "code": 0,
  "message": "ok",
  "data": {
    "diagnosis_id": 5,
    "weak_topic_codes": ["rational", "linear_fn"],
    "strong_topic_codes": [],
    "ai_suggestion": "建议重点复习有理数运算和一次函数图像...",
    "recommended_questions": ["b_rat_03", "b_lin_05"]
  }
}
```

---

### 9.2 获取诊断历史

`GET /diagnosis?page=1&page_size=10`

**需要鉴权**：是

---

### 9.3 获取最近一次诊断结果

`GET /diagnosis/latest`

**需要鉴权**：是

---

## 十、学习进度接口

### 10.1 获取学习进度概览

`GET /study-progress`

**需要鉴权**：是

**成功响应**：
```json
{
  "code": 0,
  "message": "ok",
  "data": [
    {
      "topic_code": "rational",
      "topic_name": "有理数",
      "mastery_level": "familiar",
      "basic_done": 15,
      "basic_correct": 12,
      "group_done": 2,
      "last_studied_at": "2025-04-20T10:00:00Z"
    }
  ]
}
```

---

## 十一、视频点击记录接口

### 11.1 记录视频点击

`POST /video-clicks`

**需要鉴权**：否（可匿名记录）

**请求体**：
```json
{
  "video_id": 12,
  "topic_code": "rational",
  "source_page": "topic"
}
```

---

## 十二、管理端接口

> 所有管理端接口路径前缀为 `/admin`，需要 `role = admin` 或 `role = operator`。

### 12.1 学员管理

`GET /admin/students` — 学员列表，支持 keyword / status / plan_id 筛选、分页

`GET /admin/students/:id` — 学员详情（含套餐、学习统计）

`PUT /admin/students/:id/status` — 修改学员状态

```json
{ "status": "banned", "remark": "违规操作" }
```

`POST /admin/students/:id/grant-plan` — 手动赋予套餐

```json
{ "plan_id": 2, "duration_days": 365 }
```

---

### 12.2 内容管理

`GET /admin/topics` — 知识点列表（含 draft 状态）

`POST /admin/topics` — 新建知识点

`PUT /admin/topics/:code` — 更新知识点

`PUT /admin/topics/:code/status` — 发布 / 归档

`GET /admin/questions` — 题目列表

`POST /admin/questions` — 新增题目

`PUT /admin/questions/:code` — 更新题目

---

### 12.3 视频资源管理

`GET /admin/videos` — 视频列表，支持 status / topic_code / suitable_for 筛选

`POST /admin/videos` — 新增视频

```json
{
  "platform": "bilibili",
  "bvid": "BVxxxxxx",
  "title": "有理数基础讲解",
  "url": "https://www.bilibili.com/video/BVxxxxxx",
  "uploader": "某某老师",
  "duration_sec": 680,
  "suitable_for": "basic",
  "grade_range": "grade7-grade9"
}
```

`PUT /admin/videos/:id/review` — 审核视频

```json
{ "action": "approve", "quality_score": 85, "reject_reason": null }
```

`POST /admin/topic-videos` — 关联知识点和视频

```json
{
  "topic_code": "rational",
  "video_id": 12,
  "is_primary": true,
  "priority": 0,
  "match_score": 90
}
```

`PUT /admin/topic-videos/:id/set-primary` — 设为主推荐视频

`DELETE /admin/topic-videos/:id` — 取消关联

---

### 12.4 订单管理

`GET /admin/orders` — 订单列表，支持 status / user_id / date_range 筛选

`GET /admin/orders/:order_no` — 订单详情

`PUT /admin/orders/:order_no/refund` — 标记退款

---

### 12.5 数据统计

`GET /admin/analytics/overview` — 总览看板

**响应示例**：
```json
{
  "total_students": 520,
  "active_today": 38,
  "new_today": 5,
  "paid_total": 210,
  "questions_done_today": 1840,
  "wrong_book_total": 9200,
  "video_clicks_today": 145
}
```

`GET /admin/analytics/topics` — 各知识点学习热度统计

`GET /admin/analytics/videos` — 视频点击量统计

---

### 12.6 系统配置

`GET /admin/feature-flags` — 获取所有功能开关

`PUT /admin/feature-flags/:key` — 更新功能开关

```json
{ "is_enabled": true, "value": "true" }
```

---

## 十三、前端 service 层对接说明

前端 service 层应以本文档为契约，在测试版阶段用本地数据模拟相同的请求/响应结构。

建议各 service 统一封装方式：

```js
// topicService.js
async function getTopicDetail(code) {
  if (USE_MOCK) return MOCK_TOPICS[code];
  const res = await request.get(`/topics/${code}`);
  return res.data;
}
```

切换开关建议通过环境变量控制：

```
VITE_USE_MOCK=true   // 测试版读本地数据
VITE_USE_MOCK=false  // 接入真实 API
```

这样前端测试版和正式版的页面逻辑完全一致，只需一行配置切换数据来源。

---

## 十四、版本迭代计划

| 阶段 | 接口范围 |
|------|---------|
| V1（前端测试版） | service 层 mock，不实际请求后端 |
| V1.5（轻后端） | 认证、/me、做题记录、错题本、诊断、进度 |
| V2（正式运营） | 全部学员端 + 管理端核心接口 |
| V2.5（增强） | 视频详细统计、AI 增强诊断、批量内容管理 |
