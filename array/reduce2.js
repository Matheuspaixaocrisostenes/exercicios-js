const alunos = [
    {nome: 'Matheus' ,nota: 10, bolsista: false },
    {nome: 'Mariana' ,nota: 7.9, bolsista: true },
    {nome: 'Isabelle' ,nota: 8, bolsista: false },
    {nome: 'Vinicius' ,nota: 8.7, bolsista: true }
]

const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas));

const algumBolsista = (resultado ,bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista));