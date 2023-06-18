const mongoose = require('mongoose')

const SongsSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    artist: {
        type: String,
    },
    rating: {
        type: Number,
    },
    top100: {
        type: Boolean,
    },
    image: {
        type: String,
    },
}, {timestamps: true})

const Songs = mongoose.model("Songs", SongsSchema)

module.exports = Songs;