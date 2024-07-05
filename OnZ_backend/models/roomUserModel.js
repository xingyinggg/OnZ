const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);

const roomUser = new mongoose.Schema({
    roomID: Number,
    userID: Number,
})

// Apply the auto-increment pugin to UserID
//roomUser.plugin(AutoIncrement, { inc_field: 'roomID' });


module.exports = mongoose.model("roomUser", roomUser)