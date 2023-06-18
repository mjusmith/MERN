const JokeController = require('../controllers/jokes.controller')

module.exports = (app) => {
    //Api test
    app.get('/api/testing', JokeController.apiTest)

    //Create joke
    app.post('/api/jokes/new', JokeController.createJoke)

    //Read all jokes
    app.get('/api/jokes', JokeController.allJokes)

    //Read One
    app.get('/api/jokes/:id', JokeController.readOne)

    // Update joke
    app.put('/api/jokes/:id', JokeController.update)

    // Delete one
    app.delete('/api/jokes/:id', JokeController.delete)

}