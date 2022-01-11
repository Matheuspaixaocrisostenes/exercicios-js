function multVetor(vetor,num){
    let mult = 0
    for(let i in vetor){
        mult += num * vetor[i]
    }
    console.log(`A Multiplicação entre os elementos do vetor vale ${mult}`);
}

function multVetor5(vetor,num){
    let mult = 0
    if(num == 5){
        for(let i in vetor){
            mult += num * vetor[i]
        }
        console.log(`A Multiplicação entre os elementos do vetor vale ${mult}`);
    }else{
        console.log(`Não é possível realizar a multiplicação do vetor pelo numero ${num}`);
    }

}

multVetor([1,2,3,4], 2)
multVetor5([1,2,3,4], 2)
multVetor5([1,2,3,4], 5)