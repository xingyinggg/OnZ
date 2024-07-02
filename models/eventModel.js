const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);

const event = new mongoose.Schema({
    eventID: { type: Number, unique: true },
    eventName: String,
    location: String,
    priceRange: Number,
    category: String,
    description: String,
    photo: String
})

// Apply the auto-increment pugin to UserID
account.plugin(AutoIncrement, { inc_field: 'userID' });


module.exports = mongoose.model("event", event)