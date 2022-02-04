function falarDepoisDe(segundos,frase){
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            resolve(frase)
        },segundos*1000)
    })
}

falarDepoisDe(2,'Maravilha')
    .then(frase =>frase.concat('???'))
    .then(outraFrase => console.log(outraFrase))
    .catch(e => console.log(e))
    
console.log('depois da promise');