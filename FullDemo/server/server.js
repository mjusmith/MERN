//Step 1 - import all dependencies
const express = require('express')
const cors = require('cors')
const app = express();
require('dotenv').config()

const port = 8000

//Step 2 - configure express
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())

require('./configs/mongoose.config')

//One way
const Routes = require('./routes/songs.routes')
Routes(app)

//Second Way
// require('./routes/songs.routes')(app)

//step 4 - listen on a port and provide some feedback
app.listen(port, () => console.log(`Welcome to the Death Star! We're connected to bridge port ${port}`))