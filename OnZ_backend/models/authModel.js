const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);

const account = new mongoose.Schema({
    userID: { type: Number, unique: true },
    email: String,
    password: String,
    username: String
})

// Apply the auto-increment pugin to UserID
account.plugin(AutoIncrement, { inc_field: 'userID' });


module.exports = mongoose.model("account", account)