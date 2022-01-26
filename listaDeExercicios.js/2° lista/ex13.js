function filtrarNumeros(arr){
    const newArray = []
    for(let  i = 0; i < arr.length;i++){
        if(typeof arr[i] == "number"){
            newArray.push(arr[i])
        }
    }
    return newArray
}

function filtrarNumeros2(array){
    return array.filter(elemento => typeof elemento == 'number')
}

console.log(filtrarNumeros(["Javascript", 1, "3", "Web", 20]))
console.log(filtrarNumeros(["a", "c"]))

console.log(filtrarNumeros2(["Javascript", 1, "3", "Web", 20]))
console.log(filtrarNumeros2(["a", "c"]))