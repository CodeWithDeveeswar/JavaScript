// Nested if Statement

let age = 25;
let height = 160;
let waight = 60;

if(age >= 18){
    if(height >= 150){
        if(waight >= 45){
            console.log("You are Selected");    
        }
        else{
            console.log("Waight is not Matched");
        }
    }
    else{
        console.log("Height is not matched");
    }
}
else{
    console.log("Age is not valid");
}

// Ternary Operator 

/* 

    condition ? "Statement1" : "Statement2"

*/

let pass_input = true;

pass_input ? console.log("Welcome to website") : console.log("Password Incorrect");
