const snakecaseKeys = require('snakecase-keys');

const errorHandler = (err, req, res, next) => {
  let { message, code } = err;
  return res.status(code).json(
    snakecaseKeys(
      {
        code,
        message,
      },
      { deep: true },
    ),
  );
};

module.exports = errorHandler;
