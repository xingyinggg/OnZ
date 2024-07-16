const Rooms = require("../models/roomModel");
// const RoomUsers = require("../models/roomUserModel");

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
        roomID: joinExRoom.roomID
    });
    // If doesn't exist, invalid room
    if (!checkRoom) {
        return res.status(401).json({
            message: "invalid room"
        });
    }
    // retrieve the userid
    const user = joinExRoom.userID;
    checkRoom.users.push({ users: user });
    await checkRoom.save();
    return res.status(200).json(checkRoom);


};

module.exports = {
    createNewRoom,
    joinRoom
}