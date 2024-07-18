const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);
const SchemaTypes = mongoose.Schema.Types;


const event = new mongoose.Schema({
    eventID: { type: Number, unique: true },
    eventName: String,
    description: String,
    fullAddress: String,
    street: String,
    category: String,
    rating: Number,
    googleMapWebsite: String,
    website: String,
    priceRange: String,
    picture: String
})

// Apply the auto-increment pugin to eventID
event.plugin(AutoIncrement, { inc_field: 'eventID' });


module.exports = mongoose.model("event", event)