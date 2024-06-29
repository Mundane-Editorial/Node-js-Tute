const mongoose = require('mongoose');

const main = async() =>{
    await mongoose.connect("mongodb://localhost:27017/e-comm");   // to connect to mongodb database

    //schema validation   
    const ProductSchema = new mongoose.Schema({
        name: String,    // name will be inserted in String format 
        price: Number
    });

    //model : it connects nodejs to mongodb (its a structure)

    // schema : all fields are called schemas
    // models : it connects all the schmas to mongodb db

    const ProductsModel = mongoose.model('products', ProductSchema);

    let data = new ProductsModel(
        {name: "M-33", price: 749}
    );
    let result = await data.save();

    console.log(result);
}

main();