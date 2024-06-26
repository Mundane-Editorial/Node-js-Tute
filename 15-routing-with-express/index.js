// route :: get , put, post, delete, 

const express = require('express');

const app = express();
app.get('', (request, response)=>{       

    console.log("data sent by the browser  ==>> ", request.query.name);    // server requests name from the browser and the browser the name which is further printed in the responses
    response.send("hello babe!!");     
})

app.get('/about', (request, response)=>{
    response.send('Hello, this is about section');
})

app.get('/help', (request, response)=>{

    response.send('Hello, this is help section');
})

app.listen(5000);