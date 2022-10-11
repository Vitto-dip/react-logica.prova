import './index.scss'

import { useEffect, useState } from 'react';

import {temperaturaCorporal} from '../../services/index.js'

export default function TemperaturaCorpo() {
    const [temperatura, setTemperatura] = useState();
    const [resultado, setResultado] = useState();
    
    useEffect(() => {
        let x = temperaturaCorporal(temperatura)
        setResultado(x);
    }, [temperatura])

    return(
        <main className='temperatura-principal'>
            <div className='container-principal'>
                <img src="https://cdn-icons-png.flaticon.com/512/427/427237.png" alt="" />
                
                <section>
                    <div>
                        <h2>Qual a sua Temperatura?</h2>
                    </div>
                    <div className='align-input'>
                        <label>Sua temperatura:</label>
                        <input type="number"  onChange={e => setTemperatura(Number(e.target.value))} />
                    </div>
                    <p>{resultado}</p>
                </section>
            </div>
            
        </main>
    )
}