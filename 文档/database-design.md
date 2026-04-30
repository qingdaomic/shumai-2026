# 中考数学系统数据库设计

> 版本：V1.0 | 对应阶段：最小后端 + 正式运营版
> 所有字段类型以 MySQL 8.x 为基准，PostgreSQL 用户可对照调整。

---

## 一、设计原则

- 所有表必须有 `id`（主键）、`created_at`、`updated_at`
- 软删除字段统一用 `deleted_at`（为 NULL 表示未删除）
- 状态字段统一用 `status` + `VARCHAR(20)`，值用英文小写常量
- 金额字段统一用 `INT`，单位为**分**，避免浮点精度问题
- 外键在应用层保证一致性，数据库可不建物理外键约束（高并发场景）
- 时间字段统一存 UTC，展示层再转本地时区

---

## 二、用户与认证体系

### 2.1 `users` 用户表

| 字段 | 类型 | 可空 | 默认 | 说明 |
|------|------|------|------|------|
| id | BIGINT UNSIGNED | NO | AUTO_INCREMENT | 主键 |
| phone | VARCHAR(20) | NO | — | 手机号，唯一 |
| email | VARCHAR(100) | YES | NULL | 邮箱，可选 |
| password_hash | VARCHAR(255) | NO | — | bcrypt 加密存储 |
| nickname | VARCHAR(50) | YES | NULL | 昵称 |
| avatar_url | VARCHAR(500) | YES | NULL | 头像地址 |
| role | VARCHAR(20) | NO | 'student' | student / admin / operator |
| status | VARCHAR(20) | NO | 'active' | active / inactive / banned / trial |
| trial_expires_at | DATETIME | YES | NULL | 试用到期时间，NULL 表示非试用 |
| last_login_at | DATETIME | YES | NULL | 最后登录时间 |
| created_at | DATETIME | NO | NOW() | 创建时间 |
| updated_at | DATETIME | NO | NOW() | 更新时间 |
| deleted_at | DATETIME | YES | NULL | 软删除时间 |

**索引**：`UNIQUE(phone)`，`INDEX(role)`，`INDEX(status)`

---

### 2.2 `user_sessions` 会话表

| 字段 | 类型 | 可空 | 默认 | 说明 |
|------|------|------|------|------|
| id | BIGINT UNSIGNED | NO | AUTO_INCREMENT | 主键 |
| user_id | BIGINT UNSIGNED | NO | — | 关联 users.id |
| token | VARCHAR(512) | NO | — | JWT 或随机 token |
| device_info | VARCHAR(300) | YES | NULL | UA / 设备描述 |
| ip_address | VARCHAR(50) | YES | NULL | 登录 IP |
| expires_at | DATETIME | NO | — | token 过期时间 |
| revoked_at | DATETIME | YES | NULL | 主动吊销时间 |
| created_at | DATETIME | NO | NOW() | — |

**索引**：`UNIQUE(token)`，`INDEX(user_id)`

---

### 2.3 `student_profiles` 学员档案表

| 字段 | 类型 | 可空 | 默认 | 说明 |
|------|------|------|------|------|
| id | BIGINT UNSIGNED | NO | AUTO_INCREMENT | 主键 |
| user_id | BIGINT UNSIGNED | NO | — | 关联 users.id，唯一 |
| real_name | VARCHAR(50) | YES | NULL | 真实姓名 |
| grade | VARCHAR(20) | YES | NULL | 年级：grade7 / grade8 / grade9 |
| school | VARCHAR(100) | YES | NULL | 学校名称 |
| target_score | INT | YES | NULL | 目标分数 |
| exam_city | VARCHAR(50) | YES | NULL | 考试城市 |
| plan_id | BIGINT UNSIGNED | YES | NULL | 当前套餐 ID |
| plan_expires_at | DATETIME | YES | NULL | 套餐到期时间 |
| total_study_minutes | INT | NO | 0 | 累计学习分钟数 |
| created_at | DATETIME | NO | NOW() | — |
| updated_at | DATETIME | NO | NOW() | — |

**索引**：`UNIQUE(user_id)`，`INDEX(plan_id)`

---

## 三、内容体系

