const promotionModal = require("../modals/promotionModal");

const getPromotion = async () => {
  try {
    const data = await promotionModal.getPromotion();
    const promotions = [];
    data.forEach((item) => {
      const date = Date.now();
      const startDate = new Date(item.start_date.toString());
      const endDate = new Date(item.end_date.toString());
      if (date >= startDate && date <= endDate) {
        promotions.push(item);
      }
    });
    return promotions;
  } catch (error) {
    throw new Error(error);
  }
};

const promotionServices = {
  getPromotion,
};

module.exports = promotionServices;
