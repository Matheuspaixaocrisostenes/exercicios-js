let cont = 1
let pares = []
while(cont <= 100){
    if(cont % 2 == 0){
        pares.push(cont)
    }
    cont++
}
console.log(pares);