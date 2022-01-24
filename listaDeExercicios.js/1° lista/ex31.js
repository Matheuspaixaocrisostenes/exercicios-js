let vetor = [-9,-4,-1,2,3,4,5,6]
let negativos = 0

for(let i in vetor){
    if(vetor[i] < 0){
        negativos++
    }
}

console.log(`no vetor ${vetor} existe ${negativos} número(s) negativos`);