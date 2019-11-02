import slack from './slack';

exports.handler =  async function(event, context) {
  console.log(`
    This is Slack Entry Point.
  `);
  slack();
};