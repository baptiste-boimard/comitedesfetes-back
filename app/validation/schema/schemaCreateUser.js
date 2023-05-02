const joi = require('joi');

const schemaCreateUser = joi.object({
  email: joi.string().email(new RegExp(`^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$`)),
  password: joi.string().pattern(new RegExp(`^([a-zA-Z0-9@*#!?]{8,15})$`)),
}).required().min(2);

module.exports = schemaCreateUser;