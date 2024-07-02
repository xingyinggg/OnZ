const Rooms = require("../models/roomModel");
const RoomUser = require("../models/roomUserModel");

const createNewRoom = async (req, res) => {
    // Take details from req body
    const newRoom = req.body;
    // Add to DB (room created)
    const createdRoom = await Rooms.create(newRoom);
    return res.status(200).json(createdRoom);
};

const joinRoom = async (req, res) => {
    // Take details from req body
    const joinExRoom = req.body;

    // Check if the room exists
    const checkRoom = await Rooms.findOne({
        roomName: joinExRoom.roomName
    });
    // If doesn't exist, invalid room
    if (!checkRoom) {
        return res.status(401).json({
            message: "invalid room"
        });
    };
    // Add to DB (room joined)
    const joinedRoom = await RoomUser.create(joinExRoom);
    return res.status(200).json(joinedRoom);


};

module.exports = {
    createNewRoom,
    joinRoom
}