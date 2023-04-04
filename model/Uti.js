const mongoose = require("mongoose");

const UtiSchema = new mongoose.Schema({
    type:{type: String,},
    price:{type: Number,},
})

module.exports = mongoose.model("Uti", UtiSchema);