{
  Type: "AWS::IAM::Role",
  Properties: {
      "AssumeRolePolicyDocument" : Json,
      "ManagedPolicyArns" : [ String, ... ],
      "MaxSessionDuration" : Integer,
      "Path" : String,
      "PermissionsBoundary" : String,
      "Policies" : [ Policy, ... ],
      "RoleName" : String
    }
}