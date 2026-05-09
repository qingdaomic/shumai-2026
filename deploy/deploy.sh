#!/bin/bash
set -euo pipefail
# 一键部署到香港服务器
# 用法：bash deploy/deploy.sh

SERVER="${SHUMAI_DEPLOY_SERVER:-ubuntu@43.128.59.105}"
REMOTE_DIR="${SHUMAI_DEPLOY_FRONTEND_DIR:-/opt/shumai/dist}"

echo "==> 构建前端..."
npx vite build

echo "==> 创建远程目录..."
ssh "$SERVER" "sudo mkdir -p $REMOTE_DIR && sudo chown -R \$(whoami):\$(whoami) $REMOTE_DIR"

echo "==> 只读确认 Nginx 当前 root..."
ssh "$SERVER" "sudo nginx -T 2>/dev/null | grep -q \"root $REMOTE_DIR\""

echo "==> 同步 dist/ ..."
rsync -az --delete dist/ "$SERVER:$REMOTE_DIR/"

echo "==> 校验发布目标..."
ssh "$SERVER" "test -f $REMOTE_DIR/index.html && ls -1 $REMOTE_DIR | sed -n '1,5p'"

echo "✅ 前端部署完成！当前默认发布目标为 /opt/shumai/dist"
