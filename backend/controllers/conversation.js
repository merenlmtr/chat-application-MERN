const router = require('express').Router()
const Conversation = require('../models/Conversation')

// new Convo
router.post("/", async (req, res) => {
    const newConvo = new Conversation({
        members: [req.body.senderId, req.body.receiverId]
    });

    try {
        const saveConvo = await newConvo.save();
        res.status(200).json(saveConvo)

    } catch (error) {
        res.status(500).json(error)
    }
})

// get convo of a user
router.get("/:userId", async (req, res) => {
    try {
        const convo = await Conversation.find({
            members: { $in: [req.params.userId] }
        })
        res.status(200).json(convo)
    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = router