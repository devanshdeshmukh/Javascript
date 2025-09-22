// let a = 10;
// {
//     let a = 20;
//     console.log("inside", a);
// }
// console.log("outside", a);




// Primitive
let a = 10;
let b = a;
b = 20;a
console.log(a); // 10 (unchanged)


// Reference
let obj1 = { name: "Devansh" };
let obj2 = obj1;
obj2.name = "Rahul";
console.log(obj1.name); // Rahul (changed)