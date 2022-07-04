import Cliente from '../core/Cliente'

interface TabelaProps {
    clientes: Cliente[]
}

export default function Tabela(props) {

    function rendenizarCabecalho() {
        return (
            <tr>
                <th>Código</th>
                <th>Nome</th>
                <th>Idade</th>
            </tr>
        )
    }

    function rendenizarDados(){
        return props.clientes?.map((cliente, i) =>{
            return (
                <tr key={cliente.id}>
                    <td>{cliente.id}</td>
                    <td>{cliente.nome}</td>
                    <td>{cliente.idade}</td>
                </tr>
            )
        })
    }

    return (
        <table>
            <thead>
                {rendenizarCabecalho()}
            </thead>
            <tbody>
                {rendenizarDados()}
            </tbody>
        </table>
    )
}