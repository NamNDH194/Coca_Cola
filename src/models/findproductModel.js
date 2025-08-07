const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  stock_qty: { type: Number, required: true },
  is_active: { type: Boolean, default: true }
});

module.exports = mongoose.model("Product", productSchema);

