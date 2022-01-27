function contarCaractere(caractere,frase){
    let cont = 0
    for(let i = 0;i< frase.length;i++){
        if(frase.charAt(i) == caractere){
            cont++
        }
    }
    console.log(`O caractere ${caractere} foi encontrado ${cont}`);
}

contarCaractere("r", "A sorte favorece os audazes")
contarCaractere("c", "Conhece-te a ti mesmo")