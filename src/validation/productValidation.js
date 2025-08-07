const Joi = require("joi");

exports.getActiveProductsSchema = Joi.object({
  min_stock: Joi.number().min(0).optional(),
});
