function calcIdade(anoNasc=0){
    const ano = new Date().getFullYear()
    const idade = ano - anoNasc
    if(idade >= 18){
        console.log(`Maior de Idade, sua idade é de ${idade} `);
    }else{
        console.log(`Menor de Idade, sua idade é de ${idade}`);
    }
}

calcIdade(2003)
calcIdade(2010)
calcIdade(2022)