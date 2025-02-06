const Joi = require("joi");

const productSchema = Joi.object({
  name: Joi.string().min(2).max(30).required(),
  price: Joi.number().greater(0).max(10_000).required(),
});

module.exports = productSchema;
