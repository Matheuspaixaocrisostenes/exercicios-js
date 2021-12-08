function rand({ min = 0, max = 1000} ){
    const value = Math.random() * (max-min) + min
    return Math.floor(value)
}

const obj = {max:1000,min:8}

console.log(rand(obj));
console.log(rand({min:800}));
console.log(rand({}));
// console.log(rand());