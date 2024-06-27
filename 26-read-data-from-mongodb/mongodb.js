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

module.exports = dbConnect;