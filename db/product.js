const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
        name: String,
        slug: String,
        description: String,
        price: Number,
        /**
         * 1: active, 0 block
         */
        status: {
                type: Number,
                default: 1
        },
        image: String,
        category: {
                type: mongoose.Types.ObjectId,
                ref: 'category'
        }
});
const productModel = mongoose.model('product', productSchema );
module.exports = productModel;


