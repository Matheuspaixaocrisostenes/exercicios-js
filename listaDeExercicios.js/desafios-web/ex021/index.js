function calcDesconto(n=0){
    const desconto = n - (n * 5 / 100) 
    console.log(`O desconto será de ${desconto}`);
}

calcDesconto(1000)