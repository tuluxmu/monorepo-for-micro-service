import dynamodb from '../../Template/dynamodb';
export default {
  Resources: {
    'database-meeting': {
      ...dynamodb,
      Properties: {
        TableName: 'rc-bot-test-lucy-meeting',
        KeySchema: [{
          AttributeName: 'meetingId',
          KeyType: 'HASH'
        }]
      }
    }
  }
};