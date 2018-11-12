/*
    AdoraNwodo/javascript-fundamentals/beginner

    iifes.js

    IIFE - Immediately Invoked Function Expression

    Running the function immediatey after its declared.
*/

//This is an example of an IIFE. It is executed immediatey it is declared.
(function(){
    var status = "ready";
    alert(status);
})();

//This is a regular function
function init(){
    var status = "ready";
    alert(status);
}
//The regular function would not run unti it is called manually, like this.
init();