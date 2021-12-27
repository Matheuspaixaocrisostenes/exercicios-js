function Carro(veloMax = 200, delta = 5){
    let velocidadeAtual = 0

    this.acelerar = function(){
        if(velocidadeAtual + delta <= veloMax){
            velocidadeAtual += delta
        }else{
            velocidadeAtual = veloMax
        }
    }

    this.getVelocidadeAtual = function(){
        return velocidadeAtual
    }
}

const uno = new Carro
uno.acelerar()

console.log(uno.getVelocidadeAtual());

const ferrari = new Carro(350,20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()

console.log(ferrari.getVelocidadeAtual());

console.log(typeof uno);
console.log(typeof ferrari);