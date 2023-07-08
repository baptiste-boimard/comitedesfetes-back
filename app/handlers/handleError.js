const debug = require('debug')('HANDLEERROR');

/** Create an object with a customize
 * error send it to the front api
 * @type {Object}
 * @namespace handleError
 * @export handleError
 * @param {Object} error
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
const handleError = async (error, req, res, next) => {
  debug(error.message);  
  res.status(error.status || 500);
  res.send({
    error: {
      message: error.message,
      status: error.status,
    },
  });
};

module.exports = handleError;