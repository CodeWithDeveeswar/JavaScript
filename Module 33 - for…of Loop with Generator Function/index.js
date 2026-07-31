// Array - For…Of Loop

let arr = [10, 100, 1000, 10000];

for(let val of arr){
    console.log(val);
}

// String - For…Of Loop

let str = "Javascript";

for(let char of str){
    console.log(char);
}

// For…Of Loop with Generator Function

function* genFunction(){
    yield "One"
    yield "Two"
    yield "Three"
}

let iterator = genFunction();

for(let val of iterator){
    console.log(val);
}
