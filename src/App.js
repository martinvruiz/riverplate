import { Navbar } from "./components/Navbar/Navbar";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { Home } from "./pages/Home";
import { CT } from "./pages/CT";
import { Historia } from "./pages/Historia";
import { Jugadores } from "./pages/Jugadores";
import { Titulos } from "./pages/Titulos";


function App() {
  return <>
    <BrowserRouter>
      <Navbar/>
      <Routes>

        <Route path="/" element={<Home/>}></Route>
        <Route path="/ct" element={<CT/>}></Route>
        <Route path="/historia" element={<Historia/>}></Route>
        <Route path="/plantel" element={<Jugadores/>}></Route>
        <Route path="/titulos" element={<Titulos/>}></Route>
        

      </Routes>

    </BrowserRouter>
    </>
}

export default App;
