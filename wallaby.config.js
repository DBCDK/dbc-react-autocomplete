'use strict';
let wallabyWebpack = require('wallaby-webpack');
let webpackConfig = require('./webpack.config');
let webpackPostprocessor = wallabyWebpack(webpackConfig);
let babel = require('babel');

module.exports = function() {
  return {
    files: [
      {pattern: 'src/testlib/phantomPolyfill.js', instrument: false},
      {pattern: 'src/components/**/*.component.js', load: false}
    ],

    tests: [
      {pattern: 'src/components/**/__tests__/test*.js', load: false}
    ],

    preprocessors: {
      '**/*.js': [
          file => babel.transform(file.content, {sourceMaps: true})
      ]
    },

    postprocessor: webpackPostprocessor,

    bootstrap: function() {
      // required to trigger tests loading
      window.__moduleBundler.loadTests();
    },

    testFramework: 'mocha@2.2.4'
  };
};
