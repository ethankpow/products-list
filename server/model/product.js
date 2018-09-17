const mongoose = require ('mongoose')
const Schema = mongoose.Schema


const ReviewSchema = new Schema({
    userName: String,
    text: String
})


const ProductSchema = new Schema({
    category: String,
    price: Number,
    name: String,
    image: String,
    review:[ReviewSchema]
})

module.exports = mongoose.model('Product', ProductSchema)