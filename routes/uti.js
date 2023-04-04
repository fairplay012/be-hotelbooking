const Uti = require("../model/Uti");
const  {verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin}  = require("./verifyToken");

const router = require("express").Router();

//CREATE

router.post("/addUti", verifyTokenAndAdmin, async (req, res) => {
    const newUti = new Uti(req.body);
  
    try {
      const savedUti = await newUti.save();
      res.status(200).json(savedUti);
    } catch (err){
      res.status(500).json(err)
      console.log(err)
    }
  });

  //UPDATE
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
    try {
      const updatedUti = await Uti.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedUti);
    } catch (err) {
      res.status(500).json(err);
    }
});

//DELETE
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
    try {
      await Uti.findByIdAndDelete(req.params.id);
      res.status(200).json("Uti has been deleted...");
    } catch (err) {
      res.status(500).json(err);
    }
});


//GET UTI
router.get("/find/:id", async (req, res) => {
    try {
      const uti = await Uti.findById(req.params.id);
      res.status(200).json(uti);
    } catch (err) {
      res.status(500).json(err);
    }
});

  module.exports = router