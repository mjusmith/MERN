const mongoose = require('mongoose')

const JokesSchema = new mongoose.Schema({
    setup: {
        type: String,
        required: [true, "Setup is required"]
    },
    punchline: {
        type: String,
        required: [true, "Punchline is required"]
    },
}, {timestamps: true})

const Jokes = mongoose.model("Jokes", JokesSchema)

module.exports = Jokes;