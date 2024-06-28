const express = require('express');
const dbConnect = require('./mongodb');

const mongodb = require('mongodb');   // this will be used for deleting an object using its id (basically imported mongodb library functions to get id)
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

app.delete('/:id', async(request, response)=>{
    console.log(request.params.id);
    const data = await dbConnect();
    const result = await data.deleteOne({_id: new mongodb.ObjectId(request.params.id)}); 
    response.send(result);
});

app.listen(5500);