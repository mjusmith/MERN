const mongoose = require('mongoose')

const AuthorsSchema = new mongoose.Schema({
    name: {
        type: String,
        minLength: [3, "Name must be at least 3 characters."]
    },
}, {timestamps: true})

const Authors = mongoose.model("Authors", AuthorsSchema)

module.exports = Authors;