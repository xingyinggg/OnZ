const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);

const roomEvent = new mongoose.Schema({
    roomID: Number,
    eventID: Number,
    numOfAgree: Number
})

module.exports = mongoose.model("roomEvent", roomEvent);