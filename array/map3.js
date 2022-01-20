Array.prototype.map2 = function(callback){
    const newArray = []
    for(let i = 0; i < this.length; i++){
        newArray.push(callback(this[i],i,this))
    }
    return newArray
}

const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.00}',
    '{"nome": "Kit de lapis", "preco": 41.22}',
    '{"nome": "caneta", "preco": 7.50}',
]

const transformaEmObjeto = json => JSON.parse(json)
const pegaPreco = obj => obj.preco

const resultado = carrinho.map2(transformaEmObjeto).map2(pegaPreco)
console.log(resultado);