import React from 'react'
import ReactDOM from 'react-dom'
// import BomDia from './componentes/BomDia'
// import Multi, { BoaNoite } from './componentes/Multiplos'
// import Multi from './componentes/Multiplos'
// import Saudacao from './componentes/Saudacao'
import Pai from './componentes/Pai'
import Filho from './componentes/Filho'

// ReactDOM.render(<BomDia nome="Guilherme"/>, document.getElementById('root'))

ReactDOM.render(
    <div>
        <Pai nome="Paulo" sobrenome="Sousa">
            {/* Como passar os componentes Filhos aqui? */}
            <Filho nome="Pedro" />
            <Filho nome="Bruna" />
            <Filho nome="Carla" />
        </Pai>
    </div>
, document.getElementById('root'))