const { error } = require('console');
const fs = require('fs');
// fs.writeFileSync('apple.text', 'this is an demo file containing apples');

// here i can see that the file is not created inside the "files" folder ::: so what to do now ??

// so in order to create a new file in the desired folder/location, we'll use the global module "path"

const path = require('path');  //used path module

const dirname = path.join(__dirname);   // now, what is this path.join doing ???\   ----- and the __dirname gives the currecct directory 
/*This method is used to join multiple path segments into a single path string in a way that handles
 various edge cases and ensures that the resulting path is normalized. It takes care of adding the 
 appropriate separators (/ on UNIX-based systems and \ on Windows) between segments.*/


console.warn(dirname);  // it prints the current location of the file

// now, to go inside the "files" folder we'll use

const filefolderpath= path.join(__dirname,'files');

console.warn(filefolderpath);
// now to create file d

fs.writeFileSync(path.join(filefolderpath,'apple.text'), 'this is an demo file containing apples');




// similarly to create multiple files :: use loops 
const filesfolder = path.join(__dirname, 'files');
var i = 5;
while (i) {
    const filepath = path.join(filesfolder, `testfile${i}.txt`);
    fs.writeFileSync(filepath, `this is text file ${i} containing sample data`);
    i--;
}

// now i have to read the files folder and list the files inside it 
fs.readdir(filesfolder, (error, files)=>{
    console.warn(files); // output will be in array format
})


// and now, what if i need to access only a particular file inside the directory
fs.readdir(filesfolder, (error, files)=>{
    files.forEach((item)=>{
        console.warn(item);
    })
})


/*
    now, just like we accessed the files folder using the node module, is it possible to access the files from a different location ????

    answer  ::: no, its not possible because when we run a node file, it creates a web environment which is isolated so it can't be accessed due to security concerns
    else aapka saare data can be compromised agr aisa kuch hua toh.
*/