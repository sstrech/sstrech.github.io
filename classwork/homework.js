// write a variable that is a string and output to console (hint: it's console.log(variable name))
var stringOutput1 = "Hi there"
console.log("String: "+stringOutput1)
// write a variable that is a number and output to console (hint: it's console.log(variable name))
let numberOutput1 = 111
console.log("number: "+numberOutput1)

// write a variable that takes any two numbers and adds them 
let addNum = 3+5
console.log("addition: "+addNum)
// write a variable that takes any two numbers and subtracts them and output to console
let subNum = 5-3
console.log("subtraction: "+subNum)
// write a variable that takes any two numbers and performs a modulo that has a value of 1  and output to console 
let modNum = 5%4
console.log("modulo: "+modNum)
// write a variable that takes any two numbers and perform an exponential value and output to console 
let expNum = 3**4
console.log("exponent: "+expNum)
// write a statement that is false using a conditional statement and output to console 
console.log("conditional: ")
console.log(addNum == 40)


// I have created an object below, output to console the value of "breed" (hint: the structure is ObjectName.value you want to call)
// the keyword "this" is self referencing the object 

let siggy = {
    breed : "cat", 
    baby: "big baby", 
    fluffy: "fluffy", 
    output: function() {

        return `Siggy is a ${this.breed} that is a ${this.fluffy} ${this.baby}`

    }
}

// methods! You call methods the same way you call a function.  I'll call siggy.output() below. 

console.log(siggy.output()); 

// copy + paste the siggy object below and rename the variable from Siggy to an animal or name of your choice 
// then, I want you to change the object to the value of your choosing  
let trace = {
    breed : "dog", 
    type: "frenchton", 
    age: 10, 
    // output: function() {
    //     return `Siggy is a ${this.breed} that is a ${this.type} and is ${this.age} years old`

    // }
}
// console.log the values of that object one by one. 
console.log(trace.breed); 
console.log(trace.type);
console.log(trace.age);
// create an array 
let anotherArray = ["Sam", "Lauren", "Lexi"]
// call the value in the 3 position of this array and output to console 
console.log(anotherArray[0]);
console.log(anotherArray[1]);
console.log(anotherArray[2]);


let someArray = ["Ishrat", "Is", "Really", "Proud", "Of", "You"]
// call all values in the array using a loop 
for(var i=0;i<someArray.length; i++){
    console.log(someArray[i]);
}

// what is the value of the variable ifStatement, leave your answer in the console. 

let ifStatement; 
let value = 5; 

if(value < 5)
{
    ifStatement = true;
}
else{
    ifStatement = false; 
}
console.log(ifStatement)
