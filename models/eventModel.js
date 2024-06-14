const mongoose = require("mongoose");

// Create a schema for how we should store task objects in the DB
const eventSchema = new mongoose.Schema({
    eventName: String,
    description: String,
    location: String,
    price: Number,
    rating: Number,
    website: String
});



// Export the schema to use it in other files
module.exports = mongoose.model("event", eventSchema);