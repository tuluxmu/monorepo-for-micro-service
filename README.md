# monorepo-for-micro-service

## Design AWS Infra Structure


**AWS Resource Naming Rule**

```
Resource Name = {NameSpace}-{AWSService}-[{service}]

NameSpace = {brand}-{project}-{environement}
```
**Notes:** ${service} is optional

**Examples**
```
1. Lambda function Resource:
   1. Function Name: rc-bot-test-lambda-auth
```

##source code directory 

```
   packages/
      Template/
         apigateway.js
         lambda.js
         s3bucket.js
         dynamodb.js
         stack.js
         policy.js
         role.js
      AWS/
         Database/
            stack.js
         Serverless/
            stack.js   
         deploy.sh
         stack.js
      core/
         auth/
            AWS/
               Database/
                  stack.js
               Serverless/
                  stack.js   
               deploy.sh
               stack.js
            index.js
            auth.js
         meeting/
            AWS/
               Database/
                  stack.js
               Serverless/
                  stack.js   
               deploy.sh
               stack.js
            index.js
            meeting.js
      teams/
        AWS/
            Database/
               stack.js
            Serverless/
               stack.js   
            deploy.sh
            stack.js
         index.js
         teams.js
      slack/
         AWS/
            Database/
               stack.js
            Serverless/
               stack.js   
            deploy.sh
            stack.js
         index.js
         slack.js


```

**Template:** for storing aws cloudformation resource template

**core:** contain auth and meeting service and correspont AWS reources and stack

**teams:** contain teams service and correspont AWS reources and stack

**slack:** contain slack service and correspont AWS reources and stack

##Dist Folder Path

```
-dist/
   lambda/
      auth.js
      meeting.js
      slack.js
      teams.js
   stack/
      meetingStack.js
      rootStack.js
   lambda.zip
```   

##CI/CD

Process:
  1. Set Up Environemt Varialble
     1. env.sh
  2. Build
     1. build Lambda
     2. build Stack.json
     3. zip Lambda Folder as Lambda.zip
   
Execution Code:
```
yarn build
```

  1. Deploy
     1. create S3 bucket `rc-bot-test` to upload Build
     2. deploy environment stack (IAM Role)
     3. deploy core stack
     4. deploy teams/slack stack

Execution Code:
```
yarn deploy
```




