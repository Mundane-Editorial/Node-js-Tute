const express = require('express');
const path = require('path');   
const app = express();

const pathfolder = path.join(__dirname, 'public');

app.use(express.static(pathfolder));  // express.static is used for static files 

app.listen(5000);         // this is all self explaining 



// css and images can't be used here because all these are crossing node js and it doesn't suppost these 
