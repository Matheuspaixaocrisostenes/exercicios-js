function lanchoneteDoZe(cod,qtd){
    switch (cod) {
        case 100:
            console.log(`Comida escolhida Cachorro Quente valor a ser pago é R$${qtd*3}`);
            break;
        case 200:
            console.log(`Comida escolhida Hambúrguer Simples valor a ser pago é R$${qtd*4}`);
            break
        case 300:
            console.log(`Comida escolhida Cheeseburguer valor a ser pago é R$${qtd*5.50}`);
            break
        case 400:
            console.log(`Comida escolhida Bauru valor a ser pago é R$${qtd*7.50}`);
            break
        case 500:
            console.log(`Comida escolhida Refrigerante valor a ser pago é R$${qtd*3.50}`);
            break
        case 600:
            console.log(`Comida escolhida Suco valor a ser pago é R$${qtd*2.80}`);
            break
        default:
            console.log('Código inválido');
    }
}

lanchoneteDoZe(100,2)
lanchoneteDoZe(200,2)
lanchoneteDoZe(300,2)
lanchoneteDoZe(400,2)
lanchoneteDoZe(500,2)
lanchoneteDoZe(600,2)
lanchoneteDoZe(900,2)