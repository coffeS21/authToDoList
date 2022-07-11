const express = require(`express`)
const mongoose = require(`mongoose`)
require(`dotenv`).config()
const morgan = require(`morgan`)
const server = express()

const test = "mongodb+srv://chai:chai123@userauthtodolist.tct8y.mongodb.net/?retryWrites=true&w=majority"
// mongodb+srv://chai:chai123@userauthtodolist.tct8y.mongodb.net/?retryWrites=true&w=majority

//middlewear
server.use(express.json())
server.use(morgan(`dev`))

//env file
process.env.SECRET
//routes
server.use(`/todo`, require(`./routes/todoRouter.js`))

server.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})
//servers

mongoose.connect(test, () => console.log('connected to database'))
mongoose.connection.on(`connected`, ()=>{
    console.log(`mongoose is connected!`)
})
server.listen(8000, ()=>{
    console.log(`the server is running`)
})