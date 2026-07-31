// Array Destructuring 

let arr = [10, 20, 30, 40];

// let fVal = arr[0];

// console.log(fVal);

// let [a, b, c, d] = arr;

// console.log(a, c, d);

let [a, , , d] = arr;

console.log(a, d);

let arr1 = [10, 20, 30, 40, 5, 4, 5, 6, 7, 8, 9, 10];

let [a1, a2, a3, ...a4] = arr1;

console.log(a1, a2, a3, a4);

// Array Nested Destructuring 

let nestArr = [1, 2, 3, 4, [10, 20, [30, 40]]];

// let [, , , D, [, , [, B2]]] = nestArr;

// console.log(D, B2);

let [A, B, C, D, [A1, A2, [B1, B2]]] = nestArr;

console.log(A, B, C, D, A1, A2, B1, B2);

// Object Destructuring

let student = {
    name: "Rahul",
    age: 22,
    course: "MCA",
    city: "Puducherry"
};

// console.log(student.name);

// let { name, age, course, city } = student;

// console.log(name, course, city);

let { name, city } = student;

console.log(name, city);

let employee = {
    empId: 101,
    empName: "John",
    department: "IT",
    salary: 50000,
    location: "Chennai"
};

let { empId, empName, ...empDetails } = employee;

console.log(empId, empName, empDetails);

// Object Nested Destructuring

let person = {
    id: 1,
    name1: "Devesh",
    address: {
        city1: "Puducherry",
        state: "Tamil Nadu",
        pin: {
            code: 605110,
            area: "Villianur"
        }
    }
};

// let {
//     address: {
//         pin: { area }
//     }
// } = person;

// console.log(area);

let {
    id,
    name1,
    address: {
        city1,
        state,
        pin: { code, area }
    }
} = person;

console.log(id, name1, city1, state, code, area);

