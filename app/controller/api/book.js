const { Controller } = require('egg');

class BookController extends Controller {
  async getSwiperList() {
    const { ctx } = this;
    ctx.body = 'ok';
  }
}

module.exports = BookController;
