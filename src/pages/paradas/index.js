import './index.scss'
import { calcularParadas } from '../../services/index.js'
import { useEffect, useState } from 'react'


export default function Paradas(){

    const[capacidade, setCapacidade] = useState(0)
    const[consumo, setConsumo] = useState(0)
    const[distancia, setDistancia] = useState(0)
    const[resultado, setResultado] = useState()

    useEffect(() => {
        let x = calcularParadas(capacidade, consumo, distancia)
        setResultado(x)
    },[capacidade, consumo, distancia])
    



    return(
        <main className="paradas-principal">
            <header>
                <img src="https://cdn-icons-png.flaticon.com/512/286/286112.png" alt="" />
                <h1>Calcular Paradas</h1>
                <img src="https://cdn-icons-png.flaticon.com/512/286/286112.png" alt="" />
                
            </header>
            <section>
                <div className='container-principal'>
                    <div>
                        <label>Capacidade</label>
                        <input type="number" step='.01' value={capacidade} onChange={e => setCapacidade(Number(e.target.value))}/>
                    </div>
                    <div>
                        <label>Consumo de litros/km</label>
                        <input type="number" step='.01' value={consumo} onChange={e => setConsumo(Number(e.target.value))}/>
                    </div>
                    <div>
                        <label>Distância até o destino</label>
                        <input type="number" step='.01' value={distancia} onChange={e => setDistancia(Number(e.target.value))}/>
                    </div>
                    <h3>{resultado}</h3>
                </div>
            </section>
        </main>
    )
}