const mongoose = require('mongoose')

const userModel = new mongoose.Schema( {

    name: {
        type : String,
        min: 3,
        required : true
    },
    
    email: {
        type: String,
        unique: true,
    },
     
    password : {
        type: String,
        required: true
    }
}, {timestamps: true})  

const user = new mongoose.model("users", userModel)

module.exports = user