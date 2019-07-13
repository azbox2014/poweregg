const { Controller } = require('egg');

class IndexController extends Controller {
  async public() {
    const { ctx } = this;
    ctx.body = "ok";
  }
}

module.exports = IndexController;