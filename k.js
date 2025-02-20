
// let person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 30,
//     fullName: function() {
//         return this.firstName + " " + this.lastName;
//     }
// };
// console.log(person.fullName());

// //Write an arrow function that returns thr square of number 'n'.
 
// const square = (n) => n*n;

// console.log(square(4));

// //Write  a function that prints "Hello World"5 times at intervals of 2s each.

// let id  = setInterval(() => {
//     console.log("Hello World");
// }, 2000); 

// setTimeout (() => {
//     clearInterval(id);
//     console.log("clear interval ran");
// }, 10000);

//Check if all numbers in our array are multiples of  10 or not.

let nums1 = [10, 20, 30, 40];

let ans = nums1.every((el) => el % 10  == 0);
console.log(ans);

//Create a function to find the min number  in an array.
function getMin(nums){
    let min = nums.reduce((min, el) => {
        if (min<el){
            return min;
        }else{
            return el;
        }
    });
}
let nums = [10, 20, 30, 40, 5];

//Misllenious topics
//THIS WITH ARROW FUNCTION 

// const student = {
//     name: "dev",
//     marks: 87,
//     prop: this,
//     getName: function (){
//         console.log(this);7
//         return this.name;
//     },
// };
 
// REDUCE METHOD
