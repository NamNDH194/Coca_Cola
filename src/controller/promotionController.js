const promotionServices = require("../services/promotionServices");
const { StatusCodes } = require("http-status-codes");

const getPromotion = async (req, res, next) => {
  try {
    const promotions = await promotionServices.getPromotion();
    res.status(StatusCodes.OK).json(promotions);
  } catch (error) {
    next(error);
  }
};

const promotionController = {
  getPromotion,
};

module.exports = promotionController;
