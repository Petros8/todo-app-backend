const port = 3000

const bodyParser = require('body-parser')
const express = require('express')
const server = express()
const allowCors = require('./cors')

/*
    Defining the middlewares that are responsible for
    using the 'body-parser' to transform the request data
    into easy-to-manage data
*/
server.use(bodyParser.urlencoded({extended: true}))
server.use(bodyParser.json())
server.use(allowCors)

server.listen(port, function() {
    console.log(`BACKEND running at port: ${port}`)
})

module.exports = server