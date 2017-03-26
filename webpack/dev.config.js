const path = require('path');

module.exports = {
  devtool: 'source-map',

  devServer: {
    port: 9000,
    contentBase: path.join(__dirname, '../public'),
    historyApiFallback: true,
    stats: {
      children: false
    }
  }
};
