/**
 * Handling errors gracefully so that a single error would not terminate execution of the entire app
 * 
 * Try-Catch blocks help in handling errors
 * 
 * Try - Try to execute this code block 
 * Catch - Catch any error that occured while running the code in the try block (executes only if error is thrown in try).
 * Finally - (Optional) Executes regardless (whether or not there was an error). 
 */


 let person = Adora;    //this shoud throw an error


 //In a try block...
 try{
     let person = Adora;
 }
 catch(error){
    console.log('An error occured: ', error);
 }
 finally{
    console.log("Finally block has executed");
 }


//Developer defined errors exist. Use the throw keyword
try{
    //write some code
    throw new Error("Error Adora created");
}
catch(error){
   console.log('An error occured: ', error);
}
finally{
   console.log("Finally block has executed");
}