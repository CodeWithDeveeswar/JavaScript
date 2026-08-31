// Post Increment 

// 1. Substitute
// 2. Operation
// 3. Increment

let num = 20;           

// let num1 = num++; // Assign current value (20) to num1, then increase num to 21

// console.log(num, num1); // 21 20

let num1 = num++ + num++; // First num++ returns 20, then num becomes 21
                          // Second num++ returns 21, then num becomes 22
                          // num1 = 20 + 21 = 41

console.log(num, num1); // 22 41

// Pre Increment 

// 1. Increment
// 2. Substitute 
// 3. Operation 

let newNum = 40;

// let newNum1 = ++newNum; // First increment newNum to 41, then assign 41 to newNum1

// console.log(newNum, newNum1); // 41 41

let newNum2 = ++newNum + ++newNum; // First ++newNum makes it 41 and returns 41
                                   // Second ++newNum makes it 42 and returns 42
                                   // newNum2 = 41 + 42 = 83

console.log(newNum, newNum2); // 42 83

// Post Decrement & Pre Decrement

let num2 = 10;

// Post Decrement

// 1. Substitute
// 2. Operation
// 3. Decrement

/* 

let num3 = num2-- + --num2; // num2-- returns 10, then num2 becomes 9
                            // --num2 makes num2 8, then returns 8
                            // num3 = 10 + 8 = 18

console.log(num2, num3); // 8 18

*/

// Pre Decrement

// 1. Decrement
// 2. Substitute
// 3. Operation

let num4 = --num2 + num2--; // --num2 makes num2 9 and returns 9
                            // num2-- returns 9, then num2 becomes 8
                            // num4 = 9 + 9 = 18

console.log(num2, num4); // 8 18