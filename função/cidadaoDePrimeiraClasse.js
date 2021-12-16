function fun() {}

const fun2 = function (){}

const array = [function(a,b){return  a+ b}]
console.log(array[0](1,2));

const obj =  {}
obj.falar = function(){ return 'Opa' }
console.log(obj.falar());

function run(fun){
    fun()
}

run(function(){ console.log("bala"); })