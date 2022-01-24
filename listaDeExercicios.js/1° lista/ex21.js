function planoDeSaude(idade){
    let pagamento = 100
    if(idade < 10){
        pagamento += 80
    }else if(idade >= 10 && idade <= 30){
        pagamento += 50
    }else if(idade >30 && idade <= 60){
        pagamento += 95
    }else if(idade > 60){
        pagamento += 130
    }
    console.log(`O valor a ser pago será de ${pagamento}`);
}

planoDeSaude(1)
planoDeSaude(10)
planoDeSaude(20)
planoDeSaude(30)
planoDeSaude(40)
planoDeSaude(50)
planoDeSaude(60)
planoDeSaude(70)
planoDeSaude(80)