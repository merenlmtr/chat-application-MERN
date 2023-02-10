const router = require('express').Router()
const Message = require('../models/Message')

// create message
router.post("/", async (req, res) => {
    const message = new Message(req.body)

    try {
        const saveMessage = await message.save();
        res.status(200).json(saveMessage)
    } catch (error) {
        res.status(500).json(error)
    }
})

// get messages
router.get("/:convoId", async (req, res) => {
    try {
        const messages = await Message.find({
            conversationId: req.params.convoId
        })
        res.status(200).json(messages)
    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = router