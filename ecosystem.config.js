module.exports = {
  apps: [
    {
      name: 'techmapperz',
      script: 'npm',
      args: 'start',
      cwd: '/root/techmapperz-pord',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PORT: 3000
      },
      error_file: '/var/log/pm2/techmapperz-error.log',
      out_file: '/var/log/pm2/techmapperz-out.log',
      log_file: '/var/log/pm2/techmapperz-combined.log',
      time: true,
      // Restart delay to prevent rapid restarts
      restart_delay: 1000,
      // Kill timeout
      kill_timeout: 5000
    }
  ],

  deploy: {
    production: {
      user: 'root',
      host: 'your-vps-ip',
      ref: 'origin/main',
      repo: 'https://github.com/Sahil-techmapperz/techmapperz-pord.git',
      path: '/root',
      'pre-deploy-local': '',
      'post-deploy': 'npm ci && npm run build && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    }
  }
};