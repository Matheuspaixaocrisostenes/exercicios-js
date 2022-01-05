function fatorial(num){
    let fat = 1
    for(let i = 1; i<= num;i++){
        fat *= i
    }
    console.log(fat);
}

fatorial(5)