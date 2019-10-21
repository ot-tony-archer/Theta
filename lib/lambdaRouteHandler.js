const path = require('path'),
  fs = require('fs'),
  dotenv = require('dotenv')
const stageVariables = dotenv.parse(fs.readFileSync('../.env'))

module.exports = async (req, res) => {
  const { lambdaRootPath, codeUri, eventPath } = req.params
  const lambdaPath = path.join('../lambdas', lambdaRootPath, codeUri, 'app')
  const lambdaHandler = require(lambdaPath).lambdaHandler

  console.info(req.params)

  const event = {
    headers: req.headers,
    httpMethod: req.method,
    pathParameters: req.params,
    queryStringParameters: req.query,
    body: req.body,
    stageVariables
  }
  let responseBody = await lambdaHandler(event, 'context')

  // This next bit undoes the stringify for readability of the response
  responseBody.body = JSON.parse(responseBody.body)
  res.status(200).json(responseBody)

  if (!eventPath) {
    res.render('error', {
      lambdas: [{ lambda: lambdaRootPath, eventPath: 'UNKNOWN!' }]
    })
  }
}
