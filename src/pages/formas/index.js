import { useState } from 'react'

import { formasQuadradas } from '../../services';

import './index.scss'

export default function FormasQuadráticas() {
    const [base, setBase] = useState();
    const [altura, setAltura] = useState();
    const [resultado, setResultado] = useState([]);

    function clickContagem() {
        let x = formasQuadradas(base, altura);
        setResultado(x);
    }

    return (
        <main>
            <h2>Forma!</h2>

            <div>
                <input type="number" value={base} onChange={e => setBase(Number(e.target.value))} />
            </div>
            <div>
                <input type="number" value={altura} onChange={e => setAltura(Number(e.target.value))} />
            </div>

            <button onClick={clickContagem}>ok</button>

            <div>
                {resultado.map(item =>
                    <h1>{item}</h1>
                )}
            </div>
        </main>
    )
}