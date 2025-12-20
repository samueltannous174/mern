const mongoose = require('mongoose');


const playerSchema = new mongoose.Schema({
    name: { type : String, required: true,  minlength: [2, "Name must be at least 2 characters long"] },
    position: { type: String, required: true }, 
    status: { type: String, enum: ['playing', 'not playing', 'undecided'], default: 'undecided' },
}, { timestamps: true })    
module.exports = mongoose.model('Player', playerSchema);