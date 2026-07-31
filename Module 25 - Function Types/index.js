// Named Function 

function add(uName){
    console.log("Named Function " + uName);
}

add("Im a Function");

// Anonymous Function

let AnonFun = function(){
    console.log("Anonymous Function");
}

AnonFun();

// Arrow Function

let arrowFun = () => {
    console.log("Arrow Function");   
}

arrowFun();

// Higher Order Function And Call Back Function

function function1(){
    console.log("Im a Higher Order Function");
}

function function2(){
    console.log("Im a Call Back Function");
}

function1(function2());

