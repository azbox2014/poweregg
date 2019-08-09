module.exports = app => {
  const { BIGINT, STRING, TEXT, INTEGER, DATE } = app.Sequelize;

  const User = app.model.define('user', {
    id: {
      type: BIGINT.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    username: STRING(45),
    nickname: STRING(45),
    avatar: TEXT,
    phone: STRING(20),
    gender: INTEGER.UNSIGNED,
    status: INTEGER.UNSIGNED,
    created_time: DATE,
    updated_titme: DATE
  });
  return User;
};