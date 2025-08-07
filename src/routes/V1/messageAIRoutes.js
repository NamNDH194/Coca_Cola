const express = require("express");
const messageAIController = require("../../controller/messageAIController");

const Route = express.Router();

Route.route("/").post(messageAIController.getMess);

const messageAIRoutes = Route;

module.exports = {
  messageAIRoutes,
};
