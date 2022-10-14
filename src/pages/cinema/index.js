import { useEffect, useState } from 'react'
import './index.scss'
import { CalcularIngresso } from '../../services';



export default function IngressoCinema() {
    const [inteiras, setInteiras] = useState(0);
    const [meias, setMeias] = useState(0);
    const [dia, setDia] = useState("");
    const [nacional, setNacional] = useState(false);
    const [resultado, setResultado] = useState();

    useEffect(() => {
        let x = CalcularIngresso(inteiras, meias, dia, nacional)
        setResultado(x);
    },[inteiras, meias, dia, nacional])


    return(
        <main className='ingresso-principal'>
            <div className='container-principal'>
                <img src="" alt="" />
                <div>
                    <h2>Calcule o valor do seu ingresso!</h2>
                    <div>
                        <label>Qtd. Inteiras</label>
                        <input className='input-normal' type="number" value={inteiras} onChange={e => setInteiras(e.target.value)}/>
                    </div>
                    <div>
                        <label>Qtd. Meias</label>
                        <input className='input-normal' type="number" value={meias} onChange={e => setMeias(e.target.value)}/>
                    </div>
                    <div>
                        <label>Dia da Semana</label>
                        <select value={dia} onChange={e => setDia(e.target.value)}>
                            <option key="">Domingo</option>
                            <option key="">Segunda-feira</option>
                            <option key="">Terça-feira</option>
                            <option key="">Quarta-feira</option>
                            <option key="">Quinta-feira</option>
                            <option key="">Sexta-feira</option>
                            <option key="">Sábado</option>
                        </select>
                    </div>
                    <div className='align-check'>
                        <input className='input-check' type="checkbox" onChange={e => setNacional(e.target.checked)}/>
                        <p>Nacional</p>
                    </div>
                    <h2>{resultado }</h2>
                </div>
            </div>
        </main>
    )
}