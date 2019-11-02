export default {
  Type: 'AWS::Lambda::Function',
  Properties: {
      Code: {
        S3Bucket: 'rc-bot-test-lucy-s3bucket'
      },
      Environment: {
        a: 1,
        b: 2
      },
      FunctionName: 'rcbot-lucy-test-lambda-function',
      Handler: 'index.handler',
      Role: 'arn:aws:iam::524621635179:role/service-role/rc-bot-integration-lucy-test-role-jalwq5jy',
      Runtime: 'nodejs10.x'
    }
}