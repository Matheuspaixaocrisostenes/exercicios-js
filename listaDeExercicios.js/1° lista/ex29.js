let dentro = 0
let fora = 0
let vetor = [10,20,30,40,50,60,70,80,90,100,18]

for(let i in vetor){
    if(vetor[i] >=10 && vetor[i] <= 20){
        dentro++
    }else{
        fora++
    }
}

console.log(`Dentro do vetor ${vetor} existe ${dentro} numeros dentro e ${fora} fora do intervalo de 10 a 20`);