### 3.1 `topics` 知识点表

| 字段 | 类型 | 可空 | 默认 | 说明 |
|------|------|------|------|------|
| id | BIGINT UNSIGNED | NO | AUTO_INCREMENT | 主键 |
| code | VARCHAR(50) | NO | — | 业务 ID，如 rational / linear_fn |
| name | VARCHAR(100) | NO | — | 显示名称 |
| grade | VARCHAR(20) | NO | — | 年级阶段：7a/7b/8a/8b/9a/9b |
| chapter | VARCHAR(50) | YES | NULL | 所属章节 |
| category | VARCHAR(30) | NO | — | 数与代数 / 图形与几何 / 统计概率 |
| difficulty | TINYINT | NO | 1 | 1-5 难度 |
| definition | TEXT | YES | NULL | 概念定义 |
| formula | TEXT | YES | NULL | 公式与结论 |
| trap | TEXT | YES | NULL | 易错点 |
| slogan | VARCHAR(500) | YES | NULL | 晨读口诀 |
| sort_order | INT | NO | 0 | 排序权重 |
| status | VARCHAR(20) | NO | 'published' | draft / published / archived |
| created_at | DATETIME | NO | NOW() | — |
| updated_at | DATETIME | NO | NOW() | — |

**索引**：`UNIQUE(code)`，`INDEX(grade)`，`INDEX(category)`，`INDEX(status)`

---

### 3.2 `topic_relations` 知识点依赖关系表

| 字段 | 类型 | 可空 | 默认 | 说明 |
|------|------|------|------|------|
| id | BIGINT UNSIGNED | NO | AUTO_INCREMENT | 主键 |
| topic_code | VARCHAR(50) | NO | — | 当前知识点 |
| depends_on_code | VARCHAR(50) | NO | — | 依赖的知识点（前置） |
| relation_type | VARCHAR(20) | NO | 'prerequisite' | prerequisite / related |

---

### 3.3 `questions` 题目表

| 字段 | 类型 | 可空 | 默认 | 说明 |
|------|------|------|------|------|
| id | BIGINT UNSIGNED | NO | AUTO_INCREMENT | 主键 |
| code | VARCHAR(50) | NO | — | 业务 ID，如 b_rat_01 / exam_0 |
| type | VARCHAR(20) | NO | — | basic / exam / group / final |
| topic_code | VARCHAR(50) | NO | — | 主知识点 |
| sub_topic_codes | JSON | YES | NULL | 关联知识点列表 |
| content | TEXT | NO | — | 题目内容 |
| answer | TEXT | YES | NULL | 答案 |
| solution | TEXT | YES | NULL | 解析过程 |
| error_note | TEXT | YES | NULL | 易错提示 |
| difficulty | TINYINT | NO | 1 | 1-5 难度 |
| year | SMALLINT | YES | NULL | 出题年份（真题专用） |
| exam_no | SMALLINT | YES | NULL | 题号（真题专用） |
| source | VARCHAR(100) | YES | NULL | 来源（如"2024北京中考"） |
| status | VARCHAR(20) | NO | 'published' | draft / published / archived |
| sort_order | INT | NO | 0 | 排序权重 |
| created_at | DATETIME | NO | NOW() | — |
| updated_at | DATETIME | NO | NOW() | — |

**索引**：`UNIQUE(code)`，`INDEX(type)`，`INDEX(topic_code)`，`INDEX(difficulty)`，`INDEX(status)`

---

### 3.4 `question_groups` 题组表

| 字段 | 类型 | 可空 | 默认 | 说明 |
|------|------|------|------|------|
| id | BIGINT UNSIGNED | NO | AUTO_INCREMENT | 主键 |
| code | VARCHAR(50) | NO | — | 业务 ID，如 tg01 |
| type | VARCHAR(20) | NO | — | topic_group / final_group |
| name | VARCHAR(200) | NO | — | 题组名称 |
| description | TEXT | YES | NULL | 说明 |
| topic_codes | JSON | YES | NULL | 关联知识点列表 |
| method_codes | JSON | YES | NULL | 关联解题方法列表 |
| difficulty | TINYINT | NO | 1 | 1-5 难度 |
| question_codes | JSON | YES | NULL | 题目顺序列表 |
| status | VARCHAR(20) | NO | 'published' | draft / published / archived |
| sort_order | INT | NO | 0 | — |
| created_at | DATETIME | NO | NOW() | — |
| updated_at | DATETIME | NO | NOW() | — |

