console.log(soma(4,2));
// function declaration
function soma(x,y){
    return x + y
}

// function expression 
const sub = function(x,y){
    return x - y
}

console.log(sub(4,6));

// named function expression 
const mult = function mult(x,y){
    return x * y
}
console.log(mult(4,6));