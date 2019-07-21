const { app, mock, assert } = require('egg-mock/bootstrap');

describe('lib/hooks/model.test.js', () => {

  let app;
  before(() => {
    app = mock.app();
    return app.ready();
  });

  it('print glob list', () => {
    const hook = require(app.baseDir + '/lib/hooks/model');
    hook(app);
  });
});

describe('test/controller/home.test.js', () => {
  // test cases
});
