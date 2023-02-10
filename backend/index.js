const express = require('express')
const connectDB = require('./config/DB')
require('dotenv').config();
const PORT = process.env.PORT || 8000

// Connection to Database
connectDB();

// Initialise express app
const app = express()

//middleware to parse JSON data
app.use(express.json())
//middleware to parse urlencoded bodies
app.use(express.urlencoded({ extended: false }))

// setting up express server to listen on port
app.listen(PORT, () => console.log(`Sever running on port ${PORT}`));

//Routes
app.all("*", (req, res) => res.send("Silence is Golden"))