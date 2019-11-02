import s3Bucket from './Template/s3bucket';
export default {
  Resources: {
    'rc-bot-test-lucy': {
      ...s3Bucket
    }
  }
};