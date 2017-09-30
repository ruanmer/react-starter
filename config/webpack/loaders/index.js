const { isRelease } = require('../../../scripts/utils');

module.exports = (config) => {
  const module = {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              localIdentName: isRelease ? '[hash:base64:8]' : '[name]-[local]-[hash:base64:4]',
              modules: true,
              minimize: isRelease
            }
          }
        ]
      }
    ]
  };

  return Object.assign({}, config, { module });
};
