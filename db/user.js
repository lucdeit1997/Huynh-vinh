const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    userName: String,
    userPassword: String,
    role: Number
});
const UserModel = mongoose.model('User', UserSchema );
module.exports = UserModel;


