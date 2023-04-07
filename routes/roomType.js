const RoomType = require("../model/RoomType");
const  {verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin}  = require("./verifyToken");

const router = require("express").Router();

//CREATE

router.post("/addRoomType", verifyTokenAndAdmin, async (req, res) => {
    const newRoomType = new RoomType(req.body);

    try {
      const savedRoomType = await newRoomType.save();
      res.status(200).json(savedRoomType);
    } catch (err) {
      res.status(500).json(err)
      console.log(err)
    }
  });

//UPDATE
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const updatedRoomType = await RoomType.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedRoomType);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await RoomType.findByIdAndDelete(req.params.id);
    res.status(200).json("RoomType has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
});


//GET RoomType
router.get("/find/:id", async (req, res) => {
  try {
    const roomType = await RoomType.findById(req.params.id);
    res.status(200).json(roomType);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL ROOMTYPES
router.get("/findAll", verifyTokenAndAdmin, async(req,res) =>{
  try {
      const roomtypes = await RoomType.find()
      res.status(200).json(roomtypes)
  } catch (error) {
      res.status(500).json(error)
  }
})

  module.exports = router;