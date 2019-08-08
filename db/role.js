const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const roleSchema = new Schema({
    name: String,
    /**
     * key = 1 : admin
     * key = 0 : employee
     */
    key: Number,
    status: { type: Number, default: 1 }
});
const roleModel = mongoose.model('role', roleSchema );
module.exports = roleModel;