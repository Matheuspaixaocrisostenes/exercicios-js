import Cabecalho from "../components/Cabecalho";
import Layout from "../components/Layout";

export default function Exemplo(){
    return (
        <Layout title="Usando Componentes">
            <Cabecalho title='Next.js & React' />
            <Cabecalho title='Aprenda Next na Prática' />
        </Layout>
    )
}