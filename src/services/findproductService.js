const Product = require("../models/productModel");

const searchProductsByName = async (keyword) => {
  return await Product.find({
    name: { $regex: keyword, $options: "i" }
  });
};

module.exports = {
  searchProductsByName
};


