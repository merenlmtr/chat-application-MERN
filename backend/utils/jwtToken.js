const jwt = require('jsonwebtoken');

// Generate JWT TOKEN
generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRE_TIME })
}

// create, send and save token in cookie

const sendToken = (id, user, statusCode, res) => {

    // generate JWT Token
    const token = generateToken(id);

    // Cookie options
    const options = {
        expires: new Date(
            Date.now() + process.env.COOKIE_EXPIRE_TIME * 24 * 60 * 60 * 1000
        ),
        httpOnly: true
    }

    res.status(statusCode).cookie('token', token, options).json({
        success: true,
        token,
        user
    })
}

module.exports = sendToken;