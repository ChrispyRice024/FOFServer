const mongoose = require('mongoose')


const itemSchema = new mongoose.Schema({
    title: String,
    description: String,
    price: mongoose.Decimal128,
    tags: [String],
    downloadLink: String,
    thumbnail: Buffer
})
// {collection: 'FaithOverFear'}
const Item = mongoose.model('FaithOverFear', itemSchema, 'imageStock')

module.exports = Item