const Joi = require('joi');

module.exports = () => ({
    id: Joi.number(),
    task: Joi.string().min(1),
    sets: Joi.number(),
    repeats: Joi.number(),
    sheduleId: Joi.number()
});
