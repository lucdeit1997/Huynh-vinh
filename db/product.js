const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
        productName: String,
        price: Number,
        amount: Number,
        status:String,
        image: String,
        category: String
});
const productModel = mongoose.model('Product', productSchema );
module.exports = productModel;


