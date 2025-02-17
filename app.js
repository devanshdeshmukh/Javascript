
// let color = "green";

// // Traffic light system
// if(color === "red"){
//     console.log("Stop! light color is red");
// }
// else if(color === "yellow"){
//     console.log("Slow down. light color is yellow");
// }
// else if(color === "green"){
//     console.log("Go. light color is green");
// }
// else {
//     console.log("Traffic light is broken");
// }
let score = 75;
let result;
if (score >= 50) {
    result = "Pass";
} else {
    result = "Fail";
}

const add = (a, b) => a + b;
console.log(add(5, 3));


// Unlike normal functions, arrow functions do not have their own this. Instead, they inherit this from their surrounding scope.
const obj = {
    name: "JavaScript",
    regularFunction: function() {
      console.log("Regular Function:", this.name);
    },
    arrowFunction: () => {
      console.log("Arrow Function:", this.name);
    }
  };
  
  obj.regularFunction(); // Output: "Regular Function: JavaScript"
  obj.arrowFunction(); // Output: "Arrow Function: undefined" (inherits this from global scope)

  //this keyword - "This" refers to an object that is executing the current piece  of code
  const student = {
      name: "dev",
      age: 20,  
      eng: 94,
      math: 95,
      phy: 97,
      getAvg() {
        let avg = (this.eng + this.math + this.phy) /3;
        console.log(`${this.name} got avg marks ${avg}`);
      }
  }

  //try and catch
  console.log("hello");
  console.log("hello");
  let a = 5;
  try {
    console.log(a);
  } catch(err) {
    console.log("caught an error.. a is not defined");  
    console.log(err);
  }
  console.log("hello2");
  console.log("hello2");
  console.log("hello2");


  function divideNumbers(a, b) {
    try {
        if (b === 0) {
            throw new Error("Division by zero is not allowed.");
        }
        let result = a / b;
        console.log(`Result: ${result}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
    } finally {
        console.log("Execution completed.");
    }
}
// Example usage
divideNumbers(10, 2);  // Output: Result: 5
divideNumbers(10, 0);  // Output: Error: Division by zero is not allowed.commit

