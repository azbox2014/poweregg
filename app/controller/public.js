const { Controller } = require('egg');

class PublicController extends Controller {
  async index() {
    const { ctx } = this;
    console.log(ctx.domain);
    ctx.body = 'ok';
  }
}

module.exports = PublicController;
