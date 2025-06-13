module.exports = {
  apps: [
    {
      name: "ganasafi",
      script: "./node_modules/next/dist/bin/next",
      args: "start",
      cwd: "./",
      instances: 2,
      autorestart: true,
      watch: false,
      max_memory_restart: "1G",
      exec_mode: "fork",
      env: {
        NODE_ENV: "development",
        PORT: 80,
      },
      env_production: {
        NODE_ENV: "production",
        API_URL: "./api",
        PORT: 80,
      },
    },
  ],
};
