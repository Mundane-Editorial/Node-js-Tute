const value = 20;
// value = 30;   // it will throws error message as value is a constant variable 

var x = 20;
if(x === 20){    // tripple equals to means that == + it will check data type too 
    console.log("x is 20");
}

//loops in node 
var a = 10;
for(i = 0; i<a; i++){
    console.log(i);
}


//Arrays
const arr = [1, 2, 3, 4, 5];
console.log(arr);


// and now lets say i need to import a variable from another value for perfoming a operation suppoer its ".\index.js" , 
const index = require("./index.js");

for(var i = index.export_variable1; i<=index.export_variable2; i++){
    console.log(i);
}

console.log(index.z());


// //FILTER FUNCTION : Interview question :: what is the use of filter function 
// filter function only works with ARRAYS and is used to filter the array based on a particular condition 
// like return values in a array if the Element is greater than 7 so we'll filter fucntion

//FILTER function
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let result = array.filter((item)=>{   //basically here "item" is a variable that is storing values inside the array at a particular index
    console.log(item);

    //if i had to return the count of a particular key then i'll use,

    // return item === 3;       //it will check both the value and the datatype and the value is stored in result variable .
    return item >= 3;
})

console.warn(result);

// here, arrow funciton is used :::  why ???? OR I SHOULD SAY, WHAT IS THIS ARROW FUNCTION ???
/* arrow functions inherit the value from the surrounding scope, while traditional functions bind their own value */