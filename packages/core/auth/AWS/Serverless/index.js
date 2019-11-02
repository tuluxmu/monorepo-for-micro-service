export default {
  Type: 'AWS::Lambda::Function',
  Properties: {
      Code: {
        S3Bucket: 'rc-bot-test-lucy',
        S3Key: 'lambda.zip',
      },
      // Environment: {
      //   a: 1,
      //   b: 2
      // },
      FunctionName: 'rc-bot-test-lucy-meeting',
      Handler: 'lambda/meeting.handler',
      Role: 'arn:aws:iam::524621635179:role/service-role/rc-bot-integration-lucy-test-role-jalwq5jy',
      Runtime: 'nodejs10.x'
    }
}