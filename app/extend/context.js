const DOMAIN = Symbol('Context#domain');

module.exports = {
  async getdomain() {
    if (!this[DOMAIN]) {
      const app = this.app;
      // console.log(this);
      
      this[DOMAIN] = await app.model.Domain.create({
        title: "默认",
        domain: "*",
        url: "*",
        remark: "默认域名匹配"
      });
      // this[DOMAIN] = await app.mysql.insert("domain", {
      //   title: "N'默认'",
      //   domain: "*",
      //   url: "*",
      //   remark: "N'默认域名匹配'"
      // });
    }
    return this[DOMAIN];
  },
};