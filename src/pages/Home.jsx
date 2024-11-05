import Monumental from "../images/RIVER.jpg"

const FotoEstadio =  Monumental

export const Home = ()=>{
    return <div className="flex flex-col justify-center items-center font-poppins mb-4">
        <img src={FotoEstadio} alt="Estadio Más Monumental" className="w-full h-96 md:object-cover"/>
        <h1 className="my-8 text-center text-xl lg:text-6xl font-bold flex justify-center w-4/5">Vivir y jugar con <p className="ml-2 text-red-600">GRANDEZA</p></h1>
        <p className=" pb-3 my-4 w-3/4 lg:text-2xl border-b-red-600 border-b text-center">El Club Atlético River Plate, fundado en 1901, es uno de los equipos más emblemáticos de Argentina. Los Millonarios, destaca por su inmenza historia, con más de 30 títulos nacionales y varias conquistas internacionales, como sus 4 Copas Libertadores.</p>
    </div>
}