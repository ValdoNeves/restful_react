const express = require('express')

module.exports = function(server){
    //router API
    const router = express.Router();
    server.use('/api', router)

    //Todo Routes
    const todoService = require('../api/todo/todoService')
    todoService.register(router, '/todos')
}