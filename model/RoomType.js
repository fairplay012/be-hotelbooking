const mongoose = require("mongoose");

const RoomTypeSchema = new mongoose.Schema({
    name:{type: String,required: true},
    rooms:[
        {
        type: mongoose.Schema.Types.ObjectId,
        ref:"Room"
        }
    ]
})

module.exports = mongoose.model("RoomType", RoomTypeSchema);