const Joi = require('joi');

module.exports = () => ({
    id: Joi.number(),
    name: Joi.string().min(1),
    type: Joi.string().valid('Day','Meal','Training'),
    userId: Joi.number(),
    isActive: Joi.boolean()
});
