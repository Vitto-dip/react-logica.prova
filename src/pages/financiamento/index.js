import { useEffect, useState } from 'react'
import { jurosCompostos } from '../../services';
import './index.scss'

export default function Financiamento () {
    
    const [capital, setCapital] = useState();
    const [taxa, setTaxa] = useState();
    const [tempo, setTempo] = useState();
    const [resultado, setResultado] = useState();

    useEffect(() => {
        let x = jurosCompostos(capital, taxa, tempo);
        setResultado(x)
    }, [capital, taxa, tempo, resultado])
    
    
    return (
        <main>

        </main>
    )
}