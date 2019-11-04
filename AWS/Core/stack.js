import stack from '../Template/stack';
import config from '../Config';
export default {
  Resources: {
    MeetingStack: {
      ...stack,
      Properties: {
        TemplateURL: `https://${config.bucket}.s3.amazonaws.com/stack/meetingStack.json`
      }
    }
  }
}