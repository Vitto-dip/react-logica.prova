import { BrowserRouter, Route, Routes } from "react-router-dom";

import Sorveteria from "./pages/sorveteria/index.js";
import Signo from "./pages/signo/index.js";
import Acai from "./pages/açai/index.js";
import Home from "./pages/home/index.js";

export default function Rotas() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/sorveteria' element={<Sorveteria /> }/>
                <Route path='/signo' element={<Signo /> }/>
                <Route path='/acai' element={<Acai />} />
                <Route path='/' element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}