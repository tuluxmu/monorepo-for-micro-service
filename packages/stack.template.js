import root from './AWS/stack.template';
import auth from './core/auth/AWS/stack.template';
import meeting from './core/meeting/AWS/stack.template';
import meetingServerless from './core/meeting/AWS/Serverless/stack.template';
import slack from './slack/AWS/stack.template';
import teams from './teams/AWS/stack.template';
export default {
  root,
  auth,
  meeting,
  meetingServerless,
  slack,
  teams
};