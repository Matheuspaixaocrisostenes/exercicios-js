function objetoParaArray(obj){
    const array = []
    for(let i in obj){
        array.push([i, obj[i]])
    }
    console.log(array);
}

objetoParaArray({
    nome: "Maria",
    profissao: "Desenvolvedora de software"
})

objetoParaArray({
    codigo: 11111,
    preco: 12000
})