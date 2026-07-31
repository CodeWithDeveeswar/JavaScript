// Default Parameters

function printUserName(uName="Johny", uAge=30){
    console.log(`Hi ${uName}, your age is ${uAge}`);
}

printUserName("Kesavan", 40);
printUserName("Murugesan", 60);
printUserName("David", 25);
printUserName("Madhan", undefined);
printUserName(undefined, 35);
printUserName();

// Default Values 

// let employeeId = "IFS12345";
let employeeId = "";
let newId = employeeId || "UQI123";

console.log(newId);
