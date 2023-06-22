const AuthorsController = require('../controllers/authors.controller')

module.exports = (app) => {

    //Create Product
    app.post('/api/Authors/new', AuthorsController.createAuthor)

    //Read all products
    app.get('/api/Authors', AuthorsController.allAuthors)

    //Read One
    app.get('/api/Authors/:id', AuthorsController.readOne)

    // Update product
    app.put('/api/Authors/:id', AuthorsController.update)

    // Delete one
    app.delete('/api/Authors/:id', AuthorsController.delete)

}