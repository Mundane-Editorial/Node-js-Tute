const express = require('express')
// const path = require('path');   // no need
const app = express();



app.set('view engine', 'ejs');

app.get('/profile', (request, response)=>{
    const user = {
        name : 'uday',
        age : 21,
        email : 'uday@gmail.com',
        contact : 7580075659,
        skills : ['java', 'python', 'jhinga lala hu hu']
    };
    response.render('profile', {user});
})

app.get('/login', (request, response)=>{

    response.render('login');
})

app.listen(5600, ()=>{
    console.log('server is running on port 5600');
});