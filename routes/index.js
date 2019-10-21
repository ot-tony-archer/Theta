const express = require('express')
const router = express.Router()

const getLambdaList = require('../lib/get-lambda-list')
const lambdaListFormatter = require('../lib/lambda-list-formatter')
const lambdaRouteHandler = require('../lib/lambdaRouteHandler')

/* GET home page. */
router.get('/', (req, res) => {
  const lambdaArray = getLambdaList()
  const lambdas = lambdaListFormatter(lambdaArray)

  res.render('index', { title: 'Express', lambdas })
})

router.all('/:lambdaRootPath/:codeUri/:eventPath', lambdaRouteHandler)
router.all('/:lambdaRootPath/:codeUri/:eventPath/*', lambdaRouteHandler)

module.exports = router
