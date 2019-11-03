import lambda from '../../../../Template/lambda';

export default {
  Resources: {
    'lambda-meeting': {
      ...lambda,
      Properties: {
        Code: {
          S3Bucket: 'rc-bot-test-lucy',
          S3Key: 'lambda.zip',
        },
        FunctionName: 'rc-bot-test-lucy-meeting',
        Handler: 'lambda/meeting.handler',
        Role: 'arn:aws:iam::524621635179:role/rc-bot-test-lucy-role',
        Runtime: 'nodejs10.x'
      }
    }
  }
};
