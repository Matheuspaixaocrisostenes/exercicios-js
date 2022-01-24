function calcPA (n, a1, r) {
    console.log('Soma: ' + (n * (a1 + (a1 + ((n-1)*r))))/2)    
}

function calcPG (n, a1, r) {
    console.log('Soma: ' + (a1 * ((r**n)-1))/(r-1))
}

calcPA(5, 1, 2)
console.log('----------------');
calcPG(10, 5, 3)