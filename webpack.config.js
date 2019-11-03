
module.exports = {
  entry: {
    'meeting': './packages/core/Meeting/index.js',
    'slack': './packages/slack/index.js',
  },
  output: {
    path: __dirname + '/dist/lambda/',
    filename: '[name].js'
  }
};
