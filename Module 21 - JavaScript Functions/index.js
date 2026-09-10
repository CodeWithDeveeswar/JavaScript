// JavaScript Functions 

let person1 = {
    name1 : "John",
    age : 30
}

function printUserName(uName, uAge){
    // console.log("Hello Everyone", person1.name1, person1.age);
    if(uAge < 40){
        console.log(`Hi ${uName}, your age is ${uAge}`);
    }
}

printUserName("Kesavan", 40);
printUserName("Murugesan", 60);
printUserName("David", 25);
printUserName(person1.name1, person1.age);