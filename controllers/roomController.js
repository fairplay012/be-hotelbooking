const {Room, Hotel} = require('../model/model')

const roomController = {
    //ADD ROOM
    addRoom: async(req,res) => {
        res.status(200).json(req.body);
    },
}

module.exports = roomController;