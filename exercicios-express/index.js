const express = require('express')
const app = express()

app.get('/opa',(req, res) =>{
    res.send('Estou <strong>Bem!</strong>')
})

app.listen(3000, () =>{
    console.log('Backend Funcionando...')
})