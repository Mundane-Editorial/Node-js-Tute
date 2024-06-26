// now, how to handle a situation where a fucntion us depenent upon the execution of another ,
//  WE'LL USE :::::    

//          promise

let a = 20;
let b = 0;

/*
setTimeout(()=>{
    b=30;
}, 2000)
*/


// now, make the above fucntion as a promise

let promise = new Promise((resolve, reject)=>{      
    setTimeout(()=>{
        resolve(30) // resolve is used to get the value that needs time to execute
    }, 2000)
})

promise.then((data)=>{
    console.log(a+data);
})