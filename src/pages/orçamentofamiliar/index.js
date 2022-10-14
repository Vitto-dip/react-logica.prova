import { orcamento } from '../../services/index.js';
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import './index.scss'

export default function OrcamentoFamiliar() {

    const [ganhos, setGanhos] = useState(0);
    const [gastos, setGastos] = useState(0);
    const [resposta, setResposta] = useState('');



    useEffect(() => {
        let x = orcamento(ganhos, gastos);
        setResposta(x);
    }, [ganhos, gastos])


    return (
        <main className='pagOrcamento'>


            <div className='inputs'>
                <h1>ORÇAMENTO FAMILIAR</h1>
                <div>
                    <p>Insira seus ganhos <input type='number' value={ganhos} onChange={e => setGanhos(Number(e.target.value))} /></p>
                </div>
                <div>
                    <p>Insira seus gastos <input type='number' value={gastos} onChange={e => setGastos(Number(e.target.value))} /></p>
                </div>
                <p>{resposta}</p>

                <Link to='/'> Voltar para Home</Link>
            </div>

        </main>
    )
}