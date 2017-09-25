const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const uglifyConfig = require('./uglify.config');

const { isRelease, isAnalyze } = require('../../../scripts/utils');

module.exports = (config) => {
  config.plugins = [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),

    new webpack.DefinePlugin({
      'process.env.NODE_ENV': isRelease ? '"production"' : '"development"'
    })

  ];

  if (isRelease) {
    config.plugins.push(
      new webpack.optimize.UglifyJsPlugin(uglifyConfig)
    );
  }

  if (isAnalyze) {
    config.plugins.push(
      new BundleAnalyzerPlugin()
    );
  }

  return config;
};
