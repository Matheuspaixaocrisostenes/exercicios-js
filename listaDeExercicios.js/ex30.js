let vetor = [-1,1,2,3,4,5,6,7,8,9,200,5]
let maior = 0
let menor = 0
for(let i in vetor){
    if(vetor[i] > maior){
        maior = vetor[i]
    }
    if(vetor[i] < menor){
        menor = vetor[i]
    }
}

console.log(`O maior numero do vetor é ${maior} e o menor é ${menor}`);