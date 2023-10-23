const express = require('express')
const router = express.Router()
const {Item} = require('../models')

router.get('/', async (req, res) => {
    try{
        console.log('before', req.body)
        const itemData = await Item.find({}).maxTime(50000).exec()
        console.log('data retreived', itemData)
        res.status(200).json(itemData)
    }catch(err){
        res.status(400).json({msg:'There was a problem getting the data', err: err.stack})
        console.error(err)
    }
})

    router.post('/', async (req, res) => {
        console.log('outside block', req.body)
        try{
            console.log(req.body)
            const itemData = await Item.create(req.body)
            console.log('Content-Type:', req.headers['content-type']);
            console.log('after', req.body)
            console.log('data posted', itemData)
            res.status(200).json(itemData)
        }catch(err){
            console.error(err)
            res.status(400).json({msg:'there was an error', err: err})
        }
    })

// router.update('/:itemId', async (req, res) => {
//     try{
//         const itemData = await Item.updateOne()
//     }
// })
module.exports = router
