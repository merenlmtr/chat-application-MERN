const express = require('express')
const connectDB = require('./config/DB')
require('dotenv').config();
const PORT = process.env.PORT || 8000
const authRoute = require('./controllers/authController')
const convoRoute = require('./controllers/conversation')
const messageRoute = require('./controllers/message')
const { isAuthenticatedUser } = require('./middleware/auth')
const cookieParser = require('cookie-parser')

// Connection to Database
connectDB();

// Initialise express app
const app = express()

//middleware to parse JSON data
app.use(express.json())
//middleware to parse urlencoded bodies
app.use(express.urlencoded({ extended: false }))
//middleware to parse cookie
app.use(cookieParser());

// setting up express server to listen on port
app.listen(PORT, () => console.log(`Sever running on port ${PORT}`));

//Routes
app.use('/api/auth', authRoute)
app.use('/api/conversation', isAuthenticatedUser, convoRoute)
app.use('/api/message', isAuthenticatedUser, messageRoute)
app.all("*", (req, res) => res.send("Silence is Golden"))