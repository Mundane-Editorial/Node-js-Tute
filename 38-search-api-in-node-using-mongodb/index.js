const express  = require('express');

require('./config');

const app = express();

const product = require('./product');

app.use(express.json());

app.get('/search/:key', async (request, response)=>{
    console.log(request.params.key);
    let data = await product.find(
        {
            "$or" : [
                {"name": {$regex: request.params.key}},
                {"brand": {$regex: request.params.key}}
            ]
        }
    );
    response.send(data)
})


app.listen(5500);