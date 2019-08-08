const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const adminSchema = new Schema({
    fullname: String,
    username: String,
    password: String,
    /**
     *  1: Active, 0 Block
     */
    status:{
        type: Number,
        default: 1
    },
    role: {
        type: mongoose.Types.ObjectId,
        ref: 'role'
    }
});
const adminModel = mongoose.model('admin', adminSchema );
module.exports = adminModel;


