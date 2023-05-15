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
            type: mongoose.Schema.Types.ObjectId,
            ref:"Room"
        }
    ],
    utis:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:"Uti"
        }
    ],  
    trans:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:"Trans"
        }
    ],
    area:{
        type: String,
    }
})

module.exports = mongoose.model("Hotel", HotelSchema);