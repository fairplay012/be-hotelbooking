const mongoose = require("mongoose");

const TransSchema = new mongoose.Schema({
    type:{type: String,},
    price:{type: Number,},
    imgURL:{
        type: String,
    },
})

module.exports = mongoose.model("Trans", TransSchema);