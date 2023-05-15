const  {verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin}  = require("./verifyToken");
const Hotel = require("../model/Hotel");
const Room = require("../model/Room");
const RoomType = require("../model/RoomType");

const router = require("express").Router();

//ADD ROOM
router.post("/addRoom", verifyTokenAndAdmin, async (req, res) => {
    const newRoom = new Room(req.body);
  
    try {
      const savedRoom = await newRoom.save();
      if(req.body.hotel){
        const hotel = Hotel.findById(req.body.hotel);
        await hotel.updateOne({ $push: {rooms: savedRoom._id}});
      }
      // if(req.body.roomType){
      //   const roomType = RoomType.findById(req.body.roomType);
      //   await roomType.updateOne({ $push: {rooms: savedRoom._id}});
      // }
      res.status(200).json(savedRoom);

    } catch (err) {
      res.status(500).json(err);
    }
  });

//UPDATE
router.put("/:id", async (req, res) => {
  try {
    const updatedRoom = await Room.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedRoom);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await Room.findByIdAndDelete(req.params.id);
    res.status(200).json("Room has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
});


//GET ROOM
router.get("/find/:id", async (req, res) => {
  try {
    const room = await Room.findById(req.params.id);
    res.status(200).json(room);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/findRoom/:hotel", async (req, res) => {
  try {
    const rooms = await Room.find({"hotelId" : req.params.hotel});
    res.status(200).json(rooms);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL ROOMS
router.get("/findAll", async(req,res) =>{
  try {
      const rooms = await Room.find()
      res.status(200).json(rooms)
  } catch (error) {
      res.status(500).json(error)
  }
})

  
module.exports = router;