function area(largura, altura){
    const area = largura * altura
    if(area > 20){
        console.log(`Valor acima do permitido  ${area}m²`);
    }else{
        return area
    }
}

console.log(area(4,15))
console.log(area(4))
console.log(area(4,2))
console.log(area())
console.log(area(4,15,6,78,8))