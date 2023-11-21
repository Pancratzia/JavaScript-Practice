//My First Hello World!

console.log("Hello Outside World!");

(function () {
  console.log("Hello Inside World!");
})();

//Learning about Variables

var notUsed = "Var is not used anymore";
let letVar = "Let is used";
const constVar = "Const is used";

console.log(`${notUsed}, ${letVar} & ${constVar}`);

//BIG NOTE: Variables should start with lower case (Good Practice). Use cammelCase

let miNombre = "Laura"; //Good Practice
let $myLastName = "Ortega"; //Good Practice
let _myAge = 24; //Not Used
let MyDogName = "Tiffany"; //Not Used

console.log(`Hi! My name is ${miNombre} ${$myLastName}.`);