import rootStack from './AWS/stack';
import meetingServerlessStack from './core/meeting/AWS/Serverless/stack';
import meetingDatabaseStack from './core/meeting/AWS/Database/stack';
import meetingStack from './core/meeting/AWS/stack';

export default {
  rootStack,
  meetingServerlessStack,
  meetingDatabaseStack,
  meetingStack,
};