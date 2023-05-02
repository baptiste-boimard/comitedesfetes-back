const validationModule = {
  validateCreateUser(schema) {
    return(req, _,next) => {
      next();
    };
  },
};

module.exports = validationModule;