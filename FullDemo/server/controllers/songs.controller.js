const Songs = require('../models/songs.model')

module.exports.apiTest = (req, res) => {
    res.json({results: "Hello World!"})
}

module.exports.createSong = (req, res) => {
    Songs.create(req.body)
    .then((newSong) => {res.json({results: newSong})})
    .catch((err) => {res.json({err: err})})
}

module.exports.allSongs = (req, res) => {
    Songs.find()
    .then((allSongs) => {res.json({results: allSongs})})
    .catch((err) => {res.json({err: err})})
}

module.exports.readOne = (req, res) => {
    Songs.findOne({_id: req.params.id })
    .then((oneSong) => {res.json({results: oneSong})})
    .catch((err) => {res.json({err: err})})
}

module.exports.update = (req, res) => {
    User.findOneAndUpdate({_id: req.params.id }, req.body, {new:true, runValidators: true})
    .then((updateSong) => {res.json({results: updateSong})})
    .catch((err) => {res.json({err: err})})
}

module.exports.delete = (req, res) => {
    User.deleteOne({_id: req.params.id })
    .then((deleteSong) => {res.json({results: deleteSong})})
    .catch((err) => {res.json({err: err})})
}
