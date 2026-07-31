let date = new Date();

console.log(date);

// Date.getFullYear()

console.log(date.getFullYear());

// Date.getMonth()

console.log(date.getMonth() + 1);

// Date.getDate()

console.log(date.getDate());

// Date.getHours()

console.log(date.getHours());

// Date.getMinutes()

console.log(date.getMinutes());

// Date.getSeconds()

console.log(date.getSeconds());

// Date.setFullYear(year, month, day)

let date1 = new Date();

date1.setFullYear(2002, 7, 15);

console.log(date1);

// Date.setMonth(month, day)

let date2 = new Date();

date2.setMonth(12, 15);

console.log(date2.toLocaleDateString());
console.log(date2.toDateString());
console.log(date2.toLocaleString());
console.log(date2.toLocaleTimeString());

// Date.setDate(day)

let date3 = new Date();

date3.setDate(25);

console.log(date3);

// Date.setHours(hours, minute, second, millisecond)

let date4 = new Date();

date4.setHours(10, 30, 45, 500);

console.log(date4);

// Date.setMinutes(minute, second, millisecond)

let date5 = new Date();

date5.setMinutes(45, 20, 250);

console.log(date5);

// Date.setSeconds(second, millisecond)

let date6 = new Date();

date6.setSeconds(50, 800);

console.log(date6);

// Date.setMilliseconds(millisecond)

let date7 = new Date();

date7.setMilliseconds(999);

console.log(date7);