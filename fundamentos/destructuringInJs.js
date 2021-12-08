const pessoa = {
    nome: "Ana",
    idade: 17,
    endereco: {
        logadouro: 'Rua DEF',
        numero: 800
    }
}

const {nome,idade} = pessoa
console.log(nome,idade);

const {nome:n , idade:i} = pessoa
console.log(n,i);

const { sobrenome, bemHumorada = true } = pessoa
console.log(sobrenome, bemHumorada);

const { endereco:{logadouro,numero,cep} } = pessoa
console.log(logadouro,numero,cep);