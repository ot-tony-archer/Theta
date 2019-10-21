const fs = require('fs'),
  path = require('path')

const getLambdaList = () => {
  const dirList = fs.readdirSync(path.resolve('../lambdas'))

  return dirList
}

module.exports = getLambdaList
