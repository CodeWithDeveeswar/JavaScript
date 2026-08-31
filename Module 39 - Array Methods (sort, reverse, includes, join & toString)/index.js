// Array Methods (sort, reverse, includes, join & toString)

// sort() Method

let arr = [5, 1, 4, 6, 2, 8, 10, 20, 15, 45, 101, 111, 26, 345, "&", " "];

arr.sort(); // Sort in ASCCI Order

console.log(arr);

// reverse() Method

let arr1 = [10, 20, 30, 40];

arr1.reverse();

console.log(arr1);

// includes() Method

console.log(arr1.includes(40));
console.log(arr1.includes(11));

// join() Method 

let arr2 = [1, 2, 3, 4, 5];

let joinedVal = arr2.join("*");

console.log(joinedVal);

// toString() Method

let arr3 = [10, 20, 30, 40, 50];

let stringVal = arr3.toString();

console.log(stringVal);
