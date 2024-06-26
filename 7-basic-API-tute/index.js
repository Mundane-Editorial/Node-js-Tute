const http = require('http');
// const data = require('./api-data.js');  //this line is importing the data from "api-data.js" file.
const apidata = require('./api-data.js');
http.createServer((request, response)=>{
    response.writeHead(200, {'Content-Type': 'application/json'});  // here, 200 is an gateway status code : used to show the type of responses "https://en.wikipedia.org/wiki/List_of_HTTP_status_codes"
    // response.write(JSON.stringify(data));    // here, JSON.stingify function is used convert all the responses into a string and the variable 'data' contains all the information 
    response.write(JSON.stringify(apidata));
    response.end();

}).listen(5500);


const fs = require('fs');

fs.writeFileSync('info.txt', "here in file name 'index.js', a server is created first and then response. writehead  is used to specify the content type of the API key, here the port on which api is working is localhost:port:5500 i.e the postnumber")