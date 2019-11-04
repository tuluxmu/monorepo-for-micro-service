#!/usr/bin/env bash
source CICD/env.sh

stackName=${nameSpace}-core

aws cloudformation deploy \
    --stack-name ${stackName}\
    --template-file dist/stack/coreStack.json \
    --no-fail-on-empty-changeset \
    --force-upload \
    --capabilities CAPABILITY_IAM \
    --profile ${profile}






