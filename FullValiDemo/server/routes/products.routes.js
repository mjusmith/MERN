const ProductController = require('../controllers/products.controller')

module.exports = (app) => {

    //Create Product
    app.post('/api/products/new', ProductController.createProduct)

    //Read all products
    app.get('/api/products', ProductController.allProducts)

    //Read One
    app.get('/api/products/:id', ProductController.readOne)

    // Update product
    app.put('/api/products/:id', ProductController.update)

    // Delete one
    app.delete('/api/products/:id', ProductController.delete)

}