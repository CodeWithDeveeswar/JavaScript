// Datatypes and Their Types

// Primitive Datatypes

// 1. Number

var num = 120;
var num = 1.5;

// 2. String 

let userName = "Javascript is a Scripting Language";

userName = 'Javascript is a Single threaded Language';
userName = `ECMA Script`;

// 3. Boolean

let condition = true;
condition = false;

// 4. Undefined 

// let noValue = undefined;
let noValue;

// 5. Null

let emptyValue = null;

console.log(num, userName, condition, noValue, emptyValue);

// Single line comment 

/* 
    Multi line comment
    Javascript
    React Js
*/ 

// Non-Primitive Datatypes or Reference types    

// 1. Array 

// Length                 1            2            3           4
let multipleUsers = ["React Js", "Javascript", "Facebook", "Instagram"];
// Index                  0            1            2           3

console.log(multipleUsers);
console.log(multipleUsers[0], multipleUsers[1], multipleUsers[3]);

console.log(multipleUsers.length);
console.log(multipleUsers.length-1);

console.log(multipleUsers[multipleUsers.length-1]);

// 2. Object (Key value pair)

let vehicle = {
    vehicleType : "Four Wheeler",
    brand : "Hyundai",
    price : 100000,
    fuelType : "Petrol"
};

console.log(vehicle);
console.log(vehicle.price);
console.log(vehicle.brand);
