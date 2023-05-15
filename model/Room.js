const mongoose = require("mongoose");

const RoomSchema = new mongoose.Schema({
    name:{type: String,required: true},
    roomType:{type: mongoose.Schema.Types.ObjectId,ref:"RoomType"},
    price:{type: Number},
    description:{type: String},
    imgURL:{type: String},
    quantity:{type: Number},
    hotel:{type: mongoose.Schema.Types.ObjectId,ref:"Hotel"},
})



module.exports = mongoose.model("Room", RoomSchema);