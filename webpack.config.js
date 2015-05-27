'use strict';

var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

/**
 * Extracts css to a separate file
 *
 * @type {ExtractTextPlugin|exports|module.exports}
 */
var ExtractCss = new ExtractTextPlugin('../../dist/style.css');

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
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract(
          // activate source maps via loader query
          'css?sourceMap!' +
          'sass?sourceMap'
        )
      }
    ]
  },
  plugins: [
    ExtractCss
  ]
};
