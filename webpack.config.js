module.exports = {
  entry: {
    'core/Auth/index': './core/Auth/index.js',
    'core/Meeting/index': './core/Meeting/index.js',
    'slack/index': './slack/index.js',
    'teams/index': './teams/index.js'
  },
  output: {
    path: __dirname + '/dist',
    filename: '[name].js'
  }
};

// core/Auth/index.js => dist/core/Auth/index.js
// core/Meeting/index.js => dist/Meeting/index.js
// slack/index.js => dist/slack/index.js
// teams/index.js => dist/teams/index.js