const { model, Schema } = require('mongoose');

const userSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    createdAt: String
});

module.exports = model('User', userSchema);
