const express = require('express');
const app = express();


const reqFilters = (request, response, next)=>{      // basically it's a condition to use the web app 
    // console.log('reqFilter');
    if(!request.query.age){  
        response.send("provide your age here");
    }
    else if(request.query.age < 18){  
        response.send("you can't access this page ");
    }else{
        next();
    }
}

app.use(reqFilters);    //if above is true then the other will be accessed 

app.get('/',(request, response)=>{
    response.send("Hello, world!");
})
app.get('/users',(request, response)=>{
    response.send("Hello, users!");
})



app.listen(5500);