const { body } = require('express-validator');

exports.validateOrder = [
    body('userID').isUUID().withMessage('User ID là bắt buộc'),
    body('orderDate').isISO8601().withMessage('Order date là bắt buộc'),
    body('totalAmount').isNumeric().withMessage('Total amount là bắt buộc và phải là số'),
    body('items').isArray({ min: 1 }).withMessage('Phải có ít nhất 1 sản phẩm'),
    body('items.*.quantity').isInt({ min: 1 }).withMessage('Số lượng phải >= 1'),
    body('promotionID').isUUID().optional().withMessage('Invalid promotion ID'),
    body('shippingID').isUUID().withMessage('Invalid shipping ID')
]