const mongoose = require("mongoose");

const TransSchema = new mongoose.Schema({
    type:{type: String,},
    price:{type: Number,},
})

module.exports = mongoose.model("Trans", TransSchema);