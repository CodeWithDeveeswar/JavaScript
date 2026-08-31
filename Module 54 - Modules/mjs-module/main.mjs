// import { loginData as newPerson } from "./loginPage.mjs";
// import PersonObject from "./signUpPage.mjs";
import { newEmployeeId, loginInfo } from './loginPage.mjs';
import signUpInfo from './signUpPage.mjs';

function application(){
    // console.log(newPerson);
    // console.log(PersonObject);
    console.log(newEmployeeId);
    loginInfo();
    signUpInfo();
}

application(); 

// Note: .mjs files are treated as JavaScript modules by default, 
// so they can directly use import and export.