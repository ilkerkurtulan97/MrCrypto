const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: { type: String, unique: false, required: true },
    surname: { type: String, unique: false, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, unique: false, required: true },
    isAdmin : { type: Boolean, unique: false, required: true}
});

const User = mongoose.model('User', UserSchema);
module.exports = User;