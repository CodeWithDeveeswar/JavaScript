// Array

let flavors = ["Vanilla", "Butterscortch", "Lavendar", "Chocolate"];

console.log(flavors);

console.log(flavors[0]);
console.log(flavors[1]);
console.log(flavors[2]);
console.log(flavors[3]);

console.log(flavors[flavors.length - 1]);

// Array Literal

let sample = [1, "two", true, null, undefined, {id:1}];

console.log(sample);

// Array Constructor

let newArray = new Array();

newArray[0] = "First";
newArray[1] = "Second"; 
newArray[2] = "Third";
newArray[3] = "Fourth";

console.log(newArray);
console.log(newArray.length);

// Dense vs Sparse Array

let denseArray = [1, 2, 3, 4, 5];  // Uses contiguous memory locations

// Example Base Address: 1004, 1008, 1012, 1016, 1020 

// Memory Address = Base Address + (index * size)
//                = 1004 + (0 * 4) = 1004

console.log(denseArray);

let sparseArray = [10, 20,, 40,, 60]; // Uses a Hash Table or Hash Map internally

console.log(sparseArray);
