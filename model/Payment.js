const mongoose = require("mongoose");

const PaymentSchema = new mongoose.Schema({
    totalPrice:{type: Number},
    booking:{type: mongoose.Schema.Types.ObjectId,ref:"Booking"}
})

module.exports = mongoose.model("Payment", PaymentSchema);