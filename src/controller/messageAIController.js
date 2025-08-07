const messageAIServices = require("../services/messageAIServices");

const getMess = async (req, res, next) => {
  try {
    const mess = await messageAIServices.getMess(req.body);
    return mess;
  } catch (error) {
    next(error);
  }
};

const messageAIController = {
  getMess,
};

module.exports = messageAIController;
