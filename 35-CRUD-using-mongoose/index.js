const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/e-comm');

const ProductSchema = new mongoose.Schema({
    name: String,
    brand: String,
    price: Number,
    category: String,
});

const insertIntoDB = async() => {
    const Product = mongoose.model('products', ProductSchema);
    let data = new Product(
        {
            name: 'Samsung Galaxy S21',
            brand: 'Samsung',
            price: 1000,
            category: 'Android',
        }
    );
    const result = await data.save();
    console.log(result);
}

// insertIntoDB();

const updateIntoDB = async() =>{
    const Product = mongoose.model('products', ProductSchema);
    let data = await Product.updateOne(
        {name: "A-55", price: 549},
        {
            $set: {name: "A-55", price: 649}
        }
    );
    console.log(data);
}

// updateIntoDB(); // updates

const deleteFromDB = async() => {
    const Product = mongoose.model('products', ProductSchema);
    let data = await Product.deleteOne(
        {name: "A-55", price: 699}
    );
    console.log(data);
}

// deleteFromDB();  //delete 

const findIntoDB = async() => {
    const Product = mongoose.model('products', ProductSchema);
    let data = await Product.find(
        {category: "android"}
    );
    console.log(data);
}

findIntoDB();  // find all products