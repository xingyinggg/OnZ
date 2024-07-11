const Accounts = require("../models/authModel");

const createNewUser = async (req, res) => {
    // Take user details from req body
    const {email, username,password, confirmPassword} = req.body;
    // console.log("DEBUG USER:", newUser);

    if(email ==="" || username === ""|| password ===""||confirmPassword===""){
        return res.status(401).json({
            message: "All fields not filled up."
        });
    }

    if (password !== confirmPassword){
        return res.status(402).json({
            message: "Passwords do not match"
        });
    }

    // Check if username already exist
    const existingUser = await Accounts.findOne({
        username: username
    });
    // console.log("DEBUG CHECK USER:", existingUser);
    // If exist, return 400 bad req
    if (existingUser) {
        // console.log("ABCDEFG")
        return res.status(400).json({
            message: "Username already exists"
        });
    };
    // Encrypt the PW here
    // Add to DB
    const createdUser = await Accounts.create(email, username,password);
    // Return 201, createdUser
    return res.status(201).json(createdUser)
}

const userLogin = async (req, res) => {
    // Take user details from req body
    const loginUser = req.body;
    // Check if username already exist
    const existingUser = await Accounts.findOne({
        username: loginUser.username
    });
    // If not exist, invalid login details
    if (!existingUser) {
        return res.status(401).json({
            message: "invalid login details"
        });
    };
    // If password matches, user logins
    if (loginUser.password === existingUser.password) {
        return res.status(200).json({
            message: "successfully logged in"
        });
    };
    // Else, invalid login details
    return res.status(401).json({
        message: "invalid login details"
    });
};

const retrieveUserByID = async (req, res) => {
    const UserID = req.params.id;

    const existingUser = await Accounts.findOne({
        userID: UserID
    });

    if (!existingUser) {
        return res.status(404).json({
            message: "UserID not found"
        });
    };
    return res.status(200).json(existingUser);
};

module.exports = {
    createNewUser,
    userLogin,
    retrieveUserByID
}