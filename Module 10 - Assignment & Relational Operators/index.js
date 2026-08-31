// Assignment Operators 

let age = 20;
let additionalVal = 100;

age += 20; // age = age + 20 ==> 20 + 20 = 40
age += additionalVal; // age = age + additionalVal ==> 40 + 100 = 140

age -= 10; // age = age - 10 ==> 140 - 10 = 130

age *= 2; // age = age * 2 ==> 130 * 2 = 260

age /= 2; // age = age / 2 ==> 260 / 2 = 130

age %= 2; // age = age % 2 ==> 130 % 2 = 0

age **= 2; // age = age ** 2 ==> 0 ** 2 = 0 

console.log(age);

// Relational or Comparison Operators

// Less than
console.log(20 < 20);     // false

// Less than or equal to
console.log(21 <= 20);    // false

// Greater than
console.log(40 > 40);     // false

// Greater than or equal to
console.log(40 >= 39);    // true

// Equal to
console.log(40 == '40');  // true
console.log(40 == 40);    // true

// Not equal to
console.log(40 != '50');  // true
console.log(40 != 50);    // true

// Strict Equal to
// Equal value and same type
console.log(40 === '40'); // false
console.log(40 === 40);   // true

// Strict Not Equal to
// Not equal value and Not same type
console.log(40 !== '40'); // true
console.log(40 !== 40);   // false








