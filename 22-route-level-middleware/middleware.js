module.exports = reqFilters = (request, response, next)=>{      
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