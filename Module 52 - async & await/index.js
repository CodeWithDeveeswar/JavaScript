let newPromise = new Promise((fullfilled, failure) => {
    let dataReceived = false;
    if(dataReceived){
        fullfilled("Data Fetched Successfully");
    }
    else{
        // failure("Data Not Found");
        throw new Error("Search Proper Data");
    }
});

async function executePromise(){
    try{
        let message = await newPromise;

        let newMessage = await newPromise;

        console.log(message);
        console.log(`Next Message: ${newMessage}`);
    }
    catch(error){
        console.log(error.message);
    }
    finally{
        console.log("End");
    }
}

executePromise();
console.log("Last");
