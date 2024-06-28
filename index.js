const express = require("express");
const dotenv = require("dotenv");
const authRoutes = require("./routes/authRouter");
const cors = require("cors");
const bodyParser = require("body-parser");

dotenv.config();


const PORT = Number.parseInt(process.env.PORT);

//------------------------
const app = express();
//create application

//middleware
app.use(bodyParser.urlencoded({ extended: false })); //help with parsing request body
app.use(express.json());
app.use(cors());

//health check endpoint
app.get("/", (req, res) => {
    return res.status(200).json({
        message: "Server is alive"
    });
})

//routes
app.use(authRoutes);

//start server
app.listen(PORT, () => {
    console.log("listening on port:", PORT);
})