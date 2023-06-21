const Products = require('../models/products.model')


module.exports.createProduct = (req, res) => {
    Products.create(req.body)
    .then((newProduct) => {res.json({results: newProduct})})
    .catch((err) => {res.json({err: err})})
}

module.exports.allProducts = (req, res) => {
    Products.find()
    .then((allProducts) => {res.json({results: allProducts})})
    .catch((err) => {res.json({err: err})})
}

module.exports.readOne = (req, res) => {
    Products.findOne({_id: req.params.id })
    .then((oneProduct) => {res.json({results: oneProduct})})
    .catch((err) => {res.json({err: err})})
}

module.exports.update = (req, res) => {
    Products.findOneAndUpdate({_id: req.params.id }, req.body, {new:true, runValidators: true})
    .then((updateProduct) => {res.json({results: updateProduct})})
    .catch((err) => {res.json({err: err})})
}

module.exports.delete = (req, res) => {
    Products.deleteOne({_id: req.params.id })
    .then((deleteProduct) => {res.json({results: deleteProduct})})
    .catch((err) => {res.json({err: err})})
}