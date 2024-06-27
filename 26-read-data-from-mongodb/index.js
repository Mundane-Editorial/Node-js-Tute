/*         --- all this code is sent to mongodb.js file 

const {MongoClient} = require('mongodb');   // or it can be written as 

// const MongoClient = require('mongodb').MongoClient; // or it can be written as it ::: both are same 

const url = 'mongodb://localhost:27017';    // to give path for MongoClient

const database = 'e-comm';

const client = new MongoClient(url);  // set the path to client 

async function dbConnect(){
    let result = await client.connect();
    let db = result.db(database);
    return db.collection('products');
    // let response = await collection.find({name: "m-40"}).toArray();
    // console.log(response);
}

*/      // now we just need to import that funciton from mongodb.js file 

const dbConnect = require('./mongodb');

// what is a promise ????
// >> if a statement takes time to execute then promise is used :::: promise returns a particular asked value whenever the statement is executed apart from providing incomplete or inappropriate results 


// method 1 to retrieve data from database
// dbConnect();
// console.warn(dbConnect());
// dbConnect().then((response)=>{       // tohandle a promise 
//     response.find({name: "Nord ce 2"}).toArray().then((data)=>{
//         console.warn(data);
//     });
// })



// 2nd method to read data from database

const main = async () =>{
    console.log("main function called");
    let data = await dbConnect();
    data = await data.find().toArray();
    console.warn(data);
}

main();    // widely used method 