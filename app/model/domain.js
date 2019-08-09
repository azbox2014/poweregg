module.exports = app => {
  const { STRING, INTEGER } = app.Sequelize;

  const Domain = app.model.define('domain', {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: STRING(45),
    domain: STRING(45),
    url: STRING(45),
    remark: STRING,
    order: INTEGER
  });
  return Domain;
};