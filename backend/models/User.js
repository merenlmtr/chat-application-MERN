const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Please enter your name!'],
        maxLength: [30, 'Username connot exceed 30 characters']
    },
    email: {
        type: String,
        required: [true, 'Please enter your email!'],
        unique: true
    },
    phone: {
        type: String,
        required: [true, 'Please enter your phone!'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Please enter your password'],
        minLength: [6, 'Password must be longer than 6 characters'],
        select: false
    },
    avatar: {
        type: String,
        default: ''
    }

}, { timestamps: true }
);

module.exports = mongoose.model('User', userSchema);