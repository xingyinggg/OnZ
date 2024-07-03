const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);

const event = new mongoose.Schema({
    eventID: { type: Number, unique: true },
    eventName: String,
    location: String,
    upperPriceRange: Float32Array,
    lowerPriceRange: Float32Array,
    category: String,
    description: String
})

// Apply the auto-increment pugin to eventID
event.plugin(AutoIncrement, { inc_field: 'eventID' });


module.exports = mongoose.model("event", event)