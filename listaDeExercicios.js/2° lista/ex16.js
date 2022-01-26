function checarAnoBissexto(ano){
    const check = new Date(ano,1,29).getDate() === 29
    if(check == true){
        console.log('é um ano bissexto');
    }else{
        console.log('não é um ano bissexto');
    }
}

checarAnoBissexto(2020) 
checarAnoBissexto(2100)