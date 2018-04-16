const Joi = require('joi');

module.exports = () => ({
    id: Joi.number(),
    task: Joi.string().min(1),
    from: Joi.string(),
    to: Joi.string(),
    sheduleId: Joi.number()
});