const Trans = require("../model/Trans");
const  {verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin}  = require("./verifyToken");

const router = require("express").Router();

//CREATE

router.post("/addTrans", verifyTokenAndAdmin, async (req, res) => {
    const newTrans = new Trans(req.body);
  
    try {
      const savedTrans = await newTrans.save();
      res.status(200).json(savedTrans);
    } catch (err){
      res.status(500).json(err)
      console.log(err)
    }
  });
  //UPDATE
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const updatedTrans = await Trans.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedTrans);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await Trans.findByIdAndDelete(req.params.id);
    res.status(200).json("Trans has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
});


//GET TRANS
router.get("/find/:id", async (req, res) => {
  try {
    const trans = await Trans.findById(req.params.id);
    res.status(200).json(trans);
  } catch (err) {
    res.status(500).json(err);
  }
});

  module.exports = router