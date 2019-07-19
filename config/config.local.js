module.exports = app => {
  const config = {};
  config.keys = "123456";

  config.mysql = {
    // database configuration
    client: {
      host: '192.168.1.60',
      port: '3306',
      user: 'root',
      password: 'xya197a3321',
      database: 'poweregg',
    },
    // load into app, default true
    app: true,
    // load into agent, default false
    agent: true,
  };  

  return config;
}