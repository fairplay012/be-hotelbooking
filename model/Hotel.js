const mongoose = require("mongoose");

const HotelSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    address:{
        type: String
    },
    description:{
        type: String
    },
    imgURL:{
        type: String,
    },
    rooms:[
        {
            type: String,
        }
    ],
    utis:[
        {
            type: String,
        }
    ],  
    trans:[
        {
            type: String,
        }
    ],
    area:{
        type: String,
    }
})

module.exports = mongoose.model("Hotel", HotelSchema);