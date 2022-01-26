function calcularMedia(array){
    let resultado = 0
    let media = 0
    for(let i = 0; i< array.length;i++){
        resultado+= array[i]
    }
    media = resultado / array.length
    console.log(media);
}

calcularMedia([0, 10])
calcularMedia([1, 2, 3, 4, 5])