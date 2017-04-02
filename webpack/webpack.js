const path = require('path');

const plugins = require('./plugins');
const loaders = require('./loaders');

module.exports = () => {
  const isProd = process.env.NODE_ENV === 'production';

  let config = {
    entry: {
      app: './app/src/index.js'
    },

    output: {
      path: path.join(__dirname, '../public'),
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

    devtool: !isProd ? 'source-map' : false,

    devServer: {
      port: 9000,
      contentBase: path.join(__dirname, '../public'),
      historyApiFallback: true,
      stats: {
        children: false
      }
    }
  };

  config = loaders(config, isProd);
  config = plugins(config, isProd);

  return config;
};
