// Array Methods (splice, pop, push, shift, unshift)

let arr = [100, 200, 300, 400];

// pop() Method

let poppedVal = arr.pop();

console.log(poppedVal, arr);

// push() Method

arr.push(500, 550, 600);

console.log(arr);

// shift() Method

let shiftedVal = arr.shift();

console.log(shiftedVal, arr);

// unshift() Method

arr.unshift(50, 75);

console.log(arr);

// splice() Method

// Syntax: array.splice(startIndex, deleteCount, item1, item2, ...)

// Delete using splice

let removedItems = arr.splice(2, 2);

console.log(removedItems, arr);

// Insert using splice

arr.splice(2, 0, 250, 350);

console.log(arr);

// Replace using splice

arr.splice(4, 2, 800, 900);

console.log(arr);

