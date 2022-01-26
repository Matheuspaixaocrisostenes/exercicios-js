function receberSomenteOsParesDeIndicesPares(array){
    const pares = []
    for(let i=0;i < array.length; i+=2){
        if(array[i] % 2 == 0){
            pares.push(array[i])
        }
    }
    console.log(pares);
}

receberSomenteOsParesDeIndicesPares([1, 2, 3, 4]) 
receberSomenteOsParesDeIndicesPares([10, 70, 22, 43])