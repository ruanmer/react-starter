module.exports = (config, isProd) => {
  config.module = {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: [
            ['env', {
              targets: {
                browsers: ['last 2 versions'],
                uglify: true
              },
              modules: false,
              useBuiltIns: true
            }],
            'react'
          ],
          plugins: [
            'transform-export-extensions'
          ]
        }
      }
    ]
  };

  return config;
};
