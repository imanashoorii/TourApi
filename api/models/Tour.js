const mongoose = require('mongoose');
const tourSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId, 
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    price: {
        type: Number,
        required: true
    },
    tourCapacity: {
        type: Number,
        min: 0,
        max: 200,
        default: 0
    },
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
},{
    timestamps: true
});

module.exports = mongoose.model('Tour', tourSchema);