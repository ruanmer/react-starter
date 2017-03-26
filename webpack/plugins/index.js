const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const uglifyConfig = require('./uglify.config');

module.exports = env => {
  const plugins = [];

  plugins.push(
    new HtmlWebpackPlugin({
      template: './app/index.html'
    })
  );

  if (env === 'production') {
    plugins.push(
      new webpack.optimize.UglifyJsPlugin(uglifyConfig)
    );
  }

  return plugins;
};
