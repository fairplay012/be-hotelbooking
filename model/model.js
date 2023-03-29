const mongoose = require("mongoose");

const hotelSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    address:{
        type: String
    },
    description:{
        type: String
    },
    imgURL:{
        type: String,
    },
    rooms:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:"Room"
        }
    ],
    area:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Hotel"
    }
})

const roomSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    roomType:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"RoomType"
    },
    price:{
        type: Number
    },
    description:{
        type: String
    },
    imgURL:{
        type: String,
    },
    hotel:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Hotel"
    }
})

const roomTypeSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    rooms:[
        {

        type: mongoose.Schema.Types.ObjectId,
        ref:"Room"
        }
    ]
})
const areaSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    hotels:[
        {
        type: mongoose.Schema.Types.ObjectId,
        ref:"Hotel"
        }
    ]
})

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    role:{
        type: String,
        required: true,
    }
})
const customerSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    address:{
        type: String,
    },
    email:{
        type: String,
    },
    phone:{
        type: Number,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
    },
    review: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:"Review"
        }
    ]
})

const reviewSchema = new mongoose.Schema({
    rate:{
        type:Number,
        required: true
    },
    comment:{
        type:String,
    },
    customer:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Customer"
    }
})

const transSchema = new mongoose.Schema({
    type:{
        type: String,
    },
    price:{
        type: Number,
    },
    booking:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Booking"
    }
})

const bookingSchema  = new mongoose.Schema({
    startDate:{
        type: Date,
    },
    endDate:{
        type: Date,
    },
    bookingCode:{
        type: Number,
    },
    Note:{
        type: String,
    },
    customers:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:"Customer"
        }
    ],
    trans:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Trans"
    },
    rooms:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:"Room"
        }
    ]
})

const paymentSchema = new mongoose.Schema({
    totalPrice:{
        type: Number
    },
    booking:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Booking"
    }
})



let Hotel = mongoose.model("Hotel",hotelSchema)
let Room = mongoose.model("Room",roomSchema)
let RoomType = mongoose.model("RoomType",roomTypeSchema)
let Area = mongoose.model("Area",areaSchema)
let Customer = mongoose.model("Customer",customerSchema)
let User = mongoose.model("User",userSchema)
let Review = mongoose.model("Review",reviewSchema)
let Trans = mongoose.model("Trans",transSchema)
let Booking = mongoose.model("Booking",bookingSchema)
let Payment = mongoose.model("Payment",paymentSchema)
module.exports = {Hotel, Room, RoomType, Area,Customer,User, Review, Trans,Booking, Payment}