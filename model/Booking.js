const mongoose = require("mongoose");

const BookingSchema  = new mongoose.Schema({
    startDate:{type: Date,},
    endDate:{type: Date,},
    Note:{type: String,},
    customer:
        {type: String,}
    ,
    email:
        {type: String}
    ,
    trans:{type: String,},
    rooms:
        {
            type: String,
        }
    ,
    utis:
        {
            type: String,
        }
    ,
    status:
    {
        type: String,
    },
    total:{type:Number}
})

module.exports = mongoose.model("Booking", BookingSchema);