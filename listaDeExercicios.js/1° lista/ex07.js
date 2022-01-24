function calcBhaskara (a, b, c) {
    let resultados = []
    let delta = (b ** 2) - (4 * a * c)
    if(delta < 0){
        return "Delta é negativo"
    } 
    let x1 = (-b + Math.sqrt(delta))/(2*a)
    let x2 = (-b - Math.sqrt(delta))/(2*a)
    resultados.push(x1,x2)
    return resultados   
}

console.log(calcBhaskara(1, 3, 2))
console.log(calcBhaskara(3, 1, 2))