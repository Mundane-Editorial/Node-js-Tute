const express = require('express');
const dbConnect = require('./mongodb');

const app = express();


app.get('/',async (request,response)=>{
    let data = await dbConnect();

    data = await data.find().toArray();

    // console.log(data);

    response.send(data)
});

app.listen(5500);
