#!/bin/bash
set -euo pipefail
# 部署后端到香港服务器
SERVER="${SHUMAI_DEPLOY_SERVER:-ubuntu@43.128.59.105}"
REMOTE_DIR="${SHUMAI_DEPLOY_RELEASE_DIR:-/opt/shumai-releases/current/repo}"

echo "==> 上传后端代码..."
ssh "$SERVER" "sudo mkdir -p $REMOTE_DIR/server && sudo chown -R \$(whoami):\$(whoami) $REMOTE_DIR"
scp -r server/* "$SERVER:$REMOTE_DIR/server/"

echo "==> 安装依赖..."
ssh "$SERVER" "cd $REMOTE_DIR/server && npm install --omit=dev"

echo "==> 提示：当前线上正式进程名为 shumai-api-v4.94，release 切换需先确认临时 PM2 配置"
echo "==> 当前脚本仅更新 release 目录中的后端代码，不直接重启线上 PM2"

echo "✅ 后端代码已同步到 release 目录"
