import tags from '../../Config/tags';

export default {
  Type : 'AWS::S3::Bucket',
  Properties : {
      BucketName : 'rc-bot-test-s3bucket-lucy',
      Tags : [...tags],
    }
}