import { BrowserRouter, Route, Routes } from "react-router-dom";

import Sorveteria from "./pages/sorveteria/index.js";
import Signo from "./pages/signo/index.js";
import Acai from "./pages/açai/index.js";
import Home from "./pages/home/index.js";
import SalarioLiquido from "./pages/salarioliquido/index.js"
import Paradas from "./pages/paradas/index.js"
import TemperaturaCorpo from "./pages/temperatura/index.js";
import IngressoCinema from "./pages/cinema/index.js";

export default function Rotas() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/sorveteria' element={<Sorveteria /> }/>
                <Route path='/signo' element={<Signo /> }/>
                <Route path='/acai' element={<Acai />} />
                <Route path='/' element={<Home />} />
                <Route path='/salarioliquido' element={<SalarioLiquido />} />
                <Route path='/paradas' element={<Paradas />} />
                <Route path='/temperatura' element={<TemperaturaCorpo />} />
                <Route path='/ingresso' element={<IngressoCinema />} />

            </Routes>
        </BrowserRouter>
    )
}