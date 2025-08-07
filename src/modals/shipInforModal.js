const { ObjectId } = require("mongodb");
const { GET_DB } = require("../config/mongodb");

const SHIP_INFOR_COLLECTION_NAME = "shipping_info";

const getTransport = async (orderId) => {
  try {
    const result = await GET_DB()
      .collection(SHIP_INFOR_COLLECTION_NAME)
      .findOne({ order_id: new ObjectId(orderId) });
    return result;
  } catch (error) {
    throw new Error(error);
  }
};

const shipInforModal = {
  getTransport,
};

module.exports = shipInforModal;
