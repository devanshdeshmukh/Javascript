    function printInfo(name, age){
        console.log(`${name}'s age is' ${age}.`);
    }
    printInfo("Rohit",35);

    //Create a function that returns the sum of numbers from 1 to n.
    
//     function getSum(n){
//         let sum = 0;
    
//     for(let i=1; i<=n; i++){
//         sum += i;  
//     }

//     return sum;

// }
//
// How do you iterate over an array?
let arr = [10, 20, 30];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
//How do you check if an array includes a value?
let array = [1, 2, 3];
console.log(array.includes(2)); 
console.log(array.includes(4)); // 

//How do you merge two arrays?
let arr1 = [1, 2];
let arr2 = [3, 4];
let merged = arr1.concat(arr2); // [1, 2, 3, 4]

