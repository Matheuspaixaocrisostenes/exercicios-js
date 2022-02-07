let p = new Promise(function(cumprirPromessa){
    cumprirPromessa(['Ana',"bia",'Carla'])
})

function primeiroElemento(array){
    return array[0]
}

function primeiraLetra(string){
    return string[0]
}

// console.log(typeof p);
p.then(primeiroElemento)
.then(primeiraLetra)
.then(letra => letra.toLowerCase())
.then(console.log)