function calcNota(cod, nota1,nota2,nota3){
    let media = (nota1 + nota2 + nota3) / 3
    if(media >=5){
        console.log(`O aluno do código ${cod} teve a média ${media} e por isso foi aprovado`);
    }else{
        console.log(`O aluno do código ${cod} teve a média ${media} e por isso foi reprovado`);
    }
}

calcNota(400,2,3,4)
calcNota(500,10,7,9)
calcNota(600,1,1,1)