**索引**：`UNIQUE(code)`，`INDEX(type)`，`INDEX(status)`

---

### 3.5 `methods` 解题方法表

| 字段 | 类型 | 可空 | 默认 | 说明 |
|------|------|------|------|------|
| id | BIGINT UNSIGNED | NO | AUTO_INCREMENT | 主键 |
| code | VARCHAR(20) | NO | — | 如 m01 |
| name | VARCHAR(100) | NO | — | 方法名 |
| category | VARCHAR(30) | NO | — | 代数 / 几何 / 统计 |
| description | TEXT | YES | NULL | 方法描述 |
| steps | TEXT | YES | NULL | 步骤说明 |
| applicable_types | JSON | YES | NULL | 适用题型 |
| sort_order | INT | NO | 0 | — |
| created_at | DATETIME | NO | NOW() | — |
| updated_at | DATETIME | NO | NOW() | — |

**索引**：`UNIQUE(code)`

---

## 四、学习记录体系

### 4.1 `question_attempts` 做题记录表

| 字段 | 类型 | 可空 | 默认 | 说明 |
|------|------|------|------|------|
| id | BIGINT UNSIGNED | NO | AUTO_INCREMENT | 主键 |
| user_id | BIGINT UNSIGNED | NO | — | 关联 users.id |
| question_code | VARCHAR(50) | NO | — | 关联 questions.code |
| topic_code | VARCHAR(50) | NO | — | 冗余字段，便于统计 |
| result | VARCHAR(20) | NO | — | correct / wrong / skipped |
| time_spent_sec | SMALLINT | YES | NULL | 答题用时（秒） |
| attempt_source | VARCHAR(30) | YES | NULL | basic / group / final / diagnosis / review |
| created_at | DATETIME | NO | NOW() | — |

**索引**：`INDEX(user_id)`，`INDEX(question_code)`，`INDEX(topic_code)`，`INDEX(result)`，`INDEX(created_at)`

---

### 4.2 `wrong_book_records` 错题本表

| 字段 | 类型 | 可空 | 默认 | 说明 |
|------|------|------|------|------|
| id | BIGINT UNSIGNED | NO | AUTO_INCREMENT | 主键 |
| user_id | BIGINT UNSIGNED | NO | — | 关联 users.id |
| question_code | VARCHAR(50) | NO | — | 关联 questions.code |
| topic_code | VARCHAR(50) | NO | — | 冗余，便于筛选 |
| status | VARCHAR(20) | NO | 'active' | active / resolved / ignored |
| wrong_count | TINYINT | NO | 1 | 累计出错次数 |
| last_wrong_at | DATETIME | NO | — | 最近一次出错时间 |
| resolved_at | DATETIME | YES | NULL | 标记为已解决的时间 |
| note | TEXT | YES | NULL | 学员自记笔记 |
| created_at | DATETIME | NO | NOW() | — |
| updated_at | DATETIME | NO | NOW() | — |

**索引**：`UNIQUE(user_id, question_code)`，`INDEX(topic_code)`，`INDEX(status)`

---

### 4.3 `favorite_records` 收藏表

| 字段 | 类型 | 可空 | 默认 | 说明 |
|------|------|------|------|------|
| id | BIGINT UNSIGNED | NO | AUTO_INCREMENT | 主键 |
| user_id | BIGINT UNSIGNED | NO | — | — |
| target_type | VARCHAR(20) | NO | — | question / topic / group / video |
| target_code | VARCHAR(50) | NO | — | 对应业务 ID |
| created_at | DATETIME | NO | NOW() | — |

**索引**：`UNIQUE(user_id, target_type, target_code)`

---

### 4.4 `study_progress` 学习进度表

