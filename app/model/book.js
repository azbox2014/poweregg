module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const Book = app.model.define('book', {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: STRING(45),
    author: STRING(45),
    desc: STRING,

    // 1.  上架; 2. 部分下架;  3. 部分上架;   4. 下架
    status: INTEGER,
    created_time: DATE,
    updated_titme: DATE
  });
  return Book;
};