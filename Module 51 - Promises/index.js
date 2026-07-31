let newPromise = new Promise((resolve, reject) => {
    let dataReceived = true;

    if(dataReceived){
        resolve("Data Received");
    }
    else{
        reject("Data Not Received");
    }
});

newPromise.then((message) => {
    console.log("Success: " + message);
    return "Next Success " + message;
})
.then((nextMessage) => {console.log(nextMessage)})
.catch((error) => {
    console.log("Failure: " + error);
})
.finally(() => {
    console.log("End");
});
