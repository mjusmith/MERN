const mongoose = require('mongoose')

const ProductsSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    price: {
        type: String,
    },
    description: {
        type: String,
    },
}, {timestamps: true})

const Products = mongoose.model("Products", ProductsSchema)

module.exports = Products;