| 字段 | 类型 | 可空 | 默认 | 说明 |
|------|------|------|------|------|
| id | BIGINT UNSIGNED | NO | AUTO_INCREMENT | 主键 |
| user_id | BIGINT UNSIGNED | NO | — | — |
| topic_code | VARCHAR(50) | NO | — | — |
| mastery_level | VARCHAR(20) | NO | 'new' | new / learning / familiar / mastered |
| basic_done | SMALLINT | NO | 0 | 已完成基础题数 |
| basic_correct | SMALLINT | NO | 0 | 基础题正确数 |
| group_done | TINYINT | NO | 0 | 已完成题组数 |
| last_studied_at | DATETIME | YES | NULL | 最近学习时间 |
| updated_at | DATETIME | NO | NOW() | — |

**索引**：`UNIQUE(user_id, topic_code)`，`INDEX(mastery_level)`

---

## 五、智能诊断体系

### 5.1 `diagnosis_records` 诊断记录表

| 字段 | 类型 | 可空 | 默认 | 说明 |
|------|------|------|------|------|
| id | BIGINT UNSIGNED | NO | AUTO_INCREMENT | 主键 |
| user_id | BIGINT UNSIGNED | NO | — | — |
| trigger_type | VARCHAR(30) | NO | — | manual / auto / daily |
| question_codes | JSON | NO | — | 本次参与诊断的题目 |
| results | JSON | NO | — | 各题 correct/wrong 结果 |
| weak_topic_codes | JSON | YES | NULL | 诊断出的薄弱知识点 |
| strong_topic_codes | JSON | YES | NULL | 诊断出的掌握知识点 |
| ai_suggestion | TEXT | YES | NULL | AI 给出的文字建议 |
| ai_provider | VARCHAR(30) | YES | NULL | deepseek / doubao |
| status | VARCHAR(20) | NO | 'completed' | pending / completed / failed |
| created_at | DATETIME | NO | NOW() | — |

**索引**：`INDEX(user_id)`，`INDEX(status)`，`INDEX(created_at)`

---

## 六、视频资源体系

### 6.1 `videos` 视频资源表

| 字段 | 类型 | 可空 | 默认 | 说明 |
|------|------|------|------|------|
| id | BIGINT UNSIGNED | NO | AUTO_INCREMENT | 主键 |
| platform | VARCHAR(20) | NO | 'bilibili' | bilibili / other |
| bvid | VARCHAR(30) | YES | NULL | B站视频 BV 号 |
| title | VARCHAR(300) | NO | — | 视频标题 |
| url | VARCHAR(500) | NO | — | 播放页完整 URL |
| uploader | VARCHAR(100) | YES | NULL | UP 主名称 |
| duration_sec | INT | YES | NULL | 时长（秒） |
| cover_url | VARCHAR(500) | YES | NULL | 封面图 |
| description | TEXT | YES | NULL | 视频简介 |
| tags | JSON | YES | NULL | 标签数组 |
| suitable_for | VARCHAR(30) | YES | NULL | basic / intermediate / advanced |
| grade_range | VARCHAR(50) | YES | NULL | 如 grade7-grade9 |
| quality_score | TINYINT | YES | NULL | 1-100，审核评分 |
| status | VARCHAR(20) | NO | 'pending' | pending / approved / rejected / offline |
| reject_reason | VARCHAR(300) | YES | NULL | 拒绝原因 |
| last_checked_at | DATETIME | YES | NULL | 最近一次链接检测时间 |
| is_available | TINYINT(1) | NO | 1 | 链接当前是否可访问 |
| created_by | BIGINT UNSIGNED | YES | NULL | 录入管理员 user_id |
| reviewed_by | BIGINT UNSIGNED | YES | NULL | 审核管理员 user_id |
| reviewed_at | DATETIME | YES | NULL | 审核时间 |
| created_at | DATETIME | NO | NOW() | — |
| updated_at | DATETIME | NO | NOW() | — |

**索引**：`UNIQUE(bvid)`，`INDEX(status)`，`INDEX(suitable_for)`，`INDEX(is_available)`

---

### 6.2 `topic_video_relations` 知识点-视频关联表

