// Promises

let newPromise = new Promise((fullFilled, failure) => {
    let dataReceived = true;
    if(dataReceived){
        fullFilled("Data Fetched Successfully");
    }
    else{
        // failure("Data Not Found");
        throw new Error("Search Proper Data");
    }
});

// async & await

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
