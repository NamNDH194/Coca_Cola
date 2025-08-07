const express = require("express");
const promotionController = require("../../controller/promotionController");
const Route = express.Router();

Route.route("/").get(promotionController.getPromotion);

const promotionRoutes = Route;

module.exports = {
  promotionRoutes,
};
