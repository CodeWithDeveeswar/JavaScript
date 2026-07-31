// Return Type

function findRectArea(l, b){
    let condition = true;
    if(condition){
        return l * b;
    }
    else{
        return null;
    }
}

let newVal = findRectArea(20, 10)
console.log(findRectArea(100, 50), newVal);

function cubic(num){ 
    return num ** 3;
}

let newVal1 = cubic(4);

console.log(newVal1);

// Non-return Type

function name(){
    console.log("Non-return type");
}

// name();

let noReturn = name();

console.log(noReturn);
