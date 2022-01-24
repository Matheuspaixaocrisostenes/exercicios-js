function transformaEmNota(valor){
    var value =  valor.toFixed(2)
    console.log(`Valor digitado convertido para ${value.replace('.',',')}`);
}

transformaEmNota(0.666666666)