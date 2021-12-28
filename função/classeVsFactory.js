class pessoa{
    constructor(nome){
        this.nome = nome
    }

    falar(){
        console.log(`Meu nome é ${this.nome}`);
    }
}

const p1 = new pessoa('Roberto')
p1.falar()

const pessoa = nome =>{
    return{
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p2 = new Pessoa('Roberto')
p2.falar()