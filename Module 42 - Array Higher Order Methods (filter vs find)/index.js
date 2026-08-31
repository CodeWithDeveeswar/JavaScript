// Array Higher Order Methods (filter vs find)

let employees = [
    {empName : "Kesavan", salary : 150000},
    {empName : "Murugesan", salary : 100000},
    {empName : "John", salary : 120000}
]

// filter() Method 

let filterData = employees.filter(val => val.salary > 110000);

console.log(filterData);

let filterData1 = employees.filter(val => val.salary > 110000).fill({id : 1, name1 : "xyz"}); // Chaining Call

console.log(filterData1);

employees.filter(val => console.log(val));

// find() Method

let filterDataByFind = employees.find((val) => { 
    return val.salary > 100000;
});

console.log(filterDataByFind);
