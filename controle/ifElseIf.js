Number.prototype.entre = function(inicio, fim){
    return this >= inicio && this <= fim
}

const imprimirResultado = function(nota){
    if(nota.entre(9, 10)){
        console.log('Quadro de Honra');
    } else if(nota.entre(7, 8.99)){
        console.log('Aprovado');
    } else if(nota.entre(4, 6.99)){
        console.log('Recuperação');
    } else if(nota.entre(0, 3.99)){
        console.log('Reprovado');
    } else{
        console.log('Nota Invalida');
    }
}

function imprimirResultado2(nota){
    if(nota >=9 && nota <= 10){
        console.log("quadro de honra");
    }else if(nota >= 7 && nota < 9){
        console.log('Aprovado');
    }else if(nota >= 4 && nota < 7){
        console.log('Recuperação');
    } else if(nota >=0 && nota < 4){
        console.log('Reprovado');
    }else{
        console.log('Nota Invalida');
    }
}


imprimirResultado(10)
imprimirResultado(8.9)
imprimirResultado(6.55)
imprimirResultado(2.3)
imprimirResultado(-1)
imprimirResultado(11)

console.log("_______________");

imprimirResultado2(10)
imprimirResultado2(8.9)
imprimirResultado2(6.55)
imprimirResultado2(2.3)
imprimirResultado2(-1)
imprimirResultado2(11)