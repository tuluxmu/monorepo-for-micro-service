#!/usr/bin/env bash

yarn okta

source CICD/env.sh
# aws s3 mb s3://${bucket} \
#     --profile ${profile}
# if [ $? != 0 ]; then exit 1; fi 

# aws s3 cp ${buildPath} s3://${bucket} \
#     --recursive \
#     --acl public-read \
#     --profile ${profile}
# if [ $? != 0 ]; then exit 1; fi


./packages/core/meeting/AWS/deploy.sh