| 字段 | 类型 | 可空 | 默认 | 说明 |
|------|------|------|------|------|
| id | BIGINT UNSIGNED | NO | AUTO_INCREMENT | 主键 |
| topic_code | VARCHAR(50) | NO | — | 关联知识点 |
| video_id | BIGINT UNSIGNED | NO | — | 关联 videos.id |
| is_primary | TINYINT(1) | NO | 0 | 是否为主推荐视频 |
| priority | TINYINT | NO | 0 | 展示顺序，越小越靠前 |
| match_score | TINYINT | YES | NULL | 匹配度评分 1-100 |
| note | VARCHAR(300) | YES | NULL | 关联备注 |
| status | VARCHAR(20) | NO | 'active' | active / hidden |
| created_at | DATETIME | NO | NOW() | — |

**索引**：`UNIQUE(topic_code, video_id)`，`INDEX(is_primary)`，`INDEX(status)`

---

### 6.3 `video_click_logs` 视频点击记录表

| 字段 | 类型 | 可空 | 默认 | 说明 |
|------|------|------|------|------|
| id | BIGINT UNSIGNED | NO | AUTO_INCREMENT | 主键 |
| user_id | BIGINT UNSIGNED | YES | NULL | 未登录时为 NULL |
| video_id | BIGINT UNSIGNED | NO | — | — |
| topic_code | VARCHAR(50) | YES | NULL | 从哪个知识点点击 |
| source_page | VARCHAR(50) | YES | NULL | topic / diagnosis / wrong_book |
| ip_address | VARCHAR(50) | YES | NULL | — |
| created_at | DATETIME | NO | NOW() | — |

**索引**：`INDEX(video_id)`，`INDEX(user_id)`，`INDEX(created_at)`

---

## 七、商业化体系

### 7.1 `plans` 套餐表

| 字段 | 类型 | 可空 | 默认 | 说明 |
|------|------|------|------|------|
| id | BIGINT UNSIGNED | NO | AUTO_INCREMENT | 主键 |
| name | VARCHAR(100) | NO | — | 套餐名称 |
| description | TEXT | YES | NULL | 套餐描述 |
| price_fen | INT | NO | — | 价格（分） |
| duration_days | INT | NO | — | 有效天数，-1 表示永久 |
| features | JSON | YES | NULL | 权益功能列表 |
| is_visible | TINYINT(1) | NO | 1 | 是否在前台展示 |
| sort_order | INT | NO | 0 | — |
| status | VARCHAR(20) | NO | 'active' | active / inactive |
| created_at | DATETIME | NO | NOW() | — |
| updated_at | DATETIME | NO | NOW() | — |

---

### 7.2 `orders` 订单表

| 字段 | 类型 | 可空 | 默认 | 说明 |
|------|------|------|------|------|
| id | BIGINT UNSIGNED | NO | AUTO_INCREMENT | 主键 |
| order_no | VARCHAR(64) | NO | — | 订单号，唯一，业务可读 |
| user_id | BIGINT UNSIGNED | NO | — | — |
| plan_id | BIGINT UNSIGNED | NO | — | — |
| plan_name | VARCHAR(100) | NO | — | 冗余，避免套餐变更影响历史 |
| amount_fen | INT | NO | — | 实际支付金额（分） |
| original_amount_fen | INT | NO | — | 原价（分） |
| discount_fen | INT | NO | 0 | 优惠金额（分） |
| payment_method | VARCHAR(20) | YES | NULL | wechat / alipay / manual |
| payment_no | VARCHAR(100) | YES | NULL | 第三方支付流水号 |
| status | VARCHAR(20) | NO | 'created' | created / pending_payment / paid / failed / refunded / closed |
| paid_at | DATETIME | YES | NULL | 支付完成时间 |
| expires_at | DATETIME | YES | NULL | 本订单对应权益到期时间 |
| remark | VARCHAR(300) | YES | NULL | 管理员备注 |
| created_at | DATETIME | NO | NOW() | — |
| updated_at | DATETIME | NO | NOW() | — |

**索引**：`UNIQUE(order_no)`，`INDEX(user_id)`，`INDEX(status)`，`INDEX(paid_at)`

---

## 八、运营与日志体系

### 8.1 `behavior_logs` 行为日志表

