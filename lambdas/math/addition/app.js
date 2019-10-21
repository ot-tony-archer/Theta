// const axios = require('axios')
// const url = 'http://checkip.amazonaws.com/';
let response

/**
 *
 * Event doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format
 * @param {Object} event - API Gateway Lambda Proxy Input Format
 *
 * Context doc: https://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-context.html
 * @param {Object} context
 *
 * Return doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html
 * @returns {Object} object - API Gateway Lambda Proxy Output Format
 *
 */
exports.lambdaHandler = async (event, context) => {
  try {
    // const ret = await axios(url);
    let pathParams
    let a = event.queryStringParameters.a || 0
    let b = event.queryStringParameters.b || 0
    let g = event.body.a || 0
    let h = event.body.b || 0
    let [x, y] = [0, 0]

    if (event.pathParameters && event.pathParameters['0'])
      pathParams = event.pathParameters['0']

    if (
      pathParams &&
      pathParams.includes('/') &&
      Array.isArray(pathParams.split('/'))
    )
      [x, y] = pathParams.split('/')

    // path overrides query string

    response = {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Adding Variables',
        querySum: parseInt(a, 10) + parseInt(b, 10),
        pathSum: parseInt(x, 10) + parseInt(y, 10),
        bodySum: parseInt(g, 10) + parseInt(h, 10),
        env: event.stageVariables.ENVIRONMENT_VARIABLE_TEST,
        pathVars: event.pathParameters[0]
        // location: ret.data.trim()
      })
    }
  } catch (err) {
    console.log(err)
    return err
  }

  return response
}
