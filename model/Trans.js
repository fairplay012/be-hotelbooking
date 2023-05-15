const mongoose = require("mongoose");

const TransSchema = new mongoose.Schema({
    type:{type: String,},
    price:{type: Number,},
    imgURL:{
        type: String,
    },
    hotel:{type: mongoose.Schema.Types.ObjectId,ref:"Hotel"},
})

module.exports = mongoose.model("Trans", TransSchema);