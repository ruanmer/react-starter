const path = require('path');

const plugins = require('./plugins');
const loaders = require('./loaders');

const { isDev } = require('../../scripts/utils');

module.exports = () => {
  let config = {
    entry: {
      app: ['./src/index.js']
    },

    output: {
      path: path.join(__dirname, '../../dist'),
      filename: '[name].[hash].js',
      chunkFilename: '[name].[hash].js'
    },

    resolve: {
      modules: [
        'src',
        'node_modules'
      ],
      extensions: ['.js', '.jsx']
    },

    stats: {
      colors: true,
      children: false,
      modules: false
    },

    devtool: isDev ? 'source-map' : false
  };

  config = loaders(config);
  config = plugins(config);

  return config;
};
