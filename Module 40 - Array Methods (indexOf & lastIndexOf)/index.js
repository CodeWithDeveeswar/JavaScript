// Array Methods (indexOf & lastIndexOf)

// indexOf - Search Left to Right

let arr = [10, 20, 30, 40, 50, 10]; 

// let newIndex = arr.indexOf(10, 2);
// let newIndex = arr.indexOf(20, -4);
let newIndex = arr.indexOf(20, 0);

console.log(newIndex);

// lastIndexOf - Search Right to Left

let arr1 = [10, 20, 30, 20, 40, 50, 10]; 

// let findIndexFromLast = arr1.lastIndexOf(10);
// let findIndexFromLast = arr1.lastIndexOf(20);
// let findIndexFromLast = arr1.lastIndexOf(20, -5);
let findIndexFromLast = arr1.lastIndexOf(20, 0);

console.log(findIndexFromLast);
