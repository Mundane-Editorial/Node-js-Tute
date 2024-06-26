// these are prebuilt modules that comes preinstalled 
/*
EG :: https,  console.log, buffer, fs, ss etc 
*/


// GLOBAL vs NON GLOBAL modules

//GLOBAL : no need to import , they can be used directly   :
/* EG */  console.log("this is a global module");

//filesystem module imported here,
const fs = require("fs");   //here 'fs' is a variable name 

//NON GLOBAL : Required import , only then it can be used   :
fs.writeFileSync('hello.txt', "file system basic example for global modules ");
// throws ERROR why?? filesystem module is not imported.. import it 

// a new file is created with name "hello.txt" which contains text "file system basic example for global modules"

/* Hello */