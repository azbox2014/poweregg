module.exports = app => {
  const { BIGINT, STRING, TEXT, INTEGER, DATE } = app.Sequelize;

  const Chapter = app.model.define('chapter', {
    id: {
      type: BIGINT.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    book_id: BIGINT.UNSIGNED,
    title: STRING(45),
    content: TEXT,
    order: INTEGER.UNSIGNED
  });
  return Chapter;
};