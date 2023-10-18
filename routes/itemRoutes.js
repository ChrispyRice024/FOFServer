const express = require('express')
const router = express.Router()
const {Item} = require('../models')

router.get('/', async (req, res) => {
    try{
        const itemData = await Item.find({})
        console.log('data retreived', itemData)
        res.status(200).json(itemData)
    }catch(err){
        res.status(400).json({msg:'There was a problem getting the data', err:err})
        console.error(err)
    }
})

router.post('/', async (req, res) => {
    try{
        const itemData = await Item.create(req.body)
        console.log('data posted', itemData)
        res.status(200).json(itemData)
    }catch(err){
        console.error(err)
        res.status(400).json({msg:'there was an error', err})
    }
})

// router.update('/:itemId', async (req, res) => {
//     try{
//         const itemData = await Item.updateOne()
//     }
// })
module.exports = router