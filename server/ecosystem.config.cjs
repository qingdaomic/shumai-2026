// PM2 进程管理配置 — 数脉后端
module.exports = {
  apps: [
    {
      name: 'shumai-api',
      script: 'index.js',
      cwd: '/www/shumai/server',
      instances: 1,
      exec_mode: 'fork',
      node_args: '--experimental-vm-modules',
      env: {
        NODE_ENV: 'production',
        PORT: 3001,
      },
      error_file: '/www/logs/shumai-err.log',
      out_file: '/www/logs/shumai-out.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss',
      restart_delay: 3000,
      max_restarts: 10,
      watch: false,
      autorestart: true,
    },
    {
      name: 'shumai-bot',
      script: 'bot.js',
      cwd: '/www/shumai/server',
      instances: 1,
      exec_mode: 'fork',
      env: {
        NODE_ENV: 'production',
      },
      error_file: '/www/logs/shumai-bot-err.log',
      out_file: '/www/logs/shumai-bot-out.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss',
      restart_delay: 5000,
      max_restarts: 5,
      watch: false,
      autorestart: true,
    },
  ],
};
