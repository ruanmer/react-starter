const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const BabiliPlugin = require('babili-webpack-plugin');

const { isRelease, isAnalyze } = require('../../../scripts/utils');

module.exports = (config) => {
  const plugins = [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),

    new webpack.DefinePlugin({
      'process.env.NODE_ENV': isRelease ? '"production"' : '"development"'
    })

  ];

  if (isRelease) {
    plugins.push(
      new BabiliPlugin({
        removeConsole: true,
        removeDebugger: true
      })
    );
  }


  if (isAnalyze) {
    plugins.push(
      new BundleAnalyzerPlugin()
    );
  }

  return Object.assign({}, config, { plugins });
};
