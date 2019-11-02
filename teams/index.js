import teams from './teams';
import auth from '../core/Auth';
import meeting from '../core/Meeting';

exports.handler =  async function(event, context) {
  console.log(`
    This is Teams Entry Point.
  `);
  teams();
};