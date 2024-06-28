const dbConnect = require('./mongodb');

dbConnect.then((response)=>{
    response.find({name: "Nord ce 2"}).toArray().then((data)=>{
        console.log(data);
    })
})

const main = async () =>{
    console.log("main function called");
    let data = await dbConnect();
    data = await data.find().toArray();
    console.warn(data);
}

main();  