function calcAumentoDeSalario(plano,salario){
    let novoSalario = 0
    switch (plano) {
        case 'A':
            novoSalario = salario + (salario*10/100)
            console.log(`Novo salario do funcionario: ${novoSalario}`);
            break;
        case 'B':
            novoSalario = salario + (salario*15/100)
            console.log(`Novo salario do funcionario: ${novoSalario}`);
            break
        case 'C':
            novoSalario = salario + (salario*20/100)
            console.log(`Novo salario do funcionario: ${novoSalario}`);
            break
        default:
            console.log('Plano Inválido');
            break;
    }
}

calcAumentoDeSalario('A',1500)
calcAumentoDeSalario('B',1500)
calcAumentoDeSalario('C',1500)
calcAumentoDeSalario('D',1500)