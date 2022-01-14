// pessoa -> 123 -> {...}
const pessoa = {nome: 'João'}
pessoa.nome = 'Pedro'
console.log(pessoa);

// pessoa = {nome: 'Beatriz'}
// console.log(pessoa);

Object.freeze(pessoa)

pessoa.nome = 'Amanda'
delete pessoa.nome
console.log(pessoa.nome);
console.log(pessoa);

const pessoaConstante = Object.freeze({nome: 'João'})
pessoaConstante.nome = 'Marta'
console.log(pessoaConstante);