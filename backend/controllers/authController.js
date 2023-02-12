const router = require('express').Router();
const bcrypt = require('bcrypt')
const User = require('../models/User')
const sendToken = require('../utils/jwtToken');


//REGISTER
router.post("/register", async (req, res) => {
    try {
        //generate new password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        //polulate new user
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            phone: req.body.phone,
            password: hashedPassword
        })
        // save user to DB
        const saveUser = await newUser.save();

        //response if success or fail
        if (saveUser) {
            // res.status(201).json({ success: true, token: generateToken(saveUser._id) })
            sendToken(saveUser._id, saveUser, 201, res)
        } else {
            res.status(400).json({ success: false, message: 'Invalid User Data' })
        }

    } catch (error) {
        console.log(error)
    }

})

//LOGIN
router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        // find user in DB
        const user = await User.findOne({ email })

        // validate user
        if (user && (await bcrypt.compare(password, user.password))) {
            // res.status(200).json({
            //     success: true,
            //     token: generateToken(user._id)
            // })
            sendToken(user._id, user, 200, res)
        } else {
            res.status(400).json("Invalid user credentials!")
        }

    } catch (error) {
        console.log(error)
    }

})

//LOGOUT
router.get("/logout", async (req, res) => {
    try {
        res.cookie('token', null, {
            expires: new Date(Date.now()),
            httpOnly: true
        })

        res.status(200).json({
            success: true,
            message: 'Logged out'
        })

    } catch (error) {
        console.log(error)
    }

})


module.exports = router;