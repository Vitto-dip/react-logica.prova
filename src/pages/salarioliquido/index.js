import './index.scss'

import { useState, useEffect } from 'react'

import { calcularSalario } from '../../services/index.js';

export default function SalarioLiquido() {

    const [salario, setSalario] = useState(0);
    const [bonus, setBonus] = useState(0);
    const [desconto, setDesconto] = useState(0);
    const [resultado, setResultado] = useState();


    useEffect(() => {
        let x = calcularSalario(salario, bonus, desconto);
        setResultado(x);
    }, [salario, bonus, desconto])

    return (
        <main className='salario-principal'>
            <div className='container-principal'>
                <img src="https://www.iconpacks.net/icons/1/free-coin-icon-794-thumb.png" alt="" />
                <div className='container-align'>
                    <h2>Calcule seu Salário Líquido!</h2>

                    <div>
                        <div>
                            
                            <label>Salário</label>
                            <input type="number" value={salario} onChange={e => setSalario(Number(e.target.value))} />
                        </div>
                        <div>
                            <label>Bonus</label>
                            <input type="number" value={bonus} onChange={e => setBonus(Number(e.target.value))} />
                        </div>
                        <div>
                            <label>Desconto</label>
                            <input type="number" value={desconto} onChange={e => setDesconto(Number(e.target.value))} />
                        </div>
                        <h3>{resultado}</h3>
                    </div>
                    
                </div>

            </div>

        </main>
    )
}