const express = require('express');
const path = require('path');
const app = express();

const publicfolder = path.join(__dirname, 'public');


// app.use(express.static(publicfolder));
app.get('',(request, response) => {     // using this, the extensionn is hidden 
    response.sendFile(path.join(`${publicfolder}/index.html`));
})        

app.get('/about',(request, response) => {       // using this, the extensionn is hidden 
    response.sendFile(path.join(`${publicfolder}/about.html`));
})


app.get('/contact',(request, response) => {         // using this, the extensionn is hidden 
    response.sendFile(path.join(`${publicfolder}/contact.html`));
})

app.get('*', (request, response) => {     //this is 404 page not found error page
    response.sendFile(path.join(`${publicfolder}/default.html`));
})


app.listen(5500)