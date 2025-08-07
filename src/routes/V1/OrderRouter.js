const express = require('express');
const router = express.Router();
const orderController = require('../../controller/OrderController');
const { validateOrder } = require('../../validations/OrderValidation');


router.post('/',validateOrder, (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    orderController.createOrder(req, res, next);
});

module.exports = router;                