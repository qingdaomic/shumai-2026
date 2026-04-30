# 中考数学系统部署指南

> 版本：V1.0 | 涵盖阶段：V1 前端测试版 → V2 正式全栈部署

---

## 一、部署架构概览

### V1 前端测试版（静态部署）

```
用户浏览器
    │
    ▼
CDN / 静态服务器
    │
    └── index.html（单文件 React 应用）
```

### V1.5 轻后端版

```
用户浏览器
    │
    ├──► 前端站点（静态服务器 / CDN）
    │
    └──► API 服务（Node.js / 其他后端）
              │
              └──► 数据库（MySQL / PostgreSQL）
```

### V2 正式运营版

```
用户浏览器
    │
    ├──► 学员端前端
    ├──► 管理端前端
    │
Nginx（反向代理）
    │
    ├──► API 服务
    │        └──► 数据库
    │        └──► 缓存（Redis）
    │
    └──► 静态资源 / 对象存储
```

---

## 二、V1 前端测试版部署

### 2.1 构建产物

当前项目已经可以通过 esbuild 打包成单文件 `index.html`。

构建命令参考（在项目目录执行）：

```bash
# 安装依赖（第一次）
npm install --save-dev esbuild

# 打包成单文件
npx esbuild shumai-v7-1.jsx \
  --bundle \
  --outfile=index.html \
  --platform=browser \
  --define:process.env.NODE_ENV='"production"'
```

> 注意：当前已有生成好的 `shumai-v7-1.html`，可直接作为 V1 部署产物使用。

### 2.2 部署方式选项

#### 方式 A：上传到静态服务器（最简单）

适合 V1 测试版：

1. 购买服务器（推荐阿里云/腾讯云 2核4G 入门配置）
2. 安装 Nginx
3. 将 `index.html` 上传到服务器指定目录
4. 配置 Nginx 静态托管
5. 绑定域名，配置 HTTPS

**Nginx 最简配置示例**：

```nginx
server {
    listen 80;
    server_name your-domain.com;
    return 301 https://$host$request_uri;
}

server {
    listen 443 ssl;
    server_name your-domain.com;

    ssl_certificate     /etc/ssl/your-cert.pem;
    ssl_certificate_key /etc/ssl/your-key.pem;

    root /var/www/shumai;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    gzip on;
    gzip_types text/html application/javascript text/css;
}
```

#### 方式 B：使用 CDN 托管（更快更省事）

适合静态内容：

- 国内可用：阿里云 OSS + CDN、腾讯云 COS + CDN
- 将 `index.html` 上传到对象存储，配置静态网站托管
- 绑定自定义域名 + HTTPS

**优点**：

- 无需维护服务器
- 全球加速
- 费用极低（静态文件）

---

## 三、V1.5 轻后端版部署

### 3.1 服务器配置建议

| 配置项 | 建议 |
|--------|------|
| CPU | 2核以上 |
| 内存 | 4GB 以上 |
| 系统 | Ubuntu 22.04 LTS |
| 磁盘 | 40GB SSD |
| 带宽 | 5Mbps 以上（视并发扩容） |

### 3.2 必要软件

```bash
# 更新系统
sudo apt update && sudo apt upgrade -y

# 安装 Node.js 20.x（推荐用 nvm 管理）
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
nvm install 20
nvm use 20

# 安装 MySQL 8.x
sudo apt install mysql-server -y
sudo mysql_secure_installation

# 安装 Nginx
sudo apt install nginx -y

# 安装 PM2（Node.js 进程管理）
npm install -g pm2
```

### 3.3 数据库初始化

```bash
# 登录 MySQL
sudo mysql -u root -p

# 创建数据库和用户
CREATE DATABASE shumai_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
CREATE USER 'shumai'@'localhost' IDENTIFIED BY 'your_strong_password';
GRANT ALL PRIVILEGES ON shumai_db.* TO 'shumai'@'localhost';
FLUSH PRIVILEGES;
```

按 `database-design.md` 中的表结构依次建表，优先建 V1.5 必须的 9 张表：

1. `users`
2. `user_sessions`
3. `student_profiles`
4. `question_attempts`
5. `wrong_book_records`
6. `study_progress`
7. `diagnosis_records`
8. `behavior_logs`
9. `feature_flags`

### 3.4 后端服务部署

```bash
# 上传后端代码到服务器
scp -r ./backend user@your-server:/var/www/shumai-api

# 安装依赖
cd /var/www/shumai-api
npm install --production

# 配置环境变量
cp .env.example .env
nano .env
```

**`.env` 关键配置**：

```
NODE_ENV=production
PORT=3000

DB_HOST=localhost
DB_PORT=3306
DB_NAME=shumai_db
DB_USER=shumai
DB_PASSWORD=your_strong_password

JWT_SECRET=your_very_long_random_secret_key
JWT_EXPIRES_IN=7d

AI_PROVIDER=deepseek
DEEPSEEK_API_KEY=your_key_here
DOUBAO_API_KEY=your_key_here

# 支付（V2 阶段才需要）
# WECHAT_PAY_MCH_ID=
# WECHAT_PAY_KEY=
# ALIPAY_APP_ID=
# ALIPAY_PRIVATE_KEY=
```

