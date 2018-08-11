const mongoose = require('mongoose');

//
// Schema
//
const User = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        lowercase: true,
        trim: true
    },
    middleName: {
        type: String,
        required: false,
        lowercase: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        lowercase: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
    }
});
module.exports = mongoose.model('users', User);