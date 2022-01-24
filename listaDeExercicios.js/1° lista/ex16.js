function calculadora(a,operador,b){
    switch (operador) {
        case '+':
            console.log(`A soma entre ${a} e ${b} é igual a ${a+b}`);
            break;
        case '-':
            console.log(`A subtração entre ${a} e ${b} é igual a ${a-b}`);
            break;
        case '/':
            console.log(`A divisão entre ${a} e ${b} é igual a ${a/b}`);
            break;
        case '*':
            console.log(`A Multiplicação entra ${a} e ${b} é igual a ${a*b}`);
            break;
        default:
            console.log('operador inválido');
    }
}

calculadora(3,"+",3)
calculadora(3,"-",3)
calculadora(3,"/",3)
calculadora(3,"*",3)
calculadora(3,"**",3)