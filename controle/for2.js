const notas = [6.5,3.5,9.8,2.3,9.4]

for(let i in notas){
    console.log(`Notas = ${notas[i]}`);
}

const pessoa = {
    name: 'Ana',
    sobrenome: 'Silva',
    idade: '15',
    peso: 64
}

for(let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`);
}