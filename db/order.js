const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
        nameCustomer: String,
        phone:String,
        idProduct: String,
        nameProduct: String,
        price:Number,
        amount:Number,
        total:String,
        date: String,
});
const OrderModel = mongoose.model('Order', OrderSchema );
module.exports = OrderModel;


