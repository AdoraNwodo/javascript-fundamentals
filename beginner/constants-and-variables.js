/*
    AdoraNwodo/javascript-fundamentals/beginner

    constants-and-variables.js

    Hello,
    This file illustrates constants and variables, how they are used and defined in javascript.

    A constant is fixed. The value oesn't change during the programs execution. 
    You give a constant a value at the beginning and that is the ony value it can have.
    
    A variables value can change over time during the program's execution
*/


//lets define a constant with the 'const' keyword. This can only be done ONCE.
const website = "https://adoranwodo.com";

//now lets define a variable. we can use the lets or var keyword
var bestColor = "yellow";
let secondBestColor = "pink";

//if we try to update the value of website, there would be an error.
website = "https://newwebsite.com";     //error

bestColor = "burgundy";     //this would update


//There are many types of variables in javascript

// 1. Numbers
let score = 80;
let amount = 45.50;

// 2. Boolean (true or false)
let hasGraduated = true;
let isReady = false;

// 3. Arrays (list of stuff ... e.g. fruits)
let fruits = ["oranges", "grapes", "apples", "lemons"];