const express = require('express');
const app = express();



app.set('view engine', 'ejs');

app.get('/profile', (request, response) => {
    const user = {
        name: 'Rahul',
        age: 20,
        hobbies: ['music', 'cricket', 'football']
    };
    response.render('profile', {user});

});

app.listen(5500);