let response

exports.lambdaHandler = async (event, context) => {
  try {
    // const ret = await axios(url);
    const { body } = event

    response = {
      statusCode: 200,
      body: JSON.stringify({
        message: 'this is a different hello world'
        // location: ret.data.trim()
      })
    }
  } catch (err) {
    console.log(err)
    return err
  }

  return response
}
