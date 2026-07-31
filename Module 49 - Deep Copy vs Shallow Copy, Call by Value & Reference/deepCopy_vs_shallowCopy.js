// Primitive Copy 

let a = 10;
let b = a;

a = 20;

console.log(a, b);

// Object - Shallow Copy

let obj1 = {
    name1 : "Murugesan",
    role : "Developer"
};

let obj2 = {...obj1};

obj2.name1 = "Kesavan";

console.log(obj1, obj2);

// Object with Nested Object

let person = {
    name1 : "Johny",
    role : "Youtuber",
    hobbies : {
        cricket : "T20 Player",
        football : "60 mins"
    }
};

// Object - Deep Copy 

let person2 = {...person, hobbies : {...person.hobbies}};

let newObj = JSON.parse(JSON.stringify(person));

person.role = "Video Editor";

person.hobbies.cricket = "ODI Player";

console.log(person, person2);

console.log(newObj);

// Array with Nested Array

let Arr = [1, 2, 3, [4, 5, 6]];

// Array - Shallow Copy

let Arr1 = [...Arr];

// Array - Deep Copy

let newArr = JSON.parse(JSON.stringify(Arr));

Arr[0] = "one";
Arr[3][0] = "Four";

newArr[3][1] = "Five";

console.log(Arr, Arr1);
console.log(newArr);


