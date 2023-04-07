const Booking = require("../model/Booking");
const  {verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin}  = require("./verifyToken");

const router = require("express").Router();

//CREATE

router.post("/addBooking", verifyTokenAndAdmin, async (req, res) => {
    const newBooking = new Booking(req.body);
  
    try {
      const savedBooking = await newBooking.save();
      res.status(200).json(savedBooking);
    } catch (err){
      res.status(500).json(err)
      console.log(err)
    }
  });

  //UPDATE
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
    try {
      const updatedBooking = await Booking.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedBooking);
    } catch (err) {
      res.status(500).json(err);
    }
});

//DELETE
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
    try {
      await Booking.findByIdAndDelete(req.params.id);
      res.status(200).json("Booking has been deleted...");
    } catch (err) {
      res.status(500).json(err);
    }
});


//GET BOOKING
router.get("/find/:id", async (req, res) => {
    try {
      const booking = await Booking.findById(req.params.id);
      res.status(200).json(booking);
    } catch (err) {
      res.status(500).json(err);
    }
});

//GET ALL BOOKING
router.get("/findAll", verifyTokenAndAdmin, async(req,res) =>{
  try {
      const bookings = await Booking.find()
      res.status(200).json(bookings)
  } catch (error) {
      res.status(500).json(error)
  }
})

  module.exports = router