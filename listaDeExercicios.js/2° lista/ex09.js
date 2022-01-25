function repetir(elemento,repetir){
    const array = []
    for(let i = 1; i<= repetir;i++){
        array.push(elemento)
    }
    console.log(array);
}

repetir('codigo',3)
repetir(7,5)