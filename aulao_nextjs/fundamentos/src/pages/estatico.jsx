import Layout from '../components/Layout'

export function getStaticProps(){
    return {
        props: {
            numero: Math.random()
        }
    }
}

export default function Estatico (props){
    return (
        <Layout title="Conteúdo estático">
            <div>{props.numero.toFixed(4)}</div>
        </Layout>
    )
}