// Logical Operators

// Logical AND ( && )

/*
    Cond1     Cond2     Result
    true      true      true
    true      false     false
    false     true      false
    false     false     false
*/

let age = 18;

console.log(age >= 18 && age <= 30); // true && true = true

let age1 = 35;

console.log(age1 >= 18 && age1 <= 30); // true && false = false

let age2 = 16;

console.log(age2 >= 18 && age2 <= 30); // false && true = false // Short Circuit Evaluation 

let idProof = "Aadhaar";

console.log(idProof == "PanCard" && idProof == "Driving License"); // false && false = false

// Logical OR ( || )

/*
    Cond1     Cond2     Result
    true      true      true
    true      false     true
    false     true      true
    false     false     false
*/

let pass_input = "12345";

console.log(pass_input == "12345" || pass_input == "54321"); // true || false = true

let pass_input1 = "54321";

console.log(pass_input1 == "12345" || pass_input1 == "54321"); // false || true = true

let userName = "abc";

console.log(pass_input1 == "54321" || userName == "abc"); // true || true = true

console.log(pass_input == "98765" || userName == "xyz"); // false || false = false

// Logical NOT ( ! )

let num = 10 > 4;

console.log(!num); // false

let num1 = 5 > 20;

console.log(!num1); // true

console.log(!false); // true

console.log(!true); // false


