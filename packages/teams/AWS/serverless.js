{
  Type: 'AWS::Lambda::Function',
  Properties: {
      Code: {
        S3Bucket: 'rc-bot-test-lucy-s3buckett'
      },
      Environment: {
        a: 1,
        b: 2
      },
      FunctionName: 'rc-bot-test-lucy-lambda-core-auth',
      Handler: 'core/Auth/index.handler',
      Role: 'arn:aws:iam::524621635179:role/service-role/rc-bot-integration-lucy-test-role-jalwq5jy',
      Runtime: 'nodejs10.x'
    }
}