function calculaTriangulo(a,b,c){
    if(a == b && a==c){
        console.log('Equilatero');
    }else if(a == b || b == c || c == a){
        console.log('Isoceles');
    }else{
        console.log('escaleno');
    }
}

calculaTriangulo(4,4,4)
calculaTriangulo(2,4,4)
calculaTriangulo(2,3,4)