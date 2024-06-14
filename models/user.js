const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {type: String, require: true},
    password: {type: String, require: true}
})

const User = mongoose.model("User", userSchema);

async function getUser(username, password){
    const user = await User.findOne({
        username: username,
        password: password
    });
    if(!user){
        return null;
    }
    return "authenticated";
}

module.exports = {
    getUser
};