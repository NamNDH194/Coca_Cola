const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    order_id: {type: mongoose.Schema.Types.ObjectId, unique: true},
    user_id: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
    order_date: {type: Date, default: Date.now},
    status: {type: String, enum: ['pending', 'completed', 'cancelled'], default: 'pending'},
    total_amount: {type: Number, required: true},
    promotion_id: {type: mongoose.Schema.Types.ObjectId, ref: 'Promotion', default: null},
    shipping_id: {type: mongoose.Schema.Types.ObjectId, ref: 'Shipping', default: null},
});

const orderItemSchema = new mongoose.Schema({
    order_item_id: {type: mongoose.Schema.Types.ObjectId, unique: true},
    order_id: {type: mongoose.Schema.Types.ObjectId, ref: 'Order', required: true},
    product_id: {type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true},
    quantity: {type: Number, required: true},
    price: {type: Number, required: true},
});

module.exports = mongoose.model('Order', orderSchema);