module.exports = env => ({
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
        ]
      }
    }
  ]
});
