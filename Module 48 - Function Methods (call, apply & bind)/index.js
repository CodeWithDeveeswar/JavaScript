let person = {
    pFName : "Kesavan",
    pLName : "Murugesan"
};

let person1 = {
    pId : "UQI123",
    pFName : "Nanda",
    pLName : "Kumar",
    introYourself : function(a, b){
        console.log(this.pFName + " " + this.pLName + (a + b));
        return (a + b);
    }
};

// call() Method

person1.introYourself.call(person, 10, 20);

// apply() Method

person1.introYourself.apply(person, [100, 200]);

// bind() Method

let newFun = person1.introYourself.bind(person, 500, 300);

console.log(newFun());
