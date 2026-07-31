// Spread Operator

// Array 

let hobbies = ["Cricket", "FootBall", "BasketBall"];
let hobbies1 = ["Reader", "Writer"];

let newArray = [...hobbies, ...hobbies1];

let newArray1 = [...newArray, "VideoCreator", "Content Writer"];

console.log(newArray);
console.log(newArray1);

// Object

let empDetail = {
    empId : "IQ123",
    empName : "Kesavan",
    empRole: "React Developer"
};

let team2 = {...empDetail, empId : "IQ456", empSalary : 100000, team2Desig : "Full Stack Developer"};

console.log(empDetail);
console.log(team2);

// Rest Parameter or Rest Operator

function restParams(a, b, ...arr){
    console.log(a, b, arr);
}

restParams(1, 2, 3, 4, 5);