module.exports = {
  getRemainingTimeInMillis: () => 9999,
  functionName: 'Function Name', // – The name of the Lambda function.
  functionVersion: '0.1.0', // – The version of the function.
  invokedFunctionArn: 'xxx::zzz', // – The Amazon Resource Name (ARN) that's used to invoke the function. Indicates if the invoker specified a version number or alias.
  memoryLimitInMB: 128, // – The amount of memory that's allocated for the function.
  awsRequestId: 'fsadfdsafsad', // – The identifier of the invocation request.
  logGroupName: 'ddff', // – The log group for the function.
  logStreamName: 'xxx::zzz', // – The log stream for the function instance.
  identity: '22222', // – (mobile apps) Information about the Amazon Cognito identity that authorized the request.
  cognitoIdentityId: 'cg', // – The authenticated Amazon Cognito identity.
  cognitoIdentityPoolId: '123::ccc', // – The Amazon Cognito identity pool that authorized the invocation.
  clientContext: {
    // – (mobile apps) Client context that's provided to Lambda by the client application.
    client: {
      installation_id: 123,
      app_title: 'fdasfsa',
      app_version_name: '',
      app_version_code: '',
      app_package_name: ''
    },
    env: {
      platform_version: '',
      platform: '',
      make: '',
      model: '',
      locale: ''
    }
  },
  Custom: '', //– Custom values that are set by the mobile application.
  callbackWaitsForEmptyEventLoop: true // – Set to false to send the response right away when the callback executes, instead of waiting for the Node.js event loop to be empty. If this is false, any outstanding events continue to run during the next invocation.
}
