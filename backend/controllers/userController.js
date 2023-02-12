const router = require('express').Router();
const User = require('../models/User')

//LOAD USER DATA
router.get("/me", async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password')
        res.status(200).json({
            success: true,
            user
        })
    } catch (error) {
        console.log(error)
    }

})

//GET A USER
router.get("/users/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id).select('-password')
        res.status(200).json(user)
    } catch (error) {
        console.log(error)
    }
})

module.exports = router;