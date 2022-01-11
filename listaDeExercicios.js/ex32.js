let vetor = [1,1,1,1]

// for(let i in vetor){
//     media += vetor[i]
// }

// console.log(media/vetor.length);

function calcMediaVetor(vetor){
    let media = 0
    for(let i in vetor){
        media += vetor[i]
    }
    result = media / vetor.length
    console.log(result);
}

calcMediaVetor(vetor)