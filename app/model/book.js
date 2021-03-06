module.exports = app => {
  const { BIGINT, STRING, TEXT, INTEGER, DATE } = app.Sequelize;

  const Book = app.model.define('book', {
    id: {
      type: BIGINT.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    title: STRING(45),
    author: STRING(45),
    desc: TEXT,
    status: INTEGER.UNSIGNED,  // 1.  上架; 2. 部分下架;  3. 部分上架;   4. 下架
    created_time: DATE,
    updated_titme: DATE
  });
  return Book;
};