const mongoose = require("mongoose");

const CustomerSchema = new mongoose.Schema({
    name:{type: String,required: true
    },
    address:{type: String,},
    phone:{type: Number,},
    user: {type: mongoose.Schema.Types.ObjectId,ref:"User",},
    reviews: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:"Review"
        }
    ]
})

module.exports = mongoose.model("Customer", CustomerSchema);