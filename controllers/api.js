module.exports = {
  ping (req, res) {
    try {
      return res.json('pong')
    }
    catch (err) {
      return res.status(500).json({
        name: 'InternalServerError',
        message: 'Unable to pong',
        code: 500,
        type: 'HTTP_SERVER_ERROR',
        data: null
      })
    }
  }
}
