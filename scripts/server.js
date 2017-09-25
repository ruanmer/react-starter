/* eslint no-console: "off" */
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');

const webpackConfig = require('../config/webpack/webpack.config')();

const port = 9000;

// live reload script
webpackConfig.entry.app.unshift(`webpack-dev-server/client?http://localhost:${port}`);

const compiler = webpack(webpackConfig);

const server = new WebpackDevServer(compiler, {
  historyApiFallback: true,
  stats: webpackConfig.stats
});

server.listen(port, 'localhost', (err) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log(`Project is running at http://localhost:${port}`);
});
