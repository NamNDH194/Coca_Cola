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
