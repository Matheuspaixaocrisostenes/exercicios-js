const alunos = [
    {nome: 'Matheus' ,nota: 10, bolsista: false },
    {nome: 'Mariana' ,nota: 7.9, bolsista: false },
    {nome: 'Isabelle' ,nota: 8, bolsista: false },
    {nome: 'Vinicius' ,nota: 8.7, bolsista: true }
]

console.log(alunos.map(a => a.nota));
const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual){
    console.log(acumulador, atual)
    return acumulador + atual
},0)

console.log(resultado);