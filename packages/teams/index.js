import teams from './teams';

exports.handler =  async function(event, context) {
  console.log(`
    This is Teams Entry Point.
  `);
  teams();
};