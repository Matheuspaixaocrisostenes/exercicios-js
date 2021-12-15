function numeroAleatorio(min,max){
    const valor = Math.random() * (max-min) + min
    return Math.floor(valor)
}

let opcao = 0
let cont = 0

do{
    opcao = numeroAleatorio(-1,10)
    cont++
    console.log(`Opção ${cont} escolhida ${opcao}`);
}while(opcao != -1)