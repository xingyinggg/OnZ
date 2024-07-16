const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);

const room = new mongoose.Schema({
    roomID: { type: Number, unique: true },
    roomName: String,
    ownerID: Number,
    users: [{ id: String }]
})

// Apply the auto-increment pugin to UserID
room.plugin(AutoIncrement, { inc_field: 'roomID' });


module.exports = mongoose.model("room", room)