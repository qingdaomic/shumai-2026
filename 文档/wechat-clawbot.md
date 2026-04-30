# 微信 ClawBot 接入技术方案

> 最后更新：2026-04-27

---

## 一、方案概述

使用腾讯官方开放的 **微信 ClawBot 插件功能**（iLink 协议），让学生在微信里直接和"数脉学长"AI 对话。

- **协议**：iLink（智联），腾讯官方，合法不封号
- **接入域名**：`ilinkai.weixin.qq.com`（腾讯服务器）
- **npm 包**：`@tencent-weixin/openclaw-weixin`
- **参考项目**：https://github.com/SiverKing/weixin-ClawBot-API

### 与旧方案的区别

| 维度 | 旧方案（WeChatPadPro 等） | ClawBot iLink |
|------|--------------------------|---------------|
| 合法性 | 灰色地带，违反协议 | **官方开放，合法** |
| 封号风险 | 极高 | 正常使用无风险 |
| 稳定性 | 微信更新可能失效 | 服务器端 API，稳定 |
| 媒体支持 | 有限 | 图片/语音/文件/视频完整支持 |
| 群聊 | 特殊处理 | 原生支持 |

---

## 二、架构

```
学生微信
   │
   ▼ (加好友/发消息)
"数脉学长"微信号
   │
   ▼ (iLink 协议)
ClawBot 后端服务 (bot.js, 24h在线)
   │
   ├──→ 长轮询收消息 (getupdates)
   ├──→ 查学生绑定信息 (PostgreSQL)
   ├──→ 查学生学情上下文
   ├──→ 调 DeepSeek AI API (带 Prompt)
   ├──→ 回复学生 (sendmessage)
   └──→ 定时推送 (node-cron)
```

---

## 三、核心 API

### 3.1 登录（获取 QR 码）

```javascript
// 1. 获取二维码
const res = await fetch(
  "https://ilinkai.weixin.qq.com/ilink/bot/get_bot_qrcode?bot_type=3"
);
const { qrcode, qrcode_img_content } = await res.json();
// qrcode_img_content 可以直接展示为图片

// 2. 轮询等待扫码确认
let botToken, botBaseUrl;
while (true) {
  const status = await fetch(
    `https://ilinkai.weixin.qq.com/ilink/bot/get_qrcode_status?qrcode=${qrcode}`
  ).then(r => r.json());

  if (status.status === "confirmed") {
    botToken = status.bot_token;    // 用于后续所有 API 调用
    botBaseUrl = status.baseurl;
    break;
  }
  await sleep(1000);
}
```

### 3.2 接收消息（长轮询）

```javascript
let getUpdatesBuf = "";
while (true) {
  const { msgs, get_updates_buf } = await apiPost(
    "ilink/bot/getupdates",
    { get_updates_buf: getUpdatesBuf },
    botToken
  );
  getUpdatesBuf = get_updates_buf ?? getUpdatesBuf;

  for (const msg of msgs ?? []) {
    if (msg.message_type !== 1) continue; // 只处理用户主动消息
    const text = msg.item_list?.[0]?.text_item?.text;
    const fromUser = msg.from_user_id;
    const contextToken = msg.context_token; // 回复时必须带上

    // 处理消息...
    await handleMessage(fromUser, text, contextToken);
  }
}
```

### 3.3 发送回复

```javascript
await apiPost("ilink/bot/sendmessage", {
  msg: {
    to_user_id: fromUser,
    message_type: 2,        // 2=bot回复
    message_state: 2,       // 2=完成
    context_token: contextToken,  // 必须带上
    item_list: [{
      type: 1,
      text_item: { text: "这道题的解法是..." }
    }]
  }
}, botToken);
```

### 3.4 请求头

```javascript
function apiPost(path, body, token) {
  const uin = Buffer.from(String(Math.floor(Math.random() * 4294967295)))
    .toString('base64');
  return fetch(`https://ilinkai.weixin.qq.com/${path}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `ilink_bot_token ${token}`,
      'X-WECHAT-UIN': uin  // 防重放，每次随机
    },
    body: JSON.stringify(body)
  }).then(r => r.json());
}
```

---

## 四、数脉集成设计

### 4.1 学生绑定流程

1. 学生在 H5 注册（手机号） → 获得 `userId`
2. 系统提示"添加数脉学长微信"→ 展示微信号/二维码
3. 学生加好友后发送"绑定 + 手机号"
4. Bot 验证手机号 → 绑定 `wechat_from_user_id ↔ userId`
5. 绑定成功 → 推送欢迎消息 + 使用指南

### 4.2 消息处理逻辑

```
收到消息 → 
  判断是否已绑定？
    未绑定 → 提示绑定流程
    已绑定 → 
      是否为指令？（/help /今日任务 /错题 /学情）
        是 → 执行对应功能，返回结果
        否 → 当作自由提问
          → 查学生学情上下文
          → 组装 Prompt（学伴人格 + 学情 + 问题）
          → 调 DeepSeek API
          → 回复学生
```

### 4.3 System Prompt 模板

```
你是"数脉学长"，一位耐心的数学辅导学长。
当前学生信息：
- 年级：{grade}
- 薄弱知识点：{weakTopics}
- 最近错题模式：{errorPatterns}
- 学习阶段：{currentPhase}

规则：
1. 用初中生听得懂的话讲解，不要太学术
2. 先鼓励，再纠错，最后总结
3. 如果学生问的题目在系统中有，引用系统链接
4. 如果连续同类错误3次，换一个角度重新讲
5. 适时提醒复习和打卡
```

### 4.4 定时推送计划

| 时间 | 内容 | 触发 |
|------|------|------|
| 每天 7:00 | 今日学习任务（2道复习+1道新题+1道挑战） | cron |
| 每天 21:00 | 今日学习小结（做题数/正确率/打卡天数） | cron |
| 复习到期时 | "你有1道题需要复习，坚持住！" | 遗忘曲线触发 |
| 周一 8:00 | 上周学习复盘报告 | cron |
| 考前倒计时 | "距离中考还有N天，今日重点：XXX" | cron |

---

## 五、注意事项

1. **24 小时重连**：iLink 连接有效期 24 小时，需实现自动重连（到期前预警→重新获取 QR→扫码）
2. **专用微信号**：需要一个独立微信号作为"数脉学长"Bot 载体
3. **服务器**：需 24 小时在线，推荐阿里云/腾讯云轻量服务器（~¥40/月）
4. **腾讯条款禁止**：广告推销、欺诈、违规内容（教育辅导完全合规）
5. **数据隐私**：腾讯不存储消息内容，但收集日志
6. **语音消息**：微信语音为 AMR 格式，需后端转码后用 Whisper/讯飞 ASR 转文字

---

## 六、依赖清单

```json
{
  "@tencent-weixin/openclaw-weixin": "^1.0.2",
  "node-cron": "^3.0.0",
  "express": "^4.18.0",
  "pg": "^8.11.0",
  "openai": "^4.0.0"
}
```

> DeepSeek API 兼容 OpenAI SDK，直接用 `openai` 包，改 baseURL 即可。
