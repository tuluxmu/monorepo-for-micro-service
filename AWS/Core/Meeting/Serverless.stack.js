import lambda from '../../Template/lambda';
import config from './Config';
import rootConfig from '../../Config/index';

export default {
  Resources: {
    'lambda-meeting': {
      ...lambda,
      Properties: {
        Code: {
          S3Bucket: '%%bucket%%',
          S3Key: 'lambda.zip',
        },
        Environment: {
          Variables: {
            ...config,
            enrironment: '%%environment%%'
          }
        },
        FunctionName: '%%nameSpace%%-meeting',
        Handler: 'lambda/meeting.handler',
        Role: 'arn:aws:iam::524621635179:role/%%nameSpace%%-role',
        Runtime: 'nodejs10.x'
      }
    }
  }
};
