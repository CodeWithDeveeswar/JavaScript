// Array Higher Order Methods (forEach vs map)

let fruits = ["Apple", "WaterMelon", "MuskMelon", "Banana"];

// forEach() Method

// fruits.forEach(printFruit);

// function printFruit(currentElement, index, totalArray){
//     console.log(currentElement, index, totalArray);
// }

let newArr = fruits.forEach((cElement)=>{
    console.log(cElement.toUpperCase());
    return cElement;
});

console.log(newArr);

// map() Method

// fruits.map(function(currentEle, index, totalArr){
//     console.log(currentEle, index, totalArr);
// })

let newArr1 = fruits.map((cElement, index)=>{
    return {id : index + 1, fruit : cElement};
});

console.log(newArr1);

// Chaining Method

// let newArr3 = fruits.forEach(cEle => cEle.toUpperCase()).sort().fill("123");

// console.log(newArr3); // TypeError: Cannot read properties of undefined (reading 'sort')

let newArr2 = fruits.map(cEle => cEle.toUpperCase()).sort().fill("123");

console.log(newArr2);

// Conditional Based Statement

let newArr4 = fruits.map((cEle) => {return cEle == "Apple"});

console.log(newArr4);

let newArr5 = fruits.forEach(val => console.log(val == "Apple"));

