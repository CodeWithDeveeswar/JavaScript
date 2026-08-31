// Object & Methods

let userProfile = {
    userName : "Kesavan",
    age : 25,
    hairColor : "Black",
    eyeColor : "Brown",
    eat : function(){
        console.log("Im gonna eat ice cream");
        return "Vanilla Ice Cream";
    }
};

console.log(userProfile.userName);
console.log(userProfile.age);
console.log(userProfile.hairColor);

let iceCreamType = userProfile.eat();

console.log(iceCreamType);

// Object Property Access

let vehicle = {
    "vehicleType" : "four-wheeler",
    "price" : 20000,
    fuelType : "petrol",
    "seater type" : ["two", "three", "four"]
};

console.log(vehicle.vehicleType);
console.log(vehicle["price"]);
console.log(vehicle["fuelType"]);
console.log(vehicle["seater type"]);
console.log(vehicle["seater type"][1]);

// Object Shorthand Assigned Properties
// Dynamic Properties

let uName = "Kesavan";
let uAge = 30;

// let person1 = {
//     uName : uName,
//     uAge : uAge
// };

let dynamicProp = "employeeId";
let person1 = {
    uName,
    uAge,
    ['dynamicProp'] : "IFS246",
    [dynamicProp] : "UQI!@#$",
};

console.log(person1);
console.log(person1.uName, person1.uAge, person1.dynamicProp, person1[dynamicProp]);
