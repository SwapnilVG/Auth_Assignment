require('dotenv').config()
const express = require('express')
const cookieParser = require("cookie-parser")
const cors = require('cors')
const { connectToDB } = require('./config/dbconnection')
const { router } = require('./routers/routers')
const app = express()

app.use(cors({
    origin:"http://localhost:5500",
    credentials:true
}))
app.use(cookieParser())
app.use(express.json())
app.use('/',router)

connectToDB();

module.exports = app