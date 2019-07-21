const { Controller } = require('egg');

class AdminController extends Controller {
  async getSwiperList() {
    const { ctx } = this;
    ctx.body = 'ok';
  }
}

module.exports = AdminController;
