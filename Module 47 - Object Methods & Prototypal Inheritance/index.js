// Object Methods & Prototypal Inheritance

let person = {
    pName : "Johny",
    age : 30
};

console.log(person);

// Object.create()

let newObj = Object.create(person);

newObj.location = "Tamilnadu";

console.log(newObj.__proto__);
console.log(Object.getPrototypeOf(newObj));
console.log(newObj.age);
console.log(newObj);

// Object.assign()

let person1 = {
    id : "QUI123",
    name1 : "Kesavan"
};

let newObj1 = Object.assign(person1, {role : "Frontend Developer", Salary : 20000});

console.log(person1);
console.log(newObj1);

// Object.entries()

let employees = {
    eName : "Murugan",
    eRole : "Backend Developer"
};

let multiArr = Object.entries(employees);

multiArr.push(["Name", "Murugesen"]);

console.log(multiArr);

// Object.fromEntries()

let normalObj = Object.fromEntries(multiArr);

console.log(normalObj);

// Object.keys()

let onlyKeys = Object.keys(normalObj);

console.log(onlyKeys);

// Object.values()

let onlyValues = Object.values(normalObj);

console.log(onlyValues);

// Object.freeze()

let newObj2 = {
    id : 1
};

Object.freeze(newObj2);

newObj2.name1 = "Javascript";
newObj2.id = "QUI123";

console.log(newObj2);

// Object.isFrozen()

console.log(Object.isFrozen(newObj2));
console.log(Object.isFrozen(newObj1));
console.log(Object.isFrozen(normalObj));

