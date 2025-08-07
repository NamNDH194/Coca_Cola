const express = require("express");
const router = express.Router();

// Import tất cả các route cần thiết
const promotionRoutes = require("./promotionRoutes");
const shipInforRoutes = require("./shipInforRoutes");
const messageAIRoutes = require("./messageAIRoutes");
const orderRoutes = require("./OrderRouter");
const productRoutes = require("./productRoute");
const findProductRoute = require("./findproductRoute");

// Khai báo route
router.use("/promotion", promotionRoutes);
router.use("/shipInfor", shipInforRoutes);
router.use("/messagesAI", messageAIRoutes);
router.use("/orders", orderRoutes);
router.use("/api/v1", productRoutes);
router.use("/products", findProductRoute);

module.exports = router;
