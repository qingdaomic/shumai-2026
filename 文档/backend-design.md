# 中考数学系统后端设计蓝图

## 1. 文档目的

本文件用于定义系统正式后端的能力边界。虽然当前阶段可以先上线前端测试版，但为了避免后续推倒重来，后端蓝图应提前明确。

## 2. 后端目标

后端最终要承载以下核心能力：

- 用户注册、登录与身份认证
- 学员资料与状态管理
- 学习记录与行为日志沉淀
- 错题本与诊断数据持久化
- 题库、知识点、视频资源统一管理
- 收费、订单和套餐管理
- 管理端运营与审核支持

## 3. 角色与权限

### 3.1 学员

能力：

- 注册登录
- 查看个人学习数据
- 使用学习模块
- 查看自身错题、诊断和视频推荐

### 3.2 管理员

能力：

- 管理学员
- 审核和发布内容
- 管理视频、题库、知识点
- 查看订单、日志和统计

### 3.3 教研/运营人员

能力：

- 维护内容资源
- 配置推荐和学习路径
- 审核视频与题目

## 4. 后端核心模块

### 4.1 认证模块

负责：

- 注册
- 登录
- Token/Session 认证
- 找回密码
- 账号状态管理

### 4.2 学员管理模块

负责：

- 学员档案
- 学习状态
- 套餐状态
- 标签与分组
- 封禁或停用处理

### 4.3 学习记录模块

负责：

- 做题记录
- 错题记录
- 收藏记录
- 学习时长
- 最近访问内容
- 复习计划状态

### 4.4 智能诊断模块

负责：

- 保存诊断任务和结果
- 记录薄弱知识点
- 输出推荐练习与建议
- 可选接入 AI 能力

### 4.5 内容管理模块

负责：

- 知识点管理
- 题目管理
- 题组管理
- 压轴题管理
- 晨读卡内容管理

### 4.6 视频资源模块

负责：

- 存储外部视频资源
- 关联知识点
- 管理主视频与备选视频
- 审核状态管理
- 链接有效性检查
- 记录点击与使用情况

### 4.7 支付与收费模块

负责：

- 套餐管理
- 订单创建
- 支付状态回调
- 会员有效期
- 收费记录查询

### 4.8 行为日志模块

负责：

- 页面访问日志
- 按钮点击日志
- 学习路径日志
- 视频点击日志
- 转化漏斗统计基础数据

## 5. 推荐数据实体

### 5.1 用户相关

- `users`
- `student_profiles`
- `user_roles`
- `user_sessions`

### 5.2 学习相关

- `study_records`
- `question_attempts`
- `wrong_book_records`
- `favorite_records`
- `diagnosis_records`

### 5.3 内容相关

- `topics`
- `questions`
- `question_groups`
- `final_groups`
- `morning_cards`

### 5.4 视频相关

- `videos`
- `topic_video_relations`
- `video_review_logs`
- `video_click_logs`

### 5.5 商业化相关

- `plans`
- `orders`
- `payments`
- `billing_records`

### 5.6 运营相关

- `operation_logs`
- `announcements`
- `feature_flags`

## 6. 接口边界建议

### 6.1 学员端 API

示例：

- `POST /api/auth/register`
- `POST /api/auth/login`
- `GET /api/me`
- `GET /api/topics`
- `GET /api/topics/:id`
- `GET /api/topics/:id/videos`
- `GET /api/questions`
- `POST /api/question-attempts`
- `GET /api/wrong-book`
- `POST /api/diagnosis`

### 6.2 管理端 API

示例：

- `GET /api/admin/students`
- `GET /api/admin/topics`
- `POST /api/admin/topics`
- `GET /api/admin/videos/candidates`
- `POST /api/admin/videos/review`
- `POST /api/admin/topic-videos/set-primary`
- `GET /api/admin/orders`
- `GET /api/admin/analytics/overview`

## 7. 状态流转设计要点

### 7.1 视频状态

建议状态：

- `pending`
- `approved`
- `rejected`
- `offline`

### 7.2 订单状态

建议状态：

- `created`
- `pending_payment`
- `paid`
- `failed`
- `refunded`
- `closed`

### 7.3 用户状态

建议状态：

- `active`
- `inactive`
- `trial`
- `expired`
- `banned`

## 8. 最小后端建议

如果当前还不准备直接做全套后端，至少建议先做这些：

- 注册登录
- 学员资料
- 学习记录同步
- 错题本同步
- 基础诊断记录
- 基础管理员查看页
- 行为日志采集

这样能显著降低后续重构成本。

## 9. 安全与合规要求

- 密码加密存储
- 权限隔离
- 用户隐私信息保护
- 支付数据安全处理
- 行为日志最小必要采集
- 外部 API Key 不暴露前端

## 10. 设计结论

后端不应等到前端完全做完才考虑，而应先确定业务边界与数据模型。开发顺序可以晚于前端，但设计顺序不能晚。
