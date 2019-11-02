import meeting from './meeting';

exports.handler =  async function(event, context) {
  console.log(`
    This is Meeting Entry Point.
  `);
  meeting();
};