const mongoose = require('mongoose');
const role = require('../../middlewares/_helpers/role')
const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId, 
    phoneNumber: {
        type: String,
        required: true,
        unique: true
    },
    firstName: {
        type: String,
        required: false
    },
    lastName: {
        type: String,
        required: false
    },
    emailAddress: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: false
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true,
        enum: [role]
    },
},{
    timestamps: true
});

module.exports = mongoose.model('User', userSchema);
