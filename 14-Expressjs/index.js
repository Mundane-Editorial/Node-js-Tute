// install express 

const express = require('express');

const app = express();
app.get('', (request, response)=>{      // aap : is name of express module installed     // get is http methods like put, post, delete etc
    response.send("hello babe!!");    // response.send is used to show a response message
})

app.get('/about', (request, response)=>{
    response.send('Hello, this is about section');
})

app.get('/help', (request, response)=>{
    response.send('Hello, this is help section');
})

app.listen(5000);