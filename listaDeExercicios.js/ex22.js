function anuidade(mes){
    let valor = 100
    if(mes == 1){
        console.log(`O valor da anuidade é de ${valor}`);
    }else{
        valor = valor + (valor * 5 /100)
        console.log(`O valor da anuidade é de ${valor}`);
    }
}

anuidade(1)
anuidade(10)