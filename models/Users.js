const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    saved: [{ type: mongoose.Schema.Types.ObjectId, ref: "postts" }]
})

const User = mongoose.model("userr", UserSchema)

module.exports = User