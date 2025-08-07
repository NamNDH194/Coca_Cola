const Product = require("../models/productModel");

exports.getActiveProducts = async (min_stock = 1) => {
  return await Product.find(
    { is_active: true, stock_qty: { $gte: min_stock } },
    { _id: 0 } // bỏ _id khỏi kết quả
  );
};
