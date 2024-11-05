import { Link } from "react-router-dom"
import { useState, useEffect } from "react"

export const Navbar = ()=>{

    const [menu, setMenu] = useState(false)

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menu && !event.target.closest('.menu-btn') && !event.target.closest('.menu-list')) {
                setMenu(false);
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [menu]);

    const handleOptionClick = ()=>{
        setMenu(false)
    }

    return <>
        <nav className="relative h-14 bg-red-600 text-white flex justify-center items-center font-poppins">
            <Link to="/" className="p-1 m-2 border-b border-white">C.A River Plate</Link>
            <button className="p-1 border border-white w-32 menu-btn" onClick={()=>setMenu(!menu)}>Menu</button>
            {menu && (
                <ul className="menu-list flex absolute left-0 top-full flex-col items-center justify-evenly w-full bg-red-600">
                    <Link to="/historia" className="p-2" onClick={handleOptionClick}>Historia</Link>
                    <Link to="/titulos" className="p-2" onClick={handleOptionClick}>Titulos</Link>
                    <Link to="/ct" className="p-2" onClick={handleOptionClick}>Cuerpo tecnico</Link>
                    <Link to="/plantel" className="p-2" onClick={handleOptionClick}>Plantel</Link>
                </ul>)
            }
        </nav>
    </>
}