const { GET_DB } = require("../config/mongodb");

const PROMOTION_COLLECTION_NAME = "promotions";

const getPromotion = async (req, res, next) => {
  try {
    const results = await GET_DB()
      .collection(PROMOTION_COLLECTION_NAME)
      .find({ is_active: true })
      .toArray();
    return results;
  } catch (error) {
    throw new Error(error);
  }
};

const promotionModal = {
  getPromotion,
};

module.exports = promotionModal;
