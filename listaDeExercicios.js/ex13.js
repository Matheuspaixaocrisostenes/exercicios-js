function mostraDiaUtil(dia){
    switch (dia) {
        case 1:
            console.log('fim de semana');
            break;
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            console.log('Dia Util');
            break
        case 7:
            console.log('Fim de semana');
            break
        default:
            console.log('Dia Invalido');
    }
}

mostraDiaUtil(1)
mostraDiaUtil(2)
mostraDiaUtil(3)
mostraDiaUtil(4)
mostraDiaUtil(5)
mostraDiaUtil(6)
mostraDiaUtil(7)
mostraDiaUtil("a")
mostraDiaUtil(10)