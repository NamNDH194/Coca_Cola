const express = require("express");
const shipInforValidation = require("../../validations/shipInforValidation");
const shipInforController = require("../../controller/shipInforController");
const Route = express.Router();

Route.route("/:orderId").get(
  shipInforValidation.getTransport,
  shipInforController.getTransport
);

const shipInforRoutes = Route;

module.exports = {
  shipInforRoutes,
};
