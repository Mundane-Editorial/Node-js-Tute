const express = require('express');

const EventEmitter = require('events');    // EventEmitter : it is an class 

const app = express();

const event = new EventEmitter();

let count = 0;

event.on("countAPI", ()=>{
    console.log("API event called", count++);

})


app.get('/', (req, res) => {
    res.send("api called");
    event.emit('countAPI');
});

app.get('/search', (req, res) => {
    res.send("search api called");
    event.emit('countAPI');
});

app.get('/put', (req, res) => {
    res.send("put api called");
    event.emit('countAPI');
});

app.get('/post', (req, res) => {
    res.send("post api called");
    event.emit('countAPI');
});


app.get('/create', (req, res) => {
    res.send("create api called");
    event.emit('countAPI');
});

app.listen(5500);