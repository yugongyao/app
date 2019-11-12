const mongoose = require('mongoose');

const Moment = mongoose.model('moment', new mongoose.Schema({
    user: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'user'
    },
    pics: {
        type: Array,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    comment: [
        
    ],
    time: {
        type: Date,
        default: Date.now()
    },
    likes: Number
}))