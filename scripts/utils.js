module.exports = {
  isDev: !process.argv.includes('--release'),
  isRelease: process.argv.includes('--release'),
  isAnalyze: process.argv.includes('--analyze')
};
