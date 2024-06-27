const {MongoClient} = require('mongodb');   // or it can be written as 

// const MongoClient = require('mongodb').MongoClient; // or it can be written as it ::: both are same 

const url = 'mongodb://localhost:27017';    // to give path for MongoClient

const database = 'e-comm';

const client = new MongoClient(url);  // set the path to client 

async function getData(){
    let result = await client.connect();
    let db = result.db(database);
    let collection = db.collection('products');
    let response = await collection.find({}).toArray();
    console.log(response);
}

getData();




// is is possible to connec 2 or more databases ??
// yes 
