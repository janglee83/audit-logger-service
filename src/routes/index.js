const express = require('express');
const router = express.Router();
const userRouter = require('./users');
const eventRouter = require('./event');
const { asyncMiddleware } = require('../middlewares');

const initRouter = (router) => {
  router.use('/user', userRouter);
  router.use('/event', eventRouter);
  router.use(asyncMiddleware);
  return router;
};

module.exports = initRouter(router);
