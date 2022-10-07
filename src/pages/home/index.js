import { Link } from 'react-router-dom'
import './index.scss'

export default function Home() {
    return (
        <main>
            <header className="titulo">
                <h2>Conheça os nossos Serviços</h2>
            </header>
            <section className="services">
                
                <img src="/assets/images/bdac4158fd47a911ad7fd704bb5774ff.png" alt="" />
                
                <nav>
                    <p>Serviço de Açai:</p>
                    <Link to="/acai" > Açai </Link>
                
                    <p>Serviço de Signo:</p>
                    <Link to="/signo" > Signo </Link>
               
                    <p>Serviço de Sorveteria:</p>
                    <Link to="/sorveteria"> Sorveteria </Link>
                </nav>
            </section>
        </main>
    )
}