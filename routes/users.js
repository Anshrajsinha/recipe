const express = require('express')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const User = require('../models/Users')

const secret = "dfjiooifhoihpihhfoehfoehfoehfuohfcoefhouh"

const router = express.Router()

router.post("/register", async (req, res) => {
    const { username, password } = req.body
    const user = await User.findOne({ username: username })
    if (user) {
        return res.json({message: "User already exists"})
    }
    const hashedPassword = await bcrypt.hash(password, 12)
    const newUser = await User.create({ username, password: hashedPassword })
    res.json(newUser)
})

router.post("/login", async (req, res) => {
    const { username, password } = req.body
    const user = await User.findOne({ username: username })
    if (!user) {
        return res.json({message: "User doesn't exist"})
    }
    const isPasswordValid = await bcrypt.compare(password, user.password)
    if (!isPasswordValid) {
        return res.json({message: "Wrong Password"})
    }
    const token = jwt.sign({id: user._id}, secret)
    res.json({ token, userId: user._id })
})

module.exports = router