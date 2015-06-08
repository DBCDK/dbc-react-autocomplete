'use strict';

var path = require('path');

module.exports = {
  entry: {
    app: path.join(__dirname, '/examples/app.js')
  },
  output: {
    path: path.join(__dirname, '/examples/public'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        loaders: ['babel'],
        exclude: /node_modules/
      }
    ]
  }
};
