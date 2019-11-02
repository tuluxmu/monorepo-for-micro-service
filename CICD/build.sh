#!/usr/bin/env bash

source CICD/env.sh

yarn cleanBuild 
yarn buildJS 
yarn buildLambda 
yarn buildAWSStackTemplate 
yarn buildAWSStack

cd dist/
zip lambda.zip lambda -r -q
cd ..
