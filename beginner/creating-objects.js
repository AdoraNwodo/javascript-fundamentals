/**
 * In JavaScript, objects can be created using constructor functions and from classes
 * 
 */

 // CONSTRUCTOR FUNCTIONS
function Person(name){
    this.fullname = name;
    this.employ = function(){
        console.log(name + " is now an employee");
    };
}

var employee = new Person();
employee.employ();


// CLASSES
