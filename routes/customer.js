const Customer = require("../model/Customer");
const User = require("../model/User");
const  {verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin}  = require("./verifyToken");

const router = require("express").Router();



//CREATE

router.post("/addCustomer", verifyTokenAndAdmin, async (req, res) => {
    const newCustomer = new Customer(req.body);
    

    try {
      const savedCustomer = await newCustomer.save();

      if(req.body.user){
        const user = User.findById(req.body.user);
        await user.updateOne({ $push: {customer: savedCustomer._id}});
      }
      res.status(200).json(savedCustomer);
    } catch (err){
      res.status(500).json(err)
      console.log(err)
    }
  });

  //UPDATE
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const updatedCustomer = await Customer.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedCustomer);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await Customer.findByIdAndDelete(req.params.id);
    res.status(200).json("Customer has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
});


//GET Customer
router.get("/find/:id", async (req, res) => {
  try {
    const customer = await Customer.findById(req.params.id);
    res.status(200).json(customer);
  } catch (err) {
    res.status(500).json(err);
  }
});

  module.exports = router