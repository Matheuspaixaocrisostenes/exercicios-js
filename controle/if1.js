function soBoaNoticia(nota){
    if(nota>=7){
        console.log(`Aprovado com a nota ${nota.toFixed(1)}`);
    }else{
        console.log(`Reprovado com a nota ${nota.toFixed(1)}`);
    }
}

soBoaNoticia(8.5)
soBoaNoticia(5.5)

function seForVerdadeEuFalo(valor){
    if(valor){
        console.log(`É Verdade... ${valor}`);
    }
}

seForVerdadeEuFalo()
seForVerdadeEuFalo(0)
seForVerdadeEuFalo(undefined)
seForVerdadeEuFalo(null)
seForVerdadeEuFalo(4)
seForVerdadeEuFalo("")
seForVerdadeEuFalo(" ")