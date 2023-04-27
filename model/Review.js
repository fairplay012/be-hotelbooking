const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema({
    rate:{type:Number},
    comment:{type:String,},
    customer:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Customer"
    },
    name:{
        type:String,
    },
    email:{
        type:String
    },
    hotel:{
        type: String,
    }
})

module.exports = mongoose.model("Review", ReviewSchema);