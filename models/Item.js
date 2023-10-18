const mongoose = require('mongoose')


    const itemSchema = new mongoose.Schema({
        title: String,
        description: String,
        price: mongoose.Decimal128,
        tags: [String],
        downloadLink: String,
        thumbnail: Buffer
    })

    const Item = mongoose.model('imageStock', itemSchema)

module.exports = Item