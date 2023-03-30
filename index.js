const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const dotenv = require('dotenv')

const userRouter = require('./routes/users')
const postRouter = require('./routes/post')

dotenv.config()

const app = express()

app.use(express.json())
app.use(cors())

app.use("/auth", userRouter)
app.use("/posts", postRouter)

async function connect() {
    try {
    await mongoose.connect(process.env.MONGO_CON, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log("DATABASE connection successful")
    })
        } catch (error) {
            console.log("FAILED to connect to database")
        }
    }    
connect()

app.listen(5000, () => {
    console.log("App running on port 5000 ....")
})
