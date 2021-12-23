const notas = [2.6,3,5,10,10,9,6,4]

// sem callback
let notasBaixas = []

for(let i in notas){
    if(notas[i] < 7){
        notasBaixas.push(notas[i])
    }
}

console.log(notasBaixas);

// com callback

const notasBaixas2 = notas.filter(function(nota){
    return nota < 7
})

console.log(notasBaixas2);

const notasBaixas3 = notas.filter(nota => nota < 7)
console.log(notasBaixas3);