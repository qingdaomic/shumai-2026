#!/bin/bash
# 一键部署到香港服务器
# 用法：bash deploy/deploy.sh

SERVER="root@43.128.59.105"
REMOTE_DIR="/var/www/shumai"

echo "==> 构建前端..."
npx vite build

echo "==> 创建远程目录..."
ssh $SERVER "mkdir -p $REMOTE_DIR"

echo "==> 上传 dist/ ..."
scp -r dist/* $SERVER:$REMOTE_DIR/

echo "==> 重载 Nginx..."
ssh $SERVER "nginx -t && systemctl reload nginx"

echo "✅ 部署完成！访问 https://shumai.cc"
