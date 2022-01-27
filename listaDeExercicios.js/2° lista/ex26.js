function removerVogais(frase){
    const vogais = ['A','a','E','e','I','i','O','o','U','u']
    vogais.forEach( letra => frase = frase.replace(letra, ""))
    console.log(frase);
}

removerVogais("Cod3r") 
removerVogais("Fundamentos")