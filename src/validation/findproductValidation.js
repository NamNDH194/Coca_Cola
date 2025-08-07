const Joi = require("joi");

const findProductInStockSchema = Joi.object({
  keyword: Joi.string().min(1).max(100).optional(), // không bắt buộc
}).unknown(true); // Cho phép các field khác nếu có

module.exports = { findProductInStockSchema };


