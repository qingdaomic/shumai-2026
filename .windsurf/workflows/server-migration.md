---
description: 迁移前端+后端到轻量云香港服务器 (43.128.59.105)，域名 shumai.cc
---

# 服务器迁移全流程

## 服务器信息
- IP: 43.128.59.105
- 用户名: ubuntu (用 sudo 执行特权命令)
- 域名: shumai.cc (DNSPod 管理)
- 系统: Ubuntu 22.04.5 LTS

## 目标架构
- Nginx → 前端静态文件 (/var/www/shumai) + 反向代理 /api/* → localhost:3001
- Node.js (PM2) → 后端 Express 服务，端口 3001
- PostgreSQL → 本地数据库

---

## STEP 1：服务器安装依赖
在服务器终端（OrcaTerm）粘贴执行：

```bash
# 切换 root
sudo -i

# 更新系统
apt update && apt upgrade -y

# 安装 Nginx
apt install -y nginx

# 安装 Node.js 20
curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
apt install -y nodejs

# 安装 PostgreSQL
apt install -y postgresql postgresql-contrib

# 安装 PM2
npm install -g pm2

# 安装 certbot (SSL)
apt install -y certbot python3-certbot-nginx

# 验证安装
nginx -v && node -v && psql --version && pm2 -v
```

---

## STEP 2：创建数据库
在服务器终端（仍是 root）执行：

```bash
sudo -u postgres psql << 'EOF'
CREATE USER shumai WITH PASSWORD 'shumai2026db!';
CREATE DATABASE shumai OWNER shumai;
GRANT ALL PRIVILEGES ON DATABASE shumai TO shumai;
\q
EOF
```

---

## STEP 3：配置 Nginx
在服务器终端执行：

```bash
cat > /etc/nginx/sites-available/shumai << 'NGINXEOF'
server {
    listen 80;
    server_name shumai.cc www.shumai.cc;

    root /var/www/shumai;
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
NGINXEOF

mkdir -p /var/www/shumai
ln -sf /etc/nginx/sites-available/shumai /etc/nginx/sites-enabled/
rm -f /etc/nginx/sites-enabled/default
nginx -t && systemctl reload nginx
```

---

## STEP 4：上传后端代码（在 Mac 终端执行）

```bash
cd /Users/mac/Desktop/中考数学-系统-2026
scp -r server/* ubuntu@43.128.59.105:/tmp/shumai-server/
scp package.json ubuntu@43.128.59.105:/tmp/shumai-server/
```

在服务器终端：
```bash
mkdir -p /opt/shumai-server
cp -r /tmp/shumai-server/* /opt/shumai-server/
cd /opt/shumai-server && npm install --production
```

---

## STEP 5：创建后端 .env（在服务器终端执行）
将 RAILWAY_DB_URL 替换为真实 Railway 数据库地址：

```bash
cat > /opt/shumai-server/.env << 'EOF'
DATABASE_URL=postgresql://shumai:shumai2026db!@localhost:5432/shumai
JWT_SECRET=shumai2026HongKongServerSecret!@#
PORT=3001
NODE_ENV=production
EOF
```

---

## STEP 6：迁移数据库（在 Mac 终端执行）
先在 Railway 控制台找到 DATABASE_URL，格式：
postgresql://user:pass@host:5432/dbname

```bash
# 导出 Railway 数据库（替换为你的 Railway URL）
pg_dump "YOUR_RAILWAY_DATABASE_URL" > /tmp/railway_backup.sql

# 上传到服务器
scp /tmp/railway_backup.sql ubuntu@43.128.59.105:/tmp/

# 在服务器上导入（服务器终端执行）
# psql "postgresql://shumai:shumai2026db!@localhost:5432/shumai" < /tmp/railway_backup.sql
```

---

## STEP 7：启动后端（服务器终端）

```bash
cd /opt/shumai-server
pm2 start index.js --name shumai-api
pm2 save
pm2 startup  # 按提示复制执行那条命令

# 测试后端
curl http://localhost:3001/api/health
```

---

## STEP 8：上传前端（Mac 终端执行）

```bash
cd /Users/mac/Desktop/中考数学-系统-2026
npx vite build
scp -r dist/* ubuntu@43.128.59.105:/var/www/shumai/
```

测试：浏览器访问 http://43.128.59.105 看是否能打开页面

---

## STEP 9：SSL 证书（DNS 解析生效后）
在服务器终端执行：

```bash
certbot --nginx -d shumai.cc -d www.shumai.cc
# 输入邮箱，选 2（自动重定向 HTTP→HTTPS）
```

---

## STEP 10：DNS 解析
在 DNSPod 添加：
- 主机记录 @  → A → 43.128.59.105
- 主机记录 www → A → 43.128.59.105

---

## 完成后验证
- https://shumai.cc 能打开前端 ✓
- 登录功能正常 ✓
- API 接口正常 ✓

## 日常更新命令（Mac 终端）
```bash
# 更新前端
bash deploy/deploy.sh

# 更新后端
bash deploy/deploy-backend.sh
```
