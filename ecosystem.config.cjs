module.exports = {
  apps: [
    {
      name: 'Sasflix',
      port: '3007',
      // exec_mode: 'cluster',
      // instances: 2,
      script: './.output/server/index.mjs',
    },
  ],
}
