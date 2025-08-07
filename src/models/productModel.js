const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  stock_qty: Number,
  is_active: Boolean,
});

module.exports = mongoose.model("Product", productSchema);
