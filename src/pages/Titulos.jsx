import { useState } from "react"
import datatitle from "./data/datatitles.json"

export const Titulos = ()=>{

    const dataTitle = datatitle

    const [year, setYear] = useState(1920)

    const filteredYear = dataTitle.titles.filter(title => title.year === year)


    return <div className="flex flex-col items-center font-poppins">
        <h2 className="my-8 text-5xl font-bold">Titulos</h2>

        <label htmlFor="year-select" className="text-lg font-medium">Año: </label>
        <select className="w-20 h-12 border-2 text-center border-red-600 rounded-lg" name="year-select" id="year-select" value={year} onChange={(e)=> setYear(parseInt(e.target.value))}>
                {
                    [...new Set(dataTitle.titles.map(title => title.year))].map((year)=>(
                        <option value={year} key={year}>{year}</option>
                    ))
                }
            </select>
        <section className="flex flex-col lg:flex-row justify-center items-center flex-wrap w-4/5">
        {
            filteredYear.map((title)=>(
                <div className="lg:w-2/5 p-3 text-center flex flex-col items-center justify-center mx-6 my-5 border-2 rounded-2xl border-red-600" key={title.title}>
                    <img className="object-contain h-52" src={title.img} alt={title.img} />
                    <h3 className="text-xl font-semibold">{title.title}</h3>
                    <div className="flex justify-center my-2 font-medium">Rival destacado: <p className="mx-1 font-normal">{title.rival}</p></div>
                    <div className="flex justify-center mb-2 font-medium">Figura: <p className="mx-1 font-normal">{title.key_player}</p></div>
                </div>
            ))
        }
        </section>
    </div>
}