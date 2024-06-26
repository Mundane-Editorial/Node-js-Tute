console.log("start execution");

setTimeout(()=>{ // this function is taking 2000ms to execute so the statement below this will be executed first and after the timer is completed, this funciton will be executed
    console.log("middle execution");
}, 2000)

console.log("end execution");


// drawback 
let a = 10;
let b = 0;

setTimeout(()=>{
    b = 100;
}, 2000)

console.log(a+b);    // this line is executed without getting the value 