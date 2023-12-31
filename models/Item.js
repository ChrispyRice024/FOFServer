const mongoose = require('mongoose')


    const itemSchema = new mongoose.Schema({
        title: String,
        description: String,
        // price: mongoose.Decimal128,
        // tags: [String],
        // downloadLink: String,
        // thumbnail: Buffer
    },{
        versionKey: false
    })

    const Item = mongoose.model('item', itemSchema)

module.exports = Item