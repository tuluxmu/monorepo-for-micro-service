
module.exports = {
  entry: {
    'auth': './packages/core/Auth/index.js',
    'meeting': './packages/core/Meeting/index.js',
    'slack': './packages/slack/index.js',
    'teams': './packages/teams/index.js'
  },
  output: {
    path: __dirname + '/dist/lambda/',
    filename: '[name].js'
  }
};
