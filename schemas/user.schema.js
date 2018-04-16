const Joi = require('joi');

module.exports = () => ({
    id: Joi.number(),
    login: Joi.string().min(1),
    password: Joi.string().min(1)
});
