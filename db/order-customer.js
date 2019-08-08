const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
        customerName: String,
        orderLine: [
                { 
                        type: mongoose.Types.ObjectId,
                        ref: 'order-line'
                }
        ]
});
const orderModel = mongoose.model('order', OrderSchema );
module.exports = orderModel;


