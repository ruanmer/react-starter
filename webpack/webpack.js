const path = require('path');

const plugins = require('./plugins');
const loaders = require('./loaders');

const envUtils = {
  isProd: process.env.NODE_ENV === 'production',
  isAnalyzer: process.env.ANALYZER
};

module.exports = () => {
  const { isProd } = envUtils;

  let config = {
    entry: {
      app: './app/src/index.js'
    },

    output: {
      path: path.join(__dirname, '../public'),
      filename: '[name].[hash].js',
      chunkFilename: '[name].[hash].js'
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

  config = loaders(config, envUtils);
  config = plugins(config, envUtils);

  return config;
};
