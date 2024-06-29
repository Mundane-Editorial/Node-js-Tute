const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    name: String,
    brand: String,
    price: Number,
    category: String
});


module.exports = mongoose.model('products', ProductSchema);
