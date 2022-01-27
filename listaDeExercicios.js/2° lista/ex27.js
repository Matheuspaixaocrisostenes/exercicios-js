function inverter(obj){
    let newObj = Object.entries(obj).map(chave => chave.reverse())
    console.log(Object.fromEntries(newObj));
}

inverter({ a: 1, b: 2, c: 3})