// const areaController = require("../controllers/RoomController");

const router = require("express").Router();

//ADD AREA
router.post("/",async(req,res) => {
    try {
        const newArea  = new Area(req.body);
        const savedArea = await newArea.save();
        res.status(200).json(savedArea);
    } catch (error) {
        res.status(500).json(error);
    }
    res.status(200).json(req.body);
},);

module.exports = router;