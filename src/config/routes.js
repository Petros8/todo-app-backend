const express = require('express')

/*
    Exporting a function that requires a server 
    to map the application routes
*/
module.exports = (server) => {

    /*
        Creating a global router to make all 
        api calls begin with '/api'
    */
    const router = express.Router()
    server.use('/api', router)

    /*
        Importing Services and 
        registering the routes in express
    */
    const todoService = require('../api/todo/todo-service')
    todoService.register(router, '/todos')

}