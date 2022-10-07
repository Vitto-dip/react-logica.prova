import { useEffect, useState } from 'react'
import './index.scss'



export default function Signo() {
    const [dia, setDia] = useState();
    const [mes, setMes] = useState();
    const [resultado, setResultado] = useState();

    function Libra() {
        let msg = ''
        if (dia >= 23 && dia < 32 && mes === 'setembro') {
            msg = 'Você é de Libra!'
        }
        else if (dia > 0 && dia <= 22 && mes === 'outubro') {
            msg = "Você é de Libra!"
        }
        else if (dia <= 0 || dia > 31) {
            msg = 'Dia inválido!'
        }
        else {
            msg = 'Você não é de Libra >:('
        }
        setResultado(msg);
    }

    useEffect(() => {
        Libra()
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