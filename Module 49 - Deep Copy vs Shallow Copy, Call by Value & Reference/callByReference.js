/*  Call By Reference

    Stack Memory:

    | Address  | Variable  | Value -> Reference/Pointer (Address)  |
    |----------|-----------|---------------------------------------|
    | 0x100    | obj1      | 0x001                                 |
    | 0x104    | arr1      | 0x002                                 |
    | 0x108    | obj2      | obj1 = 0x001                          |
    | 0x112    | arr2      | arr1 = 0x002                          |
    
    Heap Memory:

    | Address  | Object              |
    |----------|---------------------|
    | 0x001    | {name : 'Kesavan'}  |
    | 0x002    | [1, 2, 3]           |
    
*/

let obj1 = {
    name : "Kesavan"
};

let arr1 = [1, 2, 3];


let obj2 = obj1;

let arr2 = arr1;

obj1.name = "Murugesan";
obj1.role = "Developer";
arr1[0] = "One";

console.log(obj1, obj2);

console.log(arr1, arr2);
