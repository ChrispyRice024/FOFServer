const dotenv = require('dotenv')
dotenv.config()
const cors = require('cors')

const PORT = process.env.PORT || 6001

const express = require('express')
const router = express.Router()
const app = express()
const mongoose = require('mongoose')

// const allowedOrigins = []


const options = {
    timeout:50000
}
//add a part that only allows connection if a certain token is created
async function connectToDB() {
    try{
        await mongoose.connect(process.env.MONGO_CONNECT)
        console.log(`the server connected to the database`)
    }catch(err){
        console.error('could not connect to the database', err)
}
}

connectToDB()
app.use(express.urlencoded({extended:false}))
app.use(express.json())
const routes = require('./routes')
app.use(routes)



app.listen(PORT, () => {
    console.log('server is running on ${PORT}')
})
