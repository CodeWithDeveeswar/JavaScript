// if, else-if, else Statement

/*

    if(condition 1){
        Statement
    }
    else if(condition 2){
        Statement
    }
    else if(condition 3){
        Statement
    }
    else if(condition 4){
        Statement
    }
    else{
        Statement
    }

*/

// Check the hour and display the time period 

let hour = 12;

// else-if ladder

if(hour >= 1 && hour <= 6){
    console.log("Early Morning");
}
else if(hour >= 7 && hour <= 12){
    console.log("Morning");
}
else if(hour >= 13 && hour <= 18){
    console.log("Noon");
}
else if(hour >= 19 && hour <= 24){
    console.log("Night");
}
else{
    console.log("It is not an valid hour");
}

// Check the mark and display the grade 

let mark = 85;

// else-if ladder

if(mark >= 41 && mark <= 60){
    console.log("E-Grade");
}
else if(mark >= 61 && mark <= 80){
    console.log("C-Grade");
}
else if(mark >= 81 && mark <= 90){
    console.log("A-Grade");
}
else if(mark >= 91 && mark <= 100){
    console.log("S-Grade");
}
else{
    console.log("Arrear");
    
}