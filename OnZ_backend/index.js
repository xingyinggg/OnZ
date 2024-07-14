const express = require("express");
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRouter");
const roomRoutes = require("./routes/roomRouter");
const eventRoutes = require("./routes/eventRouter");
const roomEventRoutes = require("./routes/roomEventRouter");

dotenv.config();


const PORT = Number.parseInt(process.env.PORT);
const DB_HOST = process.env.DB_HOST;
const DB_PORT = process.env.DB_PORT;
const DB_NAME = process.env.DB_NAME;
const DB_USERNAME = process.env.DB_USERNAME;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_URI = `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}/?retryWrites=true&w=majority&appName=OnZ`;
//------------------------
const app = express();
//create application

//middleware
app.use(bodyParser.urlencoded({ extended: false })); //help with parsing request body
app.use(express.json());
app.use(cors());

//connect to DB
mongoose.connect(DB_URI);

//verify connection to DB
const db = mongoose.connection;
db.on("error", () => {
    console.log("[ERROR] Failed to connect to DB!");
});
db.once("open", () => {
    console.log("[SYSTEM] Connected to MongoDB successfully!");
});

//health check endpoint
app.get("/", (req, res) => {
    return res.status(200).json({
        message: "Server is alive"
    });
})

//routes
app.use("/", authRoutes);
app.use("/room", roomRoutes);
app.use("/event", eventRoutes);
app.use("/roomEvent", roomEventRoutes);



//start server
app.listen(PORT, () => {
    console.log("listening on port:", PORT);
})