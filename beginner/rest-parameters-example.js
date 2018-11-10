/*
    AdoraNwodo/javascript-fundamentals/beginner

    rest-parameters-example.js

    Hello,
    This file illustrates how rest parameters work.

    Rest parameters allows us to represent an indefinite number of arguments as an array.

*/


//lets define a printName method that takes in an indefinite number of arguments.
// the "..." is used to show rest parameters.
var printName = function(...names){
    //lets go through the list (or array) of names and show everything in the console
    names.forEach(name => console.log(name));
}

//if we called the printName() function down here 
printName("Adora", "Bolanle", "Chioma", "Derek", "Emmanuel", "Felix", "Godwin", "Hannah", "Isra");

//It would print the name in the console one after the other like this.

/**
 *  - Adora
 *  - Bolanle
 *  - Chioma
 *  - Derek
 *  - Emmanuel
 *  - Felix
 *  - Godwin
 *  - Hannah
 *  - Isra
 */

 //If we call printName() with only one argument, it still works as well.
 printName("Nenne");    //CONSOLE OUTPUT: - Nenne



 //THERE IS SOMETHING TRICKY ABOUT REST PARAMETERS.
 //AS THE NAME IMPLIES, IT HANDLES THE "REST" OF THE PARAMETERS.
 //SO YOU CAN PASS IN OTHER PARAMETERS IN A METHOD. JUST MAKE SURE THE REST PARAMETERS ARE PASSED IN LAST!

 //EXAMPLE - Imagine if we had a function that takes in name, all products and total to generate receipt for a users purchase.
 var generateReceipt = function(total, name, ...products){
    //This would work
 }

 var generateReceipt = function(total, ...products, name ){
    //This WONT work! products should be the last since we don't know how many products someone may pass to the function
 }

 var generateReceipt = function(...products, name, total ){
    //This WONT work as well! products should be the last since we don't know how many products someone may pass to the function
 }

