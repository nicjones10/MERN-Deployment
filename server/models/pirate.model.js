const mongoose = require('mongoose');

const PirateSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Pirates need a name"]
    }, 
    image: {
        type: String,
        required: [true, "We need to know what they look like"]
    },
    chests: {
        type: Number,
        required: [true, "Pirates have to have treasure"]
    },
    phrase: {
        type: String,
        required: [true, "Pirates need a catch phrase"]
    },
    position: {
        type: String,
        required: [true, "Pirates need a job on the crew"]
    },
    pegLeg: {
        type: Boolean,
        required: [true, "Do they have a peg leg?"]
    },
    eyePatch: {
        type: Boolean,
        required: [true, "Do they have an eye patch?"]
    },
    hookHand:{
        type: Boolean,
        required: [true, "Do they have a hook hand?"]

    }
}, {timestamps: true})

module.exports = mongoose.model("Pirate", PirateSchema);