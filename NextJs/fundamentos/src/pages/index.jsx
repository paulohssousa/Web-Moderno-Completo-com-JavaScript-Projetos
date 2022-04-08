import Navegador from "../components/Navegador"

export default function Home() {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            height: '100vh'
        }}>
            <Navegador texto="Estiloso" destino="/estiloso" />
            <Navegador texto="Exemplo" destino="/exemplo" cor="#9400d3"/>
            <Navegador texto="JSX" destino="/jsx" cor="crimson"/>
            <Navegador texto="Navegação #01" destino="/navegacao" cor="green"/>
            <Navegador texto="Navegação #02" destino="/cliente/mg/123" cor="blue"/>
            <Navegador texto="Componente com Estado" destino="/estado" cor="#875a56"/>
            <Navegador texto="Integração com API #01" destino="/integracao" cor="#00453c"/>
            <Navegador texto="Conteúdo Estático" destino="/estatico" cor="#ff7700"/>
        </div>
    )
}