#!/usr/bin/env bash

source CICD/env.sh

yarn cleanBuild 
yarn buildJS 
yarn buildAWSStack

cd dist/
zip lambda.zip lambda -r -q
cd ..
