const express = require('express');
const reqFilter = require('./middleware');
const app = express();



// app.use(reqFilters);  // isko yaha se hta k ek particular get function m lga do 


// now agr bahot saare routes ek saath lgane hai tb kya karoge ????
const route = express.Router();

route.use(reqFilter);

app.get('/',(request, response) => {
    response.send("hello babe!!");
})

app.get('/about', (request, response) => {
    response.send("about section!!");
})

app.get('/help', (request, response) => {
    response.send("bachaoooo!!");
})

app.get('/contact', (request, response) => {
    response.send("contact section!!");
})


//ab multiple routes ko multiple pages pe lgane k liye hum use krenge 

route.get('/multipleroute', (request, response) => {
    response.send("multiple route section 1  !!");
})
route.get('/multipleroute2', (request, response) => {
    response.send("multiple route section 2  !!");
})

app.use('/', route);

app.listen(5500);