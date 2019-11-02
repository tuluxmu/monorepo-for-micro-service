#!/usr/bin/env bash

source CICD/env.sh

bucket=${nameSpace}

aws s3 mb s3://${bucket} --profile ${profile}
if [ $? != 0 ]; then exit 1; fi 

cd dist/
zip lambda.zip lambda -r -q
cd ..

aws s3 cp ${buildPath} s3://${bucket} \
    --profile ${profile} \
    --recursive \
    --acl public-read
if [ $? != 0 ]; then exit 1; fi

aws lambda update-function-code \
    --profile ${profile} \
    --function-name=rc-bot-test-lucy-meeting \
    --s3-bucket=rc-bot-test-lucy \
    --s3-key=lambda.zip
if [ $? != 0 ]; then exit 1; fi

# aws cloudformation create-stack --stack-name rc-bot-test-lucy-meeting-serverless \
#   --template-url https://rc-bot-test-lucy.s3.amazonaws.com/stack/meetingStack.json \
#   --profile ${profile}

aws cloudformation update-stack --stack-name rc-bot-test-lucy-meeting-serverless \
  --template-url https://rc-bot-test-lucy.s3.amazonaws.com/stack/meetingStack.json \
  --profile ${profile}


