const express = require("express");
const dotenv = require("dotenv");
const authRoutes = require("./routes/auth");
const cors = require("cors");


dotenv.config();


const PORT = Number.parseInt(process.env.PORT);

//------------------------
const app = express();
//create application

//middleware
app.use(express.json());
app.use(cors());

//health check endpoint
app.get("/", (req, res)=>{
    return 
})

//routes
app.use(authRoutes);

//start server
app.listen(PORT, ()=>{
    console.log("listening on port;", PORT);
})