# monorepo-for-micro-service
1. Bundle Per Differenct Services or Project 
   1. In demo, there will be 4 entry points.  We want to those file bundled per correspondent directory.
   e.g.

| Entry Points  |Output   |
|---|---|
| ./core/Auth/index.js  |  ./dist/core/Auth/index.js|
| ./core/Meeting/index.js  | ./dist/core/Meeting/index.js  |
| ./slack/index.js  | ./dist/slack/index.js  |
| ./teams/index.js  | ./dist/teams/index.js  |

2.Design AWS Infra Structure
##AWS Resource Naming Rule: 
```
Resource Name = ${NameSpace}-${AWSService}[-${Service}]
NameSpace = ${brand}-${project}-${environement}
${Service} is optional
```
1. Lambda function:
   1. Function Name: rc-bot-test-lucy-lambda-core-auth
   

CI/CD
Process:
  1. Build
     1. build Lambda
     2. build Stack.json
     3. zip Lambda Folder as Lambda.zip
  2. Deploy
     1. create S3 bucket `rc-bot-test` to upload Build
     2. deploy environment stack (IAM Role)
     3. deploy core stack
     4. deploy teams/slack stack




