const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema({
    rate:{type:Number,required: true},
    comment:{type:String,},
    customer:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Customer"
    }
})

module.exports = mongoose.model("Review", ReviewSchema);