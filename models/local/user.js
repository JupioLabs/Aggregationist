var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    registerDate: {
        type: Date,
        required: true
    },
    approved: {
        type: Boolean,
        default: false
    },
    approvedDate: Date,
    userType: {
        type: String,
        enum: ['user', 'manager', 'admin'],
        default: 'user'
    },
    password: String
});

module.exports = mongoose.model('User', UserSchema);