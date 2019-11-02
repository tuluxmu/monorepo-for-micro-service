import policy from '../Template/policy';

export default {
  Resources: {
    LambdaPolicy: {
      ...policy,
      Properties: {
        PolicyDocument: {
          Statement: [
            {
              Action: ['lambda:*'],
              Effect: 'Allow',
              Resource: 'arn:aws:iam::${AWS::AccountId}:role/rc-bot-test*'
            }
          ]
        },
        PolicyName: 'LambdaPolicy',
        Roles: ['rc-bot-test-lambda-role']
      }
    },
    LambdaRole: {
      
    }
  }
};