const RoomEvents = require("../models/roomEventModel");
const RoomUser = require("../models/roomUser");
const Event = require("../models/eventModel");

// GET endpoint to retrieve a list of all Events
const getVotes = async (req, res) => {
    const {roomID, eventID} = req.body;

    // Query the DB for a list of all tasks
    const verifyRoom = await RoomUser.findOne({
        roomID: roomID
    });

    const verifyEvent = await Event.findOne({
        eventID: eventID
    })

    if(!verifyRoom || !verifyEvent){
        return res.status(400).json({
            message: "Room does not exist!"
        })
    }

    const roomEvent = await RoomEvents.findOne({
        roomID: roomID,
        eventID: eventID
    })
    // Respond to the user
    return res.status(200).json(roomEvent);
};

const addVotes = async (req, res) =>{
    const { roomID, eventID } = req.body;

    // Query the DB for a list of all tasks
    const verifyRoom = await RoomUser.findOne({ roomID: roomID });
    const verifyEvent = await Event.findOne({ eventID: eventID });

    if (!verifyRoom || !verifyEvent) {
        return res.status(400).json({
            message: "Room or Event does not exist!"
        });
    }

    // Find and increment the numOfAgree field
    const roomEvent = await RoomEvents.findOneAndUpdate(
        { roomID: roomID, eventID: eventID },
        { $inc: { numOfAgree: 1 } },  // Increment the numOfAgree field by 1
        { new: true }  // Return the updated document
    );

    if (!roomEvent) {
        return res.status(404).json({
            message: "RoomEvent not found!"
        });
    }

    // Respond to the user
    return res.status(200).json(roomEvent);
};