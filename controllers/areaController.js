const {Area, Hotel} = require('../model/model')

const areaController = {
    //ADD Area
    addArea: async(req,res) => {
        try {
            const newArea  = new Area(req.body);
            const savedArea = await newArea.save();

                res.status(200).json(savedArea);
            // console.log(newArea)
        } catch (error){
            res.status(500).json(error);
        }
    },
}


module.exports = areaController;