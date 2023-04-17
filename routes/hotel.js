const Hotel = require("../model/Hotel");
const  { verifyTokenAndAuthorization, verifyTokenAndAdmin}  = require("./verifyToken");

const router = require("express").Router();

//CREATE

router.post("/addHotel", verifyTokenAndAdmin, async (req, res) => {
    const newHotel = new Hotel(req.body);
  
    try {
      const savedHotel = await newHotel.save();
      res.status(200).json(savedHotel);
    } catch (err){
      res.status(500).json(err)
      console.log(err)
    }
  });

//UPDATE
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
    try {
      const updatedHotel = await Hotel.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedHotel);
    } catch (err) {
      res.status(500).json(err);
    }
});

//DELETE
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
    try {
      await Hotel.findByIdAndDelete(req.params.id);
      res.status(200).json("Hotel has been deleted...");
    } catch (err) {
      res.status(500).json(err);
    }
});


//GET HOTEL
router.get("/find/:id", async (req, res) => {
    try {
      const hotel = await Hotel.findById(req.params.id);
      res.status(200).json(hotel);
    } catch (err) {
      res.status(500).json(err);
    }
});

router.get("/findArea/:area", async (req, res) => {
  try {
    const hotels = await Hotel.find({"area" : req.params.area});
    res.status(200).json(hotels);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL HOTELS
router.get("/findAll", async(req,res) =>{
  try {
      const hotels = await Hotel.find()
      res.status(200).json(hotels)
  } catch (error) {
      res.status(500).json(error)
  }
})

module.exports = router;