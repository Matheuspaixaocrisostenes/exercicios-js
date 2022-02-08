function gerarNumerosEntre(min,max,tempo){
    if(min > max){
        [max,min] = [min,max]
    }
    return new Promise(resolve =>{
        setTimeout(function(){
            const fator = max - min + 1
            const aleatrorio = parseInt(Math.random() * fator)* min
            resolve(aleatrorio)
        },tempo)
    })
}

function gerarVariosNums(){
    return Promise.all([
        gerarNumerosEntre(1,60,4000),
        gerarNumerosEntre(1,60,1000),
        gerarNumerosEntre(1,60,500),
        gerarNumerosEntre(1,60,3000)
    ])
}

gerarVariosNums().then(console.log)