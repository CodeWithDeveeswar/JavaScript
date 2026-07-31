// Sum of Array Elements

let arr = [10, 2, 3, 4, 5];

// 10 + 2 + 3 + 4 + 5 => 24

let totalVal = 0;

for(let i = 0; i < arr.length; i++){
    totalVal = totalVal + arr[i];
}

// 1st => totalVal = 0 + 10 => 10
// 2nd => totalVal = 10 + 2 => 12
// 3rd => totalVal = 12 + 3 => 15
// 4th => totalVal = 15 + 4 => 19
// 5th => totalVal = 19 + 5 => 24

console.log(totalVal);

// reduce() Method 

let totalVal1 = arr.reduce((accumulator, cElement, index, array) => {return accumulator + cElement}, 0);

// 1st => accumulator + cElement => 0 + 10 => 10
// 2nd => accumulator + cElement => 10 + 2 => 12
// 3rd => accumulator + cElement => 12 + 3 => 15
// 4th => accumulator + cElement => 15 + 4 => 19
// 5th => accumulator + cElement => 19 + 5 => 24

console.log(totalVal1);

let emloyees = [
    {eName : "Oggy", salary : 10000},
    {eName : "Jack", salary : 20000},
    {eName : "Bob", salary : 30000},
    {eName : "Olivia", salary : 40000}
];

let calcToSalary = emloyees.reduce((acc, cElement) => {return acc + cElement.salary}, 0);

console.log(calcToSalary);
