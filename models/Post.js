const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    title: {type: String,required: true,},
    content: { type: String, required: true, },
    imageUrl: { type: String, required: true, },
    readingTime: { type: Number, required: true, },
})

const Post = mongoose.model("postt", postSchema)

module.exports = Post