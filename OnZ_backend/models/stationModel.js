const mongoose = require("mongoose");

const station = new mongoose.Schema({
    stationID: Number,
    name: String
})

module.exports = mongoose.model("station", station);