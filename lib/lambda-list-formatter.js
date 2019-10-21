const YAML = require('yaml'),
  path = require('path'),
  fs = require('fs')

const lambdas = lambdaArray =>
  lambdaArray.map(lambda => {
    const filePath = path.join('../lambdas', lambda, 'template.yaml')
    const lambdaYamlString = fs.readFileSync(filePath).toString()

    const lambdaYaml = YAML.parse(lambdaYamlString)
    const resourceFunctions = Object.getOwnPropertyNames(
      lambdaYaml.Resources
    ).map(functionName => {
      const thisFunctionsProps = lambdaYaml.Resources[functionName].Properties

      return {
        codeUri: thisFunctionsProps.CodeUri.substring(
          0,
          thisFunctionsProps.CodeUri.lastIndexOf('/')
        ),
        name: functionName,
        events: Object.getOwnPropertyNames(thisFunctionsProps.Events).map(
          eventName => ({
            name: eventName,
            path: thisFunctionsProps.Events[eventName].Properties.Path,
            method: thisFunctionsProps.Events[eventName].Properties.Method
          })
        )
      }
    })

    return { path: lambda, resourceFunctions }
  })

module.exports = lambdas
