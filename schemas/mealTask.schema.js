const Joi = require('joi');

module.exports = () => ({
    id: Joi.number(),
    task: Joi.string().min(1),
    time: Joi.string(),
    sheduleId: Joi.number()
});
