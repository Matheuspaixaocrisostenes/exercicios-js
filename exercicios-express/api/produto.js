module.exports = (app,texto) =>{
    function salvar(req,res){
        res.send('Produtos > Salvar > ' + texto)
    }

    function obter(req,res){
        res.send('Produtos > obter > ' + texto)
    }
    
    app.post('/produto', salvar)
    app.get('/produto', obter)

    return { salvar, obter }
}