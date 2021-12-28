function criaProduto(nome,preco){
    return {
        nome,preco,
        desconto: '25%',
        precoFinal: preco - (preco * 25 / 100)
    }
}

console.log(criaProduto('Celular', 200));