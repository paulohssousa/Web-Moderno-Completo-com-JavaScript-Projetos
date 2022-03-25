import React from 'react'

export default props => [
    <h1 key='h1'>Bom Dia {props.nome}!</h1>,
    <h2 key='h2'>Até breve!</h2>
]

// export default props =>
//     <div>
//         <h1>Bom Dia {props.nome}!</h1>
//         <h2>Até breve!</h2>
//     </div>

// export default props =>
//     <React.Fragment>
//         <h1>Bom Dia {props.nome}!</h1>
//         <h2>Até breve!</h2>
//     </React.Fragment>