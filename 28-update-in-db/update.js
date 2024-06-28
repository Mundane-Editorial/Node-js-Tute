const dbConnect = require('./mongodb');

const updateData = async () =>{
    let data = await dbConnect();

    // let result = await data.updateOne(        // to update only one record at a time       // only first one will be updated 
    //     {name: "pixel 6"},    // check condition 
    //     {$set:{name: "Google Pixel 6"}}  //to be updates
    // );

    // to update all at once we'll use
    let result = await data.updateMany(        // to update only one record at a time 
        {name: "pixel 6"},    // check condition 
        {$set:{name: "Google Pixel 6"}}  //to be updates
    );
    console.warn(result);

}

updateData();    