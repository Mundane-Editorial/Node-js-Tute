const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    name: String,
    price: Number,
    description: String,
    image: String
});

module.exports = mongoose.model('products', ProductSchema);