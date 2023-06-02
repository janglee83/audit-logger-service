const { validationResult } = require('express-validator');
const httpCode = require('../utils/http-code')
const convertResponse = require('../utils/response-helper')

const validationMiddleware = (validations) => {
  return async (req, res, next) => {
    await Promise.all(validations.map((validation) => validation.run(req)));

    const errors = validationResult(req);
    if (errors.isEmpty()) {
      return next();
    }

    const payload = { errors: errors.array() }
    convertResponse(httpCode.UNPROCESSABLE_ENTITY, payload, res)
  };
};

module.exports = validationMiddleware;
