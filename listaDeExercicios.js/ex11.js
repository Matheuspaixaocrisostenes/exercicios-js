function calcAnoBi(ano){
    if(ano % 4==0 && ano % 100 != 0 || ano % 400 == 0){
        console.log(`O ano ${ano} é bissexto`);
    }else{
        console.log(`O ano ${ano} não é bissexto`);
    }
}

calcAnoBi(0)
calcAnoBi(4)
calcAnoBi(100)
calcAnoBi(400)
calcAnoBi(800)
calcAnoBi(2020)
calcAnoBi(2021)

