let arrayInteiros = [1,2,3,4]
let arrayStrings = ["A","B","C","D"]
let arrayDubles = [1.2,1.1,1.3,1.4]

let concat = arrayInteiros.concat(arrayStrings,arrayDubles)
let concatStringInteiros = arrayStrings.concat(arrayInteiros)
console.log(concat);
console.log(concatStringInteiros);