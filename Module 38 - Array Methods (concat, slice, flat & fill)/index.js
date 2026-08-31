// Array Methods (concat, slice, flat & fill)

// concat() Method

let arr = [1, 2, 3, 4];
let arr1 = [4, 5, 6, 7];

let newArr = arr.concat(arr1);
let newArr1 = arr.concat(10, 20, 30);
let newArr2 = [].concat(arr);

arr[0] = 111;

console.log(newArr, newArr1, newArr2, arr);

// slice() Method

let newArray = [10, 2, 3, 4, 5, 6, 7];

let slicedVal = newArray.slice();

newArray[0] = 101;

let slicedVal1 = newArray.slice(1);
let slicedVal2 = newArray.slice(1, 4); // (start, end - 1) (1, 4 - 1 = 3)
let slicedVal3 = newArray.slice(0, 3); // (start, end - 1) (0, 3 - 1 = 2)

console.log(slicedVal, slicedVal1, slicedVal2, slicedVal3);

// flat() Method

let Arr = [1, 2, 3, [4, [5, 6, [40, 50, [70, 80]]]]];

let NewArr = Arr.flat(2);
let NewArr1 = Arr.flat(Infinity);

console.log(Arr, NewArr, NewArr1);

// fill() Method

let ARR = [10, 20, 30];

ARR.fill(101, 0, 2); // (value, start, end - 1) (101, 0, 2 - 1 = 1)
ARR.fill(103, 2, 3); // (value, start, end - 1) (103, 2, 3 - 1 = 2)

console.log(ARR);
