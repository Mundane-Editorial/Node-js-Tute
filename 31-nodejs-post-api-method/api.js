const dbConnect = require('./mongodb');

const express = require('express');

const app = express();

app.use(express.json());   // used to get data from the postman(for testing purpose only) and is converting it into JSON 

app.get('/', async (request, response)=>{
    let data = await dbConnect();
    data = await data.find().toArray();
    response.send(data);
})

app.post('/', async (request, response)=>{
    // console.log(request.body);    // here this line is used to access the data that came using postman 

    let data = await dbConnect();
    let result = await data.insertOne(request.body);


    response.send(request.body);
})

app.listen(5500);



// in order to get the body from using request ,we'll use body parser but now after the new updates of expressjs, it is being depricated now and now we use request.body.