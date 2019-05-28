const express = require('express')
    , routes = require('./routes')
    , app = express()

app.use([ routes ])

module.exports = app
