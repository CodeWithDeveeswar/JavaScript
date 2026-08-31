// Type Conversion (Implicit & Explicit)

// Implicit Type Conversion 

let str = "45";
let num = 100;

console.log(str + num);         // 45100
console.log(typeof(str + num)); // string

// String

console.log("Hi" + true);      // Hitrue
console.log("Hi" + undefined); // Hiundefined
console.log("Hi" + null);      // Hinull
console.log("Hi" + [1,2]);     // Hi1,2
console.log("Hi" + {});        // Hi[object Object]

// String + Anything = String
// Anything + String = String

// Number 

console.log(10 + true);  // 10 + 1 = 11
console.log(10 + false); // 10 + 0 = 10

// true = 1, false = 0

console.log(10 + undefined);   // NaN - Not A Number
console.log(10 + null);        // 10 + 0 = 10
console.log(10 + [1,2]);       // 101, 2
console.log(typeof(10 + [1])); // string
console.log(10 + {});          // 10[object Object]
console.log(typeof(10 + ''));  // string
console.log(10 - 'abc');       // NaN
console.log(10 - '');          // 10

// Boolean 

console.log(true + 10);        // 11
console.log(true + undefined); // NaN
console.log(true + null);      // 1

// Explicit Type Conversion

// Number 

console.log(10 + Number("10"));  // 20
console.log(Number("abc"));      // NaN
console.log(Number(true));       // 1
console.log(Number(false));      // 0
console.log(Number([]));         // 0
console.log(Number([1]));        // 1
console.log(Number([1,2]));      // NaN
console.log(Number({}));         // NaN

// Boolean 

console.log(Boolean(""));        // false
console.log(Boolean("123"));     // true
console.log(Boolean(10));        // true
console.log(Boolean(-10));       // true
console.log(Boolean(0));         // false
console.log(Boolean(undefined)); // false
console.log(Boolean(null));      // false
console.log(Boolean([]));        // true
console.log(Boolean([1]));       // true
console.log(Boolean({}));        // true
console.log(Boolean(Infinity));  // true
console.log(Boolean(-Infinity)); // true
console.log(Boolean(NaN));       // false

// String

console.log(String());          // ""
console.log(String(10));        // "10"
console.log(String(true));      // "true"
console.log(String(false));     // "false"
console.log(String(null));      // "null"
console.log(String(undefined)); // "undefined"
console.log(String([1,2]));     // "1,2"
console.log(String({}));        // "[object Object]"