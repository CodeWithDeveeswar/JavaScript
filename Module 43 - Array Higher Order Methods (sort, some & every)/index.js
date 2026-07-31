// sort() Method

// Ascending

// a - b => Positive, a > b => Swapping
// a - b => Negative, a < b => No Swapping

let arr = [10, 5, 100, 30, 6, 2];

let newArr = arr.sort((a, b) => {return a - b});

// a - b => 10 - 5 => 5 => Positive => Swap => [5, 10, 100, 30, 6, 2]
// a - b => 10 - 100 => -90 => Negative => No Swap => [5, 10, 100, 30, 6, 2]
// a - b => 100 - 30 => 70 => Positive => Swap => [5, 10, 30, 100, 6, 2]
// a - b => 100 - 6 => 94 => Positive => Swap => [5, 10, 30, 6, 100, 2]
// a - b => 100 - 2 => 98 => Positive => Swap => [5, 10, 30, 6, 2, 100]
// Final Result => [2, 5, 6, 10, 30, 100]

console.log(newArr);

// Descending

// b - a => Positive, b > a => Swapping
// b - a => Negative, b < a => No Swapping

let newArr1 = [10, 20, 30, 1, 4, true, "100"];

let descendingSort = newArr1.sort((a, b) => {return b - a});

// b - a => 20 - 10 => 10 => Positive => Swap => [20, 10, 30, 1, 4, true, "100"]
// b - a => 30 - 10 => 20 => Positive => Swap => [20, 30, 10, 4, 1, true, "100"]
// b - a => true - 1 => 1 - 1 => 0 => Equal => No Swap => [20, 30, 10, 4, 1, true, "100"]
// b - a => "100" - true => 100 - 1 => 99 => Positive => Swap => [20, 30, 10, 4, 1, "100", true]
// Final Result => ["100", 30, 20, 10, 4, 1, true]

console.log(descendingSort);

// some() Method

let arr1 = [1, 2, 3, 4, 5];

let value = arr1.some((ele, index, arr) =>{
    return ele % 2 == 0;
});

// every() Method

let arr2 = [1, 2, 3, 4, 5];

let value1 = arr2.every((ele, index, arr) =>{
    return ele % 2 == 0;
});

console.log(value, value1);
