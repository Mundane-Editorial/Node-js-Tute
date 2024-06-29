const os = require('os');

// console.log(os);  // prints all information about your os
// console.log(os.arch());    // prints the architecture of your os 
// console.log(os.freemem()/(1024*1024));     // prints the available RAM space in bytes 
// console.log(os.totalmem()/(1024*1024));    // prints the total installed memory in bytes
// console.log(os.hostname())(;    //printss the hostname of your system
// console.log(os.platform()); // prints the platform of your device
console.log(os.userInfo()); // prints the user information

// and many more functions