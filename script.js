// //Methods = Actions that can be performed on an object.

// const calculator = {
//     num: 55,
//     add: function(a, b){
//         return a+b; 
//     },
//     sub: function(a, b){
//         return a-b; 
//     },
//     mul: function(a, b){
//         return a*b; 
//     }
// };

// function sum(a,b){
//     return a+b;
// }
// console.log(sum(3, 5))

// function sub(x, y){
//     return x-y;
// }
// console.log(sub(11, 6))

// function mul(i,j){
//     return i*j;
// }
// console.log(mul(5, 10  ))

//Arrow function 
const sum = (a,b)=>{
    console.log(a + b);
};

const cube = (n) =>{
    return n*n*n;
}