import { useState } from 'react'

import { linhaAsteristicos } from '../../services';

import './index.scss'

export default function Linha() {
    const [tamanho, setTamanho] = useState();
    const [resultado, setResultado] = useState([]);

    function clickContagem() {
        let x = linhaAsteristicos(tamanho);
        setResultado(x);
    }

    return (
        <main>
            <h2>Forma!</h2>

            <div>
                <input type="number" value={tamanho} onChange={e => setTamanho(Number(e.target.value))} />
            </div>

            <button onClick={clickContagem}>ok</button>

            <div>
                {resultado}
            </div>
        </main>
    )
}