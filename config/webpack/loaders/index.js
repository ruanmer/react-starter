module.exports = (config) => {
  const module = {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  };

  return Object.assign({}, config, { module });
};
