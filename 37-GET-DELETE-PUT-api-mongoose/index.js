const express = require('express');

require('./config');

const app = express();

const Product = require('./product');

app.use(express.json());


app.get('/list', async (request, response) => {

    let data = await Product.find();
    response.send(data);
});


app.delete('/delete/:_id', async (request, response) => {
    // let data = 
    console.log(request.params);
    let data = await Product.deleteOne(
        { _id: request.params.id }
    )
    response.send(data);
});


app.put('/update/:_id', async (request, response) => {
    console.log(request.params);
    let data = await Product.updateOne(
        //{} : consition
        //{} : updated data 
        request.params,
        { $set: request.body }
    );
    response.send(data);
})


app.listen(5500);