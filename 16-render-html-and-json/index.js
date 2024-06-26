const express = require(`express`);
const app = express();

app.get('', (request, response)=>{      
    response.send("<h1>hello babe!!</h1> <a href='https://localhost:5000/about'>about</a>");    
})

app.get('/about', (request, response)=>{
    response.send(`
        <input type='text' placeholder="username" value = "${request.query.name}"></input> `);
})

app.get('/help', (request, response)=>{
    response.send({
        name : 'help',
        usage: 'Usage',
        site: 'Site',
        email: 'Email'
    });
})

app.listen(5000);


//this didn't worked as expecte dbut still able to know what are we trying to do 

