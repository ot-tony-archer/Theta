const fs = require('fs'),
  path = require('path')

/**
 * Gets a list of directories containing lambda projects
 * @returns {string[]}
 */
const getLambdaList = () => fs.readdirSync(path.resolve('../lambdas'))

module.exports = getLambdaList
