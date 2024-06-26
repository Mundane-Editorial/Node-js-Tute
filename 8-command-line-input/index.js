// how to use command line to write commands 

console.log("Writing commands"); // input given in vscode 

// console.log(process); // it has a lot of stuff

// so to tackle this, we use,argumentV  as 'argv'

console.log(process.argv);
/*   OUTPUT : 
  'C:\\Program Files\\nodejs\\node.exe',
  'E:\\Node js tute\\8-command-line-input\\index.js'

*/

// node to write data using terminal, 
//use
/*
    node .\filename.js yourdata      -- and it will be printed

    OUTPUT :: 
     'C:\\Program Files\\nodejs\\node.exe',   array index 0 :: tells where your nodejs is installed
     'E:\\Node js tute\\8-command-line-input\\index.js',  array index 1 :: tells current directory
     'hello'    array index 2  :: tells the data you have enteres using command line input
]

    here the values are stored in array and previous 2 values 
*/

// Inorder to get an particular indexed value use,
console.log(process.argv[2]);




// lets make it meaningfull 

const fs = require('fs');
const input = process.argv;



if(input[2] == 'add'){
    fs.writeFileSync(input[2], input[3]);
}else if(input[2] == 'remove'){
    fs.unlinkSync(input[2], input[3]);
}
else{
    console.log("Invalid command");
}