const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
        name: { type : String, unique: true, require: true },
        slug: String,
        status: {
            type: Number,  
            default: 1
        }
});
const productModel = mongoose.model('category', productSchema );
module.exports = productModel;


