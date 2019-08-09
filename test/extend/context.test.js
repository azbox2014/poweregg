const _ = require("lodash");
const { app, mock, assert } = require('egg-mock/bootstrap');

describe('extend/context.js', () => {

  it('ctx domain property', async () => {
    const ctx = app.mockContext();
    // console.log(await ctx.getdomain());
    console.log(app.model.AuthMethod);
    // assert(ctx.method === 'GET');
    // assert(ctx.url === '/');
  });

});
