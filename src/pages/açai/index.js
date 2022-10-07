import { useEffect, useState } from 'react'
import './index.scss'
import { calculo } from '../../services';

export default function Acai() {
    const [pequeno, setPequeno] = useState(0);
    const [medio, setMedio] = useState(0);
    const [grande, setGrande] = useState(0);
    const [desconto, setDesconto] = useState(0);
    const [total, setTotal] = useState(0);

    function CalculoTotal(){
        let x = calculo(pequeno, medio, grande, desconto)
        setTotal(x)
    }
    

    useEffect(() => {
        CalculoTotal()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pequeno, medio, grande, desconto])

    return (
        <main>
            <h2>Açai</h2>

            <div>
                <h3>Quantidade de Açais</h3>
                <div>
                    <label>Qtd:Pequeno</label>
                    <input type="number" onChange={e => setPequeno(Number(e.target.value))} />
                </div>
                <div>
                    <label>Qtd:Médio</label>
                    <input type="number" onChange={e => setMedio(Number(e.target.value))} />
                </div>
                <div>
                    <label>Qtd:Grande</label>
                    <input type="number" onChange={e => setGrande(Number(e.target.value))} />
                </div>
                <div>
                    <label>Desconto:</label>
                    <input type="number" onChange={e => setDesconto(Number(e.target.value))} />
                </div>

                <p>{total}</p>
            </div>
        </main>
    )
}