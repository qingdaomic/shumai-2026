# 数脉系统建设手册（Playbook）

> 本文档记录初中数学系统建设的完整经验，供高中数学、小学数学、英语等后续系统复用。  
> 最后更新：2026-05-06

---

## 一、系统家族规划

| 系统 | 域名/子域名 | 状态 | 题库规模 |
|------|------------|------|---------|
| 初中数学（ShuMai 2026） | shumai.cc | ✅ 已上线 | 1334 道 |
| 高中数学 | high.shumai.cc 或独立域名 | 🔲 待建 | 目标 2000 道 |
| 小学数学 | primary.shumai.cc | 🔲 待建 | 目标 1000 道 |
| 英语系统 | english.shumai.cc | 🔲 待建 | 词汇+语法+阅读 |

**共用基础设施**：同一台香港服务器（43.128.59.105），同一个 PostgreSQL，同一套后端代码（`stage` 字段区分学段）。

---

## 二、技术栈（已验证可用）

### 前端
- **React 18** + Vite 5（构建工具）
- **TailwindCSS**（样式）
- PWA：`manifest.json` + `sw.js`（离线缓存）
- 移动端适配：底部 Tab 栏 + safe-area + viewport-fit=cover

### 后端
- **Node.js 20** + Express（API 服务器）
- **PostgreSQL**（数据库，本地连接，无 SSL）
- **PM2**（进程管理，自动重启）
- **JWT**（30天过期）+ bcryptjs（密码加密）

### 服务器
- 腾讯云香港轻量服务器（2核4G，~¥40/月）
- **Nginx**：静态文件 + 反向代理 `/api/*` → localhost:3001
- **Certbot**：Let's Encrypt SSL，90天自动续期
- **Ubuntu 22.04 LTS**

### AI 能力
- **DeepSeek API**（文字讲解、错题分析、学伴对话）
- **OpenAI Whisper**（语音转文字，可选）
- **HeyGen/Synthesia**（未来 AI 视频，可选）

---

## 三、服务器部署经验

### 3.1 首次部署流程（约 2-3 小时）

```bash
# 1. 安装依赖
sudo apt update && apt upgrade -y
sudo apt install -y nginx postgresql postgresql-contrib certbot python3-certbot-nginx

# 2. 安装 Node.js 20
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs

# 3. 安装 PM2
sudo npm install -g pm2

# 4. 克隆代码
cd /opt && sudo git clone https://github.com/qingdaomic/shumai-2026.git shumai
cd /opt/shumai && sudo npm install

# 5. 配置 PostgreSQL
sudo -u postgres psql
# CREATE USER shumai WITH PASSWORD 'shumai2026db!';
# CREATE DATABASE shumai OWNER shumai;
# \q
sudo -u postgres psql -d shumai -f server/schema.sql

# 6. 配置 PM2
# 编辑 ecosystem.config.cjs，填入真实 API Key 和 ADMIN_PHONE
sudo pm2 start ecosystem.config.cjs
sudo pm2 startup && sudo pm2 save

# 7. 配置 Nginx
sudo cp deploy/nginx-shumai.conf /etc/nginx/sites-available/shumai
sudo ln -s /etc/nginx/sites-available/shumai /etc/nginx/sites-enabled/
sudo nginx -t && sudo systemctl reload nginx

# 8. 申请 SSL
sudo certbot --nginx -d shumai.cc -d www.shumai.cc

# 9. 构建前端
cd /opt/shumai && sudo npm run build
```

### 3.2 日常更新流程（每次代码更新）

```bash
cd /opt/shumai
sudo git pull
sudo npm run build
# 前端自动更新（Nginx root 指向 /opt/shumai/dist）
# 如果后端有变动：
sudo pm2 restart shumai-api
```

### 3.3 踩坑记录

| 问题 | 原因 | 解决方法 |
|------|------|---------|
| `git pull` 报 Permission denied | 用 `sudo git clone` 创建的目录属于 root | 用 `sudo git pull` |
| `npm run build` 报 EACCES | git pull 用了 sudo，文件属于 root | 改用 `sudo npm run build` |
| `pm2 restart` 报 SyntaxError | `ecosystem.config.cjs` 漏了逗号 | 用 nano 检查 JSON 语法 |
| `psql` 报 column "role" does not exist | 建表脚本没有 role 字段 | `ALTER TABLE users ADD COLUMN role VARCHAR(20)` |
| gzip 重复报错 | nginx.conf 已有 gzip，又手动加了一遍 | 用 `grep -n "gzip"` 先检查再修改 |
| 无痕模式 HTTP 警告 | 分享的链接是 http:// | 加 HSTS 头；分享时用 https:// |
| 首次加载 30 秒 | 650kB 数据文件 + 香港延迟 | 已做 gzip + 分包，二次加载靠 ServiceWorker 缓存 |
| `fatal: dubious ownership` | git safe.directory 未配置 | `git config --global --add safe.directory /opt/shumai` |

