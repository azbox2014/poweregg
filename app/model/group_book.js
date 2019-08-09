module.exports = app => {
  const { BIGINT, INTEGER } = app.Sequelize;

  const GroupBook = app.model.define('group_book', {
    id: {
      type: BIGINT.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    group_id: BIGINT.UNSIGNED,
    book_id: BIGINT.UNSIGNED,
    order: INTEGER.UNSIGNED
  });
  return GroupBook;
};