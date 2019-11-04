import environmentStack from './Environment/stack';
import meetingServerlessStack from './Core/Meeting/Serverless.stack';
import meetingDatabaseStack from './Core/Meeting/Database.stack';
import meetingStack from './Core/Meeting/stack';
import coreStack from './Core/stack';
export default {
  environmentStack,
  meetingServerlessStack,
  meetingDatabaseStack,
  meetingStack,
  coreStack,
};