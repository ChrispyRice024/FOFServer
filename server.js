const dotenv = require('dotenv')
dotenv.config()

const express = require('express')
const router = express.Router()
const app = express()
const mongoose = require('mongoose')

const PORT = process.env.PORT

mongoose.connect(process.env.MONGO_CONNECT).then(() => {
    console.log(`the server connected to the database`)
}).catch((err) => {
    console.error('could not connect to the database', err)
})

const routes = require('./routes')
app.use(routes)

app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.listen(3001, () => {
    console.log('server is running')
})