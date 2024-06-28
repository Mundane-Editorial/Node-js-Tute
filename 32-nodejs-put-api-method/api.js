const express = require('express');
const dbConnect = require('./mongodb');
const app = express();

app.use(express.json());

app.get('/', async(request, response)=>{
    let data = await dbConnect();
    data = await data.find().toArray();
    response.send(data);
});

app.post('/', async(request, response)=>{
    let data = await dbConnect();
    let result = await data.insertOne(request.body);
    response.send(result);
})

app.put('/', async(request, response)=>{
    // console.log(request.body);
    let data = await dbConnect();
    let result = await data.updateOne(
        {name: request.body.name},
        {$set: request.body}
    )
    response.send({result: "updated"});
});

app.listen(5500);