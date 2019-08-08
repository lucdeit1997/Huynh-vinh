const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
    product: {
        type: mongoose.Types.ObjectId,
        ref: 'product'
    },
    quantity: Number
});
const OrderModel = mongoose.model('order-line', OrderSchema );
module.exports = OrderModel;


