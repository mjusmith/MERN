const SongController = require('../controllers/songs.controller')

module.exports = (app) => {
    //Api test
    app.get('/api/testing', SongController.apiTest)

    //Create Song
    app.post('/api/songs/new', SongController.createSong)

    //Read all songs
    app.get('/api/songs', SongController.allSongs)

    //Read One
    app.get('/api/songs/:id', SongController.readOne)

    // Update song
    app.put('/api/songs/:id', SongController.update)

    // Delete one
    app.delete('/api/songs/:id', SongController.delete)

}