const express = require('express')
const { dbConnection } = require('./config/dbConnection')
const userRouter = require('./routes/userRoutes')
const cookieParser = require('cookie-parser')
const cors = require('cors')
require('dotenv').config()

const app = express()

dbConnection()

app.use(express.json())

app.use(cookieParser())
app.use(cors({
    origin: "*"
}))

app.use("/user", userRouter)

app.listen(process.env.PORT, (err) => {
    if(err) {
        console.log(err)
    }
    else {
        console.log(`server starts at port ${process.env.PORT}`)
    }
})