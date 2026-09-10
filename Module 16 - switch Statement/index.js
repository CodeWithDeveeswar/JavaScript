// Switch Statement

/*

    switch(expression){
        case value: Statement;
        break;
        case value: Statement;
        break;
        default: Statement
        break;
    }

*/

let trafficLight = "Over Speed";

switch (trafficLight) {
    case "red":
        console.log("Stop");
        break;

    case "yellow":
        console.log("Slow Down");
        break;

    case "green":
        console.log("Go");
        break;

    default:
        console.log("Pay Fine");
        break;
}

// Fall Through Method

let day = "Saturday";

switch(day){
    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
    case "Friday":
        console.log("WeekDay");
        break;

    case "Saturday":
    case "Sunday":
        console.log("WeekEnd");
        break;

    default: 
        console.log("It is not a day");
        break;
}