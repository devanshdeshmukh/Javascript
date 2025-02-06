
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

//Arrow Function with Block Body
const multiply = (a, b) => {
    return a * b;
  };
  console.log(multiply(4, 2)); 

//   Arrow Function with One Parameter (No Parentheses Needed)
const square = n => n * n;
console.log(square(4)); 

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
  
