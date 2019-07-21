module.exports = app => {
  const config = {};
  config.keys = '6e8240d2-aa02-11e9-b71c-27034512a55f';

  config.cluster = {
    listen: {
      port: 7001,
      hostname: '0.0.0.0',
      // path: '/var/run/egg.sock',
    },
  };

  config.mysql = {
    // database configuration
    client: {
      host: '127.0.0.1',
      port: '3306',
      user: 'test_user',
      password: 'test_password',
      database: 'test',
    },
    // load into app, default true
    app: true,
    // load into agent, default false
    agent: true,
  };

  return config;
};
