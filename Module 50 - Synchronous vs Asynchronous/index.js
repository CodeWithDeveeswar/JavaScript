function f1(){
    console.log("First");
}

function f2(){
    console.log("Second");
}

function f3(){
    console.log("Third");
}

f1();                 // Synchronous
setTimeout(f2, 2000); // Asynchronous
f3();                 // Synchronous

/*  
    Call Stack --> Web API --> Call Back Queue --> Event Loop

    Event Loop:

    1. Micro Task Queue - First Priority
        Promise

    2. Macro Task Queue - Second Priority
        SetTimeOut
        setInterval
*/