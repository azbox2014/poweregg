module.exports = app => {
  const config = {};
  config.keys = "123456";

  config.cluster = {
    listen: {
      port: 7001,
      hostname: '0.0.0.0',
      // path: '/var/run/egg.sock',
    }
  };

  return config;
}