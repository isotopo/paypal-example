'use strict';

var webpack = require('webpack');
var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
  entry: {
    vendors: ['jquery'],
    app: './assets/js/app.js'
  },
  output: {
    filename: './public/js/built/[name].js'
  },
  plugins: [
    new CommonsChunkPlugin('vendors', 'public/js/built/vendors.js'),
    new BrowserSyncPlugin({
      port: 5000,
      proxy: 'localhost:3000'
    })
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel'
      }
    ]
  }
};
