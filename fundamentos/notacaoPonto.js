// console.log(Math.ceil(6.1));

// const obj = {}
// obj.name = "Bola"
// obj["name"] = 'Bola2'

// console.log(obj.name);

function obj(name){
    this.name = name
    this.exec = function(){
        console.log('Exec...');
    }
}

const obj2 = new obj('cadeira')
const obj3 = new obj('Mesa')
console.log(obj2.name);
console.log(obj3.name);

obj3.exec()