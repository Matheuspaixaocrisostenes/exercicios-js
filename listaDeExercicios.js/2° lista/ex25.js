function buscarPalavrasSemelhantes(inicio,array){
    const resultado = []
    for(let i of array){
        if(i.includes(inicio)){
            resultado.push(i)
        }
    }
    console.log(resultado);
}

buscarPalavrasSemelhantes("pro", ["programação", "mobile", "profissional"]) 
buscarPalavrasSemelhantes("python", ["javascript", "java", "c++"])