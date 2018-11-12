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
class Animal{

    //constructors in classes
    constructor(specie){
        this.specie = specie;
    }
}

//create a cat object from animal class
let cat = new Animal("tiger");

alert(cat.specie);  //this would show "tiger"