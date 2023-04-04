const  {verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin}  = require("./verifyToken");
const User = require("../model/User");
const router = require("express").Router()


//Update
router.put("/:id", verifyTokenAndAuthorization ,async (req,res)=>{
    if(req.body.password){
        req.body.password = CryptoJS.AES.encrypt(
            req.body.password,
            process.env.PASS_SEC
        ).toString()
    }

    try{
        const updatedUser =  await User.findByIdAndUpdate(req.params.id,{
            $set: req.body
        },
        {new:true}
        );
        res.status(200).json(updatedUser)
    } catch(err){
        res.status(500).json(err)
        console.log(err)
    }
})

//DELETE
router.delete("/:id", verifyTokenAndAuthorization, async(req,res) =>{
    try {
        await User.findByIdAndDelete(req.params.id)
        res.status(200).json("User has been deleted !!")
    } catch (error) {
        res.status(500).json(error)
    }
})

//GET USER
router.get("/find/:id", verifyTokenAndAdmin, async(req,res) =>{
    try {
        const user = await User.findById(req.params.id)
        const {password,...others} = user._doc;

        res.status(200).json(others)
    } catch (error) {
        res.status(500).json(error)
    }
})


//GET ALL USERS
router.get("/findAll", verifyTokenAndAdmin, async(req,res) =>{
    try {
        const users = await User.find()
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json(error)
    }
})
module.exports = router;