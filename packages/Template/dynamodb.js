import tags from '../Config/tags';
export default {
  Type: 'AWS::DynamoDB::Table',
  Properties: {
      Tags: [...tags]
    }
};
