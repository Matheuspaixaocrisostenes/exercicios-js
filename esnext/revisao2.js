const soma = (a,b) => a + b
console.log(soma(1,2));

const lexico1 = () => console.log(this === exports)
const lexico2 = lexico1.bind({})

lexico1()
lexico2()

function log(texto = 'node'){
    console.log(texto);
}

log(undefined)
log(null)
log('Sou mais forte')

function total(...numeros){
    let total = 0
    numeros.forEach(n => total += n)
    console.log(total);
}

total(2,3,4,5)