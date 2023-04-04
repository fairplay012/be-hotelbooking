const mongoose = require("mongoose");

const BookingSchema  = new mongoose.Schema({
    startDate:{type: Date,},
    endDate:{type: Date,},
    Note:{type: String,},
    customer:
        {type: mongoose.Schema.Types.ObjectId,ref:"Customer"}
    ,
    trans:{type: mongoose.Schema.Types.ObjectId,ref:"Trans"},
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
    ]
})

module.exports = mongoose.model("Booking", BookingSchema);