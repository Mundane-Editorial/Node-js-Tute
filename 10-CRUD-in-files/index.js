// create
// read
// update
// delete
// rename

const fs = require('fs');

const path = require('path');
const dirpath = path.join(__dirname, './crud/');
// fs.writeFileSync('apple.txt', "this is an sample file");
const filepath =  `${dirpath}/apple.txt`;

fs.writeFileSync(filepath, "this is an sample file");  // create file 

fs.readFile(filepath, 'utf-8', (error, data)=>{   //read file 
    console.log(data);
})  // and now, it prints "buffer and few random numbers ??? why   ?????"

// it can be resolved simply bu giving it encoding type as "utf-8" in the readfile paraeters   ::: fs.readFile(filepath, 'utf-8', (error, data)

fs.appendFileSync(filepath, ' and this is appended text', (error)=>{    // update file
    if(!error) console.log("file is updated successfully...");
    else console.log(error);
})


// rename file name 

// fs.rename(filepath, `${dirpath}/fruit.txt`,(error)=>{
//     if(!error) console.log("file is updated successfully...");
//     else console.log(error);
// })


// Delete a specific file
try {
    fs.unlinkSync(filepath);
    console.log(`${dirpath} was deleted successfully`);
  } catch (error) {
    console.error(`Error deleting file: ${error}`);
  }
  


  // what is buffer  ?????
  // it is a temporary to perform some operations 
  