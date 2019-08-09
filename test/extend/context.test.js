const { app, mock, assert } = require('egg-mock/bootstrap');

describe('extend/context.js', () => {

  it('ctx domain property', async () => {
    const ctx = app.mockContext();
    console.log(await ctx.getdomain());
    // assert(ctx.method === 'GET');
    // assert(ctx.url === '/');
  });

});
