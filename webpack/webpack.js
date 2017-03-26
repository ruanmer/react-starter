const path = require('path');
const { merge } = require('lodash');

const devConfig = require('./dev.config');
const prodConfig = require('./prod.config');

const plugins = require('./plugins');
const loaders = require('./loaders');

module.exports = () => {
  const env = process.env.NODE_ENV;

  const config = {
    entry: {
      app: './app/src/app.js'
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

    module: loaders(env),
    plugins: plugins(env),
  };

  return merge(
    config,
    env === 'production' ? prodConfig : devConfig
  );
};
