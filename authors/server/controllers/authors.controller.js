const Authors = require('../models/authors.model')


module.exports.createAuthor = (req, res) => {
    Authors.create(req.body)
    .then((newAuthor) => {res.json({results: newAuthor})})
    .catch((err) => {res.status(400).json({err: err})})
}

module.exports.allAuthors = (req, res) => {
    Authors.find()
    .then((allAuthors) => {res.json({results: allAuthors})})
    .catch((err) => {res.json({err: err})})
}

module.exports.readOne = (req, res) => {
    Authors.findOne({_id: req.params.id })
    .then((oneAuthor) => {res.json({results: oneAuthor})})
    .catch((err) => {res.json({err: err})})
}

module.exports.update = (req, res) => {
    Authors.findOneAndUpdate({_id: req.params.id }, req.body, {new:true, runValidators: true})
    .then((updateAuthor) => {res.json({results: updateAuthor})})
    .catch((err) => {res.status(400).json({err: err})})
}

module.exports.delete = (req, res) => {
    Authors.deleteOne({_id: req.params.id })
    .then((deleteAuthor) => {res.json({results: deleteAuthor})})
    .catch((err) => {res.json({err: err})})
}