const express = require(`express`)
const mongoose = require(`mongoose`)
const morgan = require(`morgan`)
const server = express()

//middlewear
server.use(express.json())
server.use(morgan(`dev`))

mongoose.connect("mongodb://localhost:27017/auth-todos-db", () => console.log('connected to database'))
//routes
// server.use(`./toDos`, require(`./routes/toDos`))


//servers
server.listen(8000, ()=>{
    console.log(`the server is running`)
})