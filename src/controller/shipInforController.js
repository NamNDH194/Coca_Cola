const { StatusCodes } = require("http-status-codes");
const shipInforServices = require("../services/shipInforServices");
const getTransport = async (req, res, next) => {
  try {
    const transportInfor = await shipInforServices.getTransport(
      req.params.orderId
    );
    res.status(StatusCodes.OK).json(transportInfor);
  } catch (error) {
    next(error);
  }
};

const shipInforController = {
  getTransport,
};

module.exports = shipInforController;
