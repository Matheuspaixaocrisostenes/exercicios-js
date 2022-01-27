function filtrarPorQuantidadeDeDigitos(array, quantidadeDesejada) {
    let resultado = []
    for(numero of array){
        const quantidadeDeDigitos = String(numero).length
        if(quantidadeDeDigitos === quantidadeDesejada)
            resultado.push(numero)
    }
        console.log(resultado)
}
        
filtrarPorQuantidadeDeDigitos([38, 2, 365, 10, 125, 11], 2)
filtrarPorQuantidadeDeDigitos([5, 9, 1, 125, 11], 1)