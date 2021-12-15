function numeroAleatorio(min,max){
    const valor = Math.random() * (max-min) + min
    return Math.floor(valor)
}

let opcao = 0
let cont = 0

while(opcao != -1){
    opcao = numeroAleatorio(-1, 100)
    cont++
    console.log(`Opção ${cont} escolhida foi: ${opcao}`);
}