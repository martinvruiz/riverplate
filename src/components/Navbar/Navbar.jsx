import { Link } from "react-router-dom"

export const Navbar = ()=>{
    return <>
        <nav className="h-14 bg-red-600 text-white flex justify-center items-center font-poppins">
            <ul className="flex items-center justify-evenly w-1/2">
                <Link to="/" className="text-xl">C.A. River Plate</Link>
                <Link to="/historia">Historia</Link>
                <Link to="/titulos">Titulos</Link>
                <Link to="/ct">Cuerpo tecnico</Link>
                <Link to="/plantel">Plantel</Link>
            </ul>
        </nav>
    </>
}