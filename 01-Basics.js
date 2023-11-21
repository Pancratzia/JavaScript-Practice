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

//Data Types - Primitives

let stringVar = "String"; //String of characters
let numberVar = 10; //Numbers
let booleanVar = true; //Booleans
let nullVar = null; //Null
let undefinedVar = undefined; //Not defined yet

console.log(typeof numberVar);

numberVar = "Ya no es un numero"; //Las variabgles del tipo let son mutables

console.log(typeof numberVar);

numberVar = 10;

console.log(typeof undefinedVar);
console.log(typeof nullVar); //null is an object
console.log(typeof booleanVar);
console.log(typeof stringVar);
console.log(typeof numberVar);
