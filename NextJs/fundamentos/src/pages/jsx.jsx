import Layout from "../components/Layout"

export default function Jsx() {
    const titulo = <h1>JSX é um Conceito Central</h1>

    function subtitulo() {
        return <h2>{"subtítulo".toUpperCase()}</h2>
    }

    return (
        < Layout titulo="Entendendo o JSX">
            <div>
                {titulo}
                {subtitulo()}
                <p>
                    {JSON.stringify({ nome: 'Paulo', idade: 30 })}
                </p>
            </div>
        </Layout>
    )
}