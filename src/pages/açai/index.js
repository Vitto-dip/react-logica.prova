import { useEffect, useState } from 'react'
import './index.scss'


export default function Acai() {
    const [pequeno, setPequeno] = useState(0);
    const [medio, setMedio] = useState(0);
    const [grande, setGrande] = useState(0);
    const [desconto, setDesconto] = useState(0);
    const [total, setTotal] = useState(0);


    function calculo() {

        let resultado = (pequeno * 13.50) + (medio * 15) + (grande * 17.50);
        let reducao = (resultado * desconto) / 100;
        let valor = resultado - reducao;
        let msg = `Total à pagar é R$${valor}`;
        if (desconto < 0 || desconto > 100) {
            msg = "Valor de desconto inválido!"
        }
        else if (pequeno < 0 || medio < 0 || grande < 0) {
            msg = "Quantidade de produto inválido!"
        }
        setTotal(msg)

    }

    useEffect(() => {
        calculo()
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