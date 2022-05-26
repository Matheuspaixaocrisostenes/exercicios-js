import React from 'react'
import ReactDom from 'react-dom'

import Multi, { BoaNoite } from  './componentes/Multiplos'

ReactDom.render(
    <div>
        <Multi.BoaTarde nome='Ana'/>
        <BoaNoite nome='Gabriela'/>
    </div>
,document.getElementById('root'))