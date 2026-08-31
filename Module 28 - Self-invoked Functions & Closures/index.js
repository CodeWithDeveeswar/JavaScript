// Normal Function

function normalFun(){
    console.log("Executed Whenever i called");
}

normalFun();
normalFun();
normalFun();

// Self-invoked Function (IIFE) 
// IIFE - Immediately Invoked Function Expression

(function (userName, age){
    console.log("Self-invoked Functions", userName + age);
})("Deveeswar", 23);

// Closure

function outerFunction(){
    let outerVariable = "Im from outer scope";

    function innerFunction(){
        console.log(outerVariable);
    }

    return innerFunction;
}

let innerFun = outerFunction();

innerFun();