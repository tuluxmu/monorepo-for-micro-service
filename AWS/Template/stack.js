import tags from '../Config/tags';
export default {
  Type: "AWS::CloudFormation::Stack",
  Properties: {
      Tags: [...tags],
    }
}