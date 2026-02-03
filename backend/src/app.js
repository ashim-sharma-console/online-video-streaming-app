//create server:=

const express = require('express')
const authRouts = require('./routes/auth.routes')
const cookieParser = require('cookie-parser')
const foodRoutes=require('./routes/food.routes')
const cors= require('cors')

const app = express()

//CORS Middleware:=
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
}))

//middelware:=
app.use(express.json())
app.use(cookieParser())

app.get("/", (req, res) => {
    res.send("Hello World")
})

//auth routes
app.use('/api/auth', authRouts)

//food routes
app.use('/api/food',foodRoutes)

module.exports = app;