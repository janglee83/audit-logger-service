const express = require('express');
const router = express.Router();

const initRouter = (router) => {
  router.post('/login');
  router.post('/register');

  return router;
};

module.exports = initRouter(router);
