/*
    AdoraNwodo/javascript-fundamentals/beginner

    local-global-variables.js

    Hello,
    This file illustrates local and global variables, how they are used and defined in javascript.

    A local variable is declared inside a function, and can be used only inside that function. 
    It is possible to have local variables with the same name in different functions.

    A global variable is declared outside any function, and they can be accessed (used) on any function in the program.
*/


let counter = 0;    //this is a global variable

function increments(){

    let state = "ready";    //this is a local variable. If we try to use state outside this function, there would be an error

    //counter would work here
    
    counter++;

    state = "completed";

    //do other logic ...

}

//state cannot be used outside
state = "paused";   //dont do this

function decrement(){
    state = "completed";  //don't also do this
    counter--;  //you can do this because counter can be accessed anywhere in the code.

    let state = "new state";    //this would work. Since it has been defined.
}