# 数脉后端部署指南 — 腾讯云/阿里云轻量服务器

> 预算 ~¥40/月 | Ubuntu 22.04 | Node.js 20 | PostgreSQL 15 | PM2 + Nginx

---

## 一、购买服务器

**推荐配置（¥38-45/月）**

| 平台 | 规格 | 价格 |
|------|------|------|
| 腾讯云轻量 | 2核2G / 50G SSD / 4M带宽 | ¥45/月 |
| 阿里云轻量 | 2核2G / 40G SSD / 5M带宽 | ¥38/月 |

**安全组/防火墙放行端口：** `22`（SSH）、`80`（HTTP）、`443`（HTTPS）、`3001`（API 开发调试可选关）

---

## 二、服务器初始化

```bash
# 以 root 登录后创建普通用户（可选）
adduser shumai
usermod -aG sudo shumai

# 更新系统
apt update && apt upgrade -y

# 安装基础工具
apt install -y git curl vim ufw build-essential
```

### 配置防火墙
```bash
ufw allow 22
ufw allow 80
ufw allow 443
ufw enable
```

---

## 三、安装 Node.js 20

```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
apt install -y nodejs
node -v   # 应输出 v20.x.x
npm -v
```

### 安装 PM2 + ffmpeg（语音识别依赖）
```bash
apt install -y ffmpeg    # W1.4 语音 AMR→MP3 转换
npm install -g pm2
pm2 startup systemd -u root --hp /root
# 复制输出的 systemctl 命令并执行，使 PM2 开机自启
```

---

## 四、安装 PostgreSQL 15

```bash
apt install -y postgresql postgresql-contrib
systemctl enable --now postgresql

# 创建数据库和用户
sudo -u postgres psql <<EOF
CREATE USER shumai WITH PASSWORD 'your_strong_password_here';
CREATE DATABASE shumai OWNER shumai;
GRANT ALL PRIVILEGES ON DATABASE shumai TO shumai;
EOF
```

### 初始化表结构
```bash
sudo -u postgres psql -d shumai -f /www/shumai/server/schema.sql
```

---

## 五、部署后端代码

```bash
# 创建目录
mkdir -p /www/shumai /www/logs

# 克隆或上传代码（选择一种）
# 方法A：Git
cd /www/shumai
git clone https://github.com/your-org/shumai.git .

# 方法B：rsync 本地上传（在本机执行）
rsync -avz --exclude node_modules --exclude dist \
  /Users/mac/Desktop/中考数学-系统-2026/server/ \
  root@your_server_ip:/www/shumai/server/

# 安装依赖
cd /www/shumai/server
npm install --production
```

### 配置环境变量
```bash
cp /www/shumai/server/env-template.txt /www/shumai/server/.env
vim /www/shumai/server/.env
```

填入以下内容：
```ini
PORT=3001
DATABASE_URL=postgres://shumai:your_strong_password_here@localhost:5432/shumai
JWT_SECRET=your-64-char-random-secret
DEEPSEEK_API_KEY=sk-xxxxxxxxxxxxxxxxxxxx
WECHAT_BOT_TOKEN=
NODE_ENV=production
```

生成安全的 JWT_SECRET：
```bash
node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"
```

---

## 六、PM2 启动服务

```bash
cd /www/shumai/server

# 启动 API 服务
pm2 start ecosystem.config.cjs --only shumai-api

# 验证启动
pm2 status
curl http://localhost:3001/api/health

# 保存进程列表（开机自启）
pm2 save
```

**启动微信 Bot（可选）：**
```bash
pm2 start ecosystem.config.cjs --only shumai-bot
pm2 save
```

**常用 PM2 命令：**
```bash
pm2 logs shumai-api        # 查看日志
pm2 restart shumai-api     # 重启
pm2 reload shumai-api      # 零停机重载
pm2 stop shumai-api        # 停止
pm2 monit                  # 实时监控
```

---

## 七、安装 Nginx 反向代理

```bash
apt install -y nginx
systemctl enable --now nginx
```

### Nginx 配置
```bash
vim /etc/nginx/sites-available/shumai
```

写入以下内容（替换 `your_domain.com`）：
```nginx
server {
    listen 80;
    server_name your_domain.com www.your_domain.com;

    # API 反向代理
    location /api/ {
        proxy_pass http://127.0.0.1:3001;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_cache_bypass $http_upgrade;
        proxy_read_timeout 120s;
        client_max_body_size 10m;
    }

    # 健康检查直通
    location = /health {
        proxy_pass http://127.0.0.1:3001/api/health;
    }
}
```

```bash
# 启用配置
ln -s /etc/nginx/sites-available/shumai /etc/nginx/sites-enabled/
nginx -t                    # 检查语法
systemctl reload nginx
```

---

## 八、HTTPS 证书（Let's Encrypt，免费）

```bash
apt install -y certbot python3-certbot-nginx
certbot --nginx -d your_domain.com -d www.your_domain.com

# 自动续期（certbot 已自动添加 systemd timer，验证）
systemctl list-timers | grep certbot
```

---

## 九、前端对接后端

前端 `src/App.jsx` 中已通过 `window.__SHUMAI_API` 读取后端地址。

**Netlify 环境变量设置：**  
Netlify Dashboard → Site Settings → Environment Variables：

```
VITE_API_URL = https://your_domain.com
```

在 `index.html` 中注入（已有此结构，修改对应 script 标签）：
```html
<script>
  window.__SHUMAI_API = "https://your_domain.com";
</script>
```

---

## 十、验证上线清单

```bash
# 1. 健康检查
curl https://your_domain.com/api/health
# 期望: {"status":"ok","name":"数脉后端",...}

# 2. 注册接口
curl -X POST https://your_domain.com/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"phone":"13800138000","password":"test123","name":"测试用户"}'

# 3. 查看日志
pm2 logs shumai-api --lines 50
tail -f /www/logs/shumai-err.log
```

---

## 十一、日常运维

### 代码更新
```bash
cd /www/shumai/server
git pull                   # 或 rsync 重新上传
npm install --production   # 如有新依赖
pm2 reload shumai-api      # 零停机重载
```

### 数据库备份（每日 cron）
```bash
crontab -e
# 添加以下行（每天凌晨2点备份）
0 2 * * * pg_dump -U shumai shumai | gzip > /www/backups/shumai_$(date +\%Y\%m\%d).sql.gz
```

### 磁盘使用
```bash
df -h
du -sh /www/logs /www/backups
# 清理30天前的备份
find /www/backups -name "*.gz" -mtime +30 -delete
```

---

## 故障排查

| 现象 | 排查命令 |
|------|---------|
| API 无响应 | `pm2 status` → `pm2 logs shumai-api` |
| 502 Bad Gateway | `curl localhost:3001/api/health` 确认进程存活 |
| 数据库连接失败 | `psql -U shumai -d shumai -h localhost` |
| JWT 失效 | 检查 `.env` 中 `JWT_SECRET` 是否变更 |
| OCR 上传失败 | `client_max_body_size` 是否 ≥ 10m |

---

> 最后更新：2026-04-29 | 预计部署时间：30-60分钟
