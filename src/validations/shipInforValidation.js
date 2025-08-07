const Joi = require("joi");
const {
  OBJECT_ID_RULE,
  OBJECT_ID_RULE_MESSAGE,
} = require("../ultils/validators");

const getTransport = async (req, res, next) => {
  try {
    const condition = Joi.object({
      orderId: Joi.string()
        .required()
        .pattern(OBJECT_ID_RULE)
        .message(OBJECT_ID_RULE_MESSAGE),
    });

    await condition.validateAsync({ orderId: req.params.orderId });

    next();
  } catch (error) {
    next(error);
  }
};

const shipInforValidation = {
  getTransport,
};

module.exports = shipInforValidation;
