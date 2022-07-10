const express = require(`express`)
const mongoose = require(`mongoose`)
const morgan = require(`morgan`)
const server = express()

//middlewear
server.use(express.json())
server.use(morgan(`dev`))

mongoose.connect("mongodb://localhost:27017/auth-todos-db", () => console.log('connected to database'))
//routes
server.use(`/todo`, require(`./routes/todoRouter.js`))

server.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})
//servers
server.listen(8000, ()=>{
    console.log(`the server is running`)
})