| 字段 | 类型 | 可空 | 默认 | 说明 |
|------|------|------|------|------|
| id | BIGINT UNSIGNED | NO | AUTO_INCREMENT | 主键 |
| user_id | BIGINT UNSIGNED | YES | NULL | 未登录时为 NULL |
| event | VARCHAR(50) | NO | — | 事件名，如 page_view / btn_click |
| page | VARCHAR(100) | YES | NULL | 当前页面路径 |
| target | VARCHAR(100) | YES | NULL | 操作目标，如知识点 code |
| extra | JSON | YES | NULL | 额外自定义参数 |
| ip_address | VARCHAR(50) | YES | NULL | — |
| user_agent | VARCHAR(500) | YES | NULL | — |
| created_at | DATETIME | NO | NOW() | — |

**索引**：`INDEX(user_id)`，`INDEX(event)`，`INDEX(created_at)`

> 该表数据量可能极大，建议按月分表或使用专门日志存储（如 ClickHouse）。

---

### 8.2 `feature_flags` 功能开关表

| 字段 | 类型 | 可空 | 默认 | 说明 |
|------|------|------|------|------|
| id | INT UNSIGNED | NO | AUTO_INCREMENT | 主键 |
| key | VARCHAR(80) | NO | — | 功能 key，如 enable_video |
| value | VARCHAR(500) | YES | NULL | 开关值或配置 JSON |
| description | VARCHAR(200) | YES | NULL | 说明 |
| is_enabled | TINYINT(1) | NO | 1 | 是否生效 |
| updated_by | BIGINT UNSIGNED | YES | NULL | 最后更新人 |
| updated_at | DATETIME | NO | NOW() | — |

**索引**：`UNIQUE(key)`

---

### 8.3 `announcements` 公告表

| 字段 | 类型 | 可空 | 默认 | 说明 |
|------|------|------|------|------|
| id | BIGINT UNSIGNED | NO | AUTO_INCREMENT | 主键 |
| title | VARCHAR(200) | NO | — | 公告标题 |
| content | TEXT | NO | — | 公告内容 |
| type | VARCHAR(20) | NO | 'notice' | notice / activity / update |
| target_roles | JSON | YES | NULL | 目标角色，NULL 表示全部 |
| is_pinned | TINYINT(1) | NO | 0 | 是否置顶 |
| starts_at | DATETIME | YES | NULL | 展示开始时间 |
| ends_at | DATETIME | YES | NULL | 展示结束时间 |
| status | VARCHAR(20) | NO | 'draft' | draft / published / archived |
| created_by | BIGINT UNSIGNED | NO | — | — |
| created_at | DATETIME | NO | NOW() | — |
| updated_at | DATETIME | NO | NOW() | — |

---

## 九、表关系总览

```
users
  ├── user_sessions          (1:N)
  ├── student_profiles       (1:1)
  ├── question_attempts      (1:N)
  ├── wrong_book_records     (1:N)
  ├── favorite_records       (1:N)
  ├── study_progress         (1:N, 每个知识点一条)
  ├── diagnosis_records      (1:N)
  └── orders                 (1:N)

topics
  ├── topic_relations        (N:N, 知识点依赖)
  ├── questions              (1:N, 主知识点)
  ├── question_groups        (N:N via JSON)
  ├── study_progress         (1:N)
  └── topic_video_relations  (1:N)

questions
  ├── question_attempts      (1:N)
  ├── wrong_book_records     (1:N)
  └── question_groups        (N:N via JSON)

videos
  ├── topic_video_relations  (1:N)
  └── video_click_logs       (1:N)

plans
  └── orders                 (1:N)
```

---

## 十、V1 最小后端需要建的表（优先创建）

按照 V1.5 最小后端建议，优先建以下表：

1. `users`
2. `user_sessions`
3. `student_profiles`
4. `question_attempts`
5. `wrong_book_records`
6. `study_progress`
7. `diagnosis_records`
8. `behavior_logs`
9. `feature_flags`

内容类表（`topics`、`questions`、`question_groups`、`methods`）在 V1 阶段可由前端本地数据代替，V2 阶段再迁移入库。

视频和商业化相关表（`videos`、`plans`、`orders`）在 V1.5 之后再建。
