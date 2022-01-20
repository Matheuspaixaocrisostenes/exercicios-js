const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.00}',
    '{"nome": "Kit de lapis", "preco": 41.22}',
    '{"nome": "caneta", "preco": 7.50}',
]

const transformaEmObjeto = json => JSON.parse(json)
const pegaPreco = obj => obj.preco

const resultado = carrinho.map(transformaEmObjeto).map(pegaPreco)
console.log(resultado);