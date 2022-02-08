function esperarPor(tempo = 2000){
    return new Promise(function(resolve){
        setTimeout(() => resolve(), tempo);
    })
}

// esperarPor(2000)
//     .then(() => console.log('Execultando promise1..'))
//     .then(esperarPor)
//     .then(() => console.log('Execultando promise2..'))
//     .then(esperarPor)
//     .then(() => console.log('Execultando promise3..'))
 
function retornarValor(){
    return new Promise(resolve =>{
        setTimeout(() => resolve(10) , 5000);
    })
}

async function execultar(){
    let valor = await retornarValor()
    await esperarPor(1500)
    console.log(`Async/await ${valor}`);

    await esperarPor(1500)
    console.log(`Async/await ${valor + 1}`);
    
    await esperarPor(1500)
    console.log(`Async/await ${valor + 2}`);

    return valor + 3
}

async function execultarDeVerdade(){
    const valor = await execultar()
    console.log(valor);
}

execultarDeVerdade()