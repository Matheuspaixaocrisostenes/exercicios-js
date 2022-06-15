import Layout from "../components/Layout"

export default function Jsx() {
    const titulo = <h1>JSX é un conceito Central</h1>

    function subtitulo() {
        return <h2>{"Muito Legal".toLocaleUpperCase()}</h2>
    }

    return (
        <Layout title="Entendendo o JSX">
            <div>
                {titulo}
                {subtitulo()}
                <p>
                    {JSON.stringify({ nome: 'João', idade: 38 })}
                </p>
            </div>
        </Layout>
    )
}