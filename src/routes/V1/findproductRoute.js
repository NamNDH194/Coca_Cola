const express = require("express");
const router = express.Router();
const { getInStockProducts } = require("../../controllers/findproductController");

router.get("/in-stock", getInStockProducts);

module.exports = router;
