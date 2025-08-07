const Order = require('../models/order');

exports.createOrder = async (userID, orderDate, totalAmount, promotionID, shippingID) => {
    try {
        const newOrder = new Order({
            user_id: userID,
            order_date: orderDate,
            total_amount: totalAmount,
            promotion_id: promotionID,
            shipping_id: shippingID
        });
        await newOrder.save();
        return newOrder;
    } catch (error) {
        throw new Error('Lỗi tạo đơn hàng: ' + error.message);
    }
}