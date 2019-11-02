import { auth } from './auth';

exports.handler =  async function(event, context) {
  console.log(`
    This is Auth Entry Point.
  `);
  auth();
};