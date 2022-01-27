function menorNumero(array){
    let menor = array[0]
    for(let i = 0; i< array.length; i++){
        if(array[i]< menor){
            menor = array[i]
        }
    }
    console.log(`O menor numero do array informado é ${menor}`);
}

menorNumero([10, 5, 35, 65])
menorNumero([5, -15, 50, 3])