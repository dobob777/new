const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    comment: {
        type: String,
        required: false
    }
})
module.exports = mongoose.model('users', userSchema)