#!/usr/bin/env bash
source CICD/env.sh

module=rootStack
stackName=${nameSpace}-${module}
templateUrl=https://${bucket}.s3.amazonaws.com/stack/${module}.json

aws cloudformation create-stack --stack-name ${stackName} \
  --template-url ${templateUrl} \
   --capabilities CAPABILITY_IAM \
   --profile ${profile}

# aws cloudformation update-stack --stack-name rc-bot-test-lucy-meeting-serverless \
#   --template-url https://rc-bot-test-lucy.s3.amazonaws.com/stack/meetingStack.json \
#   --profile ${profile}