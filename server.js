const dotenv = require('dotenv')
dotenv.config()
const cors = require('cors')

const PORT = process.env.PORT || 6001

const express = require('express')
const router = express.Router()
const app = express()
const mongoose = require('mongoose')

const corsOptions = {
    origin: ['https://65692194bb909226d104d6f5--faithoverfear.netlify.app', 'https://657f944b70b5414ec080429f--dbcompanion.netlify.app/'],
    optionSuccessStatus: 200
}

app.use((req, res, next) => {
    console.log(`Request made to: ${req.method} ${req.originalUrl}`);
    next();
  });
  
  // Your route handler
//   app.get('/item', (req, res) => {
//     // Your existing route logic
//     res.json({ message: 'GET request received successfully' });
//   });

app.options('*', cors(corsOptions))
app.use(cors(corsOptions))

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
    console.log(`server is running on ${PORT}`)
})
