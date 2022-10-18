import { useState } from 'react'

import { contar } from '../../services';

import './index.scss'

export default function Contar() {
    const [inicio, setInicio] = useState();
    const [fim, setFim] = useState();
    const [resultado, setResultado] = useState([]);

    function clickContagem() {
        let x = contar(inicio, fim);
        
        setResultado(x);
        console.log(resultado)
    }

    return (
        <main>
            <h2>Contar</h2>

            <div>
                <input type="number" onChange={e => setInicio(Number(e.target.value))} />
            </div>
            <div>
                <input type="number" onChange={e => setFim(Number(e.target.value))} />
            </div>

            <button onClick={clickContagem}>ok</button>

            <div>
                {resultado.map (item =>  
                    <div>{item}</div>
                )}
            </div>
        </main>
    )
}