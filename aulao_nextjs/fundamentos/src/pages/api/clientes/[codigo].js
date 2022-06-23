export default function hendler(req, res){
    const codigo = req.query.codigo
    res.status(200).json({
        id: codigo,
        nome: `Maria ${codigo}`,
        email: `mariamaria${codigo}@xcfmail.com`
    })
}