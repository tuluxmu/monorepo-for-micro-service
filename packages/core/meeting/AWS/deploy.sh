#!/usr/bin/env bash
source CICD/env.sh

stackName=${nameSpace}-meeting

aws cloudformation deploy \
    --stack-name ${stackName}\
    --template-file dist/stack/meetingStack.json \
    --no-fail-on-empty-changeset \
    --force-upload \
    --capabilities CAPABILITY_IAM \
    --profile ${profile}






