/**
 * DRY - Don't Repeat Yourself!
 * 
 * This is a very important programming concept.
 * 
 * With Inheritance, classes can "inherit" methods and properties from the parent class
 * So you can use inheritance in similar places instead of writing duplicate code
 */

 //Using our Animal Class
 class Animal{

    constructor(specie, sound){
        this.specie = specie;
        this.sound = sound;
    }

    speak(){
        return this.sound;
    }
}

//Cat is inheriting things from Animal. So Animal is a parent (or super) class while Cat is a child (or sub) class
class Cat extends Animal{
    
    //define other methods
    move(steps){
        var initial_step = 0;
        initial_step += steps;
        return "Taken " + initial_step + " steps";
    }

}

var cat = new Cat("tiger", "growl");
cat.speak();    //would work. woud return "growl"
cat.move(6);     //would work. would return "Taken 6 steps"