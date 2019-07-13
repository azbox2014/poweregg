const ApiBaseController = require("./base");

class BookController extends ApiBaseController {
  async getSwiperList() {
    const { ctx } = this;
    ctx.body = "ok";
  }
}

module.exports = BookController;