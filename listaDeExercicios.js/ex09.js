function mostrarNotas (nota){
    let novaNota = arredondar(nota)
    if(novaNota >= 40){
        console.log(`Aluno aprovado com a nota ${novaNota}`);
    }else{
        console.log(`Aluno reprovado com a nota ${novaNota}`);
    }   
}

function arredondar(nota){
    if(nota % 5 > 2){
        return nota + (5 - (nota % 5))
    }else{
        return nota
    }
}

mostrarNotas(100)
mostrarNotas(30)
mostrarNotas(38)
mostrarNotas(88)
mostrarNotas(61)