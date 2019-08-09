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

  config.sequelize = {
    dialect: 'mysql',
    connectionUri: "mysql://azbox@127.0.0.1:3306/poweregg",
    password: "Rpi@123",
    delegate: "model",
    baseDir: "model",
    define: {
      freezeTableName: true,
      underscored: true,
      timestamps: false
    },
    dialectOptions: {
      charset: 'utf8'
    }
  };

  return config;
};
