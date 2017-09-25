/* eslint no-console: "off" */
const rimraf = require('rimraf');
const webpack = require('webpack');

const webpackConfig = require('../config/webpack/webpack.config')();

const cleanDist = () => new Promise((resolve, reject) => {
  rimraf(`dist/*`, {}, (err, result) => {
    if (err) {
      return reject(err);
    }

    return resolve(result);
  });
});

const bundle = () => new Promise((resolve, reject) => {
  webpack(webpackConfig).run((err, stats) => {
    if (err) {
      console.log(err);
      return reject(err);
    }

    console.log(stats.toString(webpackConfig.stats));
    return resolve();
  });
});


const build = async () => {
  await cleanDist();
  await bundle();
};

build();
