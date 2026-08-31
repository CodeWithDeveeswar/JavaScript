// Variable Scope

// var - function variable scope 

function outerFunction(){
    if(true){
        var functionVar = "Im a Variable";
    }
    console.log(functionVar);
}

outerFunction();

// let, const - block variable scope 

function blockScoped(){
    let blockVariable = "Im a Block scoped variable";
    if(true){
        const blockVariable1 = "Im a const variable";
        console.log(blockVariable);
        console.log(blockVariable1);
    }
}

blockScoped();

// global variable scope 

var a = 10;
let b = 20;
const c = 30;

function accessGlobalLocalVar(){
    // var a = 101;
    // let b = 202;
    // const c = 303;

    function innerFunction(){
        // var a = 100;
        // let b = 200;
        // const c = 300;
        console.log(a + b + c);
    }

    innerFunction();

    console.log(a + b + c);
}

accessGlobalLocalVar();

console.log(a + b + c);