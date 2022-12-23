const { Router } = require('express');

const usersRouter = require('./users')

const apiRouter = new Router();

apiRouter.use('/user', usersRouter)

module.exports = apiRouter;