module.exports = app => {
  const { BIGINT, STRING, INTEGER, DATE } = app.Sequelize;

  const GroupInfo = app.model.define('group_info', {
    id: {
      type: BIGINT.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    code: STRING(45),
    domain_id: BIGINT.UNSIGNED,
    title: STRING(45),
    order: INTEGER.UNSIGNED,
    created_time: DATE,
    updated_titme: DATE
  });
  return GroupInfo;
};