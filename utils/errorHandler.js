const log4js = require('log4js');

const logger = log4js.getLogger();

const { ERROR } = require('../constants/logs.constants');

const errorHandler = (
  res,
  errorMessage = ERROR.DEFAULT,
  payload = null,
  status = 400,
) => {
  logger.error(errorMessage);
  return res.json({
    success: false,
    payload,
    status,
    message: errorMessage,
  });
};
module.exports = errorHandler;
