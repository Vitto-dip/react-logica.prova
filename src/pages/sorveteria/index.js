import "./index.scss"
import { useEffect, useState } from "react"
import { calcular } from "../../services";


export default function Sorveteria() {

    const [gramas, setGramas] = useState();
    const [total, setTotal] = useState();

    function Calculo() {
        let x = calcular(gramas)
        setTotal(x)
    }


    useEffect(() => {
        Calculo()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [gramas])

    return (
        <main className="sorveteria-principal">

            <header>
                <h2>Sorveteria</h2>
            </header>
            
            <section className="principal-section">
                <div>
                    <label>Gramas</label>
                    <input type="number" onChange={e => setGramas(Number(e.target.value))} />

                    <p>{total}</p>
                </div>
            </section>
            
        </main>
    )
}