```bash
# 用 PM2 启动并设置开机自启
pm2 start npm --name "shumai-api" -- start
pm2 save
pm2 startup
```

### 3.5 Nginx 反向代理配置

```nginx
server {
    listen 443 ssl;
    server_name your-domain.com;

    ssl_certificate     /etc/ssl/cert.pem;
    ssl_certificate_key /etc/ssl/key.pem;

    # 学员端前端（静态文件）
    root /var/www/shumai-front;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # API 接口反向代理
    location /api/ {
        proxy_pass http://127.0.0.1:3000/api/;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }

    # 管理端（独立目录）
    location /admin/ {
        alias /var/www/shumai-admin/;
        try_files $uri $uri/ /admin/index.html;
    }

    gzip on;
    gzip_types text/html application/javascript application/json text/css;
    client_max_body_size 10M;
}
```

---

## 四、HTTPS 证书配置

**推荐使用 Let's Encrypt 免费证书**：

```bash
sudo apt install certbot python3-certbot-nginx -y
sudo certbot --nginx -d your-domain.com
# 自动续期
sudo crontab -e
# 添加：0 3 * * * certbot renew --quiet
```

---

## 五、环境变量管理规范

- 所有敏感配置（数据库密码、JWT Secret、API Key）必须通过环境变量注入
- **禁止将 `.env` 文件提交到代码仓库**
- 代码库中只保留 `.env.example`（无真实值，只有字段名）
- 生产环境 `.env` 只存在服务器本地，定期备份

---

## 六、备份策略

### 6.1 数据库备份

```bash
# 每天凌晨 3 点自动备份
sudo crontab -e

# 添加以下任务
0 3 * * * mysqldump -u shumai -pyour_password shumai_db | gzip > /backup/db/shumai_$(date +\%Y\%m\%d).sql.gz

# 保留最近 30 天的备份
0 4 * * * find /backup/db/ -name "*.sql.gz" -mtime +30 -delete
```

### 6.2 代码备份

- 源码必须使用 Git 管理，推送到远程仓库（GitHub / Gitee）
- 服务器上的代码通过 Git 部署，不直接在服务器上修改

---

## 七、监控与告警

### 7.1 基础监控（V1.5 建议接入）

- **服务器监控**：阿里云/腾讯云自带基础监控（CPU、内存、磁盘、网络）
- **服务进程监控**：PM2 自带重启和日志功能
- **API 健康检查**：配置 `GET /health` 接口，返回服务状态

### 7.2 日志管理

**Nginx 日志路径**：

```
/var/log/nginx/access.log
/var/log/nginx/error.log
```

**PM2 日志**：

```bash
pm2 logs shumai-api          # 查看实时日志
pm2 logs shumai-api --lines 100  # 查看最近 100 行
```

**建议日志保留策略**：

- Access 日志保留 7 天
- Error 日志保留 30 天
- 业务日志（behavior_logs 表）保留 1 年

---

## 八、上线前检查清单

### 8.1 安全检查

- [ ] 所有 API 强制 HTTPS
- [ ] JWT Secret 足够随机且足够长（32位以上）
- [ ] 数据库不暴露公网，只允许本机连接
- [ ] Nginx 屏蔽 `.env` 等敏感文件访问
- [ ] 管理端路由不对外公开展示
- [ ] AI API Key 只在服务端使用

### 8.2 功能检查

- [ ] 注册登录流程正常
- [ ] 题目、知识点数据正常加载
- [ ] 做题记录能保存
- [ ] 错题本同步正常
- [ ] 诊断流程正常
- [ ] 视频链接可正常跳转

### 8.3 性能检查

- [ ] 首屏加载时间 < 3 秒
- [ ] API 平均响应时间 < 500ms
- [ ] 数据库查询索引正常建立
- [ ] Nginx 开启 gzip 压缩

### 8.4 备份检查

- [ ] 数据库自动备份已配置
- [ ] 代码已推送到远程仓库
- [ ] `.env` 文件已单独备份

---

## 九、常见问题

### Q：部署后页面刷新 404？

检查 Nginx 配置，确保 `try_files $uri $uri/ /index.html` 配置正确，让前端路由由前端处理。

### Q：API 请求跨域报错？

后端需要配置 CORS，允许前端域名：

```js
// Node.js Express 示例
app.use(cors({
  origin: ['https://your-domain.com'],
  credentials: true
}));
```

### Q：服务挂了自动重启？

PM2 已经处理了进程重启，但还需要确认系统启动时 PM2 自动拉起：

```bash
pm2 startup
pm2 save
```

### Q：如何快速回滚版本？

```bash
# 回滚到上一个 Git 版本
git revert HEAD
pm2 restart shumai-api

# 或者直接切到指定版本
git checkout <commit-hash>
pm2 restart shumai-api
```
