const orderService = require('../services/OrderService');

exports.createOrder = async(req, res) => {
    try {
        const {userID, orderDate, items, totalAmount, promotionID, shippingID} = req.body;
        const newOrder = await orderService.createOrder(userID, orderDate, items, totalAmount, promotionID, shippingID);
        res.status(201).json({ message: 'Đơn hàng tạo thành công', data: newOrder });
    } catch (error) {
        res.status(500).json({ message: 'Lỗi khi tạo đơn hàng: ' + error.message });
    }
}