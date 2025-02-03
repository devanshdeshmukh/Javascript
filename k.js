
let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};
console.log(person.fullName());

//Write an arrow function that returns thr square of number 'n'.
 
const square = (n) => n*n;

console.log(square(4));

//Write  a function that prints "Hello World"5 times at intervals of 2s each.

let id  = setInterval(() => {
    console.log("Hello World");
}, 2000); 

setTimeout (() => {
    clearInterval(id);
    console.log("clear interval ran");
}, 10000);