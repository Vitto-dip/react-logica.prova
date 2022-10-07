import "./index.scss"
import { useEffect, useState } from "react"



export default function Sorveteria() {
    
    const [gramas, setGramas] = useState();
    const [total, setTotal] = useState();

    function calcular(){
        let total1 = 0;
        let msg = "";

        if(gramas > 1000){
            total1 = (gramas / 100) * 3; 
            msg = `O preço total a pagar é R$${total1}`
        }

        else if(gramas < 1000 && gramas > 0){
            total1 = (gramas / 100) * 3.50;
            msg = `O preço total a pagar é R$${total1}`
        }
        else if(gramas < 0){
           msg = "Peso Inválido"
        }

        setTotal(msg)
    }

    useEffect(() =>{
        calcular()
    }, [gramas])

    return(
        <main>

            <h2>Sorveteria</h2>

            <div>
                <label>Gramas</label>
                <input type="number" onChange={e => setGramas(Number(e.target.value))}/>

                <p>{total}</p>
            </div>
        </main>
    )
}