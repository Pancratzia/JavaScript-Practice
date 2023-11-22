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

numberVar = "Ya no es un numero"; //Las variables del tipo let son mutables

console.log(typeof numberVar);

numberVar = 10;

console.log(typeof undefinedVar);
console.log(typeof nullVar); //null is an object
console.log(typeof booleanVar);
console.log(typeof stringVar);
console.log(typeof numberVar);

//Hoisting - Variables

x = 10; //Assignment

console.log(x); //You can use a var variable before it is declared, but not with let or const

var x; //Declaration... That's why VAR is not used anymore. If we use 'use strict' at the beginning of the file, hoisting will not work

//Constants

const MY_AGE = 24; //Contants should be declared with upper case and snake_case

console.log(MY_AGE);
console.log(Math.PI); //JS built in Math Library uses Constants too. they're not mutable


//Arithmetic Operators

let a = 10;
let b = 5;

console.log(a + b); //addition
console.log(a - b); //subtraction
console.log(a * b); //multiplication
console.log(a / b); //division
console.log(a % b); //remainder
console.log(a ** b); //exponent (ES2016 - ECMAScript 2016 and above)

//If a**b is not suported, use Math.pow(a, b), where a is the base and b is the exponent

console.log(a++); //increment
console.log(a--); //decrement

//Increment and Decrement

let A = 0;

let AUX = A++; //B = 0, A = 1 because first the value of A is assigned to B and then incremented
A = 0;

AUX = ++A; //B = 1, A = 1 because first the value of A is incremented and then assigned to B.

let C = 10;

AUX = C--; //B = 10, C = 9 because first the value of C is assigned to B and then decremented

C = 10;

AUX = --C; //B = 9, C = 9 because first the value of C is decremented and then assigned to B

//Asignation Operators

let X;

X = 10; //Assignment
X += 5; //Assignment with addition. Same as X = X + 5. X = 10 + 5
X -= 5; //Assignment with subtraction. Same as X = X - 5. X = 10 - 5
X *= 5; //Assignment with multiplication. Same as X = X * 5. X = 10 * 5
X /= 5; //Assignment with division. Same as X = X / 5. X = 10 / 5
X %= 5; //Assignment with remainder. Same as X = X % 5. X = 10 % 5
X **= 5; //Assignment with exponent. Same as X = X ** 5. X = 10 ** 5

//Comparison Operators

let Y = 10, Z = 5;

AUX = (Y==Z); //Equality
AUX = (Y!=Z); //Inequality
AUX = (Y===Z); //Strict Equality (Checks type and value)
AUX = (Y!==Z); //Strict Inequality (Checks type and value)
AUX = (Y>Z); //Greater than
AUX = (Y<Z); //Less than
AUX = (Y>=Z); //Greater than or equal
AUX = (Y<=Z); //Less than or equal

//Logical Operators

let T = true, F = false;

AUX = (T && F); //AND (Both sides must be true)
AUX = (T || F); //OR (At least one side must be true)
AUX = (!T); //NOT (Reverses the value)

//PRECEDENCE OF OPERATORS

//1. () and {}
//2. Unary Operators (++, --, +, -, !)
//3. Arithmetic Operators (*, /, %)
//4. Arithmetic Operators (+, -)
//5. Relational Operators (<, >, <=, >=)
//6. Equality Operators (==, !=, ===, !==)
//7. Logical Operators (&&, ||)
//8. Assignment Operators (=, +=, -=, *=, /=, %=, **=)


//Decitions

if(10 > 5) console.log('10 is greater than 5');
if(10 < 0) console.log('This won\'t be printed');

if(-1>=0) console.log('This won\'t be printed');
else console.log('Negative number');

if(0>0) console.log('This won\'t be printed');
else if (0<0) console.log('This won\'t be printed');
else console.log('The number is 0');

//Ternary Operator

let age = 24;

age >=18 ? console.log(`Your age is ${age}. You can enter`) : console.log(`Your age is ${age}. You can't enter`);

//Switch

let color = 'blUE';
color = color.toLowerCase();

switch(color){
    case 'red':
        console.log('Color is red');
        break;
    case 'blue':
        console.log('Color is blue');
        break;
    case 'green':
        console.log('Color is green');
        break;
    default:
        console.log('Color is neither red nor blue');
}

//Looping

let i = 0;

while(i < 5){ //First thinks, then executes
    console.log(`i = ${i}`);
    i++;
}

do{ //First executes, then thinks
    console.log(`i = ${i}`);
    i--;
}while(i > 0);

for(let j = 0; j < 5; j++){
    console.log(`j = ${j}`);
}