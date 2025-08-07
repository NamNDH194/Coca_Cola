const shipInforModal = require("../modals/shipInforModal");

const getTransport = async (orderId) => {
  try {
    const transportData = await shipInforModal.getTransport(orderId);
    return transportData;
  } catch (error) {
    throw new Error(error);
  }
};

const shipInforServices = {
  getTransport,
};

module.exports = shipInforServices;
