import stack from '../../../Template/stack';
export default {
  Resources: {
    serverlessStack: {
      ...stack,
      Properties: {
        TemplateURL: 'https://rc-bot-test-lucy.s3.amazonaws.com/stack/meetingServerlessStack.json'
      }
    },
    databaseStack: {
      ...stack,
      Properties: {
        TemplateURL: 'https://rc-bot-test-lucy.s3.amazonaws.com/stack/meetingDatabaseStack.json'
      }
    }
  }
}