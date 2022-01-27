function funcaoDaSorte(num){
    let numSorteado = Math.floor(Math.random() * (10-1) + 1)
    if(num == numSorteado){
        console.log(`Parabéns! O número sorteado foi o ${num}`);
    }else{
        console.log(`Que pena! O número sorteado foi o ${numSorteado}`);
    }
}

funcaoDaSorte(10)
funcaoDaSorte(5)
funcaoDaSorte(5)