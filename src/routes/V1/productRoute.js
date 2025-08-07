const express = require("express");
const router = express.Router();
const productController = require("../../controllers/productController");

router.get("/products/in-stock", productController.getProductsInStock);

module.exports = router;