---

## 四、Nginx 关键配置

### 4.1 gzip 压缩（nginx.conf http块）
```nginx
gzip on;
gzip_vary on;
gzip_min_length 1024;
gzip_types text/plain text/css application/javascript application/json image/svg+xml;
```

### 4.2 HSTS 强制 HTTPS（sites-enabled/shumai）
```nginx
add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
```

### 4.3 HTTP → HTTPS 跳转
```nginx
server {
    listen 80;
    server_name shumai.cc www.shumai.cc;
    return 301 https://$host$request_uri;
}
```

---

## 五、Vite 构建优化

### 分包配置（vite.config.js）
```javascript
manualChunks(id) {
  if (id.includes("node_modules/react") || id.includes("node_modules/react-dom")) {
    return "vendor-react";
  }
  if (id.includes("node_modules/")) {
    return "vendor-libs";
  }
  if (id.includes("/src/data/")) {
    return "data";
  }
}
```

**效果**：单包 ~1MB → 4个并行包，支持浏览器缓存复用。

---

## 六、PM2 ecosystem.config.cjs 模板

```javascript
module.exports = {
  apps: [{
    name: 'shumai-api',          // ← 改成系统名
    script: 'server/index.js',
    cwd: '/opt/shumai',          // ← 改成代码路径
    env: {
      NODE_ENV: 'production',
      PORT: 3001,                // ← 多系统时错开端口
      DATABASE_URL: 'postgresql://shumai:shumai2026db!@localhost:5432/shumai',
      JWT_SECRET: 'xxx',
      DEEPSEEK_API_KEY: 'sk-xxx',
      ADMIN_PHONE: '13370890481',
    }
  }]
}
```

> **多系统并行**：高中数学用端口 3002，小学数学用 3003，英语用 3004。Nginx 按域名路由到不同端口。

---

## 七、数据库设计经验

### 核心表结构（所有系统通用）
```sql
users         -- 用户（手机号+密码+昵称+角色）
progress      -- 学习进度（user_id + topic_id + mastered）
wrong_questions -- 错题本（user_id + question_id + stage）
chat_history  -- AI对话历史（最近10条）
checkins      -- 打卡记录
daily_tasks   -- 每日任务（预生成）
```

### stage 字段区分学段
```sql
-- 后续系统在同一数据库里用 stage 区分
stage = 'junior'    -- 初中
stage = 'senior'    -- 高中
stage = 'primary'   -- 小学
stage = 'english'   -- 英语
```

---

## 八、新系统快速启动清单

复制本系统建新系统时，按顺序执行：

- [ ] 1. fork/copy 本仓库，改项目名和 stage 值
- [ ] 2. 替换 `src/data/` 下的题库数据
- [ ] 3. 修改 `public/manifest.json` 名称和图标
- [ ] 4. 修改 `ecosystem.config.cjs` 端口（+1）
- [ ] 5. 服务器建新 PostgreSQL 数据库，运行 schema.sql
- [ ] 6. Nginx 新增 server block，配置子域名
- [ ] 7. `certbot --nginx -d high.shumai.cc` 申请 SSL
- [ ] 8. `pm2 start ecosystem.config.cjs --only 新系统名`
- [ ] 9. 验证 `/api/health` 返回 200

---

## 九、性能基线（初中数学系统参考值）

| 指标 | 数值 | 备注 |
|------|------|------|
| 前端总包大小（gzip前） | ~1 MB | 含 650kB 题库数据 |
| 前端总包大小（gzip后） | ~340 kB | Nginx gzip 压缩后 |
| 首次加载时间 | 5-15 秒 | 香港→大陆，受网络影响 |
| 二次加载时间 | <1 秒 | ServiceWorker 缓存 |
| 后端 API 响应 | <100ms | 本地 PostgreSQL |
| AI 接口响应 | 2-8 秒 | DeepSeek 流式输出 |

---

## 十、待做优化（下次系统可预先做）

1. **数据懒加载**：题库数据按模块动态 import，首屏快 60%
2. **CDN 加速**：静态资源走阿里云/腾讯云 CDN，大陆访问更快
3. **数据库连接池**：高并发时调大 `max` 连接数
4. **Redis 缓存**：AI 接口结果缓存，重复问题秒回
5. **图片 WebP**：题目图片转 WebP 格式，减少 40-60% 体积
