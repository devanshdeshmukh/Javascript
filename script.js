//Methods = Actions that can be performed on an object.

const calculator = {
    num: 55,
    add: function(a, b){
        return a+b; 
    },
    sub: function(a, b){
        return a-b; 
    },
    mul: function(a, b){
        return a*b; 
    }
};

function sum(a,b){
    return a+b;
}
console.log(sum(3, 5))