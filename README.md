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

1. S3 Bucket: 

```  
  rc-bot-test-s3bucket
    S3 Bucket Directory:
    rc-bot-test-s3bucket/
      core/
        Auth/
          AWS/
            serverless.json
            database.json
            stack.json
          inde.js
      teams/
        AWS/
          serverless.json
          database.json
          stack.json
        inde.js
      slack/
        AWS/
          serverless.json
          database.json
          stack.json
        inde.js
```

1. Lambda function:
   1. Function Name: rc-bot-test-lucy-lambda-core-auth
   

CI/CD
Build
  Build JS
  Build Stack.teamplate.json
  Build Stack.json
Deploy
  Deploy JS
  Deploy Stack.teamplate.json
  Deloy Stack

  S3
  rc-bot-test-s3bucket/
    JS/
    Template/


Process:
  1. Create S3 bucket `rc-bot-test-s3Bucket`




