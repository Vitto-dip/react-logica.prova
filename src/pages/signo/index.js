import { useEffect, useState } from 'react'
import './index.scss'
import { Libra } from '../../services';



export default function Signo() {
    const [dia, setDia] = useState();
    const [mes, setMes] = useState();
    const [resultado, setResultado] = useState();

    function VerificarSigno(){
        let x = Libra(dia, mes)
        setResultado(x)
    }

    useEffect(() => {
        VerificarSigno()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dia, mes])


    return (
        <main className='signo-principal'>
            <header>
                <img src="/assets/images/signo-libra.png" alt="" />

                <div>
                    <h1>Você é de Libra?</h1>
                    <p>Descubra agora com esse incrível teste para descobrir se você é do tão fomoso signo de libra!</p>
                </div>

                <img src="/assets/images/Ligra-signoo-4c99e5df.png" alt="" />
            </header>
            <section className='secao-principal'>
                <div className='alinhamento-div'>
                    <h1>👩‍💻TESTE AQUI!👨‍💻</h1>
                    <div>
                        <label>Dia</label>
                        <input type="number" onChange={e => setDia(Number(e.target.value))} />
                    </div>
                    <div>
                        <label>Mês</label>
                        <input type="text" onChange={e => setMes(e.target.value)} />
                    </div>
                    <h2>👾{resultado}👾</h2>
                </div>
                
            </section>

        </main>
    )
}