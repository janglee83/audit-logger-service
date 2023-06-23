const express = require('express');
const router = express.Router();
const eventValidateRule = require('../validation/event-validation');
const { eventController } = require('../controllers');
const { validationMiddleware, asyncMiddleware, authorization } = require('../middlewares');

const initRouter = (router) => {
  router.post(
    '/',
    asyncMiddleware(authorization.checkHeader),
    validationMiddleware(eventValidateRule()),
    asyncMiddleware(eventController.update),
  );

  router.get(
    '/',
    asyncMiddleware(eventController.index),
  );

  return router;
};

module.exports = initRouter(router);
