const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const uglifyConfig = require('./uglify.config');

module.exports = (config, isProd) => {
  config.plugins = [
    new HtmlWebpackPlugin({
      template: './app/index.html'
    })
  ];

  if (isProd) {
    config.plugins.push(
      new webpack.optimize.UglifyJsPlugin(uglifyConfig)
    );
  }

  return config;
};
