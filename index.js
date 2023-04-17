const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
var bodyParser = require("body-parser");
const morgan = require("morgan");
const dotenv =  require("dotenv");
const roomRoute = require("./routes/room")
const roomTypeRoute = require("./routes/roomType")
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const hotelRoute = require("./routes/hotel");
const customerRoute = require("./routes/customer");
const reviewRoute = require("./routes/review");
const transRoute = require("./routes/trans");
const utiRoute = require("./routes/uti");
const bookingRoute = require("./routes/booking");
const stripeRoute = require("./routes/stripe");

dotenv.config();

mongoose.set('strictQuery', true);


mongoose.connect(process.env.MONGODB_URL)
  .then(() => console.log("DB Connection Successfully!"))
  .catch((err) => {console.log(err)});

app.use(cors());

app.use(bodyParser.json({limit:"50mb"}));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
});


//Route
app.use(express.json());
app.use("/api/room", roomRoute);
app.use("/api/roomType", roomTypeRoute);
app.use("/api/user", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/hotel", hotelRoute);
app.use("/api/customer", customerRoute);
app.use("/api/review", reviewRoute);
app.use("/api/trans", transRoute);
app.use("/api/uti", utiRoute);
app.use("/api/booking", bookingRoute);
app.use("/api/checkout", stripeRoute);


app.use(morgan("common"));

app.listen(process.env.PORT || 5000, ()=>{
    console.log("Server is running ...");
})


