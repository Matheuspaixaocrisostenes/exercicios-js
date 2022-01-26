function despesasTotais(array){
    let resultado = 0
    for(let i = 0; i < array.length;i++ ){
    resultado += array[i].preco
    }
    console.log(resultado);
}

despesasTotais([
    {nome: "Jornal online", categoria: "Informação", preco: 89.99},
    {nome: "Cinema", categoria: "Entretenimento", preco: 150}
]) 

despesasTotais([
    {nome: "Galaxy S20", categoria: "Eletrônicos", preco: 3599.99},
    {nome: "Macbook Pro", categoria: "Eletrônicos", preco: 30999.90}
])