function acharCaracteres(frase, palavra){
    const teste = frase.indexOf(palavra)
    if(teste == 0){
        console.log('Palavra encontrada');
    }else{
        console.log('Palavra não encontrada');
    }
}

acharCaracteres('Dota é melhor que LOL', 'Dota')
acharCaracteres('Lol é melhor que CS', 'Dota')