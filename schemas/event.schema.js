const Joi = require('joi');

module.exports = () => ({
    id: Joi.number(),
    name: Joi.string().min(1),
    comment: Joi.string().min(1),
    date: Joi.number(),
    repeat: Joi.string().valid('Daily','Monthly','Yearly','Unrepeatable'),
    userId: Joi.number()
});
