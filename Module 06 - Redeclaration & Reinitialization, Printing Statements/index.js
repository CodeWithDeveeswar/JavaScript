// Redeclaration & Reinitialization

// 1. Var

// var age = 30; // Declaration & initialization

var age;         // Declaration
age = 40;        // initialization or Assigning

var age = 80;    // Redeclaration 
age = "Eighty";  // Reinitialization or Reassign

console.log(age);

// 2. let 

// let newAge = 150; // Declaration & initialization

let newAge;          // Declaration
newAge = 100;        // initialization or Assigning

// let newAge = 30;  // Redeclaration is not possible
newAge = "Hundred";  // Reassign

console.log(newAge);

// 3. const 

const employeeName = "xyz"; // Declaration & Initialization

// employeeName = "abc";    // Reassign is not possible

console.log(employeeName);

// Printing Statements

// 1. alert()

let alertMessage = "Welcome to JavaScript";
alert(alertMessage);

// 2. write()

let writeMessage = "JavaScript";
document.write(writeMessage);

// 3. writeln()

let writelnMessage = "JavaScript";
document.writeln(writelnMessage);

// 4. confirm()

let confirmMessage = "Do you want to continue?";
confirm(confirmMessage);

// 5. prompt()

let promptMessage = "Enter Your Age";
let userInput = prompt(promptMessage);

// 6. console.log()

console.log(userInput);

// 7. console.error()

let errorMessage = "Error";
console.error(errorMessage);

// 8. console.warn()

let warningMessage = "Warning";
console.warn(warningMessage);

// 9. console.clear()

// console.clear();