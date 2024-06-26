console.log("Node js tute");
var a = 20;
var b = 30;
var c = 40;
console.log(a+b+c);
console.warn(a+b+c);

// is JS console.log("") and Node console.log("") same ???
// ans : no  ...  js script doesnot have anything like that ...a. its the funciton of either browser or node npm package



module.exports={
    export_variable1 : 1,
    export_variable2 : 5,

    z:function(){
        console.log("this is z function called from index.js file");
    }
}