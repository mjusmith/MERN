const Jokes = require('../models/jokes.model')

module.exports.apiTest = (req, res) => {
    res.json({results: "Hello World!"})
}

module.exports.createJoke = (req, res) => {
    Jokes.create(req.body, {validateSync: true})
    .then((newJoke) => {res.json({results: newJoke})})
    .catch((err) => {res.json({err: err})})
}

module.exports.allJokes = (req, res) => {
    Jokes.find()
    .then((allJokes) => {res.json({results: allJokes})})
    .catch((err) => {res.json({err: err})})
}

module.exports.readOne = (req, res) => {
    Jokes.findOne({_id: req.params.id })
    .then((oneJoke) => {res.json({results: oneJoke})})
    .catch((err) => {res.json({err: err})})
}

module.exports.update = (req, res) => {
    Jokes.findOneAndUpdate({_id: req.params.id }, req.body, {new:true, runValidators: true})
    .then((updateJoke) => {res.json({results: updateJoke})})
    .catch((err) => {res.json({err: err})})
}

module.exports.delete = (req, res) => {
    Jokes.deleteOne({_id: req.params.id })
    .then((deleteJoke) => {res.json({results: deleteJoke})})
    .catch((err) => {res.json({err: err})})
}
