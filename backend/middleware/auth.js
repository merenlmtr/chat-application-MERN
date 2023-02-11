const jwt = require('jsonwebtoken')
const User = require('../models/User')
// check if user is authenticated

exports.isAuthenticatedUser = async (req, res, next) => {
    try {
        const { token } = req.cookies

        if (!token) {
            res.status(401).json('Not authorise!')
        }

        const decode = jwt.verify(token, process.env.JWT_SECRET)
        req.user = await User.findById(decode.id)
        next()
    } catch (error) {
        console.log(error)
    }

}