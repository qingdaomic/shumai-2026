# 树脉后端部署指南 — 腾讯云/阿里云轻量服务器

> 预算 ~¥40/月 | Ubuntu 22.04 | Node.js 20 | PostgreSQL 15 | PM2 + Nginx

> 2026-05-09 校准：当前线上前端静态根目录以 `/opt/shumai/dist` 为准，正式后端进程名为 `shumai-api-v4.94`，PM2 以 root 运行。旧 `/opt/shumai` 目录只作为历史目录和回滚参考，不再作为默认发布目录。

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
sudo -u postgres psql -d shumai -f /opt/shumai-releases/<release>/repo/server/schema.sql
```

---

## 五、部署后端代码

```bash
# 创建目录
mkdir -p /opt/shumai-releases /opt/shumai/dist

# 每次发布创建独立 release 目录
RELEASE=/opt/shumai-releases/vX.YY-$(date +%Y%m%d-%H%M%S)
mkdir -p "$RELEASE"

# 方法A：Git clone 到新 release
git clone https://github.com/your-org/shumai.git "$RELEASE/repo"
cd "$RELEASE/repo"
git status -sb

# 方法B：rsync 本地上传到指定 release（在本机执行）
rsync -avz --exclude node_modules --exclude dist \
  /Users/mac/Desktop/中考数学-系统-2026/server/ \
  root@your_server_ip:/opt/shumai-releases/<release>/repo/server/

# 安装依赖
cd "$RELEASE/repo/server"
npm install --production
```

### 配置环境变量
```bash
cp "$RELEASE/repo/server/env-template.txt" "$RELEASE/repo/server/.env"
vim "$RELEASE/repo/server/.env"
```

`.env` 至少需要包含以下键。不要把真实值写入仓库或文档：
```ini
PORT
DATABASE_URL
JWT_SECRET
DEEPSEEK_API_KEY
WECHAT_BOT_TOKEN
NODE_ENV
```

生成安全的 JWT_SECRET：
```bash
node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"
```

---

## 六、PM2 启动服务

```bash
cd "$RELEASE/repo/server"

# 当前仓库内 server/ecosystem.config.cjs 仍保留旧 /opt/shumai/server 写法。
# release 切换时使用临时 PM2 配置，cwd 指向本次 release 的 server 目录。
cat > /tmp/shumai-api-v4.94.config.cjs <<EOF
module.exports = {
  apps: [{
    name: 'shumai-api-v4.94',
    script: 'index.js',
    cwd: '$RELEASE/repo/server',
    instances: 1,
    exec_mode: 'fork',
    node_args: '--experimental-vm-modules',
    env: {
      NODE_ENV: 'production',
      PORT: 3001
    },
    log_date_format: 'YYYY-MM-DD HH:mm:ss',
    restart_delay: 3000,
    max_restarts: 10,
    watch: false,
    autorestart: true
  }]
};
EOF

pm2 start /tmp/shumai-api-v4.94.config.cjs --only shumai-api-v4.94

# 验证启动
pm2 status
curl http://localhost:3001/api/health

# 保存进程列表（开机自启）
pm2 save
```

**启动微信 Bot（可选）：**
```bash
# 当前正式上线链路暂未把 Bot 纳入 release PM2 切换；如需启动，先单独复核 cwd 与环境变量。
```

**常用 PM2 命令：**
```bash
pm2 logs shumai-api-v4.94    # 查看日志
pm2 restart shumai-api-v4.94  # 重启
pm2 reload shumai-api-v4.94   # 零停机重载
pm2 stop shumai-api-v4.94     # 停止
pm2 monit                     # 实时监控
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

    root /opt/shumai/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    location /api/ {
        proxy_pass http://127.0.0.1:3001/api/;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
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
# 期望: {"status":"ok","name":"树脉后端",...}

# 2. 注册接口
curl -X POST https://your_domain.com/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"phone":"13800138000","password":"test123","name":"测试用户"}'

# 3. 查看日志
pm2 logs shumai-api-v4.94 --lines 50
```

---

## 十一、日常运维

### 代码更新
```bash
cd /opt/shumai-releases/<new-release>/repo/server
npm install --production
node --check index.js

# 验证通过后，再按 release 切换流程更新 PM2。
```

### 数据库备份（每日 cron）
```bash
crontab -e
# 添加以下行（每天凌晨2点备份）
0 2 * * * pg_dump -U shumai shumai | gzip > /home/ubuntu/shumai-backups/shumai_$(date +\%Y\%m\%d).sql.gz
```

### 磁盘使用
```bash
df -h
du -sh /root/.pm2/logs /home/ubuntu/shumai-backups
# 清理30天前的备份
find /home/ubuntu/shumai-backups -name "*.gz" -mtime +30 -delete
```

---

## 故障排查

| 现象 | 排查命令 |
|------|---------|
| API 无响应 | `pm2 status` → `pm2 logs shumai-api-v4.94` |
| 502 Bad Gateway | `curl localhost:3001/api/health` 确认进程存活 |
| 数据库连接失败 | `psql -U shumai -d shumai -h localhost` |
| JWT 失效 | 检查 `.env` 中 `JWT_SECRET` 是否变更 |
| OCR 上传失败 | `client_max_body_size` 是否 ≥ 10m |

---

> 最后更新：2026-05-09 | 预计部署时间：30-60分钟
