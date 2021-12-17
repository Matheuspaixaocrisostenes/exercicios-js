function soma(){
    let soma = 0
    for(i in arguments){
        soma += arguments[i]
    }
    return soma
}

console.log(soma(4,3));
console.log(soma());
console.log(soma(4,3,5,3,2,1,6,3));
console.log(soma(4));
console.log(soma(4,3, "teste"));
console.log(soma("A","B", "C"));