function classificarNotas(vetor) {
    let notas = []
    for(let i = 0; i < vetor.length; i++) {
        if(vetor[i]>=0 && vetor[i]<=4.9){
            notas.push('D')
        } else if(vetor[i]>=5 && vetor[i]<=6.9) {
            notas.push('C')            
        } else if(vetor[i]>=7 && vetor[i]<=8.9) {
            notas.push('B')
        } else if(vetor[i]>=9 && vetor[i]<=10){
            notas.push('A')
        } else {
            notas.push('Nota inválida')       
       }
    }
    return notas
}

let notas = [10, 13, 9, 8.2, 2.5, 7.7, 6.8]
let aluno = classificarNotas(notas)

console.log(aluno)