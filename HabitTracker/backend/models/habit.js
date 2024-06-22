const mongoose = require('mongoose');

const habitSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    name: {
        type: String,
        required: true
    },
    completedDates: {
        type: [Date],
        default: []
    }
});

module.exports = mongoose.model('Habit', habitSchema);
