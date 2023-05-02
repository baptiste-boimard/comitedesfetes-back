/**
 * @type {Object}
 * @export routerWrapper
 * @namespace routerWrapper
 * @param {Function} method 
 * @returns {Object} Return errors to the next middleware
 */
const routerWrapper = (method) => async (req, res, next) => {
    try {
        await method(req, res, next);
    } catch (err) {
        next(err);
    }
};

module.exports = routerWrapper;