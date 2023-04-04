const Review = require("../model/Review");
const Customer = require("../model/Customer");
const  {verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin}  = require("./verifyToken");

const router = require("express").Router();



//CREATE

router.post("/addReview", verifyToken, async (req, res) => {
    const newReview = new Review(req.body);
    

    try {
      const savedReview = await newReview.save();

      if(req.body.customer){
        const customer = Customer.findById(req.body.customer);
        await customer.updateOne({ $push: {reviews: savedReview._id}});
      }
      res.status(200).json(savedReview);
    } catch (err){
      res.status(500).json(err)
      console.log(err)
    }
  });

  //UPDATE
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const updatedReview = await Review.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedReview);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await Review.findByIdAndDelete(req.params.id);
    res.status(200).json("Review has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
});


//GET REVIEW
router.get("/find/:id", async (req, res) => {
  try {
    const review = await Review.findById(req.params.id);
    res.status(200).json(review);
  } catch (err) {
    res.status(500).json(err);
  }
});

  module.exports = router