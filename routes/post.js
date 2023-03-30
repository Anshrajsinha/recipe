const express = require('express')
const mongoose = require('mongoose')
const Post = require('../models/Post')
const User = require('../models/Users')

const router = express.Router()

router.get("/", async (req, res) => {
    try {
        const posts = await Post.find({})
        res.json(posts)
    } catch (err) {
        res.json(err)
    }
})
router.post("/", async (req, res) => {
    const { title,content,imageUrl,readingTime } = req.body 
    const post = await Post.create({
        title,content,imageUrl,readingTime
    })
    try {
        res.json(post)
    } catch (err) {
        res.json(err)
    }
})
/* router.put("/", async (req, res) => {
    try {
        const savedPost = await Post.findById(postId)
        const user = await User.findById(userId)
        user.saved.push(savedPost)
        await user.save()
        res.json({saved: user.saved})
    } catch (err) {
        res.json(err)
    }
})
router.get("/saved/ids", async (req, res) => {
    try {
        const user = await User.findById(userId)
        res.json({savedPosts: user.saved})
    } catch (err) {
        res.json(err)
    }
})
router.get("/saved", async (req, res) => {
    try {
        const user = await User.findById(userId)
        const posts = await Post.find({
            _id: { $in: user.saved }
        })
        res.json({ posts })
    } catch (err) {
        res.json(err)
    }
}) */

module.exports = router