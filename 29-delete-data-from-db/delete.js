const dbConnect = require('./mongodb');

const deleteData = async () =>{
    console.log("function called");
    let data = await dbConnect(); 

    // let result = await data.deleteOne(    // to delete single  data object
    //     {name: "Google Pixel 6"}
    // );

    let result = await data.deleteMany(   //to delete multiple data objects
        {name: "iPhone 12 pro"}
    );

    console.log(result);

    if(result.acknowledged){
        console.log("Data deleted successfully");
    }
    else{
        console.log("No data found to delete");
    }

}

deleteData();


// if no data is deleted then the { acknowledged: true, deletedCount: 0 } acknowledgement will be true but the deleteCount will be 0