const Order = require('../models/order');

exports.createOrder = async (userID, orderDate,items, totalAmount, promotionID, shippingID) => {
    const session = await Order.startSession();
    session.startTransaction();
    try {
        const newOrder = new Order({
            user_id: userID,
            order_date: orderDate,
            total_amount: totalAmount,
            promotion_id: promotionID,
            shipping_id: shippingID
        });
        await newOrder.save({session});

        let totalAmount = 0;

        const orderItems = await Promise.all(items.map(async (item) => {
            const itemTotal = item.price * item.quantity;
            totalAmount += itemTotal;
            
            const orderItem = new OrderItem({
                order_id: newOrder._id,
                product_id: item.product_id,
                quantity: item.quantity,
                price: item.price
            });
            await orderItem.save({session});
            return orderItem;
        }));

        newOrder.total_amount = totalAmount;
        await newOrder.save({session});

        await session.commitTransaction();
        session.endSession();
        return { newOrder, orderItems };
    } catch (error) {
        throw new Error('Lỗi tạo đơn hàng: ' + error.message);
    }
}