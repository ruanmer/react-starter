const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const browsers = ['last 2 versions'];

module.exports = () => {
  const ifDev = plugin => process.env.NODE_ENV === 'development' ? plugin : undefined;
  const ifBuild = plugin => process.env.NODE_ENV === 'production' ? plugin : undefined;
  const removeEmpty = array => array.filter(p => !!p);

  return {
    entry: {
      app: './app/src/app.js'
    },

    output: {
      path: path.join(__dirname, 'public'),
      filename: '[name].[hash].js'
    },

    resolve: {
      modules: [
        'app',
        'app/src',
        'node_modules'
      ],
      extensions: ['.js', '.jsx']
    },

    stats: {
      children: false
    },

    devtool: ifDev('source-map'),

    devServer: {
      port: 9000,
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true,
      stats: {
        children: false
      }
    },

    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
          query: {
            presets: [
              ['env', {
                targets: {
                  browsers,
                  uglify: true
                },
                modules: false,
                useBuiltIns: true
              }],
              'react'
            ]
          }
        }
      ]
    },

    plugins: removeEmpty([
      new HtmlWebpackPlugin({
        template: './app/index.html'
      }),

      ifBuild(new webpack.optimize.UglifyJsPlugin({
        compress: {
          comparisons: true,
          conditionals: true,
          warnings: false,
          dead_code: true,
          unused: true,
          evaluate: true,
          if_return: true,
          join_vars: true
        },
        output: {
          comments: false
        }
      }))
    ])
  };
};
