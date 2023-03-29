const roomController = require("../controllers/RoomController");

const router = require("express").Router();

//ADD ROOM
router.post("/", roomController.addRoom);

module.exports = router;