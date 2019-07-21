const _ = require('lodash');
const Path = require('path');
const Glob = require('glob');

module.exports = app => {
  const baseDir = app.baseDir + '/app/model/';
  const baseMap = '**.js';
  const model = _(Glob.sync(baseMap, { cwd: baseDir }))
    .reduce(function(_model, filepath) {
      return _model = { ..._model, filepath };
    }, {});
};
