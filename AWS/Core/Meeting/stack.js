import stack from '../../Template/stack';
import config from '../../Config';
export default {
  Resources: {
    databaseStack: {
      ...stack,
      Properties: {
        TemplateURL: `https://${config.bucket}.s3.amazonaws.com/stack/meetingDatabaseStack.json`
      }
    },
    serverlessStack: {
      ...stack,
      Properties: {
        TemplateURL: `https://${config.bucket}.s3.amazonaws.com/stack/meetingServerlessStack.json`
      }
    }
  }
}