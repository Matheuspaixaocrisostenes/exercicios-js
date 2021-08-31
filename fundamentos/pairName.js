const saudacao = 'hiii'

function exec() {
    const saudacao = 'hello'
    return saudacao
}

const client = {
    name: 'Pedro',
    age: 32,
    weight: 90,
    address: {
        logradouro: 'Rua fake',
        number: 425
    }
}


console.log(saudacao);
console.log(exec());
console.log(client);