const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
    title: { type: String, required: true, minlength: 2, unique: true },
    players: [{
        player: { type: mongoose.Schema.Types.ObjectId, ref: 'Player' },
        status: {
            type: String,
            enum: ['playing', 'not playing', 'undecided'],
            default: 'undecided'
        }
    }]
}, { timestamps: true })

module.exports = mongoose.model('Game', gameSchema);