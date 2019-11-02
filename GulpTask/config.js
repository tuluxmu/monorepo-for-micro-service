const config = {
  stackTemplate: {
    root: 'AWS/stack/',
    auth: 'core/Auth/AWS/',
    meeting: 'core/Meeting/AWS/',
    slack: 'slack/AWS/',
    teams: 'teams/AWS/'
  },
  stack: {
    root: 'AWS/stack.js',
    auth: 'core/Auth/AWS/stack.js',
    meeting: 'core/Meeting/AWS/stack.js',
    slack: 'slack/AWS/stack.js',
    teams: 'teams/AWS/stack.js'
  }
};
export default config;