const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
    label: {
        type: String,
        trim: true,
        required: [true, 'Please add a label']
    },
    amount: {
        type: Number,
        required: [true, 'Please add a positive or negative amount']
    },
    created: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Transaction', TransactionSchema);
