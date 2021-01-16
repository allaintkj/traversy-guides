const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        minLength: [3, 'Username must be at least 3 characters.'],
        maxLength: [100, 'Username maximum 100 characters.'],
        required: [true, 'Username is required.']
    },
    password: {
        type: String,
        minLength: [8, 'Password must be at least 8 characters.'],
        required: [true, 'Password is required.']
    },
    created: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('User', UserSchema);
