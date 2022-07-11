const mongoose = require(`mongoose`)
const Schema = mongoose.Schema

const userSchema = new Schema({
    username: {
        type: String, 
        required: true,
        lowercase: true,//makes all the user names save lowercase
        unique:true//makes sure that each user name is unique
    },
    password:{
        /**
         * type date and default will save the date
         * when the user sends the post request
         * the default now will save the date when
         * they send the request
         */
        type: Date,
        default: Date.now
    },
    isAdmin: {
        /**
         * this is one way to give different
         * users different privliges
         * look into this to add it to your app
         */
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model(`User`, userSchema)