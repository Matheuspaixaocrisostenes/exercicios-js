// function soma1(a,b,c){
//     a = a || 1
//     b = b || 1
//     c = c || 1
//     return a+b+c
// }

// console.log(soma1());
// console.log(soma1(1));
// console.log(soma1(1,2));
// console.log(soma1(1,2,3));
// console.log(soma1(0,0,0));
// console.log(soma1("a"));

// function soma2(a,b,c){
//     a = a !== undefined? a : 1
//     b = 1 in arguments? b : 1
//     c = isNaN(c)? 1 : c
//     return a + b + c
// }

// console.log(soma2("teste"));
// console.log(soma2(1,2,3));
// console.log(soma2(3));
// console.log(soma2(3,2,"teste"));


function soma3(a=0,b=0,c=0){
    return a + b + c
}

console.log(soma3());
console.log(soma3(1,2,3));
console.log(soma3(12));
console.log(soma3(14,25, "teste"));