const express = require('express');

require('./config');

const Product = require('./product');

const app = express();

app.use(express.json());

app.post('/create', async(request, response) => {

    let data = new Product(request.body);
    let result = await data.save();

    console.log(result);
    response.send(result);
})

app.listen(5500);