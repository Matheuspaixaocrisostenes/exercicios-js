// setTimeout(function() {
//     console.log('exceultando callback...');
//     setTimeout(() => {
//         console.log('exceultando callback...');
//         setTimeout(() => {
//             console.log('Execultando callback...');
//         }, 2000);
//     },2000)
// }, 2000);

function esperarPor(tempo = 2000){
    return new Promise(function(resolve){
        setTimeout(() => {
            console.log('Execultando promise..');
            resolve()
        }, tempo);
    })
}

esperarPor(3000)
    .then(() => esperarPor())
    .then(esperarPor)