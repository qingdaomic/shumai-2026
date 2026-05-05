#!/bin/bash
# 部署后端到香港服务器
SERVER="root@43.128.59.105"
REMOTE_DIR="/opt/shumai-server"

echo "==> 上传后端代码..."
ssh $SERVER "mkdir -p $REMOTE_DIR"
scp -r server/* $SERVER:$REMOTE_DIR/
scp package.json $SERVER:$REMOTE_DIR/

echo "==> 安装依赖..."
ssh $SERVER "cd $REMOTE_DIR && npm install --production"

echo "==> 重启 PM2..."
ssh $SERVER "cd $REMOTE_DIR && pm2 restart shumai-api 2>/dev/null || pm2 start index.js --name shumai-api && pm2 save"

echo "✅ 后端部署完成"
