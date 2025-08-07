<<<<<<< HEAD

const express = require("express");
const { promotionRoutes } = require("./promotionRoutes");
const { shipInforRoutes } = require("./shipInforRoutes");
const { messageAIRoutes } = require("./messageAIRoutes");
const Route = express.Router();

const API_V1 = Route;
Route.use("/promotion", promotionRoutes);
Route.use("/shipInfor", shipInforRoutes);
Route.use("/messagesAI", messageAIRoutes);

module.exports = API_V1;

const express = require('express');
const router = express.Router();

const orderRoutes = require('./OrderRouter');

router.use('/orders', orderRoutes);

module.exports = router;

=======
const express = require("express");
const router = express.Router();

const productRoutes = require("./productRoute");
const findProductRoute = require("./findproductRoute");


router.use("/api/v1", productRoutes);
router.use("/products", findProductRoute);


module.exports = router;
>>>>>>> c4e0ede (done api lay danh sach hang ton)
