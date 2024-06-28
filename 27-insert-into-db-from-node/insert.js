const dbConnect = require('./mongodb');

const insert = async () =>{

    const db = await dbConnect();
    // console.log(db);
    // const result = await db.insertOne(     // for single entry
    //     {name: "Nord 2T", brand: "OnePlus", price: 700, category: "Android"}
    // )

    const result = await db.insertMany([               //for m
        {name: "pixel 6", brand: "Google", price: 900, category: "Android"},
        {name: "iPhone 12 pro max", brand: "Apple", price: 1249, category: "Apple"},
        {name: "A-55", brand: "Samsung", price: 699, category: "Android"}
    ])

    // console.log(result);
    if(result.acknowledged){
        console.log("Product inserted successfully");
    }else{
        console.log("Failed to insert product");
    }
